import { Link, Route, Routes, useLocation } from "react-router-dom";
import SignUp from "../Components/SignUp/SignUp.jsx";
import Signin from "../Components/Sign In/Signin.jsx";
import SelectionComponent from "../Components/User Selection/SelectionComponent.jsx";
import ResetComponent from "../Components/Reset Password/Email Authentication/ResetComponent.jsx";
import HomeCarRent from "../Dashboard/Dashboard 3/HomeCarRent.jsx";
import CreateShowroom from "../Components/Create Showrooms/CreateShowroom.jsx";
import Dashboard2 from "../Dashboard/DashboardTwo/Dashboard2.jsx";
import CarTypeBtns from "../Dashboard/Cars/Others/CarTypeBtns.jsx";
import RentCar from "../Dashboard/CreatingRent/RentCar.jsx";
import ShowroomCars from "../Showroomcars/ShowroomCars.jsx";
import { useState } from "react";
import Verification from "../Components/Mail Verification/Re/Images/Verification.jsx";
import HomeCars from "../Dashboard/Dashboard 3/Navbar/HomeCars.jsx";
import BookingPending from "../Dashboard/BookingProcessing/BookingPending.jsx";
import Dashboard from "../Dashboard/Header/Dashboard.jsx";
import RetakingAuthority from "../Components/Reset Password/New Authentication/RetakingAuthority.jsx";
import Notifications from "../Notification/Notifications.jsx"
import FavouriteCars from "../FavouriteCars/FavouriteCars.jsx";
import UserVerification from "../Components/User Verification/UserVerification.jsx";
import UserProfile from "../Components/Profile/UserProfile.jsx";

const AppRoutes = () => {
  const [role, setRole] = useState("");
  const [data, setData] = useState("");
  const [useremail, setuseremail] = useState('');
  const routeData = useLocation();


  return (
    <Routes>
      <Route path="/login" element={<SignUp setData={setData} />} />
      <Route path="/" element={<HomeCarRent />} />
      <Route path="/user-verification" element={<UserVerification />} />
      <Route path="/my-profile" element={<UserProfile />} />

      <Route path="*" element={<><div className="flex flex-col items-center justify-center h-[100vh] w-[100%] f">
        <div className='flex flex-col items-end' >
          <h1 className="bg-[#dadada] text-[#FC4500] font-bold p-[10vmax] text-[1.4rem] rounded-lg" >Page Not Found</h1>
          <Link to={-1}><button className="mt-[10px] self-end" onClick={() => { }}>Go Back</button></Link></div>
      </div>
      </>} />
      <Route path="/register" element={<Signin role={role} />} />
      <Route path="/role" element={<SelectionComponent setRole={setRole} />} />
      <Route path="/login/forgotpassword" element={<ResetComponent setuserEmail={setuseremail} useremail={useremail} />} />
      <Route path="/otpverification" element={<Verification useremail={useremail} role={role} />} />
      <Route path='/showroomowner' element={<HomeCarRent />}>
        <Route path='cars' element={<CarTypeBtns />} />
        <Route path='cars/rentcar' element={<RentCar />} />
        <Route path='addshowroom' element={<CreateShowroom />} />
        <Route path='notification' element={<Notifications />} />
        <Route path='notification/cardetails' element={<Dashboard2 />} />
        <Route path='showroomcars' element={<CarTypeBtns />} />
        <Route path='showroomcars/cardetails' element={<Dashboard2 />} />
        <Route path='favouriteCar' element={<FavouriteCars />} />
        <Route path='notification' element={<Notifications />} />
        <Route path='notification/addshowroom' element={<CreateShowroom />} />
        <Route path='showrooms' element={<CarTypeBtns />} />
        <Route path='showrooms/addshowroom' element={<CreateShowroom />} />
        <Route path='myorders' element={<CarTypeBtns />} />
        <Route path='homecars' element={<HomeCars />} />
        <Route path='homecars/cardetails' element={<Dashboard2 />} />
        <Route path='homecars/cardetails/bookingpending' element={<BookingPending />} />
        <Route path='/showroomowner/favouriteCar/cardetails/bookingpending' element={<BookingPending />} />
        <Route path='bookedcars' element={<CarTypeBtns />} />
        <Route path='bookedcars/cardetails' element={<Dashboard2 />} />
        <Route path='rentcar' element={<RentCar />} />
        <Route path='homecars/showroomCars' element={<ShowroomCars />} />
        <Route path='showroomCars/rentcar' element={<RentCar />} />
        <Route path='/showroomowner/homecars/showroomCars/cardetails' element={<Dashboard2 />} />
        <Route path='favouriteCar' element={<FavouriteCars />} />
        <Route path='favouriteCar/cardetails' element={<Dashboard2 />} />
      </Route>
      <Route path="/rentacar" element={<Dashboard />} />
      <Route path="/resetcomponent" element={<ResetComponent />} />
      <Route path="/retakingauthority" element={<RetakingAuthority />} />
    </Routes>
  )
}
export default AppRoutes