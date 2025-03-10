import { useEffect, useState } from "react"
import SelectionComponent from "./assets/Components/User Selection/SelectionComponent";
import { ToastContainer } from "react-toastify";
import SignUp from "./assets/Components/SignUp/SignUp"
import HomeCarRent from "./assets/Dashboard/Dashboard 3/HomeCarRent";
import Dashboard from "./assets/Dashboard/Header/Dashboard";
import Dashboard2 from "./assets/Dashboard/DashboardTwo/Dashboard2";
import BookingPending from "./assets/Dashboard/BookingProcessing/BookingPending";
import Signin from "./assets/Components/Sign In/Signin";
import ResetComponent from "./assets/Components/Reset Password/Email Authentication/ResetComponent";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Verification from "./assets/Components/Mail Verification/Re/Images/Verification";
import RetakingAuthority from "./assets/Components/Reset Password/New Authentication/RetakingAuthority";
import CreateShowroom from "./assets/Components/Create Showrooms/CreateShowroom.jsx";
import HomeCars from "./assets/Dashboard/Dashboard 3/Navbar/HomeCars";
import CarTypeBtns from "./assets/Dashboard/Cars/Others/CarTypeBtns.jsx";
import RentCar from "./assets/Dashboard/CreatingRent/RentCar.jsx";
import FavouriteCars from "./assets/FavouriteCars/FavouriteCars.jsx";
import ShowroomCars from "./assets/Showroomcars/ShowroomCars.jsx";
import Notification from "./assets/Notification/Notifications.jsx";
import AppRoutes from "./assets/Routes/AppRoutes.jsx"
const App = () => {

  const [role, setRole] = useState("");
  const [data, setData] = useState("");
  const [useremail, setuseremail] = useState('');
  const routeData = useLocation();
  
  return (
    <>


      <ToastContainer />
      <div id='app' className='bg-[#FFFFFF] w-[100%] flex flex-col'>
        <div id='' className='flex flex-row w-[100%] bg-[#F6F7F9]'>
          <AppRoutes />
        </div>
      </div>
    </>
  )
}

export default App