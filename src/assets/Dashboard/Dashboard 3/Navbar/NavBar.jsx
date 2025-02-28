import styled from 'styled-components'
import AddShowroom from '../../Header/SideBar2/Components/SideBarBtns/AddShowroom'
import BookedCars from '../../Header/SideBar2/Components/SideBarBtns/BookedCars'
import Home from '../../Header/SideBar2/Components/SideBarBtns/Home'
import { Help, Setting, SVG } from './NavBar'
import { BrowserRouter, Link, useLocation, useNavigate } from 'react-router-dom'
import { Logout } from '../../../Components/Profile/UserProfile'
import CreateRentText from '../../Header/SideBar2/Components/SideBarBtns/CreateRentText'
import { useRef } from 'react'
import Showroomownerbuttons from './Showroomownerbuttons'
import SuperAdminBtn from './SuperAdminBtn'




const NavBar = () => {

    const navigate = useNavigate();
    const showroomownerbuttonone = useRef(null);
    const showroomownerbuttontwo = useRef(null);
    if (localStorage.getItem("Showroomowner") == 'true') {
        console.log("Showroom owner");
    }
    if (localStorage.getItem("Showroomowner") == 'false') {
        console.log("User");
    }
 
    const navbar=useRef(null);
    const location=useLocation();
   console.log(".............",location.pathname)





    return (
        <>
        <span ref={navbar} className="px-[30px]  pt-[5vmin] w-[333px] min-h-[700px] flex flex-col bg-[#FFFFFF] sidebar2">
            <div id='mainmenu' className="w-[100%] flex flex-col justify-start gap-[10%] h-[100%]">
                <div className='w-[100%]'>
                    {localStorage.getItem("Showroomowner") == 'true' || localStorage.getItem("Showroomowner") == 'false' ? <>
                        <p className='text-[#94A7CB66] text-[2.5vmin] w-[100%]'>Main Menu</p></>: ''}
                    

                    {localStorage.getItem("Showroomowner") == 'true' || localStorage.getItem("Showroomowner") == 'false' ? <>
                        <Home />
                    <BookedCars />
                    <AddShowroom />
                    </> : ''}

                   
                    {localStorage.getItem("Showroomowner") == 'true' ? <Showroomownerbuttons /> : ''}
                    {localStorage.getItem("Showroomowner") == 'superAdmin' ? <SuperAdminBtn /> : ''}
                </div>
                {/* 
Preference
     Setting
    Help Center
     */}
                <div className='w-[100%]'>
                    <div className="flex flex-row justify-start ml-[4vmin] items-center py-[0.8vmin] px-[.7vmin] rounded-[1vmin] mt-[1vmin] w-[100%]">
                        <Setting onClick={() => { console.log("Hello") }} className=" text-[#90A3BF] text-[2.8vmin] cursor-pointer">Setting</Setting>

                    </div>
                    <div className="flex ml-[4vmin] flex-row w-[100%] justify-start items-center gap-[2vmin] py-[0.8vmin] px-[.7vmin] rounded-[1vmin] mt-[1vmin]">

                        <SVG id="svg">
                            <img src="src\assets\Dashboard\Dashboard 3\Navbar\help.png" alt="" />
                        </SVG>

                        <Help className=" text-[#90A3BF] text-[2.8vmin] cursor-pointer">Help Center</Help>

                    </div>
                    <p onClick={() => {
                        navigate('/');
                    }}>Logout</p>


                </div>

            </div>



        </span> 
        </>


        

    )
}

export default NavBar