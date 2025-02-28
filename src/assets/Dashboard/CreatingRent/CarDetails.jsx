import { useEffect, useState } from "react";
import "./RentDetails.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
const CarDetails = (propse) => {

  const [details, setdetails] = useState('')
  const [bookingDetails, setbookingDetails] = useState('');
  const [cardetails, setcardetails] = useState(propse.data.Car ?? '');



  const location = useLocation();

  async function carDetails() {
    const URL = `http://localhost:5000/api/car/getOne/${location.state.id}`;

    try {
      let cardetail = await axios.get(URL);
      console.log(cardetail.data.data);
      setdetails(cardetail.data.data);

      console.log("Car Details ! ", details);

      toast.info("Suceeded", {
        autoClose: 500,
      });

    } catch (error) {

      console.log(error);
    }

  }


  useEffect(() => {
    ApiHandler();
  }, [])


  const ApiHandler = () => {
    if (location.pathname == '/showroomowner/bookedcars/cardetails') {
      console.log("Getting BookedCars")
      return getBookings();
    }
    if (location.pathname == '/showroomowner/homecars/cardetails' || location.pathname == '/showroomowner/favouriteCar/cardetails') {
      console.log("GettingRentNow");
      return carDetails();
    }


  }





  let id = propse.id ? propse.id.detailsId : '';
  async function getBookings() {
    const Token = localStorage.getItem("Token");
    const URL = `http://localhost:5000/api/booking//getById/${id}`;
    try {
      let response = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${Token}`
        }
      });
      propse.setpersonDetails(response.data.data);
      setbookingDetails(response.data.data.Car);
      propse.setPictures(response.data.data.Car.pictures);
    } catch (error) {
      console.log("GetBookedCar Error", error)
    }

  }

  return (
    <div className="flex flex-row w-[40%] cardetails">

      <div className="bg-white w-[100%] max-h-fit px-[2vmin] py-[3vmin] rounded border-[0.1px] border-[#404042]">
        <div className="flex justify-between w-[70%] my-[1vmin] text-[2.4vmin]"><p>Fuel Type</p>

          <p id='inputStyling' className="text-[#262627] font-semibold capitalize">{details.fuelType ? details.fuelType : (cardetails ? cardetails.fuelType : bookingDetails.fuelType)}</p>
        </div>
        <div className="flex justify-between w-[70%] my-[1vmin] text-[2.4vmin] capitalize"><p>Steering</p>

          <p id='inputStyling' className="text-[#262627] font-semibold ">{details.feature ? details.feature : (cardetails.feature ? cardetails.feature : bookingDetails.feature)}</p>

        </div>
        <div className="flex justify-between w-[70%] my-[1vmin] text-[2.4vmin] capitalize"><p>Model</p>
          <p id='inputStyling' className="text-[#262627] font-semibold ">{details.model ? details.model : (cardetails? cardetails.model : bookingDetails.model)}</p>
        </div>
        <div className="flex justify-between w-[70%] my-[1vmin] text-[2.4vmin] capitalize"><p>Mileage</p>
          <p id='inputStyling' className="text-[#262627] font-semibold ">{details.mileage ? details.mileage : (cardetails? cardetails.mileage : bookingDetails.mileage )}</p>
        </div>
        <div className="flex justify-between w-[70%] my-[1vmin] text-[2.4vmin] capitalize"><p>Driver Type</p>

          <p id='inputStyling' className="text-[#262627] font-semibold ">{details.driverType ? details.driverType : (cardetails? cardetails.driverType : bookingDetails.driverType)}</p>
        
        </div>
        <div className="flex justify-between w-[70%] my-[1vmin] text-[2.4vmin] capitalize"><p>Location </p>
          <p id='inputStyling' className="text-[#262627] font-semibold ">{details.location ? details.location : (cardetails?cardetails.location : bookingDetails.location)}</p>
        </div>
        <div className="flex flex-row items-center justify-between w-[70%] capitalize"><p className="text-[2vmin]"> <span className='font-semibold text-[3.3vmin]'>Rs:/</span>days </p><p  id='inputStyling'>{details.discountedPrice ? details.discountedPrice : (cardetails? cardetails.discountedPrice : bookingDetails.discountedPrice)}</p>
        </div>
      </div>
      {/* <div className="flex flex-col  h-[40%] createrent">
        <div className="px-[20px] flex flex-col  h-[100%] justify items-center bg-[#FFFFFF] border-[1px] border-[#dada] rounded  w-[100%]   py-[1vmin]">
          <div className="h-[100%] px-[20px] flex flex-col justify-between items-center bg-[#FFFFFF]   w-[100%]  py-[10vmin]">
            <div className="flex flex-row h-[30%] justify-between items-center w-[100%] ">
              <h6 className="text-[4vmin] font-semibold text-black">{details.title}</h6><svg onClick={(e) => { console.log(e.target) }} width="18" height="20" id='svg' viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.62 18.8101C11.28 18.9301 10.72 18.9301 10.38 18.8101C7.48 17.8201 1 13.6901 1 6.6901C1 3.6001 3.49 1.1001 6.56 1.1001C8.38 1.1001 9.99 1.9801 11 3.3401C12.01 1.9801 13.63 1.1001 15.44 1.1001C18.51 1.1001 21 3.6001 21 6.6901C21 13.6901 14.52 17.8201 11.62 18.8101Z" stroke="#90A3BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <div className="py-[1vmin] flex flex-row w-[100%] h-[30%] gap-[1vmin] items-center">
              <svg className="w-[3vmin] h-[4vmin]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.16672 2.65838C9.22429 2.47584 9.33854 2.31641 9.49289 2.20324C9.64725 2.09007 9.83366 2.02905 10.0251 2.02905C10.2165 2.02905 10.4029 2.09007 10.5572 2.20324C10.7116 2.31641 10.8258 2.47584 10.8834 2.65838L12.4334 7.42505H17.4334C17.6316 7.41755 17.8269 7.47516 17.9893 7.58908C18.1517 7.70299 18.2724 7.86695 18.3328 8.05589C18.3933 8.24484 18.3902 8.44838 18.3241 8.63542C18.258 8.82247 18.1325 8.98273 17.9667 9.09171L13.9084 12.0334L15.4584 16.8084C15.5197 16.9903 15.5212 17.187 15.4628 17.3698C15.4044 17.5526 15.289 17.712 15.1336 17.8246C14.9781 17.9372 14.7908 17.9972 14.5989 17.9958C14.4069 17.9944 14.2205 17.9316 14.0667 17.8167L10.0001 14.8417L5.94172 17.7917C5.78798 17.9066 5.60153 17.9694 5.40959 17.9708C5.21766 17.9722 5.0303 17.9122 4.87487 17.7996C4.71944 17.687 4.60408 17.5276 4.54565 17.3448C4.48721 17.162 4.48876 16.9653 4.55006 16.7834L6.10006 12.0084L2.04172 9.06671C1.87596 8.95773 1.75043 8.79747 1.68432 8.61042C1.61821 8.42338 1.61516 8.21984 1.67562 8.03089C1.73608 7.84195 1.85674 7.67799 2.01915 7.56408C2.18157 7.45016 2.37681 7.39255 2.57506 7.40005H7.57506L9.16672 2.65838Z" fill="#FBAD39" />
              </svg>
              <svg className="w-[3vmin] h-[4vmin]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.16672 2.65838C9.22429 2.47584 9.33854 2.31641 9.49289 2.20324C9.64725 2.09007 9.83366 2.02905 10.0251 2.02905C10.2165 2.02905 10.4029 2.09007 10.5572 2.20324C10.7116 2.31641 10.8258 2.47584 10.8834 2.65838L12.4334 7.42505H17.4334C17.6316 7.41755 17.8269 7.47516 17.9893 7.58908C18.1517 7.70299 18.2724 7.86695 18.3328 8.05589C18.3933 8.24484 18.3902 8.44838 18.3241 8.63542C18.258 8.82247 18.1325 8.98273 17.9667 9.09171L13.9084 12.0334L15.4584 16.8084C15.5197 16.9903 15.5212 17.187 15.4628 17.3698C15.4044 17.5526 15.289 17.712 15.1336 17.8246C14.9781 17.9372 14.7908 17.9972 14.5989 17.9958C14.4069 17.9944 14.2205 17.9316 14.0667 17.8167L10.0001 14.8417L5.94172 17.7917C5.78798 17.9066 5.60153 17.9694 5.40959 17.9708C5.21766 17.9722 5.0303 17.9122 4.87487 17.7996C4.71944 17.687 4.60408 17.5276 4.54565 17.3448C4.48721 17.162 4.48876 16.9653 4.55006 16.7834L6.10006 12.0084L2.04172 9.06671C1.87596 8.95773 1.75043 8.79747 1.68432 8.61042C1.61821 8.42338 1.61516 8.21984 1.67562 8.03089C1.73608 7.84195 1.85674 7.67799 2.01915 7.56408C2.18157 7.45016 2.37681 7.39255 2.57506 7.40005H7.57506L9.16672 2.65838Z" fill="#FBAD39" />
              </svg>
              <svg className="w-[3vmin] h-[4vmin]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.16672 2.65838C9.22429 2.47584 9.33854 2.31641 9.49289 2.20324C9.64725 2.09007 9.83366 2.02905 10.0251 2.02905C10.2165 2.02905 10.4029 2.09007 10.5572 2.20324C10.7116 2.31641 10.8258 2.47584 10.8834 2.65838L12.4334 7.42505H17.4334C17.6316 7.41755 17.8269 7.47516 17.9893 7.58908C18.1517 7.70299 18.2724 7.86695 18.3328 8.05589C18.3933 8.24484 18.3902 8.44838 18.3241 8.63542C18.258 8.82247 18.1325 8.98273 17.9667 9.09171L13.9084 12.0334L15.4584 16.8084C15.5197 16.9903 15.5212 17.187 15.4628 17.3698C15.4044 17.5526 15.289 17.712 15.1336 17.8246C14.9781 17.9372 14.7908 17.9972 14.5989 17.9958C14.4069 17.9944 14.2205 17.9316 14.0667 17.8167L10.0001 14.8417L5.94172 17.7917C5.78798 17.9066 5.60153 17.9694 5.40959 17.9708C5.21766 17.9722 5.0303 17.9122 4.87487 17.7996C4.71944 17.687 4.60408 17.5276 4.54565 17.3448C4.48721 17.162 4.48876 16.9653 4.55006 16.7834L6.10006 12.0084L2.04172 9.06671C1.87596 8.95773 1.75043 8.79747 1.68432 8.61042C1.61821 8.42338 1.61516 8.21984 1.67562 8.03089C1.73608 7.84195 1.85674 7.67799 2.01915 7.56408C2.18157 7.45016 2.37681 7.39255 2.57506 7.40005H7.57506L9.16672 2.65838Z" fill="#FBAD39" />
              </svg>

              <svg className="w-[3vmin] h-[4vmin]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.16672 2.65838C9.22428 2.47584 9.33854 2.31641 9.49289 2.20324C9.64724 2.09007 9.83366 2.02905 10.0251 2.02905C10.2164 2.02905 10.4029 2.09007 10.5572 2.20324C10.7116 2.31641 10.8258 2.47584 10.8834 2.65838L12.4334 7.42505H17.4334C17.6316 7.41755 17.8269 7.47516 17.9893 7.58908C18.1517 7.70299 18.2724 7.86695 18.3328 8.05589C18.3933 8.24484 18.3902 8.44838 18.3241 8.63542C18.258 8.82247 18.1325 8.98273 17.9667 9.09171L13.9084 12.0334L15.4584 16.8084C15.5197 16.9903 15.5212 17.187 15.4628 17.3698C15.4044 17.5526 15.289 17.712 15.1336 17.8246C14.9781 17.9372 14.7908 17.9972 14.5988 17.9958C14.4069 17.9944 14.2205 17.9316 14.0667 17.8167L10.0001 14.8417L5.94172 17.7917C5.78798 17.9066 5.60152 17.9694 5.40959 17.9708C5.21765 17.9722 5.03029 17.9122 4.87486 17.7996C4.71943 17.687 4.60408 17.5276 4.54564 17.3448C4.48721 17.162 4.48875 16.9653 4.55005 16.7834L6.10005 12.0084L2.04172 9.06671C1.87595 8.95773 1.75043 8.79747 1.68432 8.61042C1.61821 8.42338 1.61515 8.21984 1.67562 8.03089C1.73608 7.84195 1.85673 7.67799 2.01915 7.56408C2.18157 7.45016 2.37681 7.39255 2.57505 7.40005H7.57505L9.16672 2.65838Z" fill="#FBAD39" />
              </svg>
              <svg className="w-[3vmin] h-[4vmin]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.16672 2.65838C9.22429 2.47584 9.33854 2.31641 9.49289 2.20324C9.64725 2.09007 9.83366 2.02905 10.0251 2.02905C10.2165 2.02905 10.4029 2.09007 10.5572 2.20324C10.7116 2.31641 10.8258 2.47584 10.8834 2.65838L12.4334 7.42505H17.4334C17.6316 7.41755 17.8269 7.47516 17.9893 7.58908C18.1517 7.70299 18.2724 7.86695 18.3328 8.05589C18.3933 8.24484 18.3902 8.44838 18.3241 8.63542C18.258 8.82247 18.1325 8.98273 17.9667 9.09171L13.9084 12.0334L15.4584 16.8084C15.5197 16.9903 15.5212 17.187 15.4628 17.3698C15.4044 17.5526 15.289 17.712 15.1336 17.8246C14.9781 17.9372 14.7908 17.9972 14.5989 17.9958C14.4069 17.9944 14.2205 17.9316 14.0667 17.8167L10.0001 14.8417L5.94172 17.7917C5.78798 17.9066 5.60153 17.9694 5.40959 17.9708C5.21766 17.9722 5.0303 17.9122 4.87487 17.7996C4.71944 17.687 4.60408 17.5276 4.54565 17.3448C4.48721 17.162 4.48876 16.9653 4.55006 16.7834L6.10006 12.0084L2.04172 9.06671C1.87596 8.95773 1.75043 8.79747 1.68432 8.61042C1.61821 8.42338 1.61516 8.21984 1.67562 8.03089C1.73608 7.84195 1.85674 7.67799 2.01915 7.56408C2.18157 7.45016 2.37681 7.39255 2.57506 7.40005H7.57506L9.16672 2.65838Z" stroke="#90A3BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-[#596780] text-[3vmin]">440+ Reviewers</p>


            </div>
            <p className="py-[2vmin] h-[30%] w-[100%] text-justify text-[3vmin] inline-block">{details.description}</p>
          </div>
          
          <div id="cardetails" className="flex flex-col py-[4vmin]   w-[100%]">
            <p className="w-[100%] text-[#9CA3AF]  flex flex-row justify-between">Typecar : <b className="text-[#111] font-semibold ">sport</b> Capacity : <b className="text-[#111] font-semibold">2 Person</b></p>
            <p className="w-[100%] text-[#9CA3AF] flex flex-row justify-between">Steering : <b className="text-[#111]  font-semibold">{details.feature}</b> Fuel : <b className="text-[#111] font-semibold">petrol</b></p>
          </div>

          <div className="flex flex-col items-start w-[100%]">
            <h6 className="text-[4vmin] font-bold">{details.discountedPrice}/ <span className="text-[2vmin] text-[#9CA3AF]">day</span></h6>
            <h5 className="line-through text-[2vmin] text-[#9CA3AF]">45000</h5>
          </div>

        </div>
      </div> */}
    </div>
  )
}

export default CarDetails