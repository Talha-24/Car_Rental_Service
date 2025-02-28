import CreateRentComponent from '../CreatingRent/CreateRentComponent'
import CreateRent from '../CreatingRent/CreateRent'
import SideBar2 from '../Header/SideBar2/SideBar2'
import CarDetails from '../CreatingRent/CarDetails'
import Footer from '../Footer/Footer'
import "./RentDetails.css"
import UserHeader from '../Header/UserHeader'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
const Dashboard2 = () => {
  const location = useLocation();
  console.log("Location", location);
  const [details, setdetails] = useState(null);
  const [carId, setcarId] = useState(location.state.id ? location.state.id.carId : '');
  const [detailsId, setdetailsId] = useState(location.state.id ? location.state.id.detailsId : '');
  const [personDetails, setpersonDetails] = useState('');
  const [pictures, setPictures] = useState('');

  return (
    <>
      <div className='w-[100%] flex flex-col'>
        <div className="flex flex-row w-[100%]">
          <div className='flex flex-col flex-start gap-[4vmin] bg-[#F6F7F9] py-[10vmin] px-[5vmin] w-[100%]'>
            <div className='flex flex-row gap-[5%] dd w-[100%]'>

              <CreateRentComponent data={location.state.data?? ''} pictures={pictures} id={location.state.id} />
              <CarDetails data={location.state.data?? ''} setPictures={setPictures} id={location.state.id} carId={carId ?? ''} setpersonDetails={setpersonDetails} peronDetails={personDetails} />

            </div>
            <div className='w-[100%]'>
              <h2 className='text-[3vmin] font-semibold'>User Details</h2>
              <p className='text-[2vmin]'>Please enter your details!</p></div>

            <CreateRent data={location.state.data?? ''} detailsId={detailsId} personDetails={personDetails ?? ''} />

          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard2