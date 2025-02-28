import React from 'react'
import { Close, Modale, ModaleContent } from './FilterModale'

const FilterModale = ({closeFilter}) => {
  return (

    <Modale id='modale'>
      <ModaleContent id='modale-content'>
      <Close onClick={()=>{
        closeFilter();
      }} className='w-[4vmin] h-[4vmin] cursor-pointer' src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-coloricon-1/21/39-512.png" alt="" />

        <h1>Car Filter here</h1>
    
      </ModaleContent>

    </Modale>
  )
}

export default FilterModale