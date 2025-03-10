import { Link, NavLink } from "react-router-dom"
import { TiHome } from "react-icons/ti";

const NavButton = (prop) => {




    return (
        <>
            <NavLink ClassName={({ isActive }) => (isActive ? 'active' : 'inactive')} className='flex flex-row h-[50px] w-[100%]  px-[20px] items-center  rounded-[0.4rem] mt-[0.5rem] gap-[12px] text-[#BAC6D7] rounded-lg' to={prop.to}  >
                {prop.icon}
                <p className='text-[16px] font-semibold cursor-pointer'>{prop.label}</p>
            </NavLink>
        </>
    )


}
export default NavButton