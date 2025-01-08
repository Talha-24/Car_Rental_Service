
import Header from './Header'
import Sidebar from './Sidebar/Sidebar'
import CarsContainer from "../Cars/CarsContainer"

const Dashboard = () => {
  return (
   <div className=''>
      <Header/>
 <div className='flex flex-row w-[100vh]'>
        <Sidebar/>
        <CarsContainer/>
        

        </div>  
      

        </div>
        
        
    
  )
}

export default Dashboard