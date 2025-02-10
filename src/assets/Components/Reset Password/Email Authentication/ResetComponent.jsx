import ResetPassword from './ResetPassword'
import SectionFour from './SectionFour'

const ResetComponent = (propse) => {
  return (
    <div className='flex flex-row  w-[100%]   resetcomponent'>
        <SectionFour/>
       <ResetPassword  useremail={propse.useremail} setuserEmail={propse.setuserEmail}/>
    </div>
  )
}

export default ResetComponent