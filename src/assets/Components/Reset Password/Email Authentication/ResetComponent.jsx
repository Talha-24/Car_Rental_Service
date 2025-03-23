import { useNavigate } from 'react-router-dom'
import Section_two from '../../Sign In/Section_two'
import ResetPassword from './ResetPassword'
import Slider from '../../Slider/Slider'
const ResetComponent = ({useremail,setuserEmail}) => {

  return (
    <div className='flex flex-row  w-[100%] resetcomponent'>
       <Slider/>
       <ResetPassword  useremail={useremail} setuserEmail={setuserEmail}/>
    </div>
  )
}

export default ResetComponent