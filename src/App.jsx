
//Login
//Create Account
//Verification Code Responsivness Done...
//Resest Password... Responsiveness Done

import { useState } from "react"
import SelectionComponent from "./assets/Components/User Selection/SelectionComponent";
import BookingPending from "./assets/Dashboard/BookingProcessing/BookingPending";
import Dashboard from "./assets/Dashboard/Header/Dashboard";
import Dashboard2 from "./assets/Dashboard/DashboardTwo/Dashboard2";
//
const App = () => {
const [user,setUser]=useState(null);


  const LoginHandler=(email,password)=>{
    if(email == "admin@me.com" && password == "123"){
      setUser("Admin");
    }
    else{
      setUser("User");
    }
    
   }

//Sign Up...
//Create Accout(Signin)...
//Reset Component...
//Retaking Authority...



  return (
    
    <div className="flex items-center justify-center bg-white">
     {/* <BookingPending/> */}
     <Dashboard2/>
   
   

     
      {/* {!user ? <SignUp LoginHandler={LoginHandler}/> : ''}; */}

      {/* {user == "Admin" ? <Dashboard/> : (user == "User" ?  <Dashboard2/> : <SignUp LoginHandler={LoginHandler}/>)} */}
     
  
    </div>
  )
}

export default App