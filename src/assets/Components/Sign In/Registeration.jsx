





















































import axios, { Axios } from "axios";
import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import serverRequestHandler from "../../Utils/http";

const Registeration = (propse) => {
    console.log("Role : ", propse.role);
    const uppercase = useRef(null);
    const lowercase = useRef(null);
    const number = useRef(null);
    const result = useRef(null);
    const navigate = useNavigate();
    const [name, setname] = useState('');
    const [surname, setsurname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');
    const [userData, setuserData] = useState({});
    function saveData() {
        DataHandler();
        setuserData({ Name: name, Surname: surname, Email: email, Password: password, Secure_Password: confirmpassword, });
    }
    useEffect(() => {


        if (/[A-Z]/.test(password)) {
            uppercase.current.style.color = "#FF5C00";
            uppercase.current.style.fontWeight = '500';
            return;
        }
        if (/[@#$%^&*()_+<>?'|"~`]/.test(password)) {
            lowercase.current.style.color = '#FF5C00';
            lowercase.current.style.fontWeight = '500';
            return;
        }
        if (/[0-9]/.test(password)) {
            number.current.style.color = '#FF5C00';
            number.current.style.fontWeight = '500';
            return;
        }
        if (password == confirmpassword) {
            result.current.style.color = '#FF5C00';
            result.current.style.fontWeight = '500';
            return;
        }

    }, [name, surname, email, password, confirmpassword])


    let role=localStorage.getItem("role");
    async function DataHandler() {

        let body= {

            "firstName": name,
            "lastName": surname,
            "email": email,
            "password": password,
            "role": role,
            "phoneNumber": "03020886640",
        };
        
        let endPoint=`/auth/register`;
        let reqType=`post`;
        try {
            let response = await serverRequestHandler(endPoint,reqType,body);
            localStorage.setItem("Name",name);
            localStorage.setItem("Email",email);
            let data = response;
            const notify = (message) => {
                toast.success(message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }            
            navigate('/otpverification')
            notify("OTP Verification Code has been sent to your email");
        } catch (error) { 

            const notify = (error) => {
                toast.error(error.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
            notify(error);}}
    let turn = true;

    return (
        <div className="w-[100%] bg-[#FFFFFF] h-[100vh] flex flex-col items-center px-[5vmin] justify-center registeration">
            <form onSubmit={(e) => { e.preventDefault() }} className="flex flex-col gap-[3vmin] items-center justify-center">
                <h6 className="text-[5vmin] text-[#2D2D2D] font-bold text-start w-[100%] createaccounttext ">Create Account</h6>
                <div id='inputs'>
                    <div id="name" className="w-[100%] flex flex-row gap-[10px]">
                        <div id="firstname" className="w-[50%] ">
                            <p className="text-[#19345F] text-[3vmin] w-[100%]">First Name</p>
                            <span className="bg-[#F4F2F2]  placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded h-[7vmin]   signupinput w-[100%] flex  justify-between">
                                <input onChange={(e) => { setname(e.target.value) }} value={name} type="text" placeholder="john" className="outline-none border-none  bg-[#F4F2F2] placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded px-[5%] py-[2.5%] w-[90%] signupinput" />
                                <img className="m-[1.6vmin]" src="src\assets\Components\Sign In\images\contact.svg" alt="" />
                            </span>
                        </div>
                        <div id="lastname" className="w-[50%]">
                            <p className="text-[#19345F] text-[3vmin] w-[100%]">Last Name</p>
                            <span className="bg-[#F4F2F2] placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded h-[7vmin] w-[100%] signupinput flex">
                                <input onChange={(e) => { setsurname(e.target.value) }} value={surname} type="text" placeholder="doe" className="outline-none bg-[#F4F2F2] placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded px-[5%] py-[2.5%] w-[100%] signupinput" />
                                <img className="m-[1.6vmin]" src="src\assets\Components\Sign In\images\contact.svg" alt="" />
                            </span>
                        </div>
                    </div>
                    <div id="email" className="w-[100%] my-[3vmin]">
                        <p className="text-[#19345F] text-[3vmin] w-[100%]">Email</p>
                        <span className="bg-[#F4F2F2] placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded h-[7vmin] w-[100%] signupinput flex">
                            <input onChange={(e) => { setemail(e.target.value) }} value={email} type="text" placeholder="johndoe@gmail.com" className="outline-none bg-[#F4F2F2] placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded px-[5%] py-[2.5%] w-[100%] signupinput" />
                            <img className="m-[2vmin]" src="src\assets\Components\SignUp\Asset\email.svg" alt="" />
                        </span>
                    </div>
                    <div id="password" className="w-[100%] flex flex-row gap-[10px] my-[1vmin]">
                        <div id="setpassword" className="w-[50%] ">
                            <p className="text-[#19345F] text-[3vmin] w-[100%] my-[0.3vmin]">Password </p>
                            <span className="bg-[#F4F2F2] placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded h-[7vmin] w-[100%] signupinput flex">
                                <input id='password1' onChange={(e) => { setpassword(e.target.value) }} value={password} type="password" placeholder="*********" className="outline-none bg-[#F4F2F2] placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded px-[5%] py-[2.5%] w-[100%] signupinput" />
                                <img onClick={(e) => {
                                    let showpassword = document.querySelector("#password1");
                                    console.log(showpassword);
                                    if (turn == true) {
                                        showpassword.type = 'text';
                                        turn = false;
                                        e.target.src=`https://car-rantal-mauve.vercel.app/assets/logo/eye-slash.2.svg`;
                                       
                                    } else {
                                        showpassword.type = 'password';
                                        turn = true;
                                        e.target.src=`https://car-rantal-mauve.vercel.app/assets/logo/eye.3.svg`;
                                    }
                                }} className="m-[2vmin] w-[20px] h-[20px] cursor-pointer" src="src\assets\Components\SignUp\Asset\eye.svg" alt="" />
                            </span>


                        </div>
                        <div id="confirmpassword" className="w-[50%]">
                            <p className="text-[#19345F] text-[3vmin] w-[100%] confirmpassword my-[0.3vmin]">Confirm Password</p>
                            <span className="bg-[#F4F2F2] placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded h-[7vmin] w-[100%] signupinput flex">

                                <input id='confirmpassword1' onChange={(e) => { setconfirmpassword(e.target.value) }} value={confirmpassword} type="password" placeholder="**********" className="outline-none bg-[#F4F2F2] placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded px-[5%] py-[2.5%] w-[100%] signupinput" />
                                <img onClick={(e) => {
                                    let showpassword = document.querySelector("#confirmpassword1");
                                    console.log(showpassword);
                                    if (turn == true) {
                                        showpassword.type = 'text';
                                        turn = false;
                                        e.target.src=`https://car-rantal-mauve.vercel.app/assets/logo/eye-slash.2.svg`;

                                    } else {
                                        showpassword.type = 'password';
                                        turn = true;
                                        e.target.src=`https://car-rantal-mauve.vercel.app/assets/logo/eye.3.svg`;
                                    }
                                }} className="m-[2vmin] w-[20px] h-[20px] cursor-pointer" src="src\assets\Components\SignUp\Asset\eye.svg" alt="" />
                            </span>

                        </div>

                    </div>
                </div>
                <div id="passwordstrength" className=" w-[100%] flex flex-col  place-items-start my-[1vmin]">
                    <div className="flex flex-row items-center">
                        <span ref={uppercase} className="text-[2.2vmin] w-[100%] ">Contains at least one UpperCase Letter</span> </div>
                    <div className="flex flex-row items-center">
                        <span ref={lowercase} className="text-[#111111] text-[2.2vmin] w-[100%] my-[0.3vmin]">Contains at least one special character</span> </div>
                    <div className="flex flex-row items-center">
                        <span
                            ref={number} className="text-[#111111] text-[2.2vmin] w-[100%]">Contains at least on Number</span> </div>
                    <div className="flex flex-row items-center">
                        <span
                            ref={result} className="text-[#111111] text-[2.2vmin] w-[100%]">Passwords are matching</span> </div>
                </div>
                <div id="buttons" className="w-[100%]">
                    <button onClick={() => {
                        saveData();

                    }} className="bg-[#FF5C00]  placeholder:text-gray-400 text-[3vmin] text-white rounded px-[4%] h-[7vmin] w-[100%] font-semibold signupinput">Sign Up</button>
                    <div className="flex items-center justify-center gap-[1vmin]">

                        <p className="text-[2.7vmin] text-[#B4B3D1] my-[2vmin]">Already a member? </p><p href="" onClick={() => { navigate("/") }} className="text-[#FF5C00] font-semibold cursor-pointer"> Sign In</p>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default Registeration