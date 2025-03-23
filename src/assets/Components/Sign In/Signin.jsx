import { useState } from 'react'
import Registeration from './Registeration'
import { FaArrowLeft } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import Slider from '../Slider/Slider'
const Signin = () => {
  
  return (
    <div className='flex flex-row w-[100%] signin items-center justify-center'>
      <Slider/>
      <Registeration />
    </div>
  )
}

export default Signin