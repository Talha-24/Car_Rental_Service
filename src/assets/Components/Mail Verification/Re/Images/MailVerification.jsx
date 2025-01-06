
const MailVerification = () => {
  return (
    <div className="w-[410px] bg-[#FFFFFF] flex flex-col items-center justify-center h-[100vh] text-center px-[70px] mail">
        <form onSubmit={(e)=>[e.preventDefault()]}>
                <div className="w-[100%] flex flex-col gap-[8px]">
                    <h4 className="text-3xl text-black font-bold">Check Your Email</h4>
                    <h5 className="text-2xl text-[#0c0a27f4] font-medium">Verification Code</h5>
                    <p className="text-center w-[100%] py-[8px] text-black text-sm">Lorem ipsum tadsf alasdf lasdf asodf la sdf dolor sit amet, elit.</p>
                    
                </div>
                <div className="w-[100%] flex flex-row gap-[5px] py-[40px] ">
                   <input readOnly type="number" name="" id=""  className="w-[16.66667%] py-[8px] text-black text-center border-[1px] border-gray-500  rounded-lg"/>
                   <input readOnly type="number" name="" id="" className="w-[16.66667%] py-[8px] text-black text-center border-[1px] border-gray-500  rounded-lg" />
                   <input readOnly type="number" name="" id=""  className="w-[16.66667%] py-[8px] text-black text-center border-[1px] border-gray-500  rounded-lg"/>
                   <input readOnly type="number" name="" id="" className="w-[16.66667%] py-[8px] text-black text-center border-[1px] border-gray-500  rounded-lg" />
                   <input readOnly type="number" name="" id="" className="w-[16.66667%] py-[8px] text-black text-center border-[1px] border-gray-500  rounded-lg" />
                   <input readOnly type="text" className="w-[16%] py-[8px] rounded-lg text-black border-[1px] border-gray-500" />

                </div>
                <div className="w-[100%]">
                    <div id="verify" className="pb-[20px]">
                    <p className="w-[100%] text-black text-sm">Did&apos;t receive code?</p>
                    <b className="text-[#FF5C1E] text-sm "><a href="">Resent Code</a></b>
                    </div>
                    <button className="w-[100%] rounded bg-[#FF5C1E] py-[5px] text-sm font-semibold">Verify</button>

                </div>
        </form>
        
    </div>
  )
}

export default MailVerification