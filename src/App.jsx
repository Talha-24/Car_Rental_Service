
//Login
//Create Account
//Verification Code Responsivness Done...
//Resest Password... Responsiveness Done

import { useState } from "react"
import SelectionComponent from "./assets/Components/User Selection/SelectionComponent";
//
import SignUp from "./assets/Components/SignUp/SignUp"
const App = () => {
const [user,setUser]=useState(null);


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

      {user == "User" ? <SelectionComponent/> : <SignUp LoginHandler={LoginHandler}/>}
     
  
    </div>
  )
}

export default App