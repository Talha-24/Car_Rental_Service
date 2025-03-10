import CreateRentComponent from '../CreatingRent/CreateRentComponent'
import CreateRent from '../CreatingRent/CreateRent'
import SideBar2 from '../Header/SideBar2/SideBar2'
import CarDetails from '../CreatingRent/CarDetails'
import Footer from '../Footer/Footer'
import "./RentDetails.css"
import UserHeader from '../Header/UserHeader'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
const Dashboard2 = () => {
  const location = useLocation();
  const [details, setdetails] = useState(null);
  const [carId, setcarId] = useState(location.state.id ? location.state.id.carId : '');
  const [detailsId, setdetailsId] = useState(location.state.id?.detailsId ?? location.state.id);
  const [personDetails, setpersonDetails] = useState('');
  const [pictures, setPictures] = useState('');
  const [rentPrice, setrentPrice] = useState();



  const stylehandler = () => {
    if (location.pathname == '/showroomowner/showroomcars/cardetails') {
      let styling = document.querySelector("#rentdetails");
      styling.style.display = 'none';
    }
  }
  return (
    <>
      <div className='w-[100%] flex flex-col'>
        <div className="flex flex-row w-[100%]">
          <div className='flex flex-col flex-start gap-[4vmin] bg-[#F6F7F9] py-[10vmin] px-[5vmin] w-[100%]'>
            <div id='cardetails' className='flex flex-row gap-[5%] dd w-[100%]'>
              <CreateRentComponent setpersonDetails={setpersonDetails} data={location.state.data ?? ''} pictures={pictures} id={ location.state.id??  location.state.id?.carId ?? location.state?.id?.detailsId } />
              <CarDetails setrentPrice={setrentPrice} data={location.state.data ?? ''} setPictures={setPictures} id={location.state.id?.detailsId ?? location.state.id} carId={carId ?? location.state.id?.carId} setpersonDetails={setpersonDetails} peronDetails={personDetails} />
            </div>
            {location.pathname == '/showroomowner/showroomcars/cardetails' ? '' : <>

              <div className='w-[100%]'>
                <h2 className='text-[3vmin] font-semibold'>User Details</h2>
                <p className='text-[2vmin]'>Please enter your details!</p></div>

              <CreateRent rentPrice={rentPrice} data={location.state.data ?? ''} detailsId={detailsId} personDetails={personDetails ?? ''} />

            </>}


          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard2