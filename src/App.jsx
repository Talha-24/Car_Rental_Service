import BookingPending from "./assets/Dashboard/BookingProcessing/BookingPending"
import Footer from "./assets/Dashboard/Footer/Footer"
import Header from "./assets/Dashboard/Header/Header"
import TypeText from "./assets/Dashboard/Header/Sidebar/Components/CarTypeComponents/TypeText"
import Type from "./assets/Dashboard/Header/Sidebar/Components/Type"
import Sidebar from "./assets/Dashboard/Header/Sidebar/Sidebar"
import Menutext from "./assets/Dashboard/Header/SideBar2/Components/Menutext"
import Calender from "./assets/Dashboard/Header/SideBar2/Components/SideBarBtns/Calender"
import CarRent from "./assets/Dashboard/Header/SideBar2/Components/SideBarBtns/CarRent"
import Helptext from "./assets/Dashboard/Header/SideBar2/Components/SideBarBtns/Helptext"
import Home from "./assets/Dashboard/Header/SideBar2/Components/SideBarBtns/Home"
import Inbox from "./assets/Dashboard/Header/SideBar2/Components/SideBarBtns/Inbox"
import Insight from "./assets/Dashboard/Header/SideBar2/Components/SideBarBtns/Insight"
import Settingtext from "./assets/Dashboard/Header/SideBar2/Components/SideBarBtns/Settingtext"


//Login
//Create Account
//Verification Code Responsivness Done...
//Resest Password... Responsiveness Done
const App = () => {
  return (
    <div className="">
      {/* <Header/> */}
     {/* <BookingPending/> */}

    <span className="px-[35px] pt-[100px] w-[200px] h-[100vmin] flex flex-col bg-gray-50">
      <div id='mainmenu' className="">
    <Menutext/>
    <Home/>
    <CarRent/>
    <Insight/>
    <Inbox/>
    <Calender/>
    <Menutext/>
    <Settingtext/>
    <Helptext/>
    


      </div>
     


    </span>

     {/* <Footer/> */}
     
    
    </div>
  )
}

export default App