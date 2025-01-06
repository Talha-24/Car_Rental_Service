
const Section_two = () => {
  return (
    <div className='bg-[#FF6E1C] w-[410px] flex items-center justify-center flex-col py-[200px] px-[20px] h-[100vh] signupform'>
        <div id="image" className="w-[100%] flex flex-row align-center justify-center">
            <img  className="object-cover w-[32%] h-[65%]" src="src\assets\Components\Sign In\images\smallcar.png" alt="" />
            <img className="object-cover w-[68%]" src="src\assets\Components\Sign In\images\bigcar.png" alt="" />
        </div>
        <div id="text" className="bg-[#FF6E1C] h-[50vh] text-center flex flex-col items-center gap-2">
            <big className="bg-[#FF6E1C] text-xl ">Welcome Abroad</big>
            <p className="bg-[#FF6E1C] text-sm">Just a Showroom of clicks and we Start..</p>
            <img className="bg-[#FF6E1C] w-10 mt-6" src="src\assets\images\Pager.png" alt="" />

        </div>
    </div>
  )
}

export default Section_two