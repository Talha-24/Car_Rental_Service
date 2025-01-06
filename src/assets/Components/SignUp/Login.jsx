

const Login = () => {
  return (
    <div className="bg-[#f22222] w-[500px] flex flex-col items-center justify-center h-[100vh]">
        <form className="flex flex-col items-center justify-center">
            <div className="flex flex-col gap-3" >
                <h2 className="text-4xl font-bold text-[#19345F]">Sign In</h2>
                <div id="email">
                    <p className="text-black">Email</p>
                    <input  type="text" placeholder="Johndoe@gmail.com" className="bg-[#F4F2F3] placeholder:text-gray-400 font-semibold text-gray-500 rounded px-2 py-2 w-[290px]" />
                </div>
                <div id="password">
                    <p className="text-black">Password</p>
                    <input type="password" placeholder="********" className="bg-[#F4F2F3] placeholder:text-gray-400 font-semibold text-gray-500 rounded px-2 py-2 w-[290px]" />
                </div>
                <div id="forgotpassword">
                    <p>Forgot Password</p>
                </div>

            </div>
            <div>
                <button className="bg-[#FF6E1C] w-[290px] py-[5px] font-semibold ">Sign in</button>
                <div>
                    <p>Dont have an account <a href="">Sign Up</a></p>
                </div>
            </div>
          

        </form>
    </div>
  )
}

export default Login