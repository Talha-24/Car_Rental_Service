
const Buttons = () => {
  return (
    <div className="w-[100%] ">
    <div id="btns" className="w-[100%] flex flex-row gap-[7vmin] px-[5vmin] py-[1.5vmin]">
      <div className="flex flex-row items-center gap-[4vmin]">
    <button className="bg-white text-[#90A3CD] py-[1vmin] px-[4vmin] text-[2vmin] font-semibold rounded-sm border-[1px] border-[#90A3CD]  ">All</button>
    <button className="bg-white text-[#90A3CD] py-[1vmin] px-[4vmin] text-[2vmin] font-semibold rounded-sm border-[1px] border-[#90A3CD]  ">Petrol</button>
    </div>
    <div className="flex flex-row items-center gap-[4vmin]">
    <button className="bg-white text-[#90A3CD] py-[1vmin] px-[4vmin] text-[2vmin] font-semibold rounded-sm border-[1px] border-[#90A3CD]  ">Diesel</button>
    <button className="bg-white text-[#90A3CD] py-[1vmin] px-[4vmin] text-[2vmin] font-semibold rounded-sm border-[1px] border-[#90A3CD]  ">CNG</button>
    </div>
    </div>
</div>
  )
}

export default Buttons