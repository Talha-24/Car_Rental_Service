import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import serverRequestHandler from "../../Utils/http.js"
import { Toast } from "../../Utils/RoutesPaths.js";
import style from "../../SideBarIcon/Styling.js";
import { EndPoint, obj } from "../../Utils/RoutesPaths.js";
import { useForm } from "react-hook-form";
import load from "../Sign In/images/ZKZx.gif";
const Login = () => {
    const navigation = useNavigate();

    const { register, formState: { errors }, handleSubmit } = useForm();


    const [isLoading, setisloading] = useState(false);

    async function onSubmit(data) {
        handleLogin(data);
    }

    const handleLogin = async (data) => {
        setisloading(true);
        try {
            const response = await serverRequestHandler(EndPoint.login, 'post', data).then((response) => {
                alert("Succeeded");
                Toast.success("Login Succeeded", 2000, 'colored', 'top-right');
                console.log("Response", response);
                localStorage.setItem("isVerified", true);
                localStorage.setItem("Token", response.token)
                localStorage.setItem("Role", response.role)
                localStorage.setItem("Showroomowner", response.role == 'superAdmin' ? 'superAdmin' : (response.role == 'user' ? false : true));
                getUserProfile();
                { localStorage.getItem("Showroomowner") == 'false' || localStorage.getItem("Showroomowner") == 'true' ? navigation(obj.userhome) : navigation(obj.superadminhome) };
            }).finally(() => {
                setisloading(false);
            })

        } catch (error) {
            Toast.error(error.message ?? error);
            localStorage.setItem("Message", error.message);
            if (error.error.isVerified == false) { localStorage.setItem("isVerified", false); }
            if (localStorage.getItem("Message") == 'User not found.') { navigation(obj.register); }
        }
    };
    async function getUserProfile() {
        try {
            let userdata = await serverRequestHandler(EndPoint.getProfile, `get`);
            Toast.info("Profile retrieved successfully");
            localStorage.setItem("firstname", userdata.firstName,);
            localStorage.setItem("lastname", userdata.lastName);
            localStorage.setItem("email", userdata.email);
            localStorage.setItem("dp", userdata.profilePic);
        } catch (error) {
            Toast.error(error.message ?? error);
        }
    }

    const [isVerified, setisVerified] = useState('');
    const [showPassword, setshowpassword] = useState(false);

    const submitlogin = () => {
        handleLogin().then(() => {
            setisVerified(localStorage.getItem("Message"));
        }).catch((err) => {
            Toast.error(err ?? '');
        })
    }





    return (
        <div className="bg-[#ffffff] w-[100%] flex flex-col items-center justify-center h-[100vh] section">
            <form id='loginform' onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center  max-h-[100vh] w-[60%]">
                {style().width >= 790 ? '' : <div className='h-[80px] w-[80px] rounded-full border-[1px] border-[#FC4500] object-cover'>
                    <img className="w-[100%] h-[100%] cover" src="https://car-rantal-mauve.vercel.app/assets/logo/Group%2025.png" alt="" />
                </div>}
                <div className="flex flex-col gap-[20px] w-[100%]" >
                    <div id="email" className="w-[100%]">
                        <h2 id='sigintext' className="text-[30px] my-[20px] font-semibold  text-[#19345F]">Sign In</h2>
                        <div className="flex flex-row w-[100%] items-end">
                            <p className="text-[#000000] text-[16px] w-[20%]">Email  </p>
                        </div>
                        <span className={`bg-[#F4F2F2]  text-gray-500 rounded h-[100%] w-[100%] signupinput flex  ${errors.email?.type === 'required' || errors.email?.type === 'pattern' ? 'border-[1px] border-[red]' : 'border-[red]'}`}>
                            <input

                                {...register("email", { required: true, pattern: /^[a-zA-Z0-9.+-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} id='emailinput' type="email" placeholder="Johndoe@gmail.com" className="outline-none bg-[#F4F2F2] placeholder:text-gray-400 text-[18px] text-gray-500 rounded  h-[45px] px-[5%] w-[100%] signupinput" />
                            {style().width >= 790 ? <>
                                <img className="m-[1.6vmin]" src="src\assets\Components\SignUp\Asset\email.svg" alt="" />
                            </> : ''}
                        </span>
                        <p className="m-[5px] w-[100%] text-[12px] text-[#FC4500] font-semibold"> {errors.email?.type === 'required' && <p role="alert" className={`w-[100%]  text-[12px] font-semibold text-[#FC4500]`}>Email must include A-Z,@,0-9,a-z </p>} {errors.email?.type === 'pattern' ? 'Invalid Email format,use format demo@example.com' : ''} </p>


                    </div>
                    <div id="password" className="w-[100%]">
                        <div className='flex flex-row w-[100%] items-end'>
                            <p className="text-[#000000] text-[16px]">Password</p>
                        </div>
                        <span className="bg-[#F4F2F2]  text-gray-500 rounded h-[45px] w-[100%] signupinput flex justify-between">
                            <input 
                                {...register("password", { required: true })}
                                type={showPassword ? 'text' : 'password'} placeholder="**********" className="outline-none bg-[#F4F2F2] placeholder:text-gray-400 text-[18px] text-gray-500 rounded px-[5%] h-[45px] w-[100%] signupinput" />
                            <img onClick={(e) => {
                                setshowpassword(!showPassword)
                            }} className="m-[1.6vmin] w-[27px] h-[27px] cursor-pointer" src={showPassword ? 'https://car-rantal-mauve.vercel.app/assets/logo/eye-slash.2.svg' : 'https://car-rantal-mauve.vercel.app/assets/logo/eye.3.svg'} alt="" />
                        </span>
                    </div>
                    <div id="forgotpassword" className="my-[1.2vmin] mb-[3vmin] text-right text-[#FF5C00]">
                        <p onClick={() => {
                            navigation(obj.forgotpass);
                        }} id='forgotpassword' className="underline font-semibold text-[16px]"><p className="cursor-pointer text-[#FF4500] font-semibold">Forgot Password</p></p>
                    </div>
                </div>
                <div className="w-[100%]">
                    {isVerified == 'You are not verified.' ? <>
                        <button id='btn' onClick={() => { navigation(obj.otpverification); }} className="bg-[#FF4500]  placeholder:text-gray-400 text-[1rem] text-white rounded py-[8px] cursor-pointer  w-[100%] signupinput" >Verify Yourself</button>
                    </> : <>
                        <button className={`flex items-center justify-center w-[100%]  ${isLoading ? 'cursor-not-allowed bg-[#FF5000]/mid active:scale-none' : 'cursor-pointer bg-[#FC4500]'}`} disabled={isLoading ? true : false} >
                            <span className="flex items-center justify-center">
                                <input type="submit" className={`bg-transparent placeholder:text-gray-400 text-[18px] text-white text-center rounded px-[4%] h-[30px] w-[100%] font-semibold signupinput ml-[5px] ${isLoading ? "cursor-not-allowed bg-[#FF5000]/low" : "cursor-pointer bg-transparent"}`} value='Sign In' disabled={isLoading ? true : false} />
                                <img src={load} alt="" className={`h-[19px]  ${isLoading ? "inline bg-[#FC5000]/low" : "hidden"}`} />
                            </span>
                        </button>
                    </>}
                    <div onClick={() => {
                        navigation(obj.role);
                    }} className="text-center my-[1.5vmin]">
                        <p className="text-[16px]  my-[10px] text-[#312E81]">Don't have an account? <b href='' className="font-semibold text-[#FF5C00] cursor-pointer">Sign Up</b></p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login