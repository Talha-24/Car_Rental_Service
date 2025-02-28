import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
const Login = (propse) => {
    const navigation=useNavigate();
//Planning
/*
Hooks States
*/
const handleLogin = async () => {
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
            propse.setData(response.data.message);
            console.log('Login Response:', response);
            localStorage.setItem("Token",response.data.data.token)
            localStorage.setItem("Role",response.data.data.role)
            localStorage.setItem("Showroomowner",response.data.data.role == 'superAdmin' ? 'superAdmin' : (response.data.data.role == 'user'? false: true));
            getUserProfile();
            // navigation("/showroomowner");
            {localStorage.getItem("Showroomowner") == 'false' || localStorage.getItem("Showroomowner") == 'true' ? navigation("/showroomowner/homecars") : navigation("/showroomowner/showrooms")};

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
            if(error.response.data.message == "User not found."){
                console.log("Data is passing to state");
                propse.setData(error.response.data.message);
                console.log("Data has passed");
                window.location.href='http://localhost:5173/register';

            }
            console.log("Error : ", error.response.data.message)
            console.error('Login Error:', error.response ? error.response.data : error.message);
        }
    };




    const [email, setEmail] = useState('');
    const [loginpassword, setloginpassword] = useState('');

    function submitlogin(email,password){
        console.log(email);
        console.log(password);
        propse.LoginHandler(email,password);
        console.log("Function in Function : ",LoginHandler)
    }


    async function getUserProfile() {
        let token=localStorage.getItem("Token");
        const URL=`http://localhost:5000/api/auth/viewProfile`;

        try {

            let userdata= await axios.get(URL,{
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            console.log("Succeeded Request : ",userdata);
            console.log("Setting Username and Email in local Storage...");
            localStorage.setItem("firstname",userdata.data.data.firstName,);
            localStorage.setItem("lastname",userdata.data.data.lastName);
            localStorage.setItem("email",userdata.data.data.email);
            console.log("Successfully set email and name");
            // localStorage.setItem("Showroomowner",userdata.data.data.role == 'user' ? false : true);
            // const showroomowner=localStorage.getItem("Showroomowner");
            // console.log("Showroomowner",showroomowner);
            // if(localStorage.getItem("Showroomowner") == 'false'){
            //     showroomownerbuttonone.current.style.display='none';
            //     showroomownerbuttontwo.current.style.display='none';
            // }
            // if(localStorage.getItem("Showroomowner") == 'true'){
            //     showroomownerbuttonone.current.style.display='inline-block';
            //     showroomownerbuttontwo.current.style.display='inline-block';
            // }
            
            
        } catch (error) {
            console.log("Profile Error : ",error);
            
        }


        
    }
















    let turn=true;

    return (
        <div className="bg-[#ffffff] w-[100%] flex flex-col items-center justify-center h-[100vh] section">

            <form onSubmit={(e) => { e.preventDefault() }} className="flex flex-col items-center justify-center w-[60%]">
                <div className="flex flex-col gap-[2vmin] w-[100%]" >
                    <h2 className="text-[7vmin] font-semibold font-sans text-[#19345F]">Sign In</h2>
                    <div id="email" className="w-[100%]">
                        <p className="text-[#19345F] text-[3vmin] w-[100%]">Email</p>
                        <span className="bg-[#F4F2F2] placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded h-[6vmin] w-[100%] signupinput flex">
                        <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="text" placeholder="Johndoe@gmail.com" className="outline-none bg-[#F4F2F2] placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded  py-[2.5%] px-[5%] w-[100%] signupinput" />
                        <img className="m-[1.6vmin]" src="src\assets\Components\SignUp\Asset\email.svg" alt="" />
                        </span>
                    </div>
                    <div id="password" className="w-[100%]">
                        <p className="text-[#727272] text-[3vmin]">Password</p>
                        <span className="bg-[#F4F2F2] placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded h-[6vmin] w-[100%] signupinput flex justify-between">
                        <input id='passwordinput' onChange={(e) => { setloginpassword(e.target.value) }} value={loginpassword} type="password" placeholder="**********" className="outline-none bg-[#F4F2F2] placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded px-[5%] py-[2.5%] w-[100%] signupinput" />
                        <img onClick={()=>{

                          let pass= document.querySelector("#passwordinput");
                          if(turn== true){
                        pass.type='text'
                        turn=false;
                    }
                    else{
                        pass.type="password";
                          turn=true;
                    }

                        }}  className="m-[1.6vmin]" src="src\assets\Components\SignUp\Asset\eye.svg" alt="" />
                        </span>
                    </div>
                    <div id="forgotpassword" className="my-[1.2vmin] mb-[3vmin] text-right text-[#FF5C00]">
                        <p onClick={() => { 
                            navigation("forgotpassword");
                         }} id='forgotpassword' className="underline font-semibold text-[2.8vmin]"><p className="cursor-pointer text-[#FF5C00] font-semibold">Forgot Password</p></p>

                    </div>

                </div>
                <div className="w-[100%]">
                    <button id='btn' onClick={()=>{handleLogin();submitlogin();}}
                        className="bg-[#FF5C00]  placeholder:text-gray-400 text-[3vmin] text-white rounded h-[6vmin] cursor-pointer  w-[100%] signupinput">Sign in</button>
                    <div className="text-center my-[1.5vmin]">
                       <Link to='/role'> <p  className="text-[2.4vmin]  my-[10px] text-[#312E81]">Don't have an account? <b href='' className="font-semibold text-[#FF5C00] cursor-pointer">Sign Up</b></p></Link>
                    </div>
                </div>


            </form>
        </div>
    )
}

export default Login