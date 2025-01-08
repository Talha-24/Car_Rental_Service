import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import BookingImage from './BookingImage'

const BookingPending = () => {
  return (
    <>
    <Header/>
    <div className='flex items-center justify-center w-[100%] pt-10 min-h-[100vmin] bg-[#F9F9F9]'>
        <div className='bg-[#FFFFFF] py-[5vmax] px-[10vmax] w-[60vmax] flex flex-col items-center justify-center bookingcontainer'>
            <BookingImage/>
            <div className='mt-10'>
            <h3 className='text-black font-bold text-center  text-xl'>Booking</h3>
            <h3 className='text-black font-bold text-center  text-xl'>is</h3>
            <h3 className='text-black font-bold text-center  text-xl'>proceded..</h3>
            </div>
            <div className='flex flex-row gap-[20px] pt-[30px]'>
            <button className='bg-[#FF5C00] text-white rounded-sm text-sm py-[4px] px-[8px]'>Go Back</button>
            <button className='bg-[#FF5C00] text-white rounded-sm text-sm py-[4px] px-[8px]'>View Booking</button>
            </div>
            
            
        </div>
    </div>
    <Footer/>
    
    </>
  )
}

export default BookingPending