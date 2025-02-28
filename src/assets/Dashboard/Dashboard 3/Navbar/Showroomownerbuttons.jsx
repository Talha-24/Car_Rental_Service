import React, { useRef } from 'react'
import BookedCars from '../../Header/SideBar2/Components/SideBarBtns/BookedCars'
import AddShowroom from '../../Header/SideBar2/Components/SideBarBtns/AddShowroom'
import { Link, useNavigate } from 'react-router-dom';

const Showroomownerbuttons = () => {


  const myorders = useRef(null);
  return (
    <>
      <div id='showroomcars' className='flex flex-row w-[100%] items-center p-[0vmin] rounded-[1vmin] mt-[1vmin] gap-[1vw] cursor-pointer' onClick={() => {
        let home = document.querySelector("#homebtn");
        let hometext = document.querySelector("#hometext");
        let showroom = document.querySelector("#showroomparent");
        let booked = document.querySelector("#bookedcars");
        let bookedtext = document.querySelector("#bookedcartext");
        console.log(home, showroom, booked);
        home.style.backgroundColor = '#FFF';
        showroom.style.backgroundColor = '#FFF';
        let addshowroomtext = document.querySelector("#addshowroomtext");
        hometext.style.color = '#90AEBF';
        addshowroomtext.style.color = `#90AEBF`;
        let createRent = document.querySelector("#createrent");
        let createrenttext = document.querySelector("#createrenttext");
        let showroomcars = document.querySelector("#showroomcars");
        let myorders = document.querySelector("#myorders");
        myorders.style.backgroundColor = '#FFFFFF';
        showroomcars.style.backgroundColor = '#FC5c00',
          showroomcars.style.color = '#FFFFFF',
          createRent.style.backgroundColor = '#FFFFFF';
        navigate('showroomcars');
      }} >
        <span className='h-[7vmin] w-[7vmin]'>
          <img src="src\assets\Dashboard\Header\SideBar2\Components\SideBarBtns\car-white-svgrepo-com.svg" alt="" />
        </span>
        <p id='' className='text-[#90AEBF] font-semibold'> <Link to='showroomcars'> Showroom Cars </Link></p>

      </div>

      <div ref={myorders} id='myorders' className='flex flex-row w-[100%] items-center p-[0vmin] rounded-[1vmin] mt-[1vmin] gap-[1vw] cursor-pointer' onClick={() => {
        let home = document.querySelector("#homebtn");
        let hometext = document.querySelector("#hometext");
        let showroom = document.querySelector("#showroomparent");
        let booked = document.querySelector("#bookedcars");
        let bookedtext = document.querySelector("#bookedcartext");
        console.log(home, showroom, booked);
        home.style.backgroundColor = '#FFF';
        showroom.style.backgroundColor = '#FFF';
        //   bookedtext.style.color='white';
        let showroomcars = document.querySelector("#showroomcars");
        showroomcars.style.backgroundColor = '#FFFFFF';
        let addshowroomtext = document.querySelector("#addshowroomtext");
        hometext.style.color = '#90AEBF';
        addshowroomtext.style.color = `#90AEBF`;
        let createRent = document.querySelector("#createrent");
        let createrenttext = document.querySelector("#createrenttext");
        let myorders = document.querySelector("#myorders");
        myorders.style.backgroundColor = '#FC5c00';
        myorders.style.color = '#FFFFFF';
        createRent.style.backgroundColor = '#FFFFFF';
      }} >
        <span className='h-[7vmin] w-[7vmin]'>
          <img src="src\assets\Dashboard\Header\SideBar2\Components\SideBarBtns\car-white-svgrepo-com.svg" alt="" />
        </span>
        <p id='bookedcartext' className='text-[#90AEBF] font-semibold'> <Link to='myorders'> My orders </Link></p>

      </div>

    </>
  )
}

export default Showroomownerbuttons