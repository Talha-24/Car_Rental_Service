import styled from 'styled-components'
import AddShowroom from '../../Header/SideBar2/Components/SideBarBtns/AddShowroom'
import BookedCars from '../../Header/SideBar2/Components/SideBarBtns/BookedCars'
import Home from '../../Header/SideBar2/Components/SideBarBtns/Home'
import { Help, Setting, SVG } from './NavBar'
import { BrowserRouter, Link, useLocation, useNavigate } from 'react-router-dom'
import { Logout } from '../../../Components/Profile/UserProfile'
import CreateRentText from '../../Header/SideBar2/Components/SideBarBtns/CreateRentText'
import { useEffect, useRef, useState } from 'react'
import Showroomownerbuttons from './Showroomownerbuttons'
import SuperAdminBtn from './SuperAdminBtn'
import NavButton from '../../Header/SideBar2/Components/SideBarBtns/NavButton'
import { TiHome } from "react-icons/ti";
import { FaCarTunnel} from 'react-icons/fa6'
import { FaHeadset } from 'react-icons/fa6'
import { IoMdSettings } from "react-icons/io";
import NavIcons from "../../../Components/../Dashboard/Icons/NavIcons.jsx"
import Icons from '../../Header/Header Components/Icons/Icons.jsx'
import style from '../../../SideBarIcon/Styling.js'



const NavBar = () => {

    const navbar = useRef(null);
   const [showroomtext,setshowroomtext]=useState('Add Showroom');
   useEffect(()=>{
    setshowroomtext(localStorage.getItem("Showroomstatus") == 'approved' && localStorage.getItem("Showroomowner") == 'true' || localStorage.getItem("Showroomowner") == true ? 'My Showroom' : 'Add Showroom');
   })
    const ButtonData = [
        {
            label: 'Home',
            icon: <TiHome fontSize='22px'  className='inactive' />,
            to: 'homecars',
        },
        {
            label: 'Booked Cars',
            icon: <FaCarTunnel className='inactive' />,
            to: 'bookedcars'
        },
        {
            label: showroomtext,
            icon: <FaCarTunnel className='inactive' />,
            to: 'addshowroom',
        },
        
    ]

  
    const details=[{
           label: 'Setting',
           icon: <IoMdSettings />           ,
           to: 'setting'
    },{
        label: 'Help & Center',
        icon: <FaHeadset />,
        to: 'tel:+923420305622',

    }]



 const styleHandler=()=>{
    if(style().width <= 850){
        navbar.current.style.top='0';
    }
    return;
 }
 useEffect(()=>{
    styleHandler();
 },[window.innerWidth]);





 const homebutton=[
    {
        label: 'Home',
        icon: <TiHome fontSize='22px'  className='inactive' />,
        to: '/',
    },
]
    return (
        <>
            <span ref={navbar} id='navbar' className="px-[30px]  w-[334px] min-h-[700px]  flex flex-col bg-[#FFFFFF] sidebar2">
                <div id='mainmenu' className="w-[100%] flex flex-col justify-start gap-[10%] h-[100%]">
                    <div className='w-[100%] flex flex-col gap-[8px]'>
                    {style().width < 850 ? <NavIcons/> : ''}
                    {!localStorage.getItem("Token")? <>
                    {homebutton.map(function(btn,key){
                        return(
                            <NavButton key={key} to={btn.to} label={btn.label} icon={btn.icon} />
                        )

                    })}
                    </>: ''}
                        { (localStorage.getItem("Showroomowner") == 'true' || localStorage.getItem("Showroomowner") == 'false' || localStorage.getItem("Role") != "superAdmin"  ) && localStorage.getItem("Token")  ? <>
                            {ButtonData.map(function(btn,key){
                                return(
                            <NavButton key={key} to={btn.to} label={btn.label} icon={btn.icon} />
                                )

                            })}
                           


                        </> : ''}
                        {localStorage.getItem("Showroomowner") == 'true' && (localStorage.getItem("Showroomstatus") == 'pending' || localStorage.getItem("Showroomstatus") == 'approved') ? <Showroomownerbuttons /> : ''}
                        {localStorage.getItem("Showroomowner") == 'superAdmin' ? <SuperAdminBtn /> : ''}
                        {localStorage.getItem("Showroomowner") == 'superAdmin'|| localStorage.getItem("Showroomowner") == 'false' || localStorage.getItem("Showroomowner") == 'true'? <>
                           {details.map(function(btn,key){
                            return(
                                <NavButton key={key} label={btn.label} icon={btn.icon} to={btn.to} />
                            )
                           })}
                        </> : '' }
                    </div>
                </div>



            </span>
        </>




    )
}

export default NavBar