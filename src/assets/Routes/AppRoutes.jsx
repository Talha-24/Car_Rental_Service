import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
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
import { obj, } from "../Utils/RoutesPaths.js";

const AppRoutes = () => {

  const [data, setData] = useState("");


  return (
    <Routes>
      <Route path={obj.loginpage} element={<SignUp setData={setData} />} />
      <Route path="/" element={<HomeCarRent />} />
      <Route path={obj.otpverification} element={<UserVerification />} />
      <Route path={obj.myprofile} element={<UserProfile />} />
      <Route path={obj.Error404} element={<><div className="flex flex-col items-center justify-center h-[100vh] w-[100%] f">
        <div className='flex flex-col items-end' >
          <h1 className="bg-[#dadada] text-[#FC4500] font-bold p-[10vmax] text-[1.4rem] rounded-lg" >Page Not Found</h1>
          <Link to={-1}><button className="mt-[10px] self-end" onClick={() => { }}>Go Back</button></Link></div>
      </div>
      </>} />
      <Route path={obj.register} element={<Signin/>} />
      <Route path={obj.role} element={<SelectionComponent/>}/>
      <Route path={obj.forgotpass} element={<ResetComponent/>}/>
      <Route path={obj.userverification} element={<Verification/>} />
      <Route path='/user-verification/otpverification' element={<Verification/>} />
      <Route path='/login/forgotpassword/otpverification' element={<Verification/>} /> 
      <Route path={obj.showroomowner} element={<HomeCarRent />}>
        <Route path={obj.cars} element={<CarTypeBtns />} />
        <Route path={obj.rentcartwo} element={<RentCar />} />
        <Route path={obj.addshowroom} element={<CreateShowroom />} />
        <Route path={obj.notification} element={<Notifications />} />
        <Route path={obj.cardetailsfive} element={<Dashboard2 />} />
        <Route path={obj.showroomcars} element={<CarTypeBtns />} />
        <Route path={obj.cardetailsfour} element={<Dashboard2 />} />
        <Route path={obj.cardetailsthree} element={<Dashboard2 />} />
        <Route path={obj.favoritecar} element={<FavouriteCars />} />
        <Route path={obj.notification} element={<Notifications />} />
        <Route path={obj.createshowroomtwo} element={<CreateShowroom />} />
        <Route path={obj.showrooms} element={<CarTypeBtns />} />
        <Route path={obj.favcarone} element={<FavouriteCars />} />
        <Route path={obj.searchedcars} element={<FavouriteCars />} />
        <Route path={obj.createshowroomone} element={<CreateShowroom />} />
        <Route path={obj.myorderstext} element={<CarTypeBtns />} />
        <Route path={obj.homecars} element={<HomeCars />} />
        <Route path={obj.cardetailstwo} element={<Dashboard2 />} />
        <Route path={obj.myorderdetails} element={<Dashboard2 />} />
        <Route path={obj.usershowroomcars} element={<CarTypeBtns />} />
        <Route path={obj.bookingpendingthree} element={<BookingPending />} />
        <Route path={obj.bookingpendingtwo} element={<BookingPending />} />
        <Route path={obj.bookingpendingone} element={<BookingPending />} />
        <Route path={obj.bookingpendingfour} element={<BookingPending />} />
        <Route path={obj.bookingpendingfive} element={<BookingPending />} />
        <Route path={obj.bookingpendingsix} element={<BookingPending />} />
        <Route path={obj.bookedcarstext} element={<CarTypeBtns />} />
        <Route path={obj.cardetailsone} element={<Dashboard2 />} />
        <Route path={obj.showroomCarDetails} element={<Dashboard2 />} />
        <Route path={obj.cardetailseight} element={<Dashboard2 />} />
        <Route path={obj.rentcar} element={<RentCar />} />
        <Route path={obj.showroomCars} element={<ShowroomCars />} />
        <Route path={obj.rentcarone} element={<RentCar />} />
        <Route path={obj.cardetailssix} element={<Dashboard2 />} />
        <Route path={obj.favoritecar} element={<FavouriteCars />} />
        <Route path={obj.cardetailseven} element={<Dashboard2 />} />
      </Route>
      <Route path={obj.rentacar} element={<Dashboard />} />
      <Route path={obj.resetpassword} element={<ResetComponent />} />
      <Route path={obj.retakingauthority} element={<RetakingAuthority />} />
    </Routes>
  )
}
export default AppRoutes