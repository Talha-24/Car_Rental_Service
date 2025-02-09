import { useState } from 'react'
import Registeration from './Registeration'
import Section_two from './Section_two'

const Signin = (propse) => {
  const [role, setrole] = useState('');
  return (
    <div  className='flex flex-row w-[100%] signin'>
      <Section_two/>
      <Registeration setrole={setrole} setUser={propse.setUser} />

    </div>
  )
}

export default Signin