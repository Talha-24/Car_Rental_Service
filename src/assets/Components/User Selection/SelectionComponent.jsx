import SectionFour from '../Reset Password/Email Authentication/SectionFour'
import UserSelection from './UserSelection'

const SelectionComponent = () => {
  return (
    <div className="flex w-[100%] flex-row items-center justify-center selectioncomponent">
        <SectionFour/>
        <UserSelection/>
    </div>
  )
}

export default SelectionComponent