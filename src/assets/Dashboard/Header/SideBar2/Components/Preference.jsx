import Logout from "./Logout"
import Helptext from "./SideBarBtns/Helptext"
import Settingtext from "./SideBarBtns/Settingtext"

const Preference = () => {
  return (
   <>
         <p className='text-[#94A7CB66]'>Preferences</p>
 <Settingtext/>
    <Helptext/>
    <Logout/>            
   </>
  )
}

export default Preference