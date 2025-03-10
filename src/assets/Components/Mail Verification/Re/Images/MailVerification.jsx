import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Toast from "../../../../Toaster/Toaster";
import serverRequestHandler from "../../../../Utils/http";

const MailVerification = (propse) => {
  const navigation = useNavigate();
  const [digitone, setdigitone] = useState('');
  const [digittwo, setdigittwo] = useState('');
  const [digitthree, setdigitthree] = useState('');
  const [digitfour, setdigitfour] = useState('');
  const [digitfive, setdigitfive] = useState('');
  const [digitsix, setdigitsix] = useState('');
  const [finalOTP, setfinalOTP] = useState('');
  async function sendOTP() {
    console.log("Send OTP");
    const otp = `${digitone}${digittwo}${digitthree}${digitfour}${digitfive}${digitsix}`;
    const endPoint= localStorage.getItem("isForgot") == 'true'?   `/auth/verifyForReset`:`/auth/verify`;
    const body={
      "token": otp,
    }
    const reqType='post';
    try {
      const response = await serverRequestHandler(endPoint,reqType,body);
      localStorage.setItem("OTP Token",response.token);
       let role=localStorage.getItem("Role");
      if(role == 'showroomowner' || role == 'user' || role == 'superAdmin'){
        navigation("/");
        toast.info("Account Created Successfully!",{
          autoClose: 5000,
          theme: 'dark',
        });
      }else{
        localStorage.getItem("OTP Token") && !localStorage.getItem("isForgot")? navigation('/login'): localStorage.getItem("isForgot") == 'true' || localStorage.getItem("isForgot") == true ? navigation('/retakingauthority') : '';;
        toast.success("OTP is Verified!");
      }
      
    }
    catch (error) {

      Toast(error);
      if (error == 'Invalid verification token.' || error == " Invalid verification token.") {
        toast.error("You have entered Incorrect OTP, Check your OTP and try again");
      }

    }

  }


  const otprequest = () => {
    resentOTP(propse.useremail);

  }





  async function resentOTP(email) {
    const endPoint=`/auth/resendOTP`;
    const body={
      "email": localStorage.getItem("email"),
      "subject": "Resent OTP",
    };
    const method='post';


      

    try {
      const resentOTP = await serverRequestHandler(endPoint,method,body);
      toast.success("Check your email for OTP Verification");
    } catch (error) {
      console.log("OTP Failure : ", error.response.data.message??'Error');
      toast.error(error.message);
    }



  }

  function pushotp() {
    sendOTP();
  }


  return (
    <div className="w-[100%] bg-[#FFFFFF] flex flex-col items-center justify-center h-[100vh] text-center px-[70px] mail">
      <form onSubmit={(e) => [e.preventDefault()]}>
        <div className="w-[100%] flex flex-col gap-[8px]">
          <h4 className="text-[5vmin] text-black font-bold">Check Your Email</h4>
          <h5 className="text-[3.5vmin] text-[#0c0a27f4] font-medium">Verification Code</h5>
          <p className="text-center w-[100%] py-[8px] text-black text-[2vmin]">OTP Code has successfully send to your email, check your inbox, there you 
            find an email from Car Rental System, if you could not find it, then search it into spam folder
          </p>
        </div>
        <div className="w-[100%] flex flex-row gap-[2vmin] py-[4vmin] ">
          <input placeholder="-" onChange={(e) => { setdigitone(e.target.value) }} value={digitone} type="text" inputMode="numeric" name="" id="" pattern="[0-9]" maxlength="1" className="placeholder:font-semibold placeholder:text-center w-[12vmin] py-[2.5vmin] text-black text-center  text-[1.5vw]  border-[1px] border-gray-500  rounded-lg" />
          <input placeholder="-" onChange={(e) => { setdigittwo(e.target.value) }} value={digittwo} type="text" name="" id="" inputmode='numeric' pattern='\d' maxlength="1" className="placeholder:font-semibold placeholder:text-center w-[12vmin] py-[2.5vmin] text-black   text-[1.5vw] text-center border-[1px] border-gray-500  rounded-lg" />
          <input placeholder="-" onChange={(e) => { setdigitthree(e.target.value) }} value={digitthree} type="text" name="" id="" inputmode="numeric" pattern="\d" maxlength="1" className="placeholder:font-semibold placeholder:text-center w-[12vmin] py-[2.5vmin] text-black   text-[1.5vw]  border-[1px] border-gray-500 text-center  rounded-lg" />
          <input placeholder="-" onChange={(e) => { setdigitfour(e.target.value) }} value={digitfour} type="text" name="" id="" inputmode='numeric' pattern="\d" className="placeholder:font-semibold placeholder:text-center w-[12vmin] py-[2.5vmin] text-black text-center text-[1.5vw]   border-[1px] border-gray-500  rounded-lg" />
          <input placeholder="-" onChange={(e) => { setdigitfive(e.target.value) }} value={digitfive} type="text" name="" id="" inputmode='numeric' pattern='\d' className="placeholder:font-semibold placeholder:text-center w-[12vmin] py-[2.5vmin] text-black text-center text-[1.5vw]   border-[1px] border-gray-500  rounded-lg" />
          <input placeholder="-" onChange={(e) => { setdigitsix(e.target.value) }} value={digitsix} type="text" inputmode="numeric" pattern='\d' maxlength='1' className="placeholder:font-semibold placeholder:text-center w-[12vmin] py-[2.5vmin] rounded-lg text-black border-[1px] text-[1.5vw] text-center  border-gray-500" />
        </div>
        <div className="w-[100%]">
          <div id="verify" className="pb-[20px]">
            <p className="w-[100%] text-black text-[3vmin]">Did&apos;t receive code?</p>
            <b className="text-[#FF5C1E] text-[3vmin] "><a onClick={() => {
              // otprequest();
              resentOTP()}} className="cursor-pointer">Resent Code</a></b>
          </div>


          <button onClick={() => { pushotp() }} className="w-[100%] rounded bg-[#FF5C1E] py-[1.5vmin] text-[3vmin] font-semibold text-white">Verify</button>



        </div>
      </form>

    </div>
  )
}

export default MailVerification