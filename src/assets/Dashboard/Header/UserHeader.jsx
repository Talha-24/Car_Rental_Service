import Logo from './Header Components/Logo'
import SearchBar from './Header Components/SearchBar'
import Icons from './Header Components/Icons/Icons'
import UserLogo from './Header Components/UserLogo'
import { useEffect, useState } from 'react'
import UserProfile from '../../Components/Profile/UserProfile.jsx'
import FilterModale from '../../FilteredCars/FilterModale.jsx'
import { NavLink, useNavigate } from 'react-router-dom'
import style from '../../SideBarIcon/Styling.js'
import Notification from './Header Components/Icons/Components/Notification.jsx'
import { obj } from '../../Utils/RoutesPaths.js'

const UserHeader = () => {
  

  const navigate = useNavigate();
  const [carsFilter, setcarsFilter] = useState(false);
  const [profile, setProfile] = useState(false);
  const openProfile = () => setProfile(true);
  const closeProfile = () => setProfile(false);
  const openFilter = () => setcarsFilter(true);
  const closeFilter = () => setcarsFilter(false);
  let turn = true;


  return (
    <div className='py-[15px] bg-white flex items-center justify-between w-[100%] header px-[15px]'>
      <div className='flex items-center justify-between gap-[30px]'>
        <img onClick={() => {
          let sidebar = document.querySelector("#navbar");
          if (turn == true) {
            sidebar.style.cssText = 'margin-left: 0px;  transition: margin 1s;'
            turn = false
          } else {
            sidebar.style.cssText = 'margin-left: -336px; transition: margin 1s'; 
            turn=true;
          }
        }} id='navOptions' className='h-[25px] cursor-pointer' src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png" alt="" />
        <UserLogo />
        <SearchBar openFilter={openFilter} />
      </div>
      {!localStorage.getItem("Token") ?
        <NavLink id='signIntext' to={obj.loginpage} className='text-[#FC4500]  block font-bold underline text-[16px]'>Sign In</NavLink>
        : <> { style().width >= 850 ? <Icons openProfile={openProfile} />: <Notification/> }</>}
    </div>

  )
}

export default UserHeader