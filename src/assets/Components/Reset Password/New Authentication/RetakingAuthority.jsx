import SectionFour from '../Email Authentication/SectionFour'
import NewPassword from './NewPassword'

const RetakingAuthority = () => {
  return (
    <div className='flex flex-row w-[100%] items-center justify-center reenterpassword'>
        <SectionFour/>
        <NewPassword/>
    </div>
  )
}

export default RetakingAuthority
