
//Login
//Create Account
//Verification Code Responsivness Done...
//Resest Password... Responsiveness Done

import { useState } from "react"
import Login from "./assets/Components/SignUp/Login"
import SignUp from "./assets/Components/SignUp/SignUp"
import Dashboard from "./assets/Dashboard/Header/Dashboard";
import Dashboard2 from "./assets/Dashboard/DashboardTwo/Dashboard2";
import Signin from "./assets/Components/Sign In/Signin";
import Verification from "./assets/Components/Mail Verification/Re/Images/Verification";
import NewPassword from "./assets/Components/Reset Password/New Authentication/NewPassword";
import ResetComponent from "./assets/Components/Reset Password/Email Authentication/ResetComponent";
import RetakingAuthority from "./assets/Components/Reset Password/New Authentication/RetakingAuthority";
import SelectionComponent from "./assets/Components/User Selection/SelectionComponent";

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



  return (
    
    <div className="flex items-center justify-center bg-white">
    <Verification/>
    

     
      {/* {!user ? <SignUp LoginHandler={LoginHandler}/> : ''}; */}

      {/* {user == "Admin" ? <Dashboard/> : (user == "User" ?  <Dashboard2/> : <SignUp LoginHandler={LoginHandler}/>)}; */}
     
  
    </div>
  )
}

export default App