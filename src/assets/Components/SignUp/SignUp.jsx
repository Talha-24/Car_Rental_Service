
import { useNavigate } from 'react-router-dom';
import style from '../../SideBarIcon/Styling'
import Section_two from '../Sign In/Section_two'
import Login from './Login'
import { FaArrowLeft } from "react-icons/fa6";
import { obj } from '../../Utils/RoutesPaths';
import Slider from '../Slider/Slider';

const SignUp = () => {
  return (
    <div className='flex flex-row signup w-[100%]'>
     <Slider/>
      <Login />
    </div>
  )
}

export default SignUp
