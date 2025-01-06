
const NewPassword = () => {
  return (
    <div className=' w-[410px] flex items-center justify-center h-[100vh] bg-white text-black newpassword'>
        <form onSubmit={(e)=>{e.preventDefault()}} className="flex flex-col items-center justify-normal  w-[100%] ">
        <h6 className="text-3xl font-semibold">Change Password</h6>
        <div className="flex flex-row items-center gap-[8px] text-black py-[46px] newpasswordContainer">
          <div className="">
            <p className="text-sm">Password</p> 
            <input type="password" placeholder="**************" className="py-[4px] px-[10px] text-black rounded-sm bg-[#F4F2F2] w-[170px]" />
          </div>
          <div className=" ">
            <p className="text-sm">Confirm Password</p>
            <input type="password" placeholder="****************" className="py-[4px] px-[10px] rounded-sm bg-[#F4F2F2] w-[170px]"/>
          </div>
        </div>
        <button className="bg-[#ff601c] text-white inline-block w-[84%] py-[6px] rounded-sm text-sm font-semibold ">Update Password</button>
        </form>
    </div>
  )
}

export default NewPassword