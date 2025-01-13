import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import NavBar from './Navbar/NavBar'
import HomeCars from './Navbar/HomeCars'
const HomeCarRent = () => {
  return (
    <div className='bg-[#FFFFFF] w-[100%] flex flex-col'>
    <Header/>
<div className='flex flex-row w-[100%] bg-[#F6F7F9]'>
     <NavBar/>
     <HomeCars/>
      </div>  
     <Footer/>
      </div>
  )
}

export default HomeCarRent