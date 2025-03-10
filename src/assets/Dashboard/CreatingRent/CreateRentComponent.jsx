import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import serverRequestHandler from "../../Utils/http";
import Toast from "../../Toaster/Toaster";
import localhost from "../../Utils/LocalHost";
const CreateRentComponent = ({ id, pictures, data, setpersonDetails }) => {
  const navigation = useNavigate();
  const [detail, setdetails] = useState(null);
  const [singlePicture, setsinglePicture] = useState(null);
  const [Pictures, setPictures] = useState(data ? data.Car.pictures : '');
  async function carDetails() {
    const endPoint = `/car/getOne/${id.carId ?? id.detailsId ?? id}`;
    const method = `get`;
    try {
      let cardetail = await serverRequestHandler(endPoint, method);
      setdetails(cardetail.pictures);
      setpersonDetails(cardetail);
      setsinglePicture([...cardetail.pictures]);
      Toast(cardetail.message??"Phots are Fetched");
    } catch (error) {
      Toast(error.message);
    }
  }
  useEffect(() => {
    carDetails();
  }, [setsinglePicture])




  return (
    <div id='carimages' className="flex flex-row w-[100%] cardetails">
      <div className="flex flex-col gap-[0.5rem] cardetails w-[100%]">
        <div className="flex flex-col justify-between items-center rounded h-[260px] w-[100%] createrent border-black border-[1px]">
          <img id='maincar' onClick={(e) => { e.target.src = localhost() + singlePicture[2] }} className="w-[100%] h-[260px] rounded border-[1px solid bg-gray-500] object-cover" src={singlePicture ? localhost() + singlePicture[0] : (Pictures ? localhost() + Pictures[0] : localhost() + pictures[0])} alt="" />
        </div>
        <div id='subimages' className="flex flex-row gap-[1%] w-[100%] flex-wrap">
          {singlePicture ? singlePicture.map(function (picture) {
            return (
              <img onClick={(e) => {
                let maincar = document.querySelector("#maincar");
                maincar.src = e.target.src;
              }} className="w-[100px] h-[100px] object-contain border-[1px] border-[black] m-[2px]" src={ localhost() + picture} alt="" />
            )
          }) : ''}
        </div>
      </div>
    </div>
  )
}

export default CreateRentComponent