import Calender from "./SideBarBtns/Calender"
import CarRent from "./SideBarBtns/CarRent"
import Home from "./SideBarBtns/Home"
import Inbox from "./SideBarBtns/Inbox"
import Insight from "./SideBarBtns/Insight"

const Menutext = () => {
    return (
    <>
  
  
   <p className='text-[#94A7CB66] text-[2.5vmin]'>Main Menu</p>
   <Home/>
    <CarRent/>
    <Insight/>
    <Inbox/>
    <Calender/>
          

    </>
    )
  }
  
  export default Menutext