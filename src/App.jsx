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
import {  Route, Routes, useLocation } from "react-router-dom";
import Verification from "./assets/Components/Mail Verification/Re/Images/Verification";
import RetakingAuthority from "./assets/Components/Reset Password/New Authentication/RetakingAuthority";
import CreateShowroom from "./assets/Components/Create Showrooms/CreateShowroom.jsx";
import HomeCars from "./assets/Dashboard/Dashboard 3/Navbar/HomeCars";
import CarTypeBtns from "./assets/Dashboard/Cars/Others/CarTypeBtns.jsx";
import RentCar from "./assets/Dashboard/CreatingRent/RentCar.jsx";
import FavouriteCars from "./assets/FavouriteCars/FavouriteCars.jsx";
import ShowroomCars from "./assets/Showroomcars/ShowroomCars.jsx";
import Notification from "./assets/Notification/Notifications.jsx";
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
          <Routes>
            <Route path="/" element={<SignUp setData={setData}  />} />
            <Route path="/register" element={<Signin role={role} />} />
            <Route path="/role" element={<SelectionComponent setRole={setRole} />} />
            <Route path="/forgotpassword" element={<ResetComponent setuserEmail={setuseremail} useremail={useremail} />} />
            <Route path="/otpverification" element={<Verification useremail={useremail} role={role} />} />
            <Route path='/showroomOwner' element={<HomeCarRent />}>
              <Route path='addshowroom' element={<CreateShowroom />} />
              <Route path='notification' element={<Notification />} />
              <Route path='notification/cardetails' element={<Dashboard2 />} />
              <Route path='showroomcars' element={<CarTypeBtns />} />
              <Route path='notification' element={<Notification />} />
              <Route path='notification/addshowroom' element={<CreateShowroom />} />
              <Route path='showrooms' element={<CarTypeBtns />} />
              <Route path='showrooms/addshowroom' element={<CreateShowroom />} />
              <Route path='cars' element={<CarTypeBtns />} />
              <Route path='cars/rentcar' element={<RentCar />} />
              <Route path='myorders' element={<CarTypeBtns />} />
              <Route path='homecars' element={<HomeCars />} />
              <Route path='homecars/cardetails' element={<Dashboard2 />} />
              <Route path='homecars/cardetails/bookingpending' element={<BookingPending />} />
              <Route path='bookedcars' element={<CarTypeBtns />} />
              <Route path='bookedcars/cardetails' element={<Dashboard2 />} />
              <Route path='rentcar' element={<RentCar />} />
              <Route path='homecars/showroomCars' element={<ShowroomCars />} />
              <Route path='showroomCars/rentcar' element={<RentCar />} />
              <Route path='favouriteCar' element={<FavouriteCars />} /> {/* <Route path='notifications' element={<Notification/>} /> */}
              <Route path='favouriteCar/cardetails' element={<Dashboard2 />} />
            </Route>
            <Route path="/rentacar" element={<Dashboard />} />
            <Route path="/resetcomponent" element={<ResetComponent />} />
            <Route path="/retakingauthority" element={<RetakingAuthority />} />
          </Routes>
          {/* <Dashboard></Dashboard> */}
          {/* {/* <Dashboard/> */}

        </div>

      </div>
    </>
  )
}

export default App