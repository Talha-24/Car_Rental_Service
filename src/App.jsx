
//Login
//Create Account
//Verification Code Responsivness Done...
//Resest Password... Responsiveness Done

import { useState } from "react"
import SelectionComponent from "./assets/Components/User Selection/SelectionComponent";
//
import SignUp from "./assets/Components/SignUp/SignUp"
import HomeCarRent from "./assets/Dashboard/Dashboard 3/HomeCarRent";
import Dashboard from "./assets/Dashboard/Header/Dashboard";
import Dashboard2 from "./assets/Dashboard/DashboardTwo/Dashboard2";
import BookingPending from "./assets/Dashboard/BookingProcessing/BookingPending";
import Signin from "./assets/Components/Sign In/Signin";
import ResetComponent from "./assets/Components/Reset Password/Email Authentication/ResetComponent";
import BookingStatus from "./assets/Dashboard/BookingProcessing/BookingStatus/BookingStatus";
const App = () => {
const [user,setUser]=useState(null);
const [selectUser,setselectUser]=useState(null);

  const LoginHandler=(email,password)=>{
    if(email == "user@me.com" && password == "123"){
      setUser("User");
    }else{
      alert("Invalid Credentials!");
    }
    
   }

  return (
    
    <div className="flex items-center justify-center bg-white">
    

     
      
      {user == "User" ? <SelectionComponent setselectUser={setselectUser} setUser={setUser}/> : (user == null ? <SignUp setUser={setUser} LoginHandler={LoginHandler}/> : (user == "Registeration"? <Signin setUser={setUser}/>: (user == 'Forgotpassword'?  <ResetComponent/> : '') ) ) }
      {selectUser == "Showroom"? <HomeCarRent/>: (selectUser == "rentacar" ? <Dashboard setselectUser={setselectUser}/> : ( selectUser == "selectacar"? <Dashboard2 setUser={setUser} setselectUser={setselectUser}/> :( selectUser == "Booking"? <BookingPending setselectUser={setselectUser} />: (selectUser == "BookingStatus"? <BookingStatus setselectUser={setselectUser}/> :  ''))))}
     
     
  
    </div>
  )
}

export default App