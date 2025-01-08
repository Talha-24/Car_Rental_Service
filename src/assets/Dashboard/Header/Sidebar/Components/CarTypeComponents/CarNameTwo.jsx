
const CarNameTwo = (propse) => {
  return (
    <>
    <div className="text text-gray-400 text-sm font-semibold flex flex-row  justify-start gap-[8px]">
        <input type="checkbox" className='bg-black border-2 border-gray-600 w-[14px] '/>   <span className='text-lg text-[#90A3BF]'>{propse.carname}</span>
        </div>
   </>
  )
}

export default CarNameTwo