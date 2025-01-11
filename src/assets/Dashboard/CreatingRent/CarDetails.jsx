
const CarDetails = () => {
    return (
  <div className="flex flex-row w-[100%]">
      <div className="flex flex-col gap-[10px]">
       <div className="px-[20px] flex flex-col justify-between items-center bg-[#FFFFFF] border-[1px] border-[#dadada] rounded min-h-[230px] w-[300px] py-2">
           <div className="flex flex-row justify-between items-center w-[100%] "><h6 className="text-2xl font-semibold text-black">Amar Haroon</h6><svg onClick={(e)=>{console.log(e.target)}} width="18" height="20" id='svg' viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M11.62 18.8101C11.28 18.9301 10.72 18.9301 10.38 18.8101C7.48 17.8201 1 13.6901 1 6.6901C1 3.6001 3.49 1.1001 6.56 1.1001C8.38 1.1001 9.99 1.9801 11 3.3401C12.01 1.9801 13.63 1.1001 15.44 1.1001C18.51 1.1001 21 3.6001 21 6.6901C21 13.6901 14.52 17.8201 11.62 18.8101Z" stroke="#90A3BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                                     </div>
<p>**** 423+ Reviews</p>
<p className="py-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto qui voluptatum nesciunt officia unde, perferendis.</p>
<div id="cardetails" className="flex flex-col gap-[20px]">
<p className="w-[100%] text-[#9CA3AF] inline-block">Typecar : <b className="text-[#111] font-semibold ">sport</b> Capacity : <b className="text-[#111] font-semibold">2 Person</b></p>
<p className="w-[100%] text-[#9CA3AF] inline-block">Steering : <b className="text-[#111]  font-semibold">manual</b> Fuel : <b className="text-[#111] font-semibold">petrol</b></p>
</div>
      </div>
  </div>
  <div className="">
  {/* <CreateRent/>  */}
  
  </div>
      
        
        
      </div>
    )
  }
  
  export default CarDetails