

const Car3 = (propse) => {
  return (
    <div className='w-[50%] h-[100%] border-[1px] border-[#dadada]  text-black bg-[#ffffff] rounded-lg flex flex-col justify-between p-[10px]'>
    <div id="logo" className='flex flex-row justify-between  items-center'><b>Koienigsegg</b>
    <svg onClick={(e)=>{console.log(e.target)}} className="w-[3vmin] h-[4vmin]" id='svg' viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.62 18.8101C11.28 18.9301 10.72 18.9301 10.38 18.8101C7.48 17.8201 1 13.6901 1 6.6901C1 3.6001 3.49 1.1001 6.56 1.1001C8.38 1.1001 9.99 1.9801 11 3.3401C12.01 1.9801 13.63 1.1001 15.44 1.1001C18.51 1.1001 21 3.6001 21 6.6901C21 13.6901 14.52 17.8201 11.62 18.8101Z" stroke="#90A3BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
   </div>
   <img className="my-8 w-[100%] h-[100%]" src="src\assets\Dashboard\Dashboard Cars\Car-3.png" alt="" />

   <div id="carinfo" className='flex flex-row items-center gap-[1vmin]'>
    <div className='flex flex-row items-center justify-evenly w-[100%]'>
<svg className="w-[3vmin] h-[4vmin]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.34 9.33L20.34 8.33C19.97 8.15 19.51 8.29 19.33 8.66C19.14 9.04 19.29 9.49 19.66 9.67L21.25 10.46V15.25L17.5 15.26V5C17.5 3 16.16 2 14.5 2H6.5C4.84 2 3.5 3 3.5 5V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H19C19.41 22.75 19.75 22.41 19.75 22C19.75 21.59 19.41 21.25 19 21.25H17.5V16.76L22 16.75C22.42 16.75 22.75 16.41 22.75 16V10C22.75 9.72 22.59 9.46 22.34 9.33ZM6 6.89C6 5.5 6.85 5 7.89 5H13.12C14.15 5 15 5.5 15 6.89V8.12C15 9.5 14.15 10 13.11 10H7.89C6.85 10 6 9.5 6 8.11V6.89ZM6.5 12.25H9.5C9.91 12.25 10.25 12.59 10.25 13C10.25 13.41 9.91 13.75 9.5 13.75H6.5C6.09 13.75 5.75 13.41 5.75 13C5.75 12.59 6.09 12.25 6.5 12.25Z" fill="#90A3BF"/>
</svg><p className='text-[#90A3BF] text-[12px]'>Mileage</p>
</div>

    <div className='flex flex-row items-center justify-evenly w-[100%]'>
    <svg className="w-[3vmin] h-[4vmin]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.53 0 10 0Z" fill="#90A3BF"/>
<rect x="2" y="2" width="16" height="16" rx="8" fill="white"/>
<path d="M10 4C6.688 4 4 6.688 4 10C4 13.312 6.688 16 10 16C13.312 16 16 13.312 16 10C16 6.688 13.318 4 10 4Z" fill="#90A3BF"/>
<rect x="6" y="6" width="8" height="8" rx="4" fill="white"/>
<rect x="9" y="15" width="2" height="4" fill="#90A3BF"/>
<rect x="15" y="9" width="4" height="2" fill="#90A3BF"/>
<rect x="1" y="9" width="4" height="2" fill="#90A3BF"/>
</svg><p className='text-[#90A3BF] text-[12px]'>Manual</p>
</div>


<div className='flex flex-row items-center justify-evenly w-[100%]'>
<svg className="w-[3vmin] h-[4vmin]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z" fill="#90A3BF"/>
<path d="M14.08 14.1499C11.29 12.2899 6.73996 12.2899 3.92996 14.1499C2.65996 14.9999 1.95996 16.1499 1.95996 17.3799C1.95996 18.6099 2.65996 19.7499 3.91996 20.5899C5.31996 21.5299 7.15996 21.9999 8.99996 21.9999C10.84 21.9999 12.68 21.5299 14.08 20.5899C15.34 19.7399 16.04 18.5999 16.04 17.3599C16.03 16.1299 15.34 14.9899 14.08 14.1499Z" fill="#90A3BF"/>
<path d="M19.9901 7.3401C20.1501 9.2801 18.7701 10.9801 16.8601 11.2101C16.8501 11.2101 16.8501 11.2101 16.8401 11.2101H16.8101C16.7501 11.2101 16.6901 11.2101 16.6401 11.2301C15.6701 11.2801 14.7801 10.9701 14.1101 10.4001C15.1401 9.4801 15.7301 8.1001 15.6101 6.6001C15.5401 5.7901 15.2601 5.0501 14.8401 4.4201C15.2201 4.2301 15.6601 4.1101 16.1101 4.0701C18.0701 3.9001 19.8201 5.3601 19.9901 7.3401Z" fill="#90A3BF"/>
<path d="M21.99 16.5899C21.91 17.5599 21.29 18.3999 20.25 18.9699C19.25 19.5199 17.99 19.7799 16.74 19.7499C17.46 19.0999 17.88 18.2899 17.96 17.4299C18.06 16.1899 17.47 14.9999 16.29 14.0499C15.62 13.5199 14.84 13.0999 13.99 12.7899C16.2 12.1499 18.98 12.5799 20.69 13.9599C21.61 14.6999 22.08 15.6299 21.99 16.5899Z" fill="#90A3BF"/>
</svg><p className='text-[#90A3BF] text-[12px]'>Driver</p>
</div>
    </div>
    <div className='flex flex-col gap-[1vmin]  w-[100%]'>
    <p className='font-bold w-[100%] inline-block '> 33,000/day</p>
   
    <button onClick={()=>{
      propse.setselectUser('selectacar');
    }} className='py-[1vmin] px-[1.4vmin] bg-[#FF5C1E] rounded-[0.5vmin] text-white text-[12px] font-semibold w-[100%]'>Rent Now</button>
   </div>
</div>
  )
}

export default Car3