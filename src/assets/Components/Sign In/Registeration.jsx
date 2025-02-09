





















































import axios, { Axios } from "axios";
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const Registeration = (propse) => {
    const uppercase = useRef(null);
    const lowercase = useRef(null);
    const number = useRef(null);
    const result = useRef(null);
    const pass = useRef(null);
    const cpass = useRef(null);

    /*Every user who will Create an Account his Data will be within an Array of Object:
For every single new user : new object within an array will be created;  */
    /*Steps:
    1.Creating useStates for Two-Way Binding
    2.Take Data in a function through useState Hooks
    3.Creating a Global Object(JSON.Object) To Store that Particular data;
    */
    const [name, setname] = useState('');
    const [surname, setsurname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');
    const [userData, setuserData] = useState({});


    function saveData() {
        setuserData('');
        setuserData({ Name: name, Surname: surname, Email: email, Password: password, Secure_Password: confirmpassword, });
        console.log(userData);
        // setname("");
        // setsurname("");
        // setemail("");
        // setpassword("");
        // setconfirmpassword("");
    }


    async function DataHandler() {
        console.log("Data is Uploading....");
        try {
            let response = await axios.post('http://localhost:5000/api/auth/register', {

                "firstName": name,
                "lastName": surname,
                "email": email,
                "password": password,
                "role": "user",
                "phoneNumber": "03020886640",
            })
            let data = response.data;
            const notify = () => {
                toast.success(data.message, {
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

            notify(data.message);
            console.log("Request is Successful...", data);


        } catch (error) {

            const notify = () => {
                toast.error(error.response.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }
            notify();
           console.log();
            console.log("Registeration Response : ", error.response ? error : error.message);

        }





    }


    return (
        <div className=" w-[100%] bg-[#FFFFFF] min-h-[100vh] flex flex-col items-center justify-center px-[70px] registeration">
            <form onSubmit={(e) => { e.preventDefault() }} className="flex flex-col gap-[15px] items-center justify-center">
                <h6 className="text-[5vmin] text-[#2D2D2D] font-bold text-start w-[100%] createaccounttext ">Create Account</h6>
                <div id='inputs'>
                    <div id="name" className="w-[100%] flex flex-row gap-[10px]">
                        <div id="firstname" className="w-[50%] ">
                            <p className="text-[#19345F] text-[3vmin] w-[100%]">First Name</p>
                            <input onChange={(e) => {
                                setname(e.target.value);
                            }} value={name} type="text" placeholder="Mohammad" className="bg-[#F4F2F3]  placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded-sm px-[5%] py-[2.5%] w-[100%] signupinput" />

                        </div>
                        <div id="lastname" className="w-[50%]">
                            <p className="text-[#19345F] text-[3vmin] w-[100%]">Last Name</p>
                            <input onChange={(e) => { setsurname(e.target.value) }} value={surname} type="text" placeholder="Talha" className="bg-[#F4F2F3]  placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded-sm px-[5%] py-[2.5%] w-[100%] signupinput" />

                        </div>

                    </div>
                    <div id="email" className="w-[100%] my-[3vmin]">
                        <p className="text-[#19345F] text-[3vmin] w-[100%]">Email</p>
                        <input onChange={(e) => { setemail(e.target.value) }} value={email} type="text" placeholder="talhabhatti82542@gmail.com" className="bg-[#F4F2F3]  placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded-sm px-[5%] py-[2.5%] w-[100%]" />

                    </div>
                    <div id="password" className="w-[100%] flex flex-row gap-[10px] my-[1vmin]">
                        <div id="setpassword" className="w-[50%] ">
                            <p className="text-[#19345F] text-[3vmin] w-[100%] my-[0.3vmin]">Password </p>
                            <input onClick={(e) => { console.log(e) }} className="absolute top-[]" type="radio" />
                            <input onClick={(e) => { console.log(e.target.type) }} ref={pass} onChange={(e) => { setpassword(e.target.value) }} value={password} type="password" placeholder="****************" className="bg-[#F4F2F3]  placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded-sm px-[5%] py-[2.5%] w-[100%]" />


                        </div>
                        <div id="confirmpassword" className="w-[50%]">
                            <p className="text-[#19345F] text-[3vmin] w-[100%] confirmpassword my-[0.3vmin]">Confirm Password</p>
                            <input ref={cpass} onChange={(e) => { setconfirmpassword(e.target.value) }} value={confirmpassword} type="password" placeholder="****************" className="bg-[#F4F2F3]  placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded-sm px-[5%] py-[2.5%] w-[100%]" />

                        </div>

                    </div>
                </div>
                <div id="passwordstrength" className=" w-[100%] flex flex-col  place-items-start my-[1vmin]">
                    <div className="flex flex-row items-center">
                        <input className="mr-[1vmin] text-blue  w-[1.6vmin]" type="radio" name="" id="" />
                        <span ref={uppercase} className="text-[#111111] text-[2vmin] w-[100%]">Contains at least one UpperCase</span> </div>
                    <div className="flex flex-row items-center">
                        <input className="mr-[1vmin] text-blue  w-[1.6vmin]" type="radio" name="" id="" />
                        <span ref={lowercase} className="text-[#111111] text-[2vmin] w-[100%] my-[0.3vmin]">Contains at least one LowerCase</span> </div>
                    <div className="flex flex-row items-center">
                        <input className="mr-[1vmin] text-blue  w-[1.6vmin]" type="radio" name="" id="" />
                        <span
                            ref={number} className="text-[#111111] text-[2vmin] w-[100%]">Contains at least on Number</span> </div>
                    <div className="flex flex-row items-center">
                        <input className="mr-[1vmin] text-blue  w-[1.6vmin]" type="radio" name="" id="" />
                        <span
                            ref={result} className="text-[#111111] text-[2vmin] w-[100%]">Passwords are matching</span> </div>
                </div>
                <div id="buttons" className="w-[100%]">
                    <button onClick={() => {
                        saveData();
                        DataHandler();
                    }} className="bg-[#FF5C00]  placeholder:text-gray-400 text-[3vmin] text-white rounded-sm px-[4%] py-[2%] w-[100%] font-semibold signupinput"><Link to='/role'>Sign Up</Link></button>


                    <p className="text-[2.7vmin] text-[#B4B3D1] my-[2vmin] text-right">Already a member? <p href="" onClick={() => { propse.setUser(null) }} className="text-[#FF5C00] font-semibold cursor-pointer"> Sign In</p></p>
                </div>
            </form>
        </div>

    )
}

export default Registeration