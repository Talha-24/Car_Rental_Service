import SectionFour from '../Reset Password/Email Authentication/SectionFour'
import UserSelection from './UserSelection'

const SelectionComponent = (propse) => {

  return (
    <div className="flex w-[100%] flex-row items-center justify-center selectioncomponent">
        <SectionFour/>
        <UserSelection setRole={propse.setRole} setselectUser={propse.setselectUser} setUser={propse.setUser}/>
    </div>
  )
}

export default SelectionComponent