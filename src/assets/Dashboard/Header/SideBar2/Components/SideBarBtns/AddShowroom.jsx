import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const AddShowroom = ({ setaddshowroom }) => {
  const navigation = useNavigate();
  return (

    <div onClick={() => {
      //       setaddshowroom(true);
      let home = document.querySelector("#homebtn");
      let showroom = document.querySelector("#showroomparent");
      let booked=document.querySelector("#bookedcars");
      let bookedtext=document.querySelector("#bookedcartext");
      let addshowroomtext=document.querySelector("#addshowroomtext");
      let hometext=document.querySelector('#hometext');
      bookedtext.style.color='#90AEBF';
      hometext.style.color='#90AEBF';
      addshowroomtext.style.color='#FFFFFF';
      
      console.log(home,showroom,booked);
      booked.style.backgroundColor='#FFF';
      home.style.backgroundColor='#FFF';
      home.style.color='#d8d9dc';
      showroom.style.backgroundColor='#FC4500';
      showroom.style.color='#FFFFFF';
      navigation('addshowroom');
      let createRent=document.querySelector("#createrent");
        let createrenttext=document.querySelector("#createrenttext");
        createRent.style.backgroundColor='#FFFFFF';
        let showroomcars=document.querySelector("#showroomcars");
        let myorders=document.querySelector("#myorders");
     showroomcars.style.backgroundColor='#FFFFFF';
     myorders.style.backgroundColor='#FFFFFF';

    }}  id='showroomparent' className='flex flex-row h-[50px] w-[100%]  px-[20px] items-center  rounded-[0.4rem] mt-[0.5rem] gap-[12px]' >
      <div className='w-[16.7px] h-[17px]'>
        <img className='w-[100%] h-[100%]' src="https://www.iconarchive.com/download/i112067/fa-team/fontawesome/FontAwesome-Car-Tunnel.1024.png" alt="" />
      </div>
      <p id='addshowroomtext' className='text-[16px] text-[#90AEBF] font-semibold cursor-pointer'>Add Showroom</p>
    </div>
  )
}

export default AddShowroom