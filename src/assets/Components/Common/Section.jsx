
const Section = () => {
  return (
    <div className='bg-[#FF6E1C] w-[100%] flex items-center justify-center flex-col py-[200px] h-[100vh] signupform'>
        <div id="image">
            <img  className="object-cover w-[100%] h-[50vh] bg-[#FF6E1C]" src="src\assets\images\carone.png" alt="" />
        </div>
        <div id="text" className="bg-[#FF6E1C] h-[50vh] text-center flex flex-col items-center gap-2">
            <big className="bg-[#FF6E1C] text-xl ">Welcome</big>
            <p className="bg-[#FF6E1C] text-sm">Just a Showroom of clicks and we Start..</p>
            <img className="bg-[#FF6E1C] w-10 mt-6" src="src\assets\images\Pager.png" alt="" />

        </div>
    </div>
  )
}

export default Section