import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import serverRequestHandler from "../../../Utils/http";
import Toast from "../../../Toaster/Toaster";

const ResetPassword = (propse) => {
  const navigation = useNavigate();
  const isVerified = localStorage.getItem("Message");
  const endPoint = `/auth/forgot`;
  const body = {
    email: propse.useremail,
  }


  const method = 'post';

  async function sendEmail() {
    try {
      const response = await serverRequestHandler(endPoint, method, body);
      Toast('OTP Verification Code is Sent to your email successfully!');
      localStorage.setItem("isForgot",true);
      localStorage.setItem("Email",propse.useremail);
      navigation("/otpverification");
    } catch (error) {
      Toast(error.error?.message??error.message?? "Error");
    }
  }


  const restpassword = () => {
    sendEmail();
  }



  return (

    <div className="flex flex-col bg-[#ffffff] items-center justify-center h-[100vh] w-[100%] resetpassword">
      <form onSubmit={(e) => { e.preventDefault() }} className="h-[100vh] w-[80%] flex flex-col items-center justify-center">
        <div className="text-center w-[100%]">
          <h6 className="text-[6vmin] text-[#333333] font-bold">Enter mail for reset password</h6>
          <p className="text-[2.2vmin] text-[#333333] py-[0.1vmin] px-[5vmin]">
           It is always recommended to notedown your password
           in your notebook or anything else. Actually, loos of password
           from memory  is the symbol that you are highly realing on the technology.
           Cut down the technology from your life and start relaying on your mind.
            </p>
        </div>
        <div className=" w-[100%] px-[20px] flex flex-col gap-[4vmin] py-[20px]">
          <div className="flex flex-col ">
            <p className="text-[3vmin] my-[1vmin] w-[100%] place-items-start">Email</p>
            <span className="bg-[#F4F2F2] placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded h-[8vmin] w-[100%] signupinput flex">
              <input onChange={(e) => { propse.setuserEmail(e.target.value) }} value={propse.useremail} type="text" placeholder="johndoe@gmail.com" className="outline-none bg-[#F4F2F2] placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded px-[5%] py-[2.5%] w-[100%] signupinput" />
              <img className="m-[2.5vmin]" src="src\assets\Components\SignUp\Asset\email.svg" alt="" />
            </span>
          </div>
          <button onClick={() => {
            restpassword();
          }} className="bg-[#FF5C00]  placeholder:text-gray-400 text-[3vmin] text-white rounded px-[5%] h-[7vmin] w-[98%] signupinput font-semibold self-center">Continue</button>
        </div>


      </form>
    </div>

  )
}

export default ResetPassword