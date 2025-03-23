import axios from "axios";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {Toast} from "../../../../Utils/Toasthot";
import serverRequestHandler from "../../../../Utils/http";
import style from "../../../../SideBarIcon/Styling";
import { EndPoint } from "../../../../Utils/RoutesPaths";
import load from "../../../Sign In/images/ZKZx.gif"

import OTPInput from "react-otp-input";


const MailVerification = () => {

  const location = useLocation();
  const navigation = useNavigate();
  const [finalOTP, setfinalOTP] = useState('');
  const [isLoader, setisLoader] = useState(false);




  async function sendOTP() {
    setisLoader(true);

    const endPoint = localStorage.getItem("isForgot") == 'true' && location.pathname != '/user-verification/otpverification' ? EndPoint.verifyreset : EndPoint.verify;

    const body = {
      "token": finalOTP,
    }

    try {
      await serverRequestHandler(endPoint, `post`, body).then((response) => {
        setisLoader(false);
        localStorage.setItem("OTP Token", response.token);
        localStorage.setItem("Token", response.token);
        let role = localStorage.getItem("Role");
        if ((role == 'showroomowner' || role == 'user' || role == 'superAdmin') && location.pathname != '/login/forgotpassword/otpverification') {
          navigation('/showroomowner/homecars');
          console.log("RRRR", response);
          Toast.success("Account Created Successfully!");
        } else {
          { localStorage.getItem("OTP Token") && !localStorage.getItem("isForgot") || !localStorage.getItem('isVerified') ? navigation(`/login`) : localStorage.getItem("isForgot") == 'true' || localStorage.getItem("isForgot") == true && location.pathname == '/login/forgotpassword/otpverification' ? navigation('/retakingauthority') : '' };
          Toast.success("OTP is Verified!");
        }
      }).catch((err)=>{
        Toast.error(err.message,4000,"dark");
      }).finally(()=>{
        setisLoader(false);
      })


    }
    catch (error) {
      Toast.error(error.message ?? error ?? "OTP is expired");
      if (error == 'Invalid verification token.' || error == " Invalid verification token.") {
        Toast.error("You have entered Incorrect OTP, Check your OTP and try again");
      }

    }

  }





  async function resentOTP() {


    try {
      const resentOTP = await serverRequestHandler(EndPoint.resendOTP, `post`, {
        "email": localStorage.getItem("ForgotEmail"),
        "subject": "Resent OTP",
      });
      Toast.success(`OTP is send to ${localStorage.getItem("Email")} successfully, check your email`);
    } catch (error) {
      Toast.error(error.message ?? error ?? error.response.data.message ?? "OTP Resent Failed");
    }
  }

  function pushotp() {
    sendOTP();
  }

  return (
    <div className="w-[100%] bg-[#FFFFFF] flex flex-col items-center justify-center h-[100vh] text-center max-xxxxss:px-0 px-[70px] mail max-eight:w-[100%]">
      <form className="w-[100%] max-eight:h-[100%] justify-items-center" onSubmit={(e) => [e.preventDefault()]}>
        {style().width >= 790 ? '' : <div className='h-[80px] w-[80px] rounded-full bg-[#FC4500] object-cover mt-[80px] text-white text-[45px] flex items-center justify-center'>
          C
        </div>}
        <div className="w-[100%] flex flex-col gap-[8px]">
          <h4 className="text-[5vmin] text-black font-bold max-eight: w-[100%]">Check Your Email</h4>
          <h5 className="text-[3.5vmin] text-[#0c0a27f4] font-medium">Verification Code</h5>
          {style().width >= 790 ? <>
            <p className="text-center w-[100%] py-[8px] text-black text-[16px]">OTP Code has successfully send to your email, check your inbox, there you
              find an email from Car Rental System, if you could not find it, then search it into spam folder
            </p>
          </> : ''}
        </div>
        <div className="w-[100%] flex flex-row justify-center gap-[2vmin] py-[4vmin] ">
          <OTPInput shouldAutoFocus inputType="tel"
            value={finalOTP}
            onChange={setfinalOTP}
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} id='otpinput' className="border-[1px] border-[#FC4500] " />}
          />
        </div>
        <div className="w-[100%]">
          <div id="verify" className="pb-[20px]">
            <p className="w-[100%] text-black text-[18px]">Did&apos;t receive code?</p>
            <b className="text-[#FF5C1E] text-[16px] "><a onClick={() => {
              resentOTP();
            }} className="cursor-pointer">Resent Code</a></b>
          </div>
          <div>

            <button onClick={() => {
              pushotp();
            }} className={`flex items-center justify-center w-[100%]  ${isLoader ? 'cursor-not-allowed bg-[#FF5000]/mid active:scale-none' : 'cursor-pointer bg-[#FC4500]'}`} disabled={isLoader ? true : false} >

              <span className="flex items-center justify-center">
                <input type="submit" className={`bg-transparent placeholder:text-gray-400 text-[18px] text-white text-center rounded px-[4%] h-[37px] w-[100%] font-semibold signupinput ml-[5px] ${isLoader ? "cursor-not-allowed bg-[#FF5000]/low" : "cursor-pointer bg-transparent"}`} value='Sign Up' disabled={isLoader ? true : false} />
                <img src={load} alt="" className={`h-[19px]  ${isLoader ? "inline bg-[#FC5000]/low" : "hidden"}`} />
              </span>

            </button>


          </div>
        </div>

      </form>

    </div>
  )
}

export default MailVerification
