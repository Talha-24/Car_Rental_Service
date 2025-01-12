import Notification from './Components/Notification'
import Setting from './Components/Setting'
import Profilepicture from './Components/Profilepicture'
import Heart from './Components/Heart'
//Heart (like)
//Notification(Bell)
//Setting
//Profile Picture
const Icons = () => {
  return (
    <div className='flex flex-row gap-[10px] items-center'>
       <Heart/>
        <Notification/>
        <Setting/>
        <Profilepicture/>
        
    
    </div>
  )
}

export default Icons