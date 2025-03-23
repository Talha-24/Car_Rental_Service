import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { obj } from "../../../Utils/RoutesPaths";

const 

Title = () => {

 const [bookedCar,setbookedCar]=useState('');
  const location=useLocation();


  useEffect(()=>{

    textHandler();

  },[location])

 const textHandler=()=>{
  if(location.pathname == obj.usershowroomcars){

    return setbookedCar('My Cars');

  }
  else if(location.pathname == obj.bookedcars){
    
    return setbookedCar("Booked Cars");

  }
  else if(location.pathname == obj.myorders){
    return setbookedCar("My Orders");
  }



 }



  return (
    <div id='bookedtext' className='flex flex-row py-[25px]  justify-between px-[40px] w-[100%]'>
      <h6 className='text-[#90A3BF] text-[25px]'>{bookedCar}</h6>
</div>
  )
}

export default Title