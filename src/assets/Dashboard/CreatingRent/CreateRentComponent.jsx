import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const CreateRentComponent = ({ id, pictures,data }) => {

  //Pictures Fetching...
  console.log(pictures);
  const location = useNavigate();
  const [detail, setdetails] = useState(null);
  const [singlePicture, setsinglePicture] = useState(null);
  const [Pictures,setPictures]=useState(data ?  data.Car.pictures : '');
  async function carDetails() {
    const URL = `http://localhost:5000/api/car/getOne/${id}`;
    try {
      let cardetail = await axios.get(URL);
      setdetails(cardetail.data.data.pictures);
      setsinglePicture(cardetail.data.data.pictures[0]);
      toast.info("Photos are Fetched!", {
        autoClose: 500,
      });
    } catch (error) {

      console.log(error);
    }

  }


  useEffect(() => {

    carDetails();

  }, [setsinglePicture])




  return (
    <div className="flex flex-row w-[78%] cardetails">
      <div className="flex flex-col gap-[0.5rem] cardetails w-[100%]">
        <div className="flex flex-col justify-between items-center rounded h-[260px] w-[100%] createrent border-black border-[1px]">
          <img id='maincar' onClick={(e) => { e.target.src = 'http://localhost:5000/' + singlePicture; }} className="w-[100%] h-[260px] rounded border-[1px solid bg-gray-500] object-contain" src={singlePicture ? 'http://localhost:5000/' + singlePicture : (Pictures ? 'http://localhost:5000/' + Pictures[0] : 'http://localhost:5000/' + pictures[0])} alt="" />
        </div>

        <div className="flex flex-row gap-[3%] w-[100%]">
          <img id='imageone' onClick={(e) => {
            console.log(e.target.src);
            let maincar = document.querySelector("#maincar");
            maincar.src = e.target.src;
            let imageone = document.querySelector("#imageone");
          }} className="w-[100px] h-[100px] object-contain border-[1px solid bg-orange-400]" src={detail ? 'http://localhost:5000/' + detail[1] : (Pictures?  'http://localhost:5000/'+ Pictures[1] : 'http://localhost:5000/' + pictures[1])} alt="" />
          <img onClick={(e) => {
            console.log(e.target.src);
            let maincar = document.querySelector("#maincar");
            maincar.src = e.target.src;
          }} className="w-[100px]  h-[100px] object-contain" src={detail ? 'http://localhost:5000/' + detail[2]:(Pictures ? 'http://localhost:5000/'+ Pictures[2]:'http://localhost:5000/' + pictures[2]) } alt="" />
          <img onClick={(e) => {
            console.log(e.target.src);
            let maincar = document.querySelector("#maincar");
            maincar.src = e.target.src;
          }} className="w-[100px]  h-[100px] object-contain" src={detail ? 'http://localhost:5000/' + singlePicture : (Pictures? 'http://localhost:5000/'+ Pictures[0] : 'http://localhost:5000/' + pictures[0])} alt="" />
        </div>
      </div>




    </div>
  )
}

export default CreateRentComponent