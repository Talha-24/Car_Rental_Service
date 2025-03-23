import axios, { Axios } from "axios";
import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import serverRequestHandler from "../../Utils/http";
import style from "../../SideBarIcon/Styling";
import { FaArrowLeft } from "react-icons/fa";
import { EndPoint, obj } from "../../Utils/RoutesPaths";
import {Toast} from "../../Utils/Toasthot";
import load from "./images/ZKZx.gif";
import { useForm } from "react-hook-form";
const Registeration = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [isLoader, setisLoader] = useState(false);

    async function onSubmit(data) {
        data.role = 'user';
        saveData(data);
    }

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showconfirmpassword, setshowconfirmpassword] = useState(false);
    const [confirmerror, setconfirmerror] = useState('');




    function saveData(data) {
        if (data?.password !== data.confirmpassword) {
            setconfirmerror("Password and Confirm Password must be same");
            return;
        }

        setconfirmerror("");
        delete data.confirmpassword;
        DataHandler(data);
    }



    async function DataHandler(data) {
        setisLoader(true);
        try {
            await serverRequestHandler(EndPoint.registeration, `post`, data).then((response) => {
                localStorage.setItem("Name", data.firstName);
                localStorage.setItem("Email", data.email);
                Toast.success("OTP Verification Code has been sent to your email", 4000, 'colored', 'top-right');
                navigate(obj.userverification);
            }).finally((error) => {
                setisLoader(false);
            }).catch((err) => {
            Toast.info(err.message ?? err ?? "OTP Send Error",2000,"dark");
            })
        } catch (error) {
            Toast.error(error.message ?? error ?? "OTP Send Error");
        }
    }


    return (
        <div className="w-[100%] bg-[#FFFFFF] h-[100vh] flex flex-col items-center px-[5vmin] justify-center registeration">
            {style().width >= 790 ? <FaArrowLeft onClick={() => {
                navigate(-1);
            }} className='text-[22px] relative left-[-50%] top-[3%] text-[#FC4500] cursor-pointer' /> : ''}
            <form id='registerationform' onSubmit={handleSubmit(onSubmit)} className="flex flex-col  items-center max-eight:h-[100%]  gap-[20px]  eight:overflow-auto eight:mt-[20px] w-[100%] max-eight:absolute max-eight:top-[-13%] max-eight:w-[92%]">
                {style().width >= 790 ? '' : <div className='h-[80px] w-[80px] rounded-full border-[1px] border-[#FC4500] object-cover mt-[150px]'>
                    <img className="w-[100%] h-[100%] cover" src="https://car-rantal-mauve.vercel.app/assets/logo/Group%2025.png" alt="" />
                </div>}
                <h6 className="text-[30px] text-[#2D2D2D] font-bold text-start w-[100%] createaccounttext ">Sign Up</h6>
                <div id='inputs'>
                    <div id="name" className="w-[100%] flex flex-col gap-[]">
                        <div id="firstname" className="w-[100%]">
                            <p className="text-[#19345F] text-[18px]">First Name</p>
                            <span className={`text-gray-500 rounded bg-[#F4F2F2] h-[45px]  signupinput w-[100%] flex  justify-between ${errors.firstName?.type === 'required' || errors.firstName?.type === 'pattern' ? 'border-[1px] border-[red]' : 'border-none'}`}>
                                <input
                                    {...register("firstName", { required: true, pattern: /[A-Za-z]/ })}


                                    type="text" placeholder="john" className={`outline-none text-[18px]  bg-[#F4F2F2] placeholder:text-gray-400  max-eight:text-[18px]  text-gray-500 rounded px-[5%] h-[100%]  w-[90%] signupinput`} />
                                <img className="m-[0.6rem]" src="src\assets\Components\Sign In\images\contact.svg" alt="" />
                            </span>
                            {(errors?.firstName?.type === 'required' && <p role="alert" className='w-[80%] text-[12px] text-[#FC4500] font-semibold'>* Mandatory, field is required</p>) || errors.firstName?.type === 'pattern' && <p className="text-[#FC4500] font-semibold text-[12px] w-[80%]" role='alert'>* First name must have Alphabets</p>}
                        </div>
                        <div id="lastname" className="w-[100%]">
                            <div className="flex items-end w-[100%]">
                                <p className="text-[#19345F] text-[18px] w-[20%]">Last Name</p>
                            </div>

                            <span className={`placeholder:text-gray-400 text-[18px] bg-[#F4F2F2] text-gray-500 rounded h-[45px] w-[100%] signupinput flex ${errors.lastName?.type === 'required' || errors.lastName?.type === 'pattern' ? 'border-[1px] border-[red]' : 'border-none'}`}>
                                <input
                                    {...register("lastName", { required: true, pattern: /[A-Za-z]/ })}



                                    type="text" placeholder="doe" className="outline-none bg-[#F4F2F2] placeholder:text-gray-400 text-[18px] text-gray-500 rounded px-[5%] h-[100%] w-[100%] signupinput" />
                                {style().width >= 790 ? <>
                                    <img className="m-[1.6vmin]" src="src\assets\Components\Sign In\images\contact.svg" alt="" />
                                </> : ''}
                            </span>
                            {(errors?.lastName?.type === 'required' && <p className="text-[#FC4500] text-[12px] w-[80%] font-semibold">* Mandatory field is required</p>) || (errors?.lastName?.type === 'pattern' && <p className="text-[12px] font-semibold text-[#FC4500]">* Last Name must includes Alphabets </p>)}
                        </div>
                    </div>

                    <div id="email" className="w-[100%]">
                        <p className="text-[#19345F] text-[18px] w-[100%]">Email</p>
                        <span className={`bg-[#F4F2F2] placeholder:text-gray-400 text-[18px] text-gray-500 rounded h-[45px] w-[100%] signupinput flex  ${errors.email?.type === 'required' || errors.email?.type === 'pattern' ? 'border-[1px] border-[red]' : ''}`}>
                            <input

                                {...register("email", { required: { value: true, message: "* Mandatory, field is required" }, pattern: /[@]/ })}




                                type="text" placeholder="johndoe@gmail.com" className={`outline-none bg-[#F4F2F2] placeholder:text-gray-400 text-[18px] text-gray-500 rounded px-[5%] h-[100%] w-[100%] signupinput`} />
                            {style().width >= 790 ? <>
                                <img className="m-[2vmin]" src="src\assets\Components\SignUp\Asset\email.svg" alt="" />
                            </> : ''}
                        </span>
                        {/* <span className="m-[5px] w-[100%]"> */}
                        {(errors.email?.type === 'required' && <p className="w-[100%] text-[#FC4500] font-semibold text-[12px]">* Mandatory, field is required</p>) || errors.email?.type === 'pattern' && <p className="text-[#FC4500] font-semibold text-[12px]">Email must includes @ symbol</p>}
                        {/* </span> */}
                    </div>
                    {/*  */}





                    <div id="email" className="w-[100%]">
                        <p className="text-[#19345F] text-[18px] w-[100%]">Phone Number</p>
                        <span className={`bg-[#F4F2F2] placeholder:text-gray-400 text-[18px] text-gray-500 rounded h-[45px] w-[100%] signupinput flex  ${errors.phoneNumber ? 'border-[1px] border-[red]' : ''}`}>
                            <input

                                {...register("phoneNumber", {
                                    required: { value: true, message: "*Mandatory, field is required" },
                                    validate: {
                                        length: (value) => /^[*\d]{11}$/.test(value) || "Phone number must be 11 digits",
                                    }
                                })}




                                type="text" placeholder="03000000000" className={`outline-none bg-[#F4F2F2] placeholder:text-gray-400 text-[18px] text-gray-500 rounded px-[5%] h-[100%] w-[100%] signupinput`} />


                            {style().width >= 790 ? <>
                                <img className="m-[2vmin]" src="src\assets\Components\SignUp\Asset\email.svg" alt="" />
                            </> : ''}
                        </span>
                        {errors.phoneNumber && <p className="text-[#FC4500] text-[12px] font-semibold">{errors.phoneNumber.message}</p>}

                    </div>




                    {/*  */}
                    <div id="password" className="w-[100%] flex flex-col gap-[10px]">
                        <div id="setpassword" className="w-[100%] ">
                            <p className="text-[#19345F] text-[18px] w-[100%] my-[0.3vmin]">Password </p>
                            <span className={`bg-[#F4F2F2] placeholder:text-gray-400 text-[18px] text-gray-500 rounded h-[45px] w-[100%] signupinput flex ${errors.password?.type === 'required' || errors.password?.type === 'pattern' ? 'border-[1px] border-[red]' : ''}`}>
                                <input
                                    {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()]{8,}$/ })}
                                    type={showPassword ? 'text' : 'password'} placeholder="*********" className="outline-none bg-[#F4F2F2] placeholder:text-gray-400 text-[18px] text-gray-500 rounded px-[5%] h-[100%] w-[100%] signupinput" />
                                <img onClick={() => { setShowPassword(!showPassword); }} className="m-[2vmin] w-[27px] h-[27px] cursor-pointer" src={showPassword ? 'https://car-rantal-mauve.vercel.app/assets/logo/eye-slash.2.svg' : 'https://car-rantal-mauve.vercel.app/assets/logo/eye.3.svg'} alt="" />
                            </span>
                            {/* <span className="m-[5px] w-[100%]"> */}
                            {(errors.password?.type === 'required' && <p className="text-[12px] font-semibold text-[#FC4500]">* Mandatory field is required</p>) || errors.password?.type === 'pattern' && <p className="text-[12px] text-[#FC4500] font-semibold">* Password must includes UpperCase,LowerCase, Symbol and Numeric digit</p>}
                            {/* </span> */}
                        </div>
                        <div id="confirmpassword" className="w-[100%]">
                            <p className="text-[#19345F] text-[18px]  confirmpassword w-[100%]">Confirm Password</p>
                            <span className={`bg-[#F4F2F2] placeholder:text-gray-400 text-[18px] text-gray-500 rounded h-[45px] w-[100%] signupinput flex ${errors.confirmpassword?.type === 'required' || errors.confirmpassword?.type === 'pattern' ? 'border-[1px] border-[red]' : ''}`}>

                                <input
                                    {...register("confirmpassword", { required: true, pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()])(?=.*\d)[A-Za-z\d!@#$%^&*()]{8,}$/ })}



                                    type={showconfirmpassword ? 'text' : 'password'} placeholder="**********" className="outline-none bg-[#F4F2F2] placeholder:text-gray-400 text-[18px] text-gray-500 rounded px-[5%] h-[100%] w-[100%] signupinput" />
                                <img onClick={(e) => { setshowconfirmpassword(!showconfirmpassword); }} className="m-[2vmin] w-[27px] h-[27px] cursor-pointer" src={showconfirmpassword ? 'https://car-rantal-mauve.vercel.app/assets/logo/eye-slash.2.svg' : 'https://car-rantal-mauve.vercel.app/assets/logo/eye.3.svg'} alt="" />
                            </span>
                            {/* <div className='w-[100%] m-[5px]'> */}
                            {(errors.confirmpassword?.type === 'required' && <p className="text-[#FC4500] text-[12px] font-semibold"> * Field is required for Additional Security</p>) || errors.confirmpassword?.type === 'pattern' && <p className="text-[12px] font-semibold text-[#FC4500]">* Password must includes UpperCase,LowerCase, Symbol and Numeric digit</p>}
                            {/* </div> */}
                        </div>
                        <p className='text-[red] text-[12px] font-semibold'>{confirmerror}</p>
                    </div>
                </div>
                <div id="buttons" className="w-[100%]">
                    <button className={`flex items-center justify-center w-[100%]  ${isLoader ? 'cursor-not-allowed bg-[#FF5000]/mid active:scale-none' : 'cursor-pointer bg-[#FC4500]'}`} disabled={isLoader ? true : false} >

                        <span className="flex items-center justify-center">
                            <input type="submit" className={`bg-transparent placeholder:text-gray-400 text-[15px] text-white text-center rounded px-[4%] h-[35px] w-[100%] font-semibold signupinput ml-[5px] ${isLoader ? "cursor-not-allowed bg-[#FF5000]/low" : "cursor-pointer bg-transparent"}`} value='Sign Up' disabled={isLoader ? true : false} />
                            <img src={load} alt="" className={`h-[19px]  ${isLoader ? "inline bg-[#FC5000]/low" : "hidden"}`} />
                        </span>
                    </button>
                    <div className="flex items-center justify-center gap-[1vmin] my-[5px]">
                        <p className="text-[16px] text-[#B4B3D1] my-[2vmin]">Already have an  account? </p><p href="" onClick={() => { navigate(obj.login) }} className="text-[#FF5C00] font-bold cursor-pointer"> Sign In</p>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default Registeration