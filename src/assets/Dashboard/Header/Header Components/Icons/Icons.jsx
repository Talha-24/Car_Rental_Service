import Notification from './Components/Notification'
import Setting from './Components/Setting'
import Profilepicture from './Components/Profilepicture'
//Heart (like)
//Notification(Bell)
//Setting
//Profile Picture
const Icons = () => {
  return (
    <div className='flex flex-row gap-[10px] items-center'>
       
        <Notification/>
        <Setting/>
        <Profilepicture/>
        
    
    </div>
  )
}

export default Icons