import { Link, useNavigate } from "react-router-dom";
import style from "../../SideBarIcon/Styling";
import { obj} from "../../Utils/RoutesPaths";

const UserSelection = () => {

  
  return (
    <div id='userselection' className='flex flex-col items-center   justify-center w-[100%] bg-white h-[100%] userselection'>
       {style().width >= 790 ? '' : <div className='h-[80px] w-[80px] rounded-full border-[1px] border-[#FC4500] object-cover relative top-[-100px]'>
                          <img className="w-[100%] h-[100%] cover" src="https://car-rantal-mauve.vercel.app/assets/logo/Group%2025.png" alt="" />
                      </div>}
        <div className='flex flex-col gap-[4vmin] w-[80%]'>
        <Link to={obj.register}><button  onClick={()=>{
          localStorage.setItem("Role","user");
        }} className='bg-[#FF4500] w-[100%] h-[45px] rounded-sm text-white text-[16px] font-semibold'>Rent a Car</button></Link>
        <Link to={obj.register}><button onClick={()=>{
          localStorage.setItem("Role","showroomowner");
        }} className='bg-[#FF4500] w-[100%] rounded-sm h-[45px] text-white text-[16px] font-semibold'>Own a Showroom</button></Link>
        </div>
        
    </div>
  )
}

export default UserSelection