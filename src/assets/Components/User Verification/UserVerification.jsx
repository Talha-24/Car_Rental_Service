import { useState } from "react"
import serverRequestHandler from "../../Utils/http";
import Toast from "../../Toaster/Toaster";
import { useNavigate } from "react-router-dom";

const UserVerification = () => {
    const [email, setEmail] = useState();
    const navigation = useNavigate();
    async function resendOTP() {
        const body = {
            "email": email,
            "subject": "Resent OTP"
        }
        const endPoint = `/auth/resendOTP`;
        const reqType = `post`;
        try {
            let response = await serverRequestHandler(endPoint, reqType, body);
            navigation(`/otpverification`);
            Toast(response);
        } catch (error) {
            Toast(error.message??error.data.message??"Error");
        }
    }
    return (
        <div className="flex flex-col bg-[#ffffff] items-center justify-center h-[100vh] w-[100%] resetpassword">
            <form onSubmit={(e) => { e.preventDefault() }} className="h-[100vh] w-[80%] flex flex-col items-center justify-center">
                <div className="text-center w-[100%]">
                    <h6 className="text-[25px] text-[#333333] font-bold">Enter mail for Verification</h6>
                    <p className="text-[2.2vmin] text-[#333333] py-[0.1vmin] px-[5vmin]">
                        OTP Verification Page is the page
                        on which you verify yourself
                    </p>
                </div>
                <div className=" w-[100%] px-[20px] flex flex-col gap-[4vmin] py-[20px]">
                    <div className="flex flex-col ">
                        <p className="text-[3vmin] my-[1vmin] w-[100%] place-items-start">Email</p>
                        <span className="bg-[#F4F2F2] placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded h-[8vmin] w-[100%] signupinput flex">
                            <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="text" placeholder="johndoe@gmail.com" className="outline-none bg-[#F4F2F2] placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded px-[5%] py-[2.5%] w-[100%] signupinput" />
                            <img className="m-[2.5vmin]" src="src\assets\Components\SignUp\Asset\email.svg" alt="" />
                        </span>
                    </div>
                    <button onClick={() => {
                       resendOTP();
                    }} className="bg-[#FF5C00]  placeholder:text-gray-400 text-[3vmin] text-white rounded px-[5%] h-[7vmin] w-[98%] signupinput font-semibold self-center">Continue</button>
                </div>


            </form>
        </div>

    )

}
export default UserVerification