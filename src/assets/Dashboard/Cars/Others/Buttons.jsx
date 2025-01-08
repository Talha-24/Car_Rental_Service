
const Buttons = () => {
  return (
    <div className="w-[100%] ">
    <div id="btns" className="w-[80%] flex flex-row gap-[30px] px-12 py-2">
    <button className="bg-white text-[#90A3CD] py-[6px] px-[24px] text-sm font-semibold rounded-sm border-[1px] border-[#90A3CD]  ">All</button>
    <button className="bg-white text-[#90A3CD] py-[6px] px-[24px] text-sm font-semibold rounded-sm border-[1px] border-[#90A3CD]  ">Petrol</button>
    <button className="bg-white text-[#90A3CD] py-[6px] px-[24px] text-sm font-semibold rounded-sm border-[1px] border-[#90A3CD]  ">Diesel</button>
    <button className="bg-white text-[#90A3CD] py-[6px] px-[24px] text-sm font-semibold rounded-sm border-[1px] border-[#90A3CD]  ">CNG</button>
    </div>
</div>
  )
}

export default Buttons