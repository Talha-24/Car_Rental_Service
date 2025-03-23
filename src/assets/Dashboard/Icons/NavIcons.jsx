import Heart from "../Header/Header Components/Icons/Components/Heart"
import Profilepicture from "../Header/Header Components/Icons/Components/Profilepicture"
import Setting from "../Header/Header Components/Icons/Components/Setting"
import { IoCloseOutline } from "react-icons/io5";
const NavIcons=()=>{
    return(
        <>
        <div id='sideicon'>
            <div className="flex flex-row items-center justify-between my-[16px]">
        <h1 className='text-[22px]'>Showroom</h1><IoCloseOutline onClick={()=>{
            let navbar=document.querySelector("#navbar");
            navbar.style.cssText = 'margin-left: -336px; transition: margin 1s'; 
        }} fontSize='32px' color="#B2B4B9" />
            </div>

        <div  className='flex flex-row items-center gap-[10px] my-[30px]'>
            <Profilepicture/>
            <Setting/>
            <Heart/>
        </div>
        </div>
        </>
    )
}
export default NavIcons