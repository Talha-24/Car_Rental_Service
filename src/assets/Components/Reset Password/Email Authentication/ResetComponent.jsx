import ResetPassword from './ResetPassword'
import SectionFour from './SectionFour'

const ResetComponent = () => {
  return (
    <div className='flex flex-row  w-[100%]   resetcomponent'>
        <SectionFour/>
       <ResetPassword/>
    </div>
  )
}

export default ResetComponent