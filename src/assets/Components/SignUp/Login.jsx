import { useState } from "react"
import { Route, Routes } from "react-router-dom";
import Signin from "../Sign In/Signin";
import Dashboard from "../../Dashboard/Header/Dashboard";


const Login = ({LoginHandler}) => {
//Planning
/*
Hooks States

*/

const [username, setUsername] = useState('');
const [loginpassword, setloginpassword] = useState('');

    const userLogin=()=>{
        console.log(username);
        console.log(loginpassword);
        LoginHandler(username,loginpassword);
    }
  return (
    <div className="bg-[#ffffff] w-[100%] flex flex-col items-center justify-center h-[100vh] section">
      
        <form onSubmit={(e)=>{e.preventDefault()}} className="flex flex-col items-center justify-center">
            <div className="flex flex-col gap-[2vmin]" >
                <h2 className="text-[5vmin] font-bold text-[#19345F]">Sign In</h2>
                <div id="email">
                    <p className="text-[#19345F] text-[3vmin] w-[100%]">Email</p>
                    <input onChange={(e)=>{setUsername(e.target.value)}} value={username}  type="text" placeholder="Johndoe@gmail.com" className="bg-[#F4F2F3]  placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded-sm px-[5%] py-[2.5%] w-[100%] signupinput" />
                </div>
                <div id="password">
                    <p className="text-[#19345F] text-[3vmin]">Password</p>
                    <input  onChange={(e)=>{setloginpassword(e.target.value)}} value={loginpassword} type="password" placeholder="********"    className="bg-[#F4F2F3]  placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded-sm px-[5%] py-[2.5%] w-[100%] signupinput" />
                </div>
                <div id="forgotpassword" className="my-[1.2vmin] text-right text-[#FF5C00]">
                    <p className="underline font-semibold text-[2.8vmin]">Forgot Password</p>
                </div>

            </div>
            <div className="w-[100%]">
                <button id='btn' onClick={()=>{userLogin()
                }}
                className="bg-[#FF5C00]  placeholder:text-gray-400 text-[3vmin] text-white rounded-sm px-[5%] py-[2.5%] w-[100%] signupinput">Sign in</button>
                <div className="text-center my-[1.5vmin]">
                    <p className="text-[2.4vmin] text-[#B4B3D1] my-[10px]">Dont have an account? <a href='/registeration' className="font-semibold text-[#FF5C00]"> Sign Up</a></p>
                </div>
            </div>
          

        </form>
    </div>
  )
}

export default Login