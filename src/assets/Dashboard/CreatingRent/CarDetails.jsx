import { useEffect, useState } from "react";
import "./RentDetails.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import serverRequestHandler from "../../Utils/http";
import Toast from "../../Toaster/Toaster";
const CarDetails = (propse) => {
  console.log("PersonDetails", propse.setpersonDetails);
  const [details, setdetails] = useState('')
  const [bookingDetails, setbookingDetails] = useState('');
  const [cardetails, setcardetails] = useState(propse.data.Car ?? '');

  propse.setrentPrice(cardetails ? cardetails.discountedPrice : bookingDetails ? bookingDetails.discountedPrice : details?.discountedPrice);

  const location = useLocation();

  async function carDetails() {
    const id = location.state.id.detailsId ?? location.state.id;
    // const URL = `http://localhost:5000/api/car/getOne/${id}`;
    const endPoint = `/car/getOne/${id}`;
    const method = `get`;
    try {
      let cardetail = await serverRequestHandler(endPoint, method);
      console.log(cardetail);
      setdetails(cardetail);
      Toast("Succeeded!");
    } catch (error) {
      Toast(error.message);
    }
  }


  useEffect(() => {
    ApiHandler();
  }, [])


  const ApiHandler = () => {
    if (location.pathname == '/showroomowner/bookedcars/cardetails') {
      return getBookings();
    }
    if (location.pathname == '/showroomowner/homecars/cardetails' || location.pathname == '/showroomowner/favouriteCar/cardetails' || location.pathname == '/showroomowner/showroomcars/cardetails') {
      return carDetails();
    }
  }








  let id = propse.id ?? propse.id.detailsId ?? '';

  async function getBookings() {
    // const Token = localStorage.getItem("Token");
    // const URL = `http://localhost:5000/api/booking//getById/${id}`;

    const endPoint = `/booking//getById${id}`;
    const method = `get`;
    try {
      let response = await serverRequestHandler(endPoint, method)
      propse.setpersonDetails(response);
      setbookingDetails(response.Car);
      propse.setPictures(response.Car.pictures);
    } catch (error) {
    }

  }

  return (
    <div className="flex flex-row w-[40%] cardetails">

      <div className="bg-white w-[100%] max-h-fit px-[2vmin] py-[3vmin] rounded border-[0.1px] border-[#404042]">
        <div className="flex justify-between w-[70%] my-[1vmin] text-[2.4vmin]"><p>Fuel Type</p>

          <p id='inputStyling' className="text-[#262627] font-semibold capitalize">{details?.fuelType ? details?.fuelType : (cardetails ? cardetails?.fuelType : bookingDetails?.fuelType)}</p>
        </div>
        <div className="flex justify-between w-[70%] my-[1vmin] text-[2.4vmin] capitalize"><p>Steering</p>

          <p id='inputStyling' className="text-[#262627] font-semibold ">{details.feature ? details?.feature : (cardetails.feature ? cardetails?.feature : bookingDetails?.feature)}</p>

        </div>
        <div className="flex justify-between w-[70%] my-[1vmin] text-[2.4vmin] capitalize"><p>Model</p>
          <p id='inputStyling' className="text-[#262627] font-semibold ">{details.model ? details?.model : (cardetails ? cardetails?.model : bookingDetails?.model)}</p>
        </div>
        <div className="flex justify-between w-[70%] my-[1vmin] text-[2.4vmin] capitalize"><p>Mileage</p>
          <p id='inputStyling' className="text-[#262627] font-semibold ">{details.mileage ? details.mileage : (cardetails ? cardetails?.mileage : bookingDetails?.mileage)}</p>
        </div>
        <div className="flex justify-between w-[70%] my-[1vmin] text-[2.4vmin] capitalize"><p>Driver Type</p>

          <p id='inputStyling' className="text-[#262627] font-semibold ">{details.driverType ? details.driverType : (cardetails ? cardetails?.driverType : bookingDetails?.driverType)}</p>

        </div>
        <div className="flex justify-between w-[70%] my-[1vmin] text-[2.4vmin] capitalize"><p>Location </p>
          <p id='inputStyling' className="text-[#262627] font-semibold ">{details.location ? details.location : (cardetails ? cardetails?.location : bookingDetails?.location)}</p>
        </div>
        <div className="flex flex-row items-center justify-between w-[70%] capitalize"><p className="text-[2vmin]"> <span className='font-semibold text-[3.3vmin]'>Rs:/</span>days </p><p id='inputStyling'>{details?.discountedPrice ? details.discountedPrice : (cardetails ? cardetails?.discountedPrice : bookingDetails?.discountedPrice)}</p>
        </div>
      </div>
    </div>
  )
}

export default CarDetails