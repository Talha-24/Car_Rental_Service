import { Link, NavLink, useNavigate } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { useState } from "react";
const Home = () => {
  const homenavigation = useNavigate();
  const [color, setColor] = useState('#BAC6D7');



  const style = {
    fontSize: '1.4rem',
    color: color,
    hover: 'blue',
  }



  return (
    <NavLink to='homecars' className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
      {/* <div className="flex flex-row h-[50px] w-[100%]  px-[20px] items-center  rounded-[0.4rem] mt-[0.5rem] gap-[12px] cursor-pointer "> */}
        <span id="svg">
        </span>
        <p>Home</p>

      {/* </div> */}
    </NavLink>
  )
}

export default Home