import Footer from '../Footer/Footer'
import HomeCars from './Navbar/HomeCars'
import UserHeader from '../Header/UserHeader'
import NavBar from './Navbar/NavBar.jsx'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import CreateShowroom from '../../Components/Create Showrooms/CreateShowroom.jsx'
import { useRef, useState } from 'react'

const HomeCarRent = () => {
  const location = useLocation();
  return (
    <div className='bg-[#FFFFFF] w-[100%] flex flex-col'>
      <UserHeader />
      <div id='homebox' className='flex flex-row min-w-[100%] px-[10px] bg-[#F6F7F9]'>
        <NavBar />
        {!localStorage.getItem("Token")? <HomeCars/>: ''}
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default HomeCarRent