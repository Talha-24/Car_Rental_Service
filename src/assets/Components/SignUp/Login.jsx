import axios from "axios";
import { useState } from "react"

import { toast, ToastContainer } from "react-toastify";
const Login = (propse) => {
    console.log(propse);
//Planning
/*
Hooks States

*/const handleLogin = async () => {
    const token=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWQ3MTk2NDVjMWI4ODFkOWI5Mzk5OGYiLCJ0b2tlblZlcnNpb24iOiI1NzMzNjEzNzc0NjYyNDciLCJyb2xlIjoic2hvd3Jvb21Pd25lciIsImlhdCI6MTczOTA3MjM3OH0.9op-sj5tpi9Yf09TGGSeUsJGpBoeiFP2rZUyCXV8cPw`;
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                "email": email,
                "password": loginpassword,
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            function notification(response) {
                toast.success(response, {
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
            notification(response.data.message);
            console.log('Login Response:', response.data.message);
            localStorage.setItem("Token : ",response.data.data.token);
        } catch (error) {
            const notify = (error) => {
                toast.error(error, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",

                });
            }
            notify(error.response.data.message);
            console.log("Error : ", error.response.data.message)
            console.error('Login Error:', error.response ? error.response.data : error.message);
        }
    };




    const [email, setEmail] = useState('');
    const [loginpassword, setloginpassword] = useState('');

    const userLogin = () => {
        console.log(email);
        console.log(loginpassword);
        propse.LoginHandler(email, loginpassword);
    }
    return (
        <div className="bg-[#ffffff] w-[100%] flex flex-col items-center justify-center h-[100vh] section">

            <form onSubmit={(e) => { e.preventDefault() }} className="flex flex-col items-center justify-center">
                <div className="flex flex-col gap-[2vmin]" >
                    <h2 className="text-[5vmin] font-bold text-[#19345F]">Sign In</h2>
                    <div id="email">
                        <p className="text-[#19345F] text-[3vmin] w-[100%]">Email</p>
                        <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="text" placeholder="Johndoe@gmail.com" className="bg-[#F4F2F3]  placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded-sm px-[5%] py-[2.5%] w-[100%] signupinput" />
                    </div>
                    <div id="password">
                        <p className="text-[#19345F] text-[3vmin]">Password</p>
                        <input onChange={(e) => { setloginpassword(e.target.value) }} value={loginpassword} type="password" placeholder="********" className="bg-[#F4F2F3]  placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded-sm px-[5%] py-[2.5%] w-[100%] signupinput" />
                    </div>
                    <div id="forgotpassword" className="my-[1.2vmin] text-right text-[#FF5C00]">
                        <p onClick={() => { propse.setUser('Forgotpassword') }} className="underline font-semibold text-[2.8vmin]"><p className="cursor-pointer">Forgot Password</p></p>

                    </div>

                </div>
                <div className="w-[100%]">
                    <button id='btn' onClick={() => {
                        userLogin();
                        handleLogin();
                    }}
                        className="bg-[#FF5C00]  placeholder:text-gray-400 text-[3vmin] text-white rounded-sm px-[5%] cursor-pointer py-[2.5%] w-[100%] signupinput">Sign in</button>
                    <div className="text-center my-[1.5vmin]">
                        <p className="text-[2.4vmin] text-[#B4B3D1] my-[10px]">Dont have an account? <b href='' onClick={() => { propse.setUser("Registeration") }} className="font-semibold text-[#FF5C00] cursor-pointer"> Sign Up</b></p>
                    </div>
                </div>


            </form>
        </div>
    )
}

export default Login