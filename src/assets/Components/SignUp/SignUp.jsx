
import Section from '../Common/Section'
import Login from './Login'

const SignUp = (propse) => {
  return (
    <div className='flex flex-row items-center justify-center signup w-[100%]'>
        <Section/>
        <Login LoginHandler={propse.LoginHandler} setUser={propse.setUser} />

    </div>
  )
}

export default SignUp
