import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const MailVerification = (propse) => {
  console.log("Email in OTP Verification : ", propse.useremail);

  const navigation = useNavigate();
  const [digitone, setdigitone] = useState('');
  const [digittwo, setdigittwo] = useState('');
  const [digitthree, setdigitthree] = useState('');
  const [digitfour, setdigitfour] = useState('');
  const [digitfive, setdigitfive] = useState('');
  const [digitsix, setdigitsix] = useState('');
  const [finalOTP, setfinalOTP] = useState('');
  async function sendOTP() {
    const otp = `${digitone}${digittwo}${digitthree}${digitfour}${digitfive}${digitsix}`;
    const Live_URL = `http://localhost:5000/api`;


    try {
      const response = await axios.post(`${Live_URL}/auth/verifyForReset`, {

        "token": otp,

      });
      console.log("Verification Response : ",);

      localStorage.setItem("OTP Verification Token : ", response.data.data.token);
       let role=localStorage.getItem("Role");
      if(role == 'showroomOwner' || role == 'user'){
        navigation("/");
        toast.info("Account Created Successfully!",{

          autoClose: 5000,
          theme: 'dark',

        });
      }else{
        navigation('/retakingauthority');
        toast.success("OTP is Verified!");

      }
      
    }
    catch (error) {
      console.log("Error,", error.response.data.message);
      if (error.response.data.message == 'Invalid verification token.' || error.response.data.message == " Invalid verification token.") {
        toast.error("You have entered Incorrect OTP, Check your OTP and try again");


      }

    }

  }

  const otprequest = () => {
    resentOTP(propse.useremail);

  }





  async function resentOTP(email) {


    try {
      const resentOTP = await axios.post(`http://localhost:5000/api/auth/resendOTP`, {
        "email": email,
        "subject": "Resent OTP",
      });
      toast.success("Check your email for OTP Verification");
      console.log("OTP Success : ", resentOTP);

    } catch (error) {
      console.log("OTP Failure : ", error.response.data.message);
      toast.error(error.response.data.message);

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
          <p className="text-center w-[100%] py-[8px] text-black text-[2vmin]">Lorem ipsum tadsf alasdf lasdf asodf la sdf dolor sit amet, elit.</p>

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
              resentOTP(propse.useremail);
            }} className="cursor-pointer">Resent Code</a></b>
          </div>
          <button onClick={() => { pushotp() }} className="w-[100%] rounded bg-[#FF5C1E] py-[1.5vmin] text-[3vmin] font-semibold text-white">Verify</button>

        </div>
      </form>

    </div>
  )
}

export default MailVerification