
const CarNameThree = (propse) => {
  return (
    <>
    <div className="w-[100%] text text-gray-400 text-sm font-semibold flex flex-row items-center  justify-start gap-[1.2vmin]">
    <svg className="w-[3.2vmin] h-[3.2vmin]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 5.80863V5.81V14.19C19.5 15.9105 18.9888 17.2237 18.1057 18.1064C17.2226 18.989 15.9086 19.5 14.1871 19.5H5.8129C4.09136 19.5 2.7775 18.989 1.89445 18.1053C1.01137 17.2216 0.5 15.9059 0.5 14.18V5.81C0.5 4.08951 1.01115 2.77628 1.89423 1.89364C2.77734 1.01097 4.09135 0.5 5.8129 0.5H14.1971C15.9187 0.5 17.2325 1.01101 18.1143 1.89342C18.9959 2.77569 19.5047 4.08845 19.5 5.80863Z" stroke="#90A3BF"/></svg>
    <span className='text-[3.2vmin] text-[#90A3BF] w-[100%] inline-block'>{propse.carname}</span>
        </div>
   </>
  )
}

export default CarNameThree