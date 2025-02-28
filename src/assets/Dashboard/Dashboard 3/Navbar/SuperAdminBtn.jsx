import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const SuperAdminBtn = () => {




    const navigate = useNavigate('');
    const location = useLocation();

    const btnone = useRef(null);
    const btntwo = useRef(null);
    const btnonetext=useRef(null);
    const btntwotext=useRef(null);



    const styleHandler = () => {

        if (location.pathname == '/showroomowner/showrooms') {
            btntwotext.current.style.color='#b1b0b0';            
            btntwo.current.style.backgroundColor = '#FFFFFF';
            btnone.current.style.backgroundColor = '#FC4500';
            btnonetext.current.style.color='#FFFFFF';
        }
        else if (location.pathname == '/showroomowner/cars') {
            btnonetext.current.style.color='#b1b0b0';
            btnone.current.style.backgroundColor='#FFFFFF';
            btntwo.current.style.backgroundColor = '#FC4500';
            btntwotext.current.style.color='#FFFFFF';            
        }
    }

    useEffect(() => {

        styleHandler();

    }, [location])


    return (
        <>
            <div ref={btnone} id='showroomcars' className='flex flex-row w-[100%] items-center py-[5px] rounded-[10px]  mt-[10px] gap-[1vw] cursor-pointer' onClick={() => {
               navigate('showrooms');
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
            }} >
               

                <span className='h-[7vmin] w-[7vmin]'>
                    {/* <img className='text bg-white' src="https://static-00.iconduck.com/assets.00/home-icon-512x512-qn0kq6c6.png" alt="" /> */}
                </span>
                <p id='' ref={btnonetext} className='text-[#98A1AF] font-semibold'>  Showrooms </p>

            </div>

            <div ref={btntwo} id='myorders' className='flex flex-row w-[100%] items-center py-[5px] rounded-[10px] mt-[1vmin] gap-[1vw] cursor-pointer' onClick={() => {
               navigate("cars");
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
                <p ref={btntwotext} id='bookedcartext' className='text-[#98A1AF] font-semibold'>  Cars </p>

            </div>
        </>

    )
}

export default SuperAdminBtn