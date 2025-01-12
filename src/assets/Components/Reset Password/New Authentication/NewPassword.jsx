
const NewPassword = () => {
  return (
    <div className=' w-[100%] flex items-center justify-center h-[100vh] bg-white text-black newpassword'>
        <form onSubmit={(e)=>{e.preventDefault()}} className="flex flex-col items-center gap-[3vmin]  w-[100%] ">
        <h6 className="text-[6vmin] font-semibold">Change Password</h6>
        <div className="flex w-[80%] flex-row items-center gap-[1.2vmin] text-black py-[46px] newpasswordContainer">
          <div className="w-[100%]">
            <p className="text-[3vmin]">Password</p> 
            <input type="password" placeholder="**************" className="bg-[#F4F2F3]  placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded-sm px-[5%] py-[2.5%] w-[100%] signupinput" />
          </div>
          <div className="w-[100%]">
            <p className="text-[3vmin]">Confirm Password</p>
            <input type="password" placeholder="****************" className="bg-[#F4F2F3]  placeholder:text-gray-400 text-[3vmin] text-gray-500 rounded-sm px-[5%] py-[2.5%] w-[100%] signupinput"/>
          </div>
        </div>
        <button className="bg-[#ff601c] text-white text-[2.9vmin] inline-block w-[80%] py-[1.6vmin] rounded-sm  font-semibold ">Update Password</button>
        </form>
    </div>
  )
}

export default NewPassword