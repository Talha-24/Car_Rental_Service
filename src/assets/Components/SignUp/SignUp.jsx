
import Section from '../Common/Section'
import Login from './Login'

const SignUp = (propse) => {
  return (
    <div className='flex flex-row items-center justify-center signup w-[100%]'>
        <Section/>
        <Login setData={propse.setData} LoginHandler={propse.LoginHandler}/>
    </div>
  )
}

export default SignUp
