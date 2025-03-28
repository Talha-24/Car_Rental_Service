import axios from "axios";
import { useState } from "react"
import serverRequestHandler from "../../../Utils/http";
import { useNavigate } from "react-router-dom";

const SearchBar = ({  }) => {


  const [search,setsearch]=useState('');
  const navigation=useNavigate();

  return (
    <div id='input' className='w-[308px] bg-white rounded-full'>
      <div  className='border-[1px] border-[#f8c75e] rounded-full w-[100%] flex flex-row justify-between items-center h-[40px] cursor-pointer' >
        <input  type="text" value={search} onKeyUp={(e)=>{
          if(e.keyCode == 13){navigation("/showroomowner/homecars/searchedcars",{state: search});return;}
        }} onChange={(e)=>{
          setsearch(e.target.value)     
        
        } 
          } placeholder='Search' className='w-[241.17px] h-[100%] pl-[15px] outline-none text-[#000000] text-[16px]   rounded-full  border-[#FDF7EC] placeholder:text-[14px] placeholder:  placeholder:text-[#cbcbcb] font-normal' />
        <div onClick={()=>{
               navigation("/showroomowner/homecars/searchedcars",{state: search});
        }} className="w-[45px] h-[40px] bg-[#FC4500] flex items-center justify-center  rounded-r-full">
          <img  className="w-[16px] h-[16px] text-white cursor-pointer" src="https://static-00.iconduck.com/assets.00/search-icon-2044x2048-psdrpqwp.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default SearchBar