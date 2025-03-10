
import Section from '../Common/Section'
import Section_two from '../Sign In/Section_two'
import Login from './Login'

const SignUp = (propse) => {
  return (
    <div className='flex flex-row items-center justify-center signup w-[100%]'>
        {/* <Section/> */}
        <Section_two/>
        <Login setData={propse.setData} LoginHandler={propse.LoginHandler}/>
    </div>
  )
}

export default SignUp
