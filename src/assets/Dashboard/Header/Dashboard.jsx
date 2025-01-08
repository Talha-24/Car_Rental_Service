import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar/Sidebar'
import CarsContainer from '../Cars/CarsContainer'

const Dashboard = () => {
  return (
   <div className=''>
        {/* <Header/> */}
        <div className='flex flex-row'>
        <Sidebar/>
        <CarsContainer/>
        </div>
        </div>
        
        
    
  )
}

export default Dashboard