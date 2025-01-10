
const Logout = () => {
    return (
      <div className="flex flex-row gap-[4px] py-[6px] px-[7px] rounded mt-10">
         <span id="svg">
         <svg onClick={()=>{window.location.reload()}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.90002 7.55999C9.21002 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54" stroke="#90A3BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 12H3.62" stroke="#90A3BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.85 8.6499L2.5 11.9999L5.85 15.3499" stroke="#90A3BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


  
  
         </span>
         <p className=" text-[#90A3BF]">Log out</p>
          
      </div>
    )
  }
  
  export default Logout