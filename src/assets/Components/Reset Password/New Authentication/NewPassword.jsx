import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const NewPassword = () => {
  const navigation = useNavigate();
  async function submitpassword() {
    const resetpasslink = `http://localhost:5000/api/auth/reset`;
    const token = localStorage.getItem("OTP Verification Token : ");
    console.log("Token : ", token);
    try {

      const response = await axios.post(resetpasslink, {
        "token": token,
        "newPassword": confirmpassword,
      })
      navigation('/showroomOwner');
      toast.success(response.data.message);
      console.log("Succeeded : ", response);
    } catch (error) {
      toast.error(error.response.data.message);
    }

  }





  const [password, setpassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState("");


  let turn = true;
  return (
    <div className=' w-[100%] flex items-center justify-center h-[100vh] bg-white text-black newpassword'>
      <form onSubmit={(e) => { e.preventDefault() }} className="flex flex-col items-center gap-[10vmin]  w-[90%] ">
        <h6 className="text-[6vmin] font-bold text-[#333333]">Change Password</h6>
        <div className="flex w-[80%] flex-row items-center gap-[1.2vmin] text-black newpasswordContainer">
          <div className="w-[100%]">
            <p className="text-[3vmin]">Password</p>
            <span className="bg-[#F4F2F2] placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded h-[7vmin] w-[100%] signupinput flex">
              <input id='forgotpassword1' onChange={(e) => { setpassword(e.target.value) }} value={password} type="password" placeholder="*************" className="outline-none bg-[#F4F2F2] placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded px-[5%] py-[2.5%] w-[100%] signupinput" />
              <img onClick={() => {
                let pass = document.querySelector("#forgotpassword1");

                if (turn == true) {
                  pass.type = 'text';
                  turn = false;
                } else {
                  pass.type = 'password';
                  turn = true;

                }
              }} className="m-[2vmin] cursor-pointer" src="src\assets\Components\SignUp\Asset\eye.svg" alt="" />
            </span>
          </div>
          <div className="w-[100%]">
            <p className="text-[3vmin]">Confirm Password</p>
            <span className="bg-[#F4F2F2] placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded h-[7vmin] w-[100%] signupinput flex">
              <input id='forgotpassword' onChange={(e) => { setconfirmpassword(e.target.value) }} value={confirmpassword} type="password" placeholder="*************" className="outline-none bg-[#F4F2F2] placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded px-[5%] py-[2.5%] w-[100%] signupinput" />
              <img onClick={() => {
                let pass = document.querySelector("#forgotpassword");

                if (turn == true) {
                  pass.type = 'text';
                  turn = false;
                } else {
                  pass.type = 'password';
                  turn = true;

                }
              }} className="m-[2vmin] cursor-pointer" src="src\assets\Components\SignUp\Asset\eye.svg" alt="" />
            </span>
          </div>
        </div>
        <button onClick={() => { submitpassword() }} className="bg-[#ff601c] text-white text-[2.9vmin] inline-block w-[80%] py-[1.6vmin] rounded  font-semibold ">Update Password</button>
      </form>
    </div>
  )
}

export default NewPassword