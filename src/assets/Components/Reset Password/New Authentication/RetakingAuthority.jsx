import { useNavigate } from 'react-router-dom'
import NewPassword from './NewPassword'
import Slider from '../../Slider/Slider'
const RetakingAuthority = () => {
  return (
    <div className='flex flex-row w-[100%] items-center justify-center reenterpassword'>
      <Slider/>
      <NewPassword />
    </div>
  )
}

export default RetakingAuthority
