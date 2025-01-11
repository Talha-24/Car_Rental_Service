
const NewPassword = () => {
  return (
    <div className=' w-[100%] flex items-center justify-center h-[100vh] bg-white text-black newpassword'>
        <form onSubmit={(e)=>{e.preventDefault()}} className="flex flex-col items-center justify-normal  w-[100%] ">
        <h6 className="text-3xl font-semibold">Change Password</h6>
        <div className="flex w-[80%] flex-row items-center gap-[8px] text-black py-[46px] newpasswordContainer">
          <div className="w-[100%]">
            <p className="text-sm">Password</p> 
            <input type="password" placeholder="**************" className="py-[4px] px-[10px] text-black rounded-sm bg-[#F4F2F2] w-[100%]" />
          </div>
          <div className="w-[100%]">
            <p className="text-sm">Confirm Password</p>
            <input type="password" placeholder="****************" className="py-[4px] px-[10px] rounded-sm bg-[#F4F2F2] w-[100%]"/>
          </div>
        </div>
        <button className="bg-[#ff601c] text-white inline-block w-[80%] py-[6px] rounded-sm text-sm font-semibold ">Update Password</button>
        </form>
    </div>
  )
}

export default NewPassword