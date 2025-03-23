import { useEffect, useState } from "react";
import "./RentDetails.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import serverRequestHandler from "../../Utils/http";
import Toast from "../../Toaster/Toaster";
import { EndPoint, obj } from "../../Utils/RoutesPaths";
const CarDetails = (propse) => {
  const [details, setdetails] = useState('')
  const [bookingDetails, setbookingDetails] = useState('');
  const [cardetails, setcardetails] = useState(propse.data?.Car ?? propse.data??"");

  propse.setrentPrice(cardetails ? cardetails.discountedPrice : bookingDetails ? bookingDetails.discountedPrice : details?.discountedPrice);

  const location = useLocation();
  async function carDetails() {
    const id =location.state.id?.detailsId?? location.state.id.detailsId??location.state.id??'';
   
    try {
      let cardetail = await serverRequestHandler(EndPoint.getSingleCar(id), `get`);
      setdetails(cardetail);
      Toast.success("Car details retrieved successfully!",500);
    } catch (error) {
      Toast.error(error.message??error);
    }
  }


  useEffect(() => {
    ApiHandler();
  }, [])


  const ApiHandler = () => {
    if (location.pathname == obj.bookedcardetails || location.pathname == obj.myorderdetails || location.pathname == "/showroomowner/notification/cardetails" ) {
      return getBookings();
    }
    if (location.pathname == obj.usercardetails || location.pathname == obj.userfavcardetails || location.pathname == obj.superadmincardetails || location.pathname == obj.cardetailsthree || location.pathname == obj.cardetailseight || location.pathname == obj.cardetailsnine ) {
      return carDetails();
    }
  }






  let id = location.pathname === '/showroomowner/myorders/cardetails' || location.pathname === "/showroomowner/bookedcars/cardetails" || location.pathname === "/showroomowner/notification/cardetails" ? location.state.id??"" : propse.data?? propse.id ?? propse.id.detailsId ??"" ;

  
  async function getBookings() {



    try {
      let response = await serverRequestHandler(EndPoint.getSingleBooking(id), `get`)
      propse.setpersonDetails(response);
      setbookingDetails(response.Car);
      console.log("Booking",response.Car.status);
      localStorage.setItem("orderStatus",response.status);

      propse.setPictures(response.Car.pictures);
      Toast.success("Booking retrieved Successfully",500);
    } catch (error) {
      Toast.error(error?.message??error);
    }

  }

  return (
    <div className="flex flex-row w-[50%] cardetails">
      <div className="bg-white w-[100%] max-h-fit px-[2vmin] py-[3vmin] rounded border-[0.1px] border-[#404042]">
      <div className="flex justify-between w-[70%] my-[1vmin] text-[2.4vmin]"><p>Title</p>
          <p id='inputStyling' className="text-[#262627] font-semibold capitalize">{details?.title ? details?.title : (cardetails ? cardetails?.title : bookingDetails?.title)}</p>
        </div>
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
        <details className="flex justify-between w-[100%] my-[1vmin] text-[2.4vmin] capitalize">
          {/* <p>Description </p> */}
          <summary className="">Show Description</summary>


        {/* <details>
          <summary>Details</summary>
          <p>alsdjflasjdflkasdfl</p>
          <p></p>
        </details> */}

          <p id='inputStyling' className="text-[#262627] w-[100%] font-semibold text-[10.3px] ml-[10px]">{details.description ? details.description : (cardetails ? cardetails?.description : bookingDetails?.description)}</p>
        </details>
        <div className="flex flex-row items-center justify-between w-[70%] capitalize"><p className="text-[2vmin]"> <span className='font-semibold text-[3.3vmin]'>Rs:/</span>day</p><p id='inputStyling'>{details?.discountedPrice ? details.discountedPrice : (cardetails ? cardetails?.discountedPrice : bookingDetails?.discountedPrice)}</p>
        </div>
      </div>
    </div>
  )
}

export default CarDetails