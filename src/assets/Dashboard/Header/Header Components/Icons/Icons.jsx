import Notification from './Components/Notification'
import Setting from './Components/Setting'
import Profilepicture from './Components/Profilepicture'
import Heart from './Components/Heart'
import { useState } from 'react'
const Icons = (propse) => {
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
