import React from 'react'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'

const Pagenation = (propse) => {












  return (
    <>
    <div id="pagination" className="flex flex-row items-center justify-end w-[100%] mt-[10px]">
                <div className="flex flex-row items-center mr-[8px]">
                    <span className="flex flex-row">
                        <IoMdArrowDropleft fontSize={'1.4rem'} color="#D4D4D5" />
                        <p className="text-[#D4D4D5]">Previous</p>
                    </span>
                </div>

            <div className='justify-end flex flex-row flex-wrap'>
             {Array.from({ length:  propse.totalpages??'2' }, (_, idx) => {
                    return <button key={idx} onClick={() => {
                        propse.setpageno(idx+1);
                    }} className="m-[2px] p-[2px] w-[24px] font-normal rounded">{idx + 1}</button>
                })}
                </div>

                <div  className="flex flex-row items-center ml-[8px]">
                    <p className="text-[#D4D4D5]">Next</p>
                    <span className="flex flex-row items-center">
                    <IoMdArrowDropright color="#D4D4D5" fontSize={'1.4rem'} />
                    </span>
                </div>
                <select className='border-[1px] border-[#FC4500] rounded-sm outline-none' name="" id="" onChange={(e)=>{propse.setnoofcars(e.target.value); }}>
                <option value="3">3</option>
                <option value="10">10</option>
                <option value="22">22</option>
                <option value="40">40</option>
                <option value="60">60</option>
                <option value="100">100</option>


                </select>

            </div>
            </>
  )
}

export default Pagenation
