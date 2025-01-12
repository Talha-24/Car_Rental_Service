import Footer from '../Footer/Footer'
import BookingImage from './BookingImage'
import UserHeader from '../Header/UserHeader'

const BookingPending = () => {
  return (
    <>
    <div className='flex items-center flex-col gap-[3vmin] w-[100%] min-h-[100vmin]   bg-[#C3D4E966]'>
       <UserHeader/>
      <div className='flex flex-row items-center justify-around w-[100%] text-[#98A0AF] font-semibold'>
        <h6 className='text-[3vmin] text-[#90A3BF]'>Confirmation</h6>
        <h6 className='text-[3vmin] text-[#90A3BF]'>View All</h6>
        </div>
      <div className='w-[80%] rounded-lg flex-col  flex items-center gap-[8vmin] bg-[#FFFFFF] p-[20vmin]'>
        <div className='bg-[#FFFFFF] rounded-lg border-[0.05vmin] py-[10vmin] px-[10vmin] w-[100%] flex flex-col items-center justify-center bookingcontainer'>
          
            <BookingImage/>
            <div className='my-[8vmin] border-black'>
            <h3 className='text-black font-bold text-center  text-[3vmin]'>Booking</h3>
            <h3 className='text-black font-bold text-center  text-[3vmin]'>is</h3>
            <h3 className='text-black font-bold text-center  text-[3vmin]'>proceded..</h3>
            </div>
            
            
        </div>
        <div className='flex flex-row gap-[4vmin] w-[100%] justify-center'>
            <button className='bg-[#FF5C00] text-white rounded text-[2vmin] py-[1.5vmin] px-[2.4vmin] proceedbtns'>Go Back</button>
            <button className='bg-[#FF5C00] text-white rounded text-[2vmin] py-[1.5vmin] px-[2.4vmin] proceedbtns'>View Booking</button>
            </div>

      </div>
        <Footer/>
    </div>
    
    
    </>
  )
}

export default BookingPending