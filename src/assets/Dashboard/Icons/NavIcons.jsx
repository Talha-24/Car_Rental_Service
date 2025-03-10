import Heart from "../Header/Header Components/Icons/Components/Heart"
import Profilepicture from "../Header/Header Components/Icons/Components/Profilepicture"
import Setting from "../Header/Header Components/Icons/Components/Setting"

const NavIcons=()=>{
    return(
        <>
        <div id='sidebaricons'>
        <h1 className='text-[20px]'>Showroom</h1>
        <div  className='flex flex-row items-center gap-[10px] my-[22px]'>
            <Profilepicture/>
            <Setting/>
            <Heart/>
        </div>
        </div>
        </>
    )
}
export default NavIcons