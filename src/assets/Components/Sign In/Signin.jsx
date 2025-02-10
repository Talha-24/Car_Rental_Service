import { useState } from 'react'
import Registeration from './Registeration'
import Section_two from './Section_two'

const Signin = (propse) => {
  return (
    <div  className='flex flex-row w-[100%] signin items-center justify-center'>
      <Section_two/>
      <Registeration role={propse.role}  setUser={propse.setUser} />

    </div>
  )
}

export default Signin