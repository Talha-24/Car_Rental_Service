import React from 'react'

const UserSelection = () => {
  return (
    <div className='flex flex-col items-center  justify-center w-[410px] bg-white h-[100vh] userselection'>
        <div className='flex flex-col gap-[10px]'>
        <button  className='bg-[#FF5C1E] w-[260px] py-[6px] rounded-sm text-white text-sm font-semibold'>Rent a Car</button>
        <button className='bg-[#FF5C1E] w-[260px] rounded-sm py-[6px] text-white text-sm font-semibold'>Own a Showroom</button>
        </div>
        
    </div>
  )
}

export default UserSelection