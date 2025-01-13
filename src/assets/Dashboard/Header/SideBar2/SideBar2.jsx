import Menutext from "./Components/Menutext"
import Preference from "./Components/Preference"
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