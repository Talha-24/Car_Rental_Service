import { useNavigate } from 'react-router-dom'
import style from '../../SideBarIcon/Styling'
import Section_two from '../Sign In/Section_two'
import UserSelection from './UserSelection'
import { FaArrowLeft } from 'react-icons/fa6'
import { obj } from '../../Utils/RoutesPaths'
import Slider from '../Slider/Slider'
const SelectionComponent = (prpse) => {

  return (
    <div className="flex w-[100%] h-[100%] flex-row items-center justify-center selectioncomponent">
        <Slider/>
        <UserSelection  />
    </div>
  )
}
  
export default SelectionComponent