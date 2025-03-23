
import CarsContainer from '../Cars/CarsContainer'
import NavBar from '../Dashboard 3/Navbar/NavBar.jsx'
import Footer from '../Footer/Footer'
import Header from './Header'
const Dashboard = (propse) => {
  return (
   <div className='bg-[#FFFFFF] w-[100%] flex flex-col'>
      <Header/>
 <div className='flex flex-row w-[100%]'>
     <NavBar/>
       <CarsContainer setselectUser={propse.setselectUser} />
        </div>  
       <Footer/>
        </div>
        
        
    
  )
}

export default Dashboard