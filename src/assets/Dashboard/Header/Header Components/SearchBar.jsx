import { useState } from "react"
const SearchBar = ({ openFilter }) => {





  return (
    <div className='w-[308px] bg-white rounded-full'>
      <div id="input" className='border-[1px] border-[#f8c75e] rounded-full w-[100%] flex flex-row justify-between items-center h-[40px]' >
        <input type="text" placeholder='Search' className='w-[241.17px] h-[100%] pl-[15px] outline-none text-[#000000] text-[16px]   rounded-full  border-[#FDF7EC] placeholder:text-[14px] placeholder:  placeholder:text-[#cbcbcb] font-normal' />
        <div className="w-[45px] h-[40px] bg-[#FC4500] flex items-center justify-center  rounded-r-full">
          <img className="w-[16px] h-[16px] text-white cursor-pointer" src="https://static-00.iconduck.com/assets.00/search-icon-2044x2048-psdrpqwp.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default SearchBar