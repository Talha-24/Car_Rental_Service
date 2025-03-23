import React from 'react'
import { useNavigate } from 'react-router-dom';
import Section_two from '../Sign In/Section_two';
import { FaArrowLeft } from 'react-icons/fa';
import style from '../../SideBarIcon/Styling';

const Slider = () => {

    const navigate=useNavigate();

  return (
    <>
     {style().width >= 790 ? <Section_two/> : <FaArrowLeft  onClick={()=>{
              navigate(-1);
       }} className='fixed top-[5%] left-[5%] text-[20px] text-[#FC4500]'/>}
    </>
  )
}

export default Slider
