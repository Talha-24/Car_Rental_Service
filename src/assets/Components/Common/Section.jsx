
const Section = () => {
  return (
    <div className='bg-[#FF6E1C] w-[100%] flex items-center justify-center flex-col py-[100px] h-[100vh] signupform'>
        <div id="image" className="w-[70%]">
            <img  className="object-cover w-[100%] h-[60vh] bg-[#FF6E1C]" src="src\assets\images\carone.png" alt="" />
        </div>
        <div id="text" className="bg-[#FF6E1C] h-[40vh] text-center flex flex-col items-center gap-[2vmin]">
            <big className="bg-[#FF6E1C] text-[4vmin] font-semibold  text-[#FFFFFF]">Welcome</big>
            <p className="bg-[#FF6E1C] text-[3vmin] text-[#FFFFFF]">Just a Showroom of clicks and we Start..</p>
            <img className="bg-[#FF6E1C] w-[8vmin] mt-6 text-[#FFFFFF]" src="src\assets\images\Pager.png" alt="" />

        </div>
    </div>
  )
}

export default Section