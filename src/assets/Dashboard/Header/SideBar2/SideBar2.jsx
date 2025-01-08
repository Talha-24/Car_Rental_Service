import Logout from "./Components/Logout"
import Menutext from "./Components/Menutext"
import Preference from "./Components/Preference"
import Calender from "./Components/SideBarBtns/Calender"
import CarRent from "./Components/SideBarBtns/CarRent"
import Helptext from "./Components/SideBarBtns/Helptext"
import Home from "./Components/SideBarBtns/Home"
import Inbox from "./Components/SideBarBtns/Inbox"
import Insight from "./Components/SideBarBtns/Insight"
import Settingtext from "./Components/SideBarBtns/Settingtext"
const SideBar2 = () => {
  return (
    <span className="px-[35px] pt-[100px] w-[200px] h-[100vmin] flex flex-col  bg-gray-50">
      <div id='mainmenu' className="">
    <Menutext/>
   
   <Preference/>
   

      </div>
     


    </span>
  )
}

export default SideBar2