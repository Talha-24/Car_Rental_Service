import React from 'react'

const UserSelection = () => {
  return (
    <div className='flex flex-col items-center  justify-center w-[100%] bg-white h-[100vh] userselection'>
        <div className='flex flex-col gap-[2vmin] w-[80%]'>
        <button  className='bg-[#FF5C1E] w-[100%] py-[1.8vmin] rounded-[0.5vmin] text-white text-[3vmin] font-semibold'>Rent a Car</button>
        <button className='bg-[#FF5C1E] w-[100%] rounded-[0.5vmin] py-[1.8vmin] text-white text-[3vmin] font-semibold'>Own a Showroom</button>
        </div>
        
    </div>
  )
}

export default UserSelection