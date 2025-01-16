
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
import CreateRentComponent from "./assets/Dashboard/CreatingRent/CreateRentComponent";
import CreateRent from "./assets/Dashboard/CreatingRent/CreateRent";
import Dashboard2 from "./assets/Dashboard/DashboardTwo/Dashboard2";
import BookingPending from "./assets/Dashboard/BookingProcessing/BookingPending";
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

//Sign Up...
//Create Accout(Signin)...
//Reset Component...
//Retaking Authority...



  return (
    
    <div className="flex items-center justify-center bg-white">
     {/* <BookingPending/> */}
  
     
     
   
     {/* <BookingPending/> */}

     
      {/* {!user ? <SignUp LoginHandler={LoginHandler}/> : ''}; */}
      {user == "User" ? <SelectionComponent setselectUser={setselectUser} setUser={setUser}/> : (user == null ? <SignUp LoginHandler={LoginHandler}/> : '' ) }
      {selectUser == "Showroom"? <HomeCarRent/>: (selectUser == "rentacar" ? <Dashboard setselectUser={setselectUser}/> : ( selectUser == "selectacar"? <Dashboard2 setselectUser={setselectUser}/> :( selectUser == "Booking"?<BookingPending setselectUser={setselectUser} />: '')))}
     {/* <Dashboard2/> */}
     
  
    </div>
  )
}

export default App