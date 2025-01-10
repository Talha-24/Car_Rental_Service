
//Login
//Create Account
//Verification Code Responsivness Done...
//Resest Password... Responsiveness Done

import { useState } from "react"
import Login from "./assets/Components/SignUp/Login"
import SignUp from "./assets/Components/SignUp/SignUp"
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



  return (
    
    <div className="flex items-center justify-center bg-white">
      {/* <Dashboard2/> */}
      {/* {!user ? <SignUp LoginHandler={LoginHandler}/> : ''}; */}

      {user == "Admin" ? <Dashboard/> : (user == "User" ?  <Dashboard2/> : <SignUp LoginHandler={LoginHandler}/>)};
     
  
    </div>
  )
}

export default App