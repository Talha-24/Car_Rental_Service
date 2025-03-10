import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaRegFaceKiss } from "react-icons/fa6";


const BookedCars = () => {

  const location=useLocation();

 


  const navigation = useNavigate();

  return (
    <div id='bookedcars' className='flex flex-row h-[50px] w-[100%]  px-[20px] items-center  rounded-[0.4rem] mt-[0.5rem] gap-[12px] cursor-pointer' onClick={() => {
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
      booked.style.backgroundColor = '#FC4500';
      home.style.backgroundColor = '#FFF';
      showroom.style.backgroundColor = '#FFF';
      bookedtext.style.color = 'white';
      let addshowroomtext = document.querySelector("#addshowroomtext");
      hometext.style.color = '#90AEBF';
      addshowroomtext.style.color = `#90AEBF`;
    }} >
      <div>
        {/* <img className="w-[17px] h-[16.8px]" src="https://www.iconarchive.com/download/i112067/fa-team/fontawesome/FontAwesome-Car-Tunnel.1024.png" alt="" /> */}
        <FaRegFaceKiss  fontSize={'1rem'} />
      </div>
      <p id='bookedcartext' className='text-[#90AEBF] font-semibold'>Booked Cars</p>

    </div>
  )
}

export default BookedCars