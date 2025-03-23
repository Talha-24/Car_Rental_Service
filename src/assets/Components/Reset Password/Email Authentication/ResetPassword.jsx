import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import serverRequestHandler from "../../../Utils/http";
import Toast from "../../../Toaster/Toaster";
import style from "../../../SideBarIcon/Styling";
import { EndPoint, obj } from "../../../Utils/RoutesPaths";
import { useForm } from "react-hook-form";
import load from "../../Sign In//images/ZKZx.gif"

const ResetPassword = () => {


  const navigation = useNavigate();
  const { register, formState: { errors,  }, handleSubmit } = useForm();

  const [isLoader,setisLoader]=useState(false);

  async function onSubmit(data) {
    localStorage.setItem("ForgotEmail", data.email);
    restpassword();
  }

  ///Posibility of Error
  const isVerified = localStorage.getItem("Message");

  async function sendEmail() {
    setisLoader(true);
    try {
       await serverRequestHandler(EndPoint.forgotpassword, `post`, {email: localStorage.getItem("ForgotEmail"),}).then((response)=>{
        Toast.success('OTP Verification Code is Sent to your email successfully!');
        localStorage.setItem("isForgot", true);
        localStorage.setItem("Email",localStorage.getItem("ForgotEmail") );
        navigation(obj.forgottedpassword);
       }).catch((err)=>{
        {err.error.isUser == false ? navigation("/role") : '' }
        Toast.error(err.message);
        Toast.info("Create new account here....",5000);
       }).finally(()=>{
        setisLoader(false);
       })


    
    } catch (error) {
      
      Toast.error(error.error?.message ?? error.message ??error.response.data.error.message?? "Email sending failed");
    }
  }


  const restpassword = () => {
    sendEmail();
  }



  return (

    <div className="flex flex-col bg-[#ffffff] items-center justify-center  w-[100%]  resetpassword">
      <form id='resetform' onSubmit={handleSubmit(onSubmit)} className="max-md:w-[88%] w-[80%] flex flex-col items-center justify-center">
        {style().width >= 790 ? '' : <div className='h-[80px] w-[80px] rounded-full border-[1px] bg-[#FF5c00] object-cover flex flex-row items-center justify-center'>
          <p className="text-white text-[50px]">C</p>
        </div>}
        <div className="text-center w-[100%] my-[20px]">
          <h6 className="text-[26px] w-[100%] text-left text-[#333333] font-bold max-xxs:text-[22px] max-xxxs:text-[20px] max-xxxxs:text-[18px]">Enter mail for reset password</h6>
        </div>
        <div className=" w-[100%]  flex flex-col gap-[5px] py-[20px]  max-xxs:py-0">
          <div className="flex flex-col w-[100%]">
            <p className="text-[18px] my-[1vmin] w-[100%] place-items-start max-xxs:text-[18px] max-xxxs:text-[16px]  max-xxxxs:text-[14px]">Email</p>
            <span className={`bg-[#F4F2F2] placeholder:text-gray-400  text-gray-500 rounded h-[45px] w-[100%] signupinput flex ${errors.email?.type === 'required' ? 'border-[1px] border-[red]' : (errors.email?.type === 'pattern' ? 'border-[1px] border-[red]' : 'border-[none]')}`}>
              <input
                {...register("email", { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/ })}

                // onChange={(e) => { propse.setuserEmail(e.target.value) }} value={propse.useremail} 


                type="text" placeholder="johndoe@gmail.com" className="outline-none bg-[#F4F2F2] placeholder:text-gray-400 text-[16px] text-gray-500 rounded px-[5%] h-[100%] w-[100%] signupinput" />
              <img className="m-[2.5vmin]" src="src\assets\Components\SignUp\Asset\email.svg" alt="" />
            </span>
            <div className="m-[5px] w-[100%]">
              {(errors.email?.type === 'required' && <p className="text-[12px] text-[#FC4500] font-semibold" >Email is required for reset password</p>) || (errors.email?.type == 'pattern' && <p className="text-[12px] font-semibold text-[#FC4500]">Invalid email format : demo@example.com</p>)}
            </div>
          </div>
          <button className={`flex items-center justify-center w-[100%]  ${isLoader ? 'cursor-not-allowed bg-[#FF5000]/mid active:scale-none' : 'cursor-pointer bg-[#FC4500]'}`} disabled={isLoader ? true : false} >

            <span className="flex items-center justify-center">
              <input type="submit" className={`bg-transparent placeholder:text-gray-400 text-[18px] text-white text-center rounded px-[4%] h-[45px] w-[100%] font-semibold signupinput ml-[5px] ${isLoader ? "cursor-not-allowed bg-[#FF5000]/low" : "cursor-pointer bg-transparent"}`} value='Sign Up' disabled={isLoader ? true : false} />
              <img src={load} alt="" className={`h-[19px]  ${isLoader ? "inline bg-[#FC5000]/low" : "hidden"}`} />
            </span>

          </button>
        </div>


      </form>
    </div>

  )
}

export default ResetPassword