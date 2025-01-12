
const MailVerification = () => {
  return (
    <div className="w-[100%] bg-[#FFFFFF] flex flex-col items-center justify-center h-[100vh] text-center px-[70px] mail">
        <form onSubmit={(e)=>[e.preventDefault()]}>
                <div className="w-[100%] flex flex-col gap-[8px]">
                    <h4 className="text-[5vmin] text-black font-bold">Check Your Email</h4>
                    <h5 className="text-[3.5vmin] text-[#0c0a27f4] font-medium">Verification Code</h5>
                    <p className="text-center w-[100%] py-[8px] text-black text-[2vmin]">Lorem ipsum tadsf alasdf lasdf asodf la sdf dolor sit amet, elit.</p>
                    
                </div>
                <div className="w-[100%] flex flex-row gap-[2vmin] py-[4vmin] ">
                   <input readOnly type="number" name="" id=""  className="w-[12vmin] py-[2.5vmin] text-black text-center border-[1px] border-gray-500  rounded-lg"/>
                   <input readOnly type="number" name="" id="" className="w-[12vmin] py-[2.5vmin] text-black text-center border-[1px] border-gray-500  rounded-lg" />
                   <input readOnly type="number" name="" id=""  className="w-[12vmin] py-[2.5vmin] text-black text-center border-[1px] border-gray-500  rounded-lg"/>
                   <input readOnly type="number" name="" id="" className="w-[12vmin] py-[2.5vmin] text-black text-center border-[1px] border-gray-500  rounded-lg" />
                   <input readOnly type="number" name="" id="" className="w-[12vmin] py-[2.5vmin] text-black text-center border-[1px] border-gray-500  rounded-lg" />
                   <input readOnly type="text" className="w-[12vmin] py-[2.5vmin] rounded-lg text-black border-[1px] border-gray-500" />

                </div>
                <div className="w-[100%]">
                    <div id="verify" className="pb-[20px]">
                    <p className="w-[100%] text-black text-[3vmin]">Did&apos;t receive code?</p>
                    <b className="text-[#FF5C1E] text-[3vmin] "><a href="">Resent Code</a></b>
                    </div>
                    <button className="w-[100%] rounded bg-[#FF5C1E] py-[1.5vmin] text-[3vmin] font-semibold text-white">Verify</button>

                </div>
        </form>
        
    </div>
  )
}

export default MailVerification