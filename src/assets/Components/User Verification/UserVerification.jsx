import { useState } from "react"
import serverRequestHandler from "../../Utils/http";
import Toast from "../../Toaster/Toaster";
import { useNavigate } from "react-router-dom";
import style from "../../SideBarIcon/Styling";
import { EndPoint, obj } from "../../Utils/RoutesPaths";

const UserVerification = () => {
    const [email, setEmail] = useState();
    const navigation = useNavigate();

    async function resendOTP() {
        try {
            let response = await serverRequestHandler(EndPoint.resendOTP, `post`, {
                "email": email,
                "subject": "Resent OTP"
            });
            navigation(obj.otpverification);
            navigation("/user-verification/otpverification");
            Toast.success(response.message??"OTP Resend Successfully,Check your Gmail box!");
        } catch (error) {
            Toast.error(error.message ?? error.data.message ?? error??"Unknown error in resending OTP,please try again later");
        }
    }
    return (
        <div className="flex flex-col bg-[#ffffff] items-center justify-center  max-h-[100vh] w-[100%] resetpassword">
            <form onSubmit={(e) => { e.preventDefault() }} className="max-h-[100vh] max-eight:w-[94%]  w-[80%] flex flex-col items-center eight:justify-center max-eight:mt-[0px] ">
                {style().width >= 790 ? '' : <div className='h-[80px] w-[80px] rounded-full border-[1px] bg-[#FF5c00] object-cover flex flex-row items-center justify-center mb-[40px]'>
                    <p className="text-white text-[50px]">C</p>
                </div>}
                <div className="text-center w-[100%]">
                    <h6 className="text-[25px] text-[#333333] font-bold max-eight:w-[94%] max-eight:text-center">Enter mail for Verification</h6>
                </div>
                <div className=" w-[100%] px-[20px] flex flex-col gap-[4vmin] py-[20px]">
                    <div className="flex flex-col">

                        <p className="text-[18px] my-[1vmin] w-[100%] place-items-start">Email</p>
                        <span className="bg-[#F4F2F2] placeholder:text-gray-400  text-gray-500 rounded max-eight:h-[45px] w-[100%] signupinput flex">
                            <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="text" placeholder="johndoe@gmail.com" className="outline-none bg-[#F4F2F2] placeholder:text-gray-400 max-eight:h-[45px]  text-gray-500 rounded px-[5%] w-[100%] text-[16px] signupinput" />
                            <img className="m-[2.5vmin]" src="src\assets\Components\SignUp\Asset\email.svg" alt="" />
                        </span>

                    </div>
                    <button onClick={() => {
                        resendOTP();
                    }} className="bg-[#FC4500]  placeholder:text-gray-400 text-[16px] text-white rounded px-[5%] max-eight:h-[45px] w-[98%] signupinput font-semibold self-center">Continue</button>
                </div>


            </form>
        </div>

    )

}
export default UserVerification