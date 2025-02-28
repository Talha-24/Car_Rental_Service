import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const BookedCars = () => {

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
  const navigation = useNavigate();

  return (
    <div id='bookedcars' className='flex flex-row w-[100%] items-center p-[0vmin] rounded-[1vmin] mt-[1vmin] gap-[1vw] cursor-pointer' onClick={() => {
      navigation("bookedcars");
      let showroomcars = document.querySelector("#showroomcars");
      let myorders = document.querySelector("#myorders");
      showroomcars.style.backgroundColor = '#FFFFFF';
      myorders.style.backgroundColor = '#FFFFFF';
      let home = document.querySelector("#homebtn");
      let hometext = document.querySelector("#hometext");
      let showroom = document.querySelector("#showroomparent");
      let booked = document.querySelector("#bookedcars");
      let bookedtext = document.querySelector("#bookedcartext");
      console.log(home, showroom, booked);
      booked.style.backgroundColor = '#FC5c00';
      home.style.backgroundColor = '#FFF';
      showroom.style.backgroundColor = '#FFF';
      bookedtext.style.color = 'white';
      let addshowroomtext = document.querySelector("#addshowroomtext");
      hometext.style.color = '#90AEBF';
      addshowroomtext.style.color = `#90AEBF`;
      let createRent = document.querySelector("#createrent");
      let createrenttext = document.querySelector("#createrenttext");
      createRent.style.backgroundColor = '#FFFFFF';

    }} >
      <Svg>
        <img src="src\assets\Dashboard\Header\SideBar2\Components\SideBarBtns\car-white-svgrepo-com.svg" alt="" />
      </Svg>
      <p id='bookedcartext' className='text-[#90AEBF] font-semibold'>Booked Cars</p>

    </div>
  )
}

export default BookedCars