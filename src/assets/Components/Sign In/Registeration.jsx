
const Registeration = () => {
  return (
    <div className=" w-[410px] bg-[#FFFFFF] min-h-[100vh] flex flex-col items-center justify-center px-[70px] registeration">
        <form onSubmit={(e)=>{e.preventDefault()}} className="flex flex-col gap-[15px] items-center justify-center">
         <h6 className="text-3xl text-[#2D2D2D] font-semibold text-start w-[100%] createaccounttext ">Create Account</h6>
        <div id='inputs'>
            <div id="name" className="w-[100%] flex flex-row gap-[10px]">
                <div id="firstname" className="w-[50%] ">
                    <p className="text-sm mb-1 text-black">First Name</p>
                    <input type="text" placeholder="Mohammad" className=" text-sm w-[100%] py-[4px] px-[6px] placeholder:text-[#cbcbcb] rounded-sm text-black bg-[#F4F2F2]" />

                </div>
                <div id="lastname" className="w-[50%]">
                    <p className="text-sm mb-1 text-black">Last Name</p>
                    <input type="text" placeholder="Talha"  className=" text-sm w-[100%] py-[4px] px-[6px] placeholder:text-[#cbcbcb] rounded-sm text-black bg-[#F4F2F2]" />

                </div>

            </div>
            <div id="email" className="w-[100%]">
                <p className="text-black mt-2 text-sm mb-1">Email</p>
                <input type="text" placeholder="talhabhatti82542@gmail.com" className="w-[100%] text-sm py-[6px] px-[6px] rounded-sm placeholder:text-[#cbcbcb] text-black bg-[#F4F2F2]" />

            </div>
            <div id="password" className="w-[100%] flex flex-row gap-[10px]">
                <div id="setpassword" className="w-[50%] ">
                    <p className="text-sm mb-1 text-black mt-2">Password </p>
                    <input type="password" placeholder="****************" className=" text-sm w-[100%] py-[4px] px-[6px] placeholder:text-[#cbcbcb] rounded-sm text-black bg-[#F4F2F2]" />

                </div>
                <div id="confirmpassword" className="w-[50%]">
                    <p className="text-sm mb-1 text-black mt-2 confirmpassword">Confirm Password</p>
                    <input type="password" placeholder="****************"  className=" text-sm w-[100%] py-[4px] px-[6px] placeholder:text-[#cbcbcb] rounded-sm text-black bg-[#F4F2F2]" />

                </div>

            </div>
            

        </div>
        <div id="passwordstrength" className=" w-[100%] flex flex-col  place-items-start mt-[10px]">
            <div className="flex flex-row items-center"><input className="mr-2 text-blue  w-[9px]" type="radio" name="" id="" />
        <span className=" text-black text-[12px] ">Contains at least one UpperCase</span> </div>
        <div className="flex flex-row items-center"><input className="mr-2 text-blue  w-[9px]" type="radio" name="" id="" />
        <span className=" text-black text-[12px] ">Contains at least one LowerCase</span> </div>
        <div className="flex flex-row items-center"><input className="mr-2 text-blue  w-[9px]" type="radio" name="" id="" />
        <span className=" text-black text-[12px] ">Contains at least on Number</span> </div>
        <div className="flex flex-row items-center"><input className="mr-2 text-blue  w-[9px]" type="radio" name="" id="" />
        <span className=" text-black text-[12px] ">Passwords are matching</span> </div>
        </div>
        <div id="buttons" className="w-[100%]">
            <button className="w-[100%] bg-[#FF5C00] rounded-sm text-[12px] font-semibold py-[4px]">Sign Up</button>
            <p className="w-[100%] text-center font-[12px] text-[#929292] text-sm mt-2">Already a member? <a href="" className="text-[#FF5C00] font-semibold"> Sign In</a></p>
        </div>
        </form>
    </div>
    
  )
}

export default Registeration