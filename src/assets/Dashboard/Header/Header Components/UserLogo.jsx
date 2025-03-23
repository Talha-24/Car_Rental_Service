

import { useNavigate } from "react-router-dom";
import "./UserLogo.css";
import { obj } from "../../../Utils/RoutesPaths";
const UserLogo = () => {

  const moveTo=useNavigate();
    return (
   <>
   <div id="logo">
    <h4 onClick={()=>{
      moveTo(obj.userhome);
    }} className='text-[#FC4500] text-[26px] font-bold'>Showroom</h4>
   </div>
   </>
  )
}

export default UserLogo