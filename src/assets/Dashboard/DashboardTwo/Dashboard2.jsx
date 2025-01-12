import CreateRentComponent from '../CreatingRent/CreateRentComponent'
import CreateRent from '../CreatingRent/CreateRent'
import SideBar2 from '../Header/SideBar2/SideBar2'
import Header from '../Header/Header'
import CarDetails from '../CreatingRent/CarDetails'
const Dashboard2 = () => {
  return (
    <>
    <div className='w-[100%] flex flex-col'>
      <Header/>
        <SideBar2/>
     <div className="flex flex-row  absolute top-[20%] left-[30%]">
        <div className='flex flex-col flex-end gap-[30px]'>
          <div className='flex flex-row gap-[5%] dd w-[100%]'>
        <CreateRentComponent/>
       <CarDetails/>
        </div>
        <CreateRent/>
        </div>
        
        

    </div>
     
    </div>
    </>
  )
}

export default Dashboard2