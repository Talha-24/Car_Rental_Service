import axios from "axios";
import { useState } from "react"
import { useLocation, useNavigate, useNavigationType } from "react-router-dom"
import { toast } from "react-toastify";
import localhost from "../../../../Utils/LocalHost";
import { obj } from "../../../../Utils/RoutesPaths";
import serverRequestHandler from "../../../../Utils/http";
import Toast from "../../../../Toaster/Toaster";
import { BiSolidUserDetail } from "react-icons/bi";


const Car1 = (propse) => {
  let filter = propse.filter;
  let isRentNow = propse.isRentNow;
  const [Ids, setIds] = useState({ carId: propse.carid ?? '', detailsId: propse.detailsid ?? propse.car?._id??"" });
  const [cardata, setdata] = useState(propse.car?._id) ?? '';
  const navigation = useNavigate();

  const navigate = () => {
    navigation(obj.cardetails, { state: { id: cardata } })
  }


  const [heartColor, setcolor] = useState('none');
  const [heartStroke, setheartStroke] = useState('#90A3BF')
  const [carId, setcarId] = useState('');
  async function addtoFavourite() {
    const endPoint = ``;
    const body = {
      'car': propse.car._id,
    };
    

    try {
      const favCarResponse = await serverRequestHandler(`/favorite/addFavorite`, `post`, body);
    } catch (error) {

    }



  }




  async function removeFav() {
    const endPoint = `favorite/removeFavorite`;
    const method = `post`;
    const body = {
      "car": propse.car._id,
    }

    try {
      let response = await serverRequestHandler(endPoint, method, body);

    } catch (error) {
      Toast(error.message ?? error);
    }




  }



  const location = useLocation();
  if (location.pathname == obj.bookedcars) {
    isRentNow = false;

  }





//Cancel Booking

  async function cancelbooking(status) {
    const Token = localStorage.getItem("Token");
    const URL = `http://localhost:5000/api/booking/updateStatus`;
    const endPoint = '/booking/updateStatus';
    const method = `post`;
    const body = {
      'status': status,
      'booking': propse.bookingId,
    }

    try {

      let response = await serverRequestHandler(endPoint, method, body);
      toast.success(response.data?.message ?? `Booking is ${status} Successfully`,{
        autoClose: 1000,
      });
      propse.myorders();
    } catch (error) {
    }

  }

















  let turn = true;
  return (
    <div className='w-[272px] min-fit-h-[369px] bg-[white] text-black m-[10px] border-[1px] border-[#dadada]  rounded-lg flex flex-col justify gap-[10px]  p-[10px] carone'>
      <div id="logo" className='flex flex-row justify-between  items-center'><b className="text-[23px]">{propse?.car?.title ? propse?.car?.title : propse.bookedCar?.title}</b>
        {location.pathname == obj.myorders ? <>
          <span onClick={() => { navigation(obj.myorderdetails, { state: { id: propse?.bookingId ?? "" } }) }} className="bg-[#FC4500] w-[25px]  h-[23px] flex items-center justify-center rounded-sm ">
            <BiSolidUserDetail fontSize='16px' color="white" enableBackground='#FC4500' />
          </span>


        </> : <svg onClick={() => {
          if (turn == true) {
            addtoFavourite();
            setcolor("red");
            setheartStroke("red");
            toast("Favourited Created Successfully!");
            turn = false;

          } else {
            removeFav();
            setcolor("none");
            setheartStroke("#90A3BF");
            toast("Favorite Deleted Successfully!");
            turn = true;
          }
        }} className="w-[3vmin] h-[4vmin] cursor-pointer" id='svg' viewBox="0 0 22 20" fill={heartColor} xmlns="http://www.w3.org/2000/svg">
          <path d="M11.62 18.8101C11.28 18.9301 10.72 18.9301 10.38 18.8101C7.48 17.8201 1 13.6901 1 6.6901C1 3.6001 3.49 1.1001 6.56 1.1001C8.38 1.1001 9.99 1.9801 11 3.3401C12.01 1.9801 13.63 1.1001 15.44 1.1001C18.51 1.1001 21 3.6001 21 6.6901C21 13.6901 14.52 17.8201 11.62 18.8101Z" stroke={heartStroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>}

      </div>
      <p className='w-[100%] text-[20px] inline-block'> Rs.{propse.car.discountedPrice ? propse.car.discountedPrice : propse.bookedCar?.discountedPrice}/day</p>

      <img className="h-[170px] w-[248px]  border-[2px] border-black rounded object-cover" src={localhost() + (propse.car?.pictures?.[0] ? propse.car?.pictures?.[0] : propse.bookedCar?.pictures[0])}
        alt="" />
      <div id="carinfo" className='flex flex-row items-center gap-[1vmin]'>
        <div className='flex flex-row items-center gap-[0.5vw] justify-evenly w-[100%]'>
          <svg className="w-[16px] h-[15px]" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.34 9.33L20.34 8.33C19.97 8.15 19.51 8.29 19.33 8.66C19.14 9.04 19.29 9.49 19.66 9.67L21.25 10.46V15.25L17.5 15.26V5C17.5 3 16.16 2 14.5 2H6.5C4.84 2 3.5 3 3.5 5V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H19C19.41 22.75 19.75 22.41 19.75 22C19.75 21.59 19.41 21.25 19 21.25H17.5V16.76L22 16.75C22.42 16.75 22.75 16.41 22.75 16V10C22.75 9.72 22.59 9.46 22.34 9.33ZM6 6.89C6 5.5 6.85 5 7.89 5H13.12C14.15 5 15 5.5 15 6.89V8.12C15 9.5 14.15 10 13.11 10H7.89C6.85 10 6 9.5 6 8.11V6.89ZM6.5 12.25H9.5C9.91 12.25 10.25 12.59 10.25 13C10.25 13.41 9.91 13.75 9.5 13.75H6.5C6.09 13.75 5.75 13.41 5.75 13C5.75 12.59 6.09 12.25 6.5 12.25Z" fill="#000000" />
          </svg>
          <p className='text-[black] text-[12px] capitalize'>{propse.car.mileage ? propse.car.mileage : propse.bookedCar?.mileage}</p>
        </div>

        <div className='flex flex-row items-center gap-[0.5vw] justify-evenly w-[100%]'>
          <svg className="w-[16px] h-[15px]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.53 0 10 0Z" fill="#000000" />
            <rect x="2" y="2" width="16" height="16" rx="8" fill="white" />
            <path d="M10 4C6.688 4 4 6.688 4 10C4 13.312 6.688 16 10 16C13.312 16 16 13.312 16 10C16 6.688 13.318 4 10 4Z" fill="#000000" />
            <rect x="6" y="6" width="8" height="8" rx="4" fill="white" />
            <rect x="9" y="15" width="2" height="4" fill="#000000" />
            <rect x="15" y="9" width="4" height="2" fill="#000000" />
            <rect x="1" y="9" width="4" height="2" fill="#000000" />
          </svg><p className='text-[#000000] text-[12px] capitalize'>{propse.car.feature ?? propse.bookedCar?.feature}</p>
        </div>
        <div className='flex flex-row items-center  gap-[0.5vw] justify-evenly w-[100%]'>
          <svg className="w-[16px] h-[15px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z" fill="#000000" />
            <path d="M14.08 14.1499C11.29 12.2899 6.73996 12.2899 3.92996 14.1499C2.65996 14.9999 1.95996 16.1499 1.95996 17.3799C1.95996 18.6099 2.65996 19.7499 3.91996 20.5899C5.31996 21.5299 7.15996 21.9999 8.99996 21.9999C10.84 21.9999 12.68 21.5299 14.08 20.5899C15.34 19.7399 16.04 18.5999 16.04 17.3599C16.03 16.1299 15.34 14.9899 14.08 14.1499Z" fill="#000000" />
            <path d="M19.9901 7.3401C20.1501 9.2801 18.7701 10.9801 16.8601 11.2101C16.8501 11.2101 16.8501 11.2101 16.8401 11.2101H16.8101C16.7501 11.2101 16.6901 11.2101 16.6401 11.2301C15.6701 11.2801 14.7801 10.9701 14.1101 10.4001C15.1401 9.4801 15.7301 8.1001 15.6101 6.6001C15.5401 5.7901 15.2601 5.0501 14.8401 4.4201C15.2201 4.2301 15.6601 4.1101 16.1101 4.0701C18.0701 3.9001 19.8201 5.3601 19.9901 7.3401Z" fill="#000000" />
            <path d="M21.99 16.5899C21.91 17.5599 21.29 18.3999 20.25 18.9699C19.25 19.5199 17.99 19.7799 16.74 19.7499C17.46 19.0999 17.88 18.2899 17.96 17.4299C18.06 16.1899 17.47 14.9999 16.29 14.0499C15.62 13.5199 14.84 13.0999 13.99 12.7899C16.2 12.1499 18.98 12.5799 20.69 13.9599C21.61 14.6999 22.08 15.6299 21.99 16.5899Z" fill="#000000" />
          </svg><p className='text-[#000000] text-[12px] capitalize'>{propse?.car?.driverType ? propse.car.driverType : propse.bookedCar?.driverType}</p>
        </div>
      </div>
      <div className='flex flex-col gap-[1vmin] w-[100%]'>
        {location.pathname == obj.usershowroomcars ? <>
          <div className="w-[100%] flex flex-row px-[1vmin] justify-between">
            <button onClick={() => {
              navigation(obj.rentcar, { state: { id: Ids } });
              localStorage.setItem("UpdateCar", true);
            }} className='#FC5C00  py-[1vmin] px-[1.4vmin] text-sm w-[60px]'>Edit</button>
            <button onClick={() => {
              navigation(obj.cardetails, { state: { id: Ids } })
            }} className='#FC5C00 py-[1vmin] px-[1.4vmin] text-sm w-[60px]'>View</button>
          </div>

        </> : isRentNow && <button onClick={() => {
          navigate()
        }} className='py-[1vmin] px-[1.4vmin] bg-[#FF4500] rounded-[0.5vmin] text-white text-[12px] font-semibold w-[100%]'>Rent Now</button>}
        {location.pathname == obj.bookedcars && filter == 'pending' ?
          <div className="w-[100%] flex flex-row px-[1vmin] justify-between">
            <button onClick={() => {
              cancelbooking("cancelled");
            }} className='#FC5C00  py-[1vmin] px-[1.4vmin] text-sm w-[60px]'>Cancel</button>

            <button onClick={() => {
              navigation(obj.cardetails, { state: { id: propse.car._id, } })
            }} className='#FC5C00 py-[1vmin] px-[1.4vmin] text-sm w-[60px]'>View</button>
          </div> : ""}
        {location.pathname == obj.bookedcars && filter != 'pending' ?
          <div className="w-[100%] flex flex-row px-[1vmin] justify-end">
            <button onClick={() => {
              navigation(obj.cardetails, { state: { id: propse.car._id } })
            }} className='#FC5C00 py-[1vmin] px-[1.4vmin] text-sm w-[60px]'>View</button>
          </div> : (location.pathname == obj.myorders && localStorage.getItem("orderStatus") == 'pending' ? <>

            <div className="w-[100%] flex flex-row px-[1vmin] justify-between">
              <button onClick={() => {
                // navigation(obj.cardetails, { state: { id: Ids } })
                localStorage.setItem("orderStatus", "Accept");
                cancelbooking("accepted");


                // name();
                // async function name() {
                //   const endPoint = '/booking/updateStatus';
                //   const method = `post`;
                //   const body = {
                //     'status': "cancelled",
                //     'booking': propse.car._id ?? propse._id,
                //   }
                //   try {

                //     let response = await serverRequestHandler(endPoint, method, body);
                //     toast.success(response.data?.message ?? "Booking Cancelled Successfully!", {
                //       autoClose: 1000,
                //     });
                //     propse.getbookedCars();
                //   } catch (error) {
                //   }
                // }











              }} className='bg-[#FC4500] py-[0.60rem] px-[0.4rem] text-sm w-[70px] font-semibold'>Accept</button>
              <button onClick={() => {
                cancelbooking("rejected");
                localStorage.setItem("orderStatus", "Reject");
              }} className='bg-[#FC4500] py-[0.60rem] px-[0.4rem] text-sm w-[70px] font-semibold'>Reject</button>



            </div>

          </> : location.pathname == '/showroomowner/myorders' && localStorage.getItem("orderStatus") === 'accepted' ? <button onClick={()=>{
            cancelbooking("completed");
          }}>Completed</button> : "")}

      </div>
    </div>
  )
}

export default Car1