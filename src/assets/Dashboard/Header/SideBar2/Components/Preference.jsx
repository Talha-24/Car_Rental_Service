import Logout from "./Logout"
import Helptext from "./SideBarBtns/Helptext"
import Settingtext from "./SideBarBtns/Settingtext"

const Preference = (propse) => {
  return (
   <>
         <p className='text-[#94A7CB66] text-[2.5vmin]'>Preferences</p>
 <Settingtext/>
    <Helptext/>

    <Logout setUser={propse.setUser} setselectUser={propse.setselectUser}/>   

   </>
  )
}

export default Preference