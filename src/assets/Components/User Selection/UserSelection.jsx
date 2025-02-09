import { Link } from "react-router-dom";

const UserSelection = (propse) => {
  
  return (
    <div className='flex flex-col items-center  justify-center w-[100%] bg-white h-[100vh] userselection'>
        <div className='flex flex-col gap-[2vmin] w-[80%]'>
        <Link to='/otpverification'><button  onClick={()=>{
          propse.setselectUser("rentacar");
          propse.setUser('1');
        }} className='bg-[#FF5C1E] w-[100%] py-[1.8vmin] rounded-[0.5vmin] text-white text-[3vmin] font-semibold'>Rent a Car</button></Link>
        <Link to="/otpverification"><button onClick={()=>{
          propse.setselectUser("Showroom");
          propse.setUser('1');


        }} className='bg-[#FF5C1E] w-[100%] rounded-[0.5vmin] py-[1.8vmin] text-white text-[3vmin] font-semibold'>Own a Showroom</button></Link>
        </div>
        
    </div>
  )
}

export default UserSelection