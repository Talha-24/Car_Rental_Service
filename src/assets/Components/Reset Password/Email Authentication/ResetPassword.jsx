
const ResetPassword = () => {
  return (
    
    <div className="flex flex-col bg-[#ffffff] items-center justify-center h-[100vh] w-[100%] resetpassword">
        <form className="height-[100vh] flex flex-col items-center justify-center">

        <div className="text-center w-[100%]">
            <h6 className="text-[5vmin] text-black font-bold ">Enter mail for reset password</h6>
            <p className="text-[3vmin] text-black text-center py-[4vmin] px-[5vmin]">
                Lppellat Lorem ipsum dolor
                 sit, amet consectetur adipisicing 
                 elit. Odio necessitatibus 
                 c porro. reprehenderit.</p>
        </div>


        <div className=" w-[100%] px-[20px] flex flex-col gap-[2vmin] py-[20px]">
            <div className="flex flex-col ">
                <p className="text-[3vmin] my-[1vmin] w-[100%] place-items-start">Email</p>
                <input type="email" required placeholder="johndoe@gmail.com" className="bg-[#F4F2F2] placeholder:text-gray-500; text-black w-[100%] text-[3vmin] py-[1.5vmin] px-[1.8vmin] rounded-sm" />
            </div>
            <button className="bg-[#FF5C00]  placeholder:text-gray-400 text-[3vmin] text-white rounded-sm px-[5%] py-[2%] w-[100%] signupinput font-semibold">Continue</button>
        </div>


        </form>
    </div>
    
  )
}

export default ResetPassword