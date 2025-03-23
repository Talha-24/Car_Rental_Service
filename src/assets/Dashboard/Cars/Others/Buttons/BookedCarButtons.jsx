import React from 'react'

const BookedCarButtons = ({ setFilter }) => {

    return (
        <>
            <div id="btns" className="w-[100%]  py-[50px] gap-[20px] px-[20px] pb-[40px]">
                <div className="flex flex-row flex-wrap items-center gap-[20px]">
                    <button onClick={() => {
                        let accepted = document.querySelector("#accepted");
                        let pending = document.querySelector("#pending");
                        let cancelled = document.querySelector("#cancelled");
                        let rejected = document.querySelector("#rejected");
                        pending.style.backgroundColor = '#FF4500';
                        pending.style.color = '#FFFFFF';
                        pending.style.border = 'none';
                        accepted.style.backgroundColor = '#FFFF';
                        accepted.style.color = '#808080';
                        accepted.style.border = '1px solid #808080';
                        cancelled.style.border = '1px solid #808080';
                        rejected.style.border = '1px solid #808080';
                        cancelled.style.backgroundColor = '#FFFF';
                        cancelled.style.color = '#808080';
                        rejected.style.backgroundColor = '#FFFF';
                        rejected.style.color = '#808080';
                        let completed = document.querySelector("#completed");
                        completed.style.backgroundColor = `#FFFFFF`;
                        completed.style.color = '#808080';
                        completed.style.border = '1px solid #808080'
                        setFilter("pending");
                    }} id='pending' className="bg-white text-[#808080]  py-[6px] px-[20px] text-[16px] rounded-full border-[1px] border-[#808080] font-normal">Pending</button>
                    <button onClick={() => {
                        let accepted = document.querySelector("#accepted");
                        let pending = document.querySelector("#pending");
                        let cancelled = document.querySelector("#cancelled");
                        let rejected = document.querySelector("#rejected");
                        pending.style.backgroundColor = '#FFFF';
                        pending.style.color = '#808080';
                        cancelled.style.backgroundColor = '#FFFF';
                        cancelled.style.color = '#808080';
                        rejected.style.backgroundColor = '#FFFF';
                        rejected.style.color = '#808080';
                        accepted.style.backgroundColor = '#FC5C00'
                        accepted.style.color = '#FFFFFF'
                        accepted.style.border = 'none'
                        pending.style.border = '1px solid #808080';
                        cancelled.style.border = '1px solid #808080';
                        rejected.style.border = '1px solid #808080';
                        let completed = document.querySelector("#completed");
                        completed.style.backgroundColor = `#FFFFFF`;
                        completed.style.color = '#808080';
                        completed.style.border = '1px solid #808080'
                        setFilter("accepted");
                    }} id='accepted' className="bg-white text-[#808080]  py-[6px] px-[20px] text-[16px] rounded-full border-[1px] border-[#808080] font-normal">Accepted</button>
                    <button onClick={() => {
                        let accepted = document.querySelector("#accepted");
                        let pending = document.querySelector("#pending");
                        let cancelled = document.querySelector("#cancelled");
                        let rejected = document.querySelector("#rejected");
                        pending.style.backgroundColor = '#FFFF';
                        pending.style.color = '#808080';
                        cancelled.style.backgroundColor = '#FC5C00';
                        cancelled.style.color = '#FFFFFF';
                        cancelled.style.border = 'none';
                        accepted.style.border = '1px solid #808080';
                        pending.style.border = '1px solid #808080';
                        rejected.style.border = '1px solid #808080';
                        rejected.style.backgroundColor = '#FFFF';
                        rejected.style.color = '#808080';
                        accepted.style.backgroundColor = '#FFFF'
                        accepted.style.color = '#808080'
                        let completed = document.querySelector("#completed");
                        completed.style.backgroundColor = `#FFFFFF`;
                        completed.style.color = '#808080';
                        completed.style.border = '1px solid #808080'
                        setFilter("cancelled");
                    }} id='cancelled' className="bg-white text-[#808080]  py-[6px] px-[20px] text-[16px] rounded-full border-[1px] border-[#808080] font-normal">Cancelled</button>

                    <button onClick={() => {
                        let accepted = document.querySelector("#accepted");
                        let pending = document.querySelector("#pending");
                        let cancelled = document.querySelector("#cancelled");
                        let rejected = document.querySelector("#rejected");
                        pending.style.backgroundColor = '#FFFF';
                        pending.style.color = '#808080';
                        cancelled.style.backgroundColor = '#FFFF';
                        cancelled.style.color = '#808080';
                        accepted.style.backgroundColor = '#FFFF'
                        accepted.style.color = '#808080'
                        rejected.style.backgroundColor = '#FC5C00';
                        rejected.style.color = '#FFFFFF';
                        rejected.style.border = 'none';
                        accepted.style.border = '1px solid #808080';
                        cancelled.style.border = '1px solid #808080';
                        pending.style.border = '1px solid #808080';
                        let completed = document.querySelector("#completed");
                        completed.style.backgroundColor = `#FFFFFF`;
                        completed.style.color = '#808080';
                        completed.style.border = '1px solid #808080'
                        setFilter("rejected");
                    }} id='rejected' className="bg-white text-[#808080]  py-[6px] px-[20px] text-[16px] rounded-full border-[1px] border-[#808080] font-normal">Rejected</button>
                    <button onClick={() => {
                        let accepted = document.querySelector("#accepted");
                        let pending = document.querySelector("#pending");
                        let cancelled = document.querySelector("#cancelled");
                        let rejected = document.querySelector("#rejected");
                        let completed = document.querySelector("#completed");
                        completed.style.backgroundColor = `#FC5C00`;
                        completed.style.color = '#FFFFFF';
                        completed.style.border = '1px solid #808080'
                        completed.style.border = 'none'
                        pending.style.backgroundColor = '#FFFF';
                        pending.style.color = '#808080';
                        pending.style.border = '1px solid #808080';
                        cancelled.style.backgroundColor = '#FFFF';
                        cancelled.style.color = '#808080';
                        rejected.style.backgroundColor = '#FFFFFF';
                        rejected.style.color = '#808080';
                        rejected.style.border =  ' 1px solid #808080';
                        accepted.style.backgroundColor = '#FFFF'
                        accepted.style.color = '#808080'
                        setFilter("completed");
                    }} id='completed' className="bg-white text-[#808080] py-[6px] px-[20px] text-[16px] rounded-full border-[1px] border-[#808080] font-normal">Completed</button>

                </div>
            </div>
        </>

    )
}

export default BookedCarButtons