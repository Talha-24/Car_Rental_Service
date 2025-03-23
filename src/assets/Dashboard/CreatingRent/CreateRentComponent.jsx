import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import serverRequestHandler from "../../Utils/http";
import Toast from "../../Toaster/Toaster";
import localhost from "../../Utils/LocalHost";
import { EndPoint } from "../../Utils/RoutesPaths";
const CreateRentComponent = ({ id, pictures, data, setpersonDetails }) => {

  const navigation = useNavigate();
  const location = useLocation();
  const [detail, setdetails] = useState(null);
  const [singlePicture, setsinglePicture] = useState(null);
  const [index, setindex] = useState(0);
  const [Pictures, setPictures] = useState(data ? data.Car?.pictures : '');


console.log("Details",data);


  async function carDetails() {

    try {
      let cardetail = await serverRequestHandler(EndPoint.getSingleCar(location.state.id.detailsId ?? id.carId ?? id.detailsId ?? id), `get`);
      localStorage.setItem("CarsShowroom",cardetail.showroomId)
      localStorage.setItem("CarsShowroomOwner",cardetail.showroomOwnerId)
      setPictures()


      setdetails(cardetail.pictures);
      setpersonDetails(cardetail);
      setsinglePicture([...cardetail.pictures]);
       console.log("Single Picture",singlePicture);
      Toast.success(cardetail.message ?? "Phots are Fetched");
    } catch (error) {
      Toast.error(error.message ?? error);
    }
  }

  useEffect(() => {

    if(location.pathname != '/showroomowner/myorders/cardetails' && location.pathname != "/showroomowner/notification/cardetails"){
      carDetails();
    }
   
  }, [setsinglePicture])
  let turn = true;
  const maincar = useRef(null);

  return (
    <div id='carimages' className="flex flex-row w-[100%] cardetails">
      <div className="flex flex-col gap-[0.5rem] cardetails w-[100%]">
        <div className="flex flex-col justify-between items-center rounded h-[300px] w-[100%] createrent border-black border-[1px]">
          <img ref={maincar} onClick={(e) => { e.target.src = localhost() + singlePicture[1] }} className="w-[100%] h-[300px] rounded border-[1px solid bg-gray-500] object-contain" src={singlePicture ? localhost() + singlePicture[1] : (Pictures ? localhost() + Pictures[0] : localhost() + pictures[2])} alt="" />
        </div>
        <div id='subimages' className="flex flex-row gap-[1%] w-[100%] flex-wrap">
          {singlePicture  ? singlePicture.map(function (picture, idx) {
            return (
              <img key={idx} onClick={(e) => {
                maincar.current.src = e.target.src;
                setindex(idx);
              }} className={`h-[80px] w-[100px] object-cover border-[1px] m-[2px] rounded ${index == idx ? 'border-[2px] border-[#FC4500] p-[5px]' : ''}`} src={localhost() + picture} alt="" />
            )
          }) :  pictures ?   pictures.map(function (picture, idx) {
            return (
              <img key={idx} onClick={(e) => {
                maincar.current.src = e.target.src;
                setindex(idx);
              }} className={`h-[80px] w-[100px] object-cover border-[1px] m-[2px] rounded ${index == idx ? 'border-[2px] border-[#FC4500] p-[5px]' : ''}`} src={localhost() + picture} alt="" />
            )
          }) : "No Car Pictures" }

        
        </div>
      </div>
    </div>
  )
}

export default CreateRentComponent