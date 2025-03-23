import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Toast from "../../../Toaster/Toaster";
import serverRequestHandler from "../../../Utils/http";
import style from "../../../SideBarIcon/Styling";
import { EndPoint, obj, } from "../../../Utils/RoutesPaths";
import { useForm } from "react-hook-form";
import load from '../../Sign In/images/ZKZx.gif'

const NewPassword = () => {
  const navigation = useNavigate();


  const { register, formState: { errors}, handleSubmit } = useForm();

  const [isLoader,setisLoader]=useState(false);
   


  async function onSubmit(data) {

   

    if (data.password != data.confirmpassword) {
      setconfirmerror("Password and Confirm Password are not matching...");
      return;
    }
    delete data.confirmpassword;


    setconfirmerror('');
    submitpassword(data);
  }


  async function submitpassword(data) {
    setisLoader(true);
    const token = localStorage.getItem("OTP Token");
    const body = {
      "token": token,
      "newPassword": data.password,
    }
    try {
      await serverRequestHandler(EndPoint.resetpassword, `post`, body).then((response)=>{
        navigation(obj.loginpage);
        Toast.success(response.message ?? 'Login with new Password');
      }).catch((error)=>{
        alert("Catch")
        Toast.error(error.message);
      }).finally(()=>{
        setisLoader(false);
      })

    } catch (error) {
      Toast.error(error ?? error.message);
    }

  }

  const [userpassword, setuserpassword] = useState({});
  const [showpass, setshowpass] = useState(false);
  const [showconfirmpass, setshowconfirmpass] = useState(false);
  const [confirmerror, setconfirmerror] = useState('');

  return (
    <div className=' w-[100%] flex items-center justify-center h-[100vh] bg-white text-black newpassword'>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-[10px]  w-[90%] max-eight:h-[100%] max-eight:gap-[15px] ">
        {style().width >= 790 ? '' : <div className='h-[80px] w-[80px] rounded-full border-[1px] border-[#FC4500] object-cover mt-[80px]'>
          <img onClick={() => {
          }} className="w-[100%] h-[100%] cover" src="https://car-rantal-mauve.vercel.app/assets/logo/Group%2025.png" alt="" />
        </div>}
        <h6 className="text-[6vmin] font-bold text-[#333333]">Change Password</h6>
        <div className="flex w-[80%] flex-col items-center gap-[1.2vmin] text-black newpasswordContainer">
          <div className="w-[100%]">
            <p className="text-[18px] my-[8px]">Password</p>
            <span className={`bg-[#F4F2F2] placeholder:text-gray-400  text-gray-500 rounded h-[45px] w-[100%] signupinput flex border-[1px] ${errors.password?.type === 'required' || errors.password?.type === 'pattern' ? 'border-[1px] border-[red]' : 'border-none'}`}>
              <input
                {...register("password", {
                  required: true,

                  validate: {
                    uppercase: (value) =>
                      /[A-Z]/.test(value) || "* Uppercase letter is missing (A-Z)",
                    lowercase: (value) =>
                      /[a-z]/.test(value) || "* Lowercase letter is missing (a-z)",
                    symbol: (value) =>
                      /[@*$($#%&)]/.test(value) || "* Special letter is missing (@,_-+^!#)",
                    digit: (value) =>
                      /[*\d]/.test(value) || "* Numeric letter is missing",},

                  minLength: { value: 8, message: "Password length must be greater than 8" },

                }

                  
                )}




                type={showpass ? "text" : "password"} placeholder="*************" className="outline-none bg-[#F4F2F2] placeholder:text-gray-400 text-[16px] h-[100%] text-gray-500 rounded px-[5%] w-[100%] signupinput" />
              <img onClick={() => { setshowpass(!showpass); }} className="m-[2vmin] cursor-pointer h-[27px] w-[27px]" src={showpass ? "https://car-rantal-mauve.vercel.app/assets/logo/eye-slash.2.svg" : "https://car-rantal-mauve.vercel.app/assets/logo/eye.3.svg"} alt="" />
            </span>
            <span className="my-[5px]">
              {(errors.password?.type === 'required' && <p className="text-[#FC4500] font-semibold text-[12px]">New Password is required</p>) || errors.password?.type === 'pattern' && <p className="text-[12px] text-[#FC4500] font-semibold">Password must includes Uppercase , Lowercase , Special case and numeric character</p>}
            </span>
            <div style={{ color: "red" }}>

              {errors.password?.type === "uppercase" && <p className="text-[12px] font-semibold text-[#FC4500]">{errors.password.message}</p>}
              {errors.password?.type === "lowercase" && <p className="text-[12px] font-semibold text-[#FC4500]">{errors.password.message}</p>}
              {errors.password?.type === "symbol" && <p className="text-[12px] font-semibold text-[#FC4500]">{errors.password.message}</p>}
              {errors.password?.type === "digit" && <p className="text-[12px] font-semibold text-[#FC4500]">{errors.password.message}</p>}
              {errors.password?.type === "required" && <p className="text-[12px] font-semibold text-[#FC4500]">{errors.password.message}</p>}
              {errors.password?.type === "minLength" && <p className="text-[12px] font-semibold text-[#FC4500]">{errors.password.message}</p>}


            </div>
          </div>
          <div className="w-[100%]">
            <p className="text-[18px] my-[8px]">Confirm Password</p>
            <span className={`bg-[#F4F2F2] placeholder:text-gray-400  text-gray-500 rounded h-[45px] w-[100%] signupinput flex ${errors.confirmpassword?.type === 'required' || errors.confirmpassword?.type === 'pattern' ? 'border-[1px] border-[red]' : 'border-none'}`}>
              <input
                {...register("confirmpassword", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*&$^#$!><])[a-zA-Z\d@*&$^#$!><]{8,}/ })}




                type={showconfirmpass ? 'text' : 'password'} placeholder="*************" className="outline-none bg-[#F4F2F2] placeholder:text-gray-400  text-gray-500 rounded px-[5%] h-[100%] w-[100%] text-[16px] signupinput" />

              <img onClick={() => { setshowconfirmpass(!showconfirmpass) }} className="m-[2vmin] cursor-pointer h-[27px] w-[27px]" src={showconfirmpass ? 'https://car-rantal-mauve.vercel.app/assets/logo/eye-slash.2.svg' : 'https://car-rantal-mauve.vercel.app/assets/logo/eye.3.svg'} alt="" />
            </span>
            {(errors.confirmpassword?.type === 'required' && <p className="text-[12px] font-semibold text-[#FC4500]">* Required for additional security</p>) || errors.confirmpassword?.type === 'pattern' && <p className="text-[#FC4500] font-semibold text-[12px]"> Password must includes Uppercase , Lowercase , Special case and numeric characters </p>}
          </div>
        </div>
        <p className="text-[12px] text-[#FC4500] font-semibold text-left w-[80%]">{confirmerror ?? ''}</p>
        <div className="flex flex-col">
          {/* <span className={errors.length ? 'text-[#FC4500]' : ''} >Password must be 8 characters in length</span>
          <span className={errors.uppercase ? 'text-[#FC4500]' : ''}>Password must contains Uppercase letter</span>
          <span className={errors.lowercase ? 'text-[#FC4500]' : ''}>Password must contains Lowercase letter</span>
          <span className={errors.symbol ? 'text-[#FC4500]' : ''}>Password must contains a special symbol</span>
          <span className={errors.matching ? 'text-[#FC4500]' : ''}>Both passwords are matching</span> */}
        </div>

        <button className={`flex items-center justify-center w-[80%] text-sm  ${isLoader ? 'cursor-not-allowed bg-[#FF5000]/mid active:scale-none' : 'cursor-pointer bg-[#FC4500]'}`} disabled={isLoader ? true : false} >
          <span className="flex items-center justify-center">
            <input type="submit" className={`bg-transparent placeholder:text-gray-400 text-[18px] text-white text-center rounded px-[4%] h-[45px] w-[100%] font-semibold signupinput ml-[5px] ${isLoader ? "cursor-not-allowed bg-[#FF5000]/low" : "cursor-pointer bg-transparent"}`} value='Sign Up' disabled={isLoader ? true : false} />
            <img src={load} alt="" className={`h-[19px]  ${isLoader ? "inline bg-[#FC5000]/low" : "hidden"}`} />
          </span>
        </button>

      </form>
    </div>
  )
}

export default NewPassword