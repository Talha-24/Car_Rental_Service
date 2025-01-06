
const ResetPassword = () => {
  return (
    
    <div className="flex flex-col bg-[#ffffff] items-center justify-center h-[100vh] w-[410px] resetpassword">
        <form className="height-[100vh] flex flex-col items-center justify-center">

        <div className="text-center w-[100%]">
            <h6 className="text-2xl text-black font-bold ">Enter mail for reset password</h6>
            <p className="text-sm text-black text-center py-[20px] px-[40px]">
                Lppellat Lorem ipsum dolor
                 sit, amet consectetur adipisicing 
                 elit. Odio necessitatibus 
                 c porro. reprehenderit.</p>
        </div>


        <div className="w-[75%] flex flex-col gap-[30px] py-[20px]">
            <div className="flex flex-col ">
                <p className="text-black w-[100%] place-items-start">Email</p>
                <input type="email" required placeholder="johndoe@gmail.com" className="bg-[#F4F2F2] placeholder:text-gray-500; text-black w-[100%] py-[5px] px-[10px] rounded-sm" />
            </div>
            <button className="bg-[#FF5C1E] w-[100%] font-semibold text-sm py-[5px] rounded-sm">Continue</button>
        </div>


        </form>
    </div>
    
  )
}

export default ResetPassword