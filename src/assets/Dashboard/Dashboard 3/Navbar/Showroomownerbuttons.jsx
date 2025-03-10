import React, { useRef } from 'react'
import BookedCars from '../../Header/SideBar2/Components/SideBarBtns/BookedCars'
import AddShowroom from '../../Header/SideBar2/Components/SideBarBtns/AddShowroom'
import { Link, useNavigate } from 'react-router-dom';
import { FaCarTunnel } from 'react-icons/fa6';
import NavButton from '../../Header/SideBar2/Components/SideBarBtns/NavButton';

const Showroomownerbuttons = () => {

  const data = [{
    label: 'Showroom Cars',
    to: 'showroomcars',
    icon: <FaCarTunnel className='inactive' />,
  }, {
    label: 'My Orders',
    to: 'myorders',
    icon: <FaCarTunnel className='inactive' />,
  }]

  return (
    <>
      {data.map(function(btn,key){
        return(
          <NavButton key={key} to={btn.to} label={btn.label} icon={btn.icon} />
        )
      })}

    </>
  )
}

export default Showroomownerbuttons