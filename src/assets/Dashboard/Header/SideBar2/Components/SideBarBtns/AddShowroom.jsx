import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const AddShowroom = ({ setaddshowroom }) => {

  const Parent = styled.div`
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        padding: 0.8vmin 0.8vmin;
        border-radius: 1vmin;
        margin-top: 1vmin;
        gap: 1vw;
    `
  const P = styled.p`
    font-size: 2.5vmin;
    color: #90AEBF;
    font-weight: 500;
    cursor: pointer;
  `
  const img = styled.img`
    
`
  const Svg = styled.span`
width: 7vmin;
height: 7vmin;
`

  let count = 0;
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
      showroom.style.backgroundColor='#FC5c00';
      showroom.style.color='#FFFFFF';
      navigation('addshowroom');
      let createRent=document.querySelector("#createrent");
        let createrenttext=document.querySelector("#createrenttext");
        // createRent.style.backgroundColor='#FFFFFF';
        let showroomcars=document.querySelector("#showroomcars");
        let myorders=document.querySelector("#myorders");
     showroomcars.style.backgroundColor='#FFFFFF';
     myorders.style.backgroundColor='#FFFFFF';


    }}  id='showroomparent' className='flex flex-row w-[100%] items-center p-[0vmin] rounded-[1vmin] mt-[1vmin] gap-[1vw]' >
      <Svg>
        <img src="src\assets\Dashboard\Header\SideBar2\Components\SideBarBtns\car-white-svgrepo-com.svg" alt="" />
      </Svg>
      <p id='addshowroomtext' className='text-[2.5vmin] text-[#90AEBF] font-semibold cursor-pointer'>Add Showroom</p>

    </div>
  )
}

export default AddShowroom