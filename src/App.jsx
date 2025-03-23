import { useEffect, useState } from "react"
import { ToastContainer } from "react-toastify";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import AppRoutes from "./assets/Routes/AppRoutes.jsx"
import RetakingAuthority from "./assets/Components/Reset Password/New Authentication/RetakingAuthority.jsx";
import Registeration from "./assets/Components/Sign In/Registeration.jsx";
import Login from "./assets/Components/SignUp/Login.jsx";
import { Toaster } from "react-hot-toast";
const App = () => {

  const [role, setRole] = useState("");
  const [data, setData] = useState("");
  const [useremail, setuseremail] = useState('');
  const routeData = useLocation();

  
  
  return (
    <>


      <ToastContainer />
      <Toaster   position="top-right"
  reverseOrder={false}
 />
      <div id='app' className='bg-[#FFFFFF] w-[100%] flex flex-col'>
        <div id='' className='flex flex-row w-[100%] bg-[#F6F7F9]'>
          
          <AppRoutes />

        </div>
      </div>
    </>
  )
}

export default App