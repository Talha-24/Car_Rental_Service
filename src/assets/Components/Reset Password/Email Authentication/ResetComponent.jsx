import ResetPassword from './ResetPassword'
import SectionFour from './SectionFour'

const ResetComponent = () => {
  return (
    <div className='flex flex-row items-center  justify-center resetcomponent'>
        <SectionFour/>
       <ResetPassword/>
    </div>
  )
}

export default ResetComponent