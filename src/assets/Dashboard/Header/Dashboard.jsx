import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar/Sidebar'
import CarsContainer from '../Cars/CarsContainer'

const Dashboard = () => {
  return (
    <div className='bg-black'>
        <Header/>
        <Sidebar/>
        <CarsContainer/>
        
        
    </div>
  )
}

export default Dashboard