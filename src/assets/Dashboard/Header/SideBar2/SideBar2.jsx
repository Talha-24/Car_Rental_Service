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
import "./RentDetails.css";

const SideBar2 = () => {
  return (
    <span className="px-[2vmin] relative pt-[5vmin] w-[20%] min-h-[700px] flex flex-col sidebar2 bg-gray-50">
      <div id='mainmenu' className="w-[100%]">
    <Menutext/>
   <Preference/>
   
      </div>
     


    </span>
  )
}

export default SideBar2