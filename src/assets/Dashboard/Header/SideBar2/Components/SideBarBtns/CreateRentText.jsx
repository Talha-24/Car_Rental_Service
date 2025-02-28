import React from 'react'
import { useNavigate } from 'react-router-dom';

const CreateRentText = () => {


  const createrentnavigation = useNavigate('');

  return (
    <div id='createrent' onClick={() => {
      let home = document.querySelector("#homebtn");
      let showroom = document.querySelector("#showroomparent");
      let booked = document.querySelector("#bookedcars");
      let bookedcarText = document.querySelector("#bookedcartext");
      let addshowroomtext = document.querySelector("#addshowroomtext");
      let createRent = document.querySelector("#createrent");
      let creatRentText = document.querySelector("#createrenttext");
      let hometext = document.querySelector("#hometext");
      console.log(home, showroom, booked);
      booked.style.backgroundColor = '#FFF';
      createRent.style.backgroundColor = '#FC5c00';
      home.style.backgroundColor = '#fff';
      showroom.style.backgroundColor = '#FFF';
      creatRentText.style.color = 'rgb(255, 255, 255)';
      bookedcarText.style.color = '#97B3C3';
      addshowroomtext.style.color = '#97B3C3';
      createrentnavigation('rentcar');
    }} className="py-[1.4vmin] px-[.8vmin] rounded-[1vmin] mt-[1vmin]  w-[100%] cursor-pointer">

      <p id='createrenttext' className="text-[#97B3C3] font-semibold text-[1.2vmax]">Create Rent</p>

    </div>
  )
}

export default CreateRentText