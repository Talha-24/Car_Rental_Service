
//Login
//Create Account
//Verification Code Responsivness Done...
//Resest Password... Responsiveness Done

import { useEffect, useState } from "react"
import SelectionComponent from "./assets/Components/User Selection/SelectionComponent";
//

import { ToastContainer } from "react-toastify";
import SignUp from "./assets/Components/SignUp/SignUp"
import HomeCarRent from "./assets/Dashboard/Dashboard 3/HomeCarRent";
import Dashboard from "./assets/Dashboard/Header/Dashboard";
import Dashboard2 from "./assets/Dashboard/DashboardTwo/Dashboard2";
import BookingPending from "./assets/Dashboard/BookingProcessing/BookingPending";
import Signin from "./assets/Components/Sign In/Signin";
import ResetComponent from "./assets/Components/Reset Password/Email Authentication/ResetComponent";
import BookingStatus from "./assets/Dashboard/BookingProcessing/BookingStatus/BookingStatus";
import { Route, Routes } from "react-router-dom";
import Verification from "./assets/Components/Mail Verification/Re/Images/Verification";
import RetakingAuthority from "./assets/Components/Reset Password/New Authentication/RetakingAuthority";
import UserSelection from "./assets/Components/User Selection/UserSelection";
const App = () => {

  const [role, setRole] = useState("");
  const [data, setData] = useState("");
  const [user, setUser] = useState(null);
  const [selectUser, setselectUser] = useState(null);
  const [useremail,setuseremail]=useState('');

  const LoginHandler = (email, password) => {
    if (email == "shahzaibboota65@gmail.com" && password == "123456789") {
      setUser("User");
    }
  }
  useEffect(() => {

    console.log("Data by user : ", data);
  }, [data])

  return (
    <>
      <ToastContainer />
      <div className="flex items-center justify-center bg-white">

        {/* {user == "User" ? <SelectionComponent setselectUser={setselectUser} setUser={setUser}/> : (user == null ? <SignUp setUser={setUser} LoginHandler={LoginHandler}/> : (user == "Registeration"? <Signin setUser={setUser}/>: (user == 'Forgotpassword'?  <ResetComponent/> : '') ) ) }
      {selectUser == "Showroom"? <HomeCarRent/>: (selectUser == "rentacar" ? <Dashboard setselectUser={setselectUser}/> : ( selectUser == "selectacar"? <Dashboard2 setUser={setUser} setselectUser={setselectUser}/> :( selectUser == "Booking"? <BookingPending setselectUser={setselectUser} />: (selectUser == "BookingStatus"? <BookingStatus setselectUser={setselectUser}/> :  ''))))} */}
        {data == "User not found." ? <Signin /> : ''}
        <Routes>

          <Route path="/" element={<SignUp setData={setData} LoginHandler={LoginHandler} />} />
          <Route path="/register" element={<Signin role={role} />} />
          <Route path="/role" element={<SelectionComponent setRole={setRole} />} />
          <Route path="/forgotpassword" element={<ResetComponent setuserEmail={setuseremail} useremail={useremail} />} />
          <Route path="/otpverification" element={<Verification useremail={useremail}  role={role} />} />
          <Route path="/showroomOwner" element={<HomeCarRent  />} />
          <Route path="/rentacar" element={<Dashboard />} />
          <Route path="/resetcomponent" element={<ResetComponent />} />
          <Route path="/retakingauthority" element={<RetakingAuthority />} />
        </Routes>

      </div>
    </>
  )
}

export default App