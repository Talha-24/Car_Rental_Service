import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

const 

Title = () => {

 const [bookedCar,setbookedCar]=useState('');
  const location=useLocation();


  useEffect(()=>{

    textHandler();

  },[location])

 const textHandler=()=>{
  if(location.pathname == '/showroomowner/showroomcars'){

    return setbookedCar('My Cars');

  }
  else if(location.pathname == '/showroomowner/bookedcars'){
    
    return setbookedCar("Booked Cars");

  }
  else if(location.pathname == '/showroomowner/myorders'){
    return setbookedCar("My Orders");
  }



 }



  return (
    <div id='bookedtext' className='flex flex-row py-[25px]  justify-between px-[0] w-[100%]'>
      <h6 className='text-[#90A3BF] text-[25px]'>{bookedCar}</h6>
</div>
  )
}

export default Title