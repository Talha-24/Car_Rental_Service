
import CarsContainer from '../Cars/CarsContainer'
import Footer from '../Footer/Footer'
import Header from './Header'
import Sidebar from './Sidebar/Sidebar'
import SideBar2 from './SideBar2/SideBar2'

const Dashboard = () => {
  return (
   <div className='bg-[#FFFFFF] w-[100%] flex flex-col'>
      <Header/>
 <div className='flex flex-row w-[100%]'>
       <Sidebar/>
       <CarsContainer/>
        </div>  
       <Footer/>
        </div>
        
        
    
  )
}

export default Dashboard