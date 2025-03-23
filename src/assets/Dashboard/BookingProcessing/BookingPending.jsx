import Footer from '../Footer/Footer'
import BookingImage from './BookingImage'
import UserHeader from '../Header/UserHeader'
import { useNavigate } from 'react-router-dom'
import { obj } from '../../Utils/RoutesPaths'

const BookingPending = () => {

  const moveTo = useNavigate();

  
  return (
    <>
      <div className='flex items-center justify-start flex-col w-[100%] h-[100%]   bg-[#FFFFFF]'>
        <div className='w-[80%] rounded-lg flex-col  flex items-center gap-[20px] bg-[#FFFFFF] p-[20vmin]'>
          <div className='bg-[#FFFFFF] rounded-lg border-[0.05vmin] py-[20px] px-[20px] w-[100%] flex flex-col items-center justify-center bookingcontainer'>
            <BookingImage />
            <div className='border-black'>
              <h3 className='text-black font-bold text-center  text-[3vmin]'>Booking</h3>
              <h3 className='text-black font-bold text-center  text-[3vmin]'>is</h3>
              <h3 className='text-black font-bold text-center  text-[3vmin]'>processed..</h3>
            </div>
          </div>
          <div className='flex flex-row gap-[20px] w-[100%] justify-center'>
            <button onClick={() => { moveTo(-2);}} className='bg-[#FF4500] text-white rounded text-[0.8rem] h-[33px] w-[90px]'>Go Home</button>
            <button onClick={() => { moveTo(obj.bookedcars);}} className='bg-[#FF4500] text-white rounded text-[0.8rem] h-[33px] w-[120px]'>View Booking</button>
          </div>
        </div>
      </div>


    </>
  )
}

export default BookingPending