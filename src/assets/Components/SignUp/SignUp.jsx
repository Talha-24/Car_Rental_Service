
import Section from '../Common/Section'
import Login from './Login'

const SignUp = ({LoginHandler}) => {
  return (
    <div className='flex flex-row items-center justify-center signup'>
        <Section/>
        <Login LoginHandler={LoginHandler} />
    </div>
  )
}

export default SignUp