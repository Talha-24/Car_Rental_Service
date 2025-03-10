import Notification from './Components/Notification'
import Setting from './Components/Setting'
import Profilepicture from './Components/Profilepicture'
import Heart from './Components/Heart'
import { useState } from 'react'
//Heart (like)
//Notification(Bell)
//Setting
//Profile Picture
const Icons = (propse) => {
  

  console.log(propse);
  return (
    <div className='flex flex-row gap-[10px] items-center'>
      <Notification/>
      {localStorage.getItem("Showroomowner") == "true" || localStorage.getItem("Showroomowner") == "false" ? <Heart /> : '' }
      <Setting />
      <Profilepicture openProfile={propse.openProfile} />
    </div>
  )
}

export default Icons
