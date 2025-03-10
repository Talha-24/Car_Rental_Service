import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import serverRequestHandler from "../../Utils/http.js"
import Toast from "../../Toaster/Toaster.js";
const Login = (propse) => {
    const navigation = useNavigate();

    const handleLogin = async () => {
        // const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWQ3MTk2NDVjMWI4ODFkOWI5Mzk5OGYiLCJ0b2tlblZlcnNpb24iOiI1NzMzNjEzNzc0NjYyNDciLCJyb2xlIjoic2hvd3Jvb21Pd25lciIsImlhdCI6MTczOTA3MjM3OH0.9op-sj5tpi9Yf09TGGSeUsJGpBoeiFP2rZUyCXV8cPw`;
        const endPoint = `/auth/login`;
        const body = {
            "email": email,
            "password": loginpassword,
        }

        const reqType = `post`;

        try {
            const response = await serverRequestHandler(endPoint, reqType, body);
            function notification(response) {
                toast.warn(response, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
            }

            notification(response.message);
            propse.setData(response.message);
            localStorage.setItem("Token", response.token)
            localStorage.setItem("Role", response.role)
            localStorage.setItem("Showroomowner", response.role == 'superAdmin' ? 'superAdmin' : (response.role == 'user' ? false : true));
            getUserProfile();
            { localStorage.getItem("Showroomowner") == 'false' || localStorage.getItem("Showroomowner") == 'true' ? navigation("/showroomowner/homecars") : navigation("/showroomowner/showrooms") };


        } catch (error) {

            const notify = (error) => {
                Toast(error.message);
                localStorage.setItem("Message", error.message);
            }
            notify(error);

            if (message == "User not found.") {
                propse.setData(error.response.data.message);
                window.location.href = 'http://localhost:5173/register';

            }
        }
    };




    const [email, setEmail] = useState('');
    const [loginpassword, setloginpassword] = useState('');

    async function getUserProfile() {
        let token = localStorage.getItem("Token");
        const endPoint = `/auth/viewProfile`
        const method = `get`;
        try {
            let userdata = await serverRequestHandler(endPoint, method);
            localStorage.setItem("firstname", userdata.firstName,);
            localStorage.setItem("lastname", userdata.lastName);
            localStorage.setItem("email", userdata.email);
        } catch (error) {
        }
    }






    const [isVerified, setisVerified] = useState('');
    const submitlogin = () => {
        handleLogin().then((ans) => {
            setisVerified(localStorage.getItem("Message"));
        }).catch((err) => {
        })
    }

    useEffect(() => {
    }, [])
let turn=true;
    return (
        <div className="bg-[#ffffff] w-[100%] flex flex-col items-center justify-center h-[100vh] section">
            <form onSubmit={(e) => { e.preventDefault() }} className="flex flex-col items-center justify-center w-[60%]">
                <div className="flex flex-col gap-[2vmin] w-[100%]" >
                    <h2 className="text-[7vmin] font-semibold font-sans text-[#19345F]">Sign In</h2>
                    <div id="email" className="w-[100%]">
                        <p className="text-[#19345F] text-[3vmin] w-[100%]">Email</p>
                        <span className="bg-[#F4F2F2] placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded h-[6vmin] w-[100%] signupinput flex">
                            <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" placeholder="Johndoe@gmail.com" className="outline-none bg-[#F4F2F2] placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded  py-[2.5%] px-[5%] w-[100%] signupinput" />
                            <img className="m-[1.6vmin]" src="src\assets\Components\SignUp\Asset\email.svg" alt="" />
                        </span>
                    </div>
                    <div id="password" className="w-[100%]">
                        <p className="text-[#727272] text-[3vmin]">Password</p>
                        <span className="bg-[#F4F2F2] placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded h-[6vmin] w-[100%] signupinput flex justify-between">
                            <input id='passwordinput' onChange={(e) => { setloginpassword(e.target.value) }} value={loginpassword} type="password" placeholder="**********" className="outline-none bg-[#F4F2F2] placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded px-[5%] py-[2.5%] w-[100%] signupinput" />
                            <img onClick={(e) => {

                                let pass = document.querySelector("#passwordinput");
                                if (turn == true) {
                                    pass.type = 'text'
                                    turn = false;
                                    e.target.src = `https://car-rantal-mauve.vercel.app/assets/logo/eye-slash.2.svg`;

                                }
                                else {
                                    pass.type = "password";
                                    e.target.src = `https://car-rantal-mauve.vercel.app/assets/logo/eye.3.svg`;
                                    turn = true;
                                }

                            }} className="m-[1.6vmin] w-[20px] h-[20px] cursor-pointer" src="src\assets\Components\SignUp\Asset\eye.svg" alt="" />
                        </span>

                    </div>
                    <div id="forgotpassword" className="my-[1.2vmin] mb-[3vmin] text-right text-[#FF5C00]">
                        <p onClick={() => {
                            navigation("forgotpassword");
                        }} id='forgotpassword' className="underline font-semibold text-[2.8vmin]"><p className="cursor-pointer text-[#FF5C00] font-semibold">Forgot Password</p></p>

                    </div>

                </div>
                <div className="w-[100%]">
                    {isVerified == 'You are not verified.' ? <>
                        <button id='btn' onClick={() => { navigation('/user-verification'); }} className="bg-[#FF4500]  placeholder:text-gray-400 text-[1rem] text-white rounded py-[8px] cursor-pointer  w-[100%] signupinput" >Verify Yourself</button>
                    </> : <>
                        <button id='btn' onClick={() => { submitlogin(); }} className="bg-[#FF4500]  placeholder:text-gray-400 text-[1rem] text-white rounded py-[5px] cursor-pointer  w-[100%] signupinput" >Sign in</button>
                    </>}
                    <div className="text-center my-[1.5vmin]">
                        <Link to='/role'> <p className="text-[2.4vmin]  my-[10px] text-[#312E81]">Don't have an account? <b href='' className="font-semibold text-[#FF5C00] cursor-pointer">Sign Up</b></p></Link>
                    </div>
                </div>


            </form>
        </div>
    )
}

export default Login