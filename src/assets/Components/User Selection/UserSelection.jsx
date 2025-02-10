import { Link } from "react-router-dom";

const UserSelection = (propse) => {
  






  return (
    <div className='flex flex-col items-center  justify-center w-[100%] bg-white h-[100vh] userselection'>
        <div className='flex flex-col gap-[4vmin] w-[60%]'>
        <Link to='/register'><button  onClick={()=>{
          propse.setRole("user");
        }} className='bg-[#FF5C00] w-[100%] py-[1.8vmin] rounded-lg text-white text-[3vmin] font-semibold'>Rent a Car</button></Link>
        <Link to="/register"><button onClick={()=>{
          propse.setRole("showroomOwner");
        }} className='bg-[#FF5C00] w-[100%] rounded-lg py-[1.8vmin] text-white text-[3vmin] font-semibold'>Own a Showroom</button></Link>
        </div>
        
    </div>
  )
}

export default UserSelection