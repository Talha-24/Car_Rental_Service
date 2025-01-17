import Registeration from './Registeration'
import Section_two from './Section_two'

const Signin = (propse) => {
  return (
    <div  className='flex flex-row w-[100%] signin'>
      <Section_two/>
      <Registeration setUser={propse.setUser} />

    </div>
  )
}

export default Signin