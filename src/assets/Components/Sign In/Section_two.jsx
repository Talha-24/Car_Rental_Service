
const Section_two = () => {
  return (
    <div className='bg-[#FF6E1C] w-[100%] flex items-center justify-center flex-col gap-[15vmin]  h-[100vh] signupform'>
        <div id="image" className="flex flex-row align-center justify-center w-[70%] pt-[12vmin]">
            <img  className="object-cover w-[32%] h-[65%]" src="src\assets\Components\Sign In\images\smallcar.png" alt="" />
            <img className="object-cover w-[68%]" src="src\assets\Components\Sign In\images\bigcar.png" alt="" />
        </div>
        <div id="text" className="bg-[#FF6E1C] text-center flex flex-col items-center gap-[2vmin]">
            <big className="bg-[#FF6E1C] text-[5vmin] font-semibold">Welcome Abroad</big>
            <p className="bg-[#FF6E1C] text-[2.5vmin]">Just a Showroom of clicks and we Start..</p>
            <img className="bg-[#FF6E1C] w-[6vmin]" src="src\assets\images\Pager.png" alt="" />

        </div>
    </div>
  )
}

export default Section_two