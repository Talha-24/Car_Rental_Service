

const Login = () => {
  return (
    <div className="bg-[#ffffff] w-[410px] flex flex-col items-center justify-center h-[100vh] section">
        <form className="flex flex-col items-center justify-center">
            <div className="flex flex-col gap-3" >
                <h2 className="text-4xl font-bold text-[#19345F]">Sign In</h2>
                <div id="email">
                    <p className="text-[#19345F]">Email</p>
                    <input  type="text" placeholder="Johndoe@gmail.com" className="bg-[#F4F2F3] placeholder:text-gray-400 text-sm text-gray-500 rounded-sm px-2 py-[5px] w-[290px] signupinput" />
                </div>
                <div id="password">
                    <p className="text-[#19345F]">Password</p>
                    <input type="password" placeholder="********" className="bg-[#F4F2F3] placeholder:text-gray-400 font-semibold placeholder:text-sm text-gray-500 rounded-sm px-2 py-[5px] w-[290px] signupinput" />
                </div>
                <div id="forgotpassword" className="my-[10px] text-right text-[#FF5C00]">
                    <p className="underline font-semibold">Forgot Password</p>
                </div>

            </div>
            <div>
                <button className="bg-[#FF5C00] text-sm w-[290px] py-[5px] font-semibold rounded-sm signupbtn">Sign in</button>
                <div className="text-center">
                    <p className="text-sm text-[#B4B3D1] my-[10px]">Dont have an account? <a href="" className="font-semibold text-[#FF5C00]"> Sign Up</a></p>
                </div>
            </div>
          

        </form>
    </div>
  )
}

export default Login