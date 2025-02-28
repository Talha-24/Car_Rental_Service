import { useNavigate } from "react-router-dom"

const Heart = () => {
  //Heart Image from External Library but i am using from Local

  const navigator = useNavigate();


  return (

    <div onClick={() => {
      navigator('favouriteCar');
    }} className='border-[#f1f1f1] bg-[#F0F0F0] rounded-full cursor-pointer h-[40px] w-[40px] flex flex-row items-center justify-center'>
      <img className='h-[16px] w-[16px]' src="https://freesvg.org/img/heart-15.png" alt="" />

    </div>
  )
}

export default Heart