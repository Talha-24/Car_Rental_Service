import CreateRentComponent from '../CreatingRent/CreateRentComponent'
import CreateRent from '../CreatingRent/CreateRent'
import SideBar2 from '../Header/SideBar2/SideBar2'
import Header from '../Header/Header'
import CarDetails from '../CreatingRent/CarDetails'
import Footer from '../Footer/Footer'
const Dashboard2 = () => {
  return (
    <>
    <div className='w-[100%] flex flex-col'>
      <Header/>
     <div className="flex flex-row w-[100%]">
     <SideBar2/>
        <div className='flex flex-col flex-start gap-[4vmin] bg-[#F6F7F9] py-[10vmin] px-[5vmin] w-[100%]'>
             <div className='flex flex-row dd w-[100%]'>
               <CreateRentComponent/>
               <CarDetails/>
             </div>
            <div className='w-[100%]'>
            <h2 className='text-[3vmin] font-semibold'>User Details</h2>
            <p className='text-[2vmin]'>Please enter your details!</p></div>
           <CreateRent/>
          </div>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default Dashboard2