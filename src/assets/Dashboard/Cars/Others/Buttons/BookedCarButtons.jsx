import React from 'react'

const BookedCarButtons = ({ setFilter }) => {

    return (
        <>
            <div id="btns" className="w-[100%] flex flex-row gap-[7vmin] px-[5vmin] pb-[8vmin]">
                <div className="flex flex-row items-center gap-[4vmin]">

                    <button onClick={() => {
                        let accepted = document.querySelector("#accepted");
                        let pending = document.querySelector("#pending");
                        let cancelled = document.querySelector("#cancelled");
                        let rejected = document.querySelector("#rejected");
                        pending.style.backgroundColor = '#FF4500';
                        pending.style.color = '#FFFFFF';
                        pending.style.border = 'none';
                        accepted.style.backgroundColor = '#FFFF';
                        accepted.style.color = '#B1BEDC';
                        accepted.style.border = '1px solid #90A3CD';
                        cancelled.style.border = '1px solid #90A3CD';
                        rejected.style.border = '1px solid #90A3CD';
                        cancelled.style.backgroundColor = '#FFFF';
                        cancelled.style.color = '#B1BEDC';
                        rejected.style.backgroundColor = '#FFFF';
                        rejected.style.color = '#B1BEDC';
                        let completed = document.querySelector("#completed");
                        completed.style.backgroundColor = `#FFFFFF`;
                        completed.style.color = '#90A3CD';
                        completed.style.border = '1px solid #90A3CD'
                        // let completed = document.querySelector("#completed");
                        // completed.style.backgroundColor = `#FFFFFF`;
                        // completed.style.color = '#B1BEDC';
                        setFilter("pending");
                    }} id='pending' className="bg-white text-[#90A3CD] py-[1.2vmin] px-[3vmin] text-[2.5vmin] rounded-full border-[1px] border-[#90A3CD] font-normal">Pending</button>
                    <button onClick={() => {
                        let accepted = document.querySelector("#accepted");
                        let pending = document.querySelector("#pending");
                        let cancelled = document.querySelector("#cancelled");
                        let rejected = document.querySelector("#rejected");
                        pending.style.backgroundColor = '#FFFF';
                        pending.style.color = '#B1BEDC';
                        cancelled.style.backgroundColor = '#FFFF';
                        cancelled.style.color = '#B1BEDC';
                        rejected.style.backgroundColor = '#FFFF';
                        rejected.style.color = '#B1BEDC';
                        accepted.style.backgroundColor = '#FC5C00'
                        accepted.style.color = '#FFFFFF'
                        accepted.style.border = 'none'
                        pending.style.border = '1px solid #90A3CD';
                        cancelled.style.border = '1px solid #90A3CD';
                        rejected.style.border = '1px solid #90A3CD';
                        let completed = document.querySelector("#completed");
                        completed.style.backgroundColor = `#FFFFFF`;
                        completed.style.color = '#90A3CD';
                        completed.style.border = '1px solid #90A3CD'
                        // let completed = document.querySelector("#completed");
                        // completed.style.backgroundColor = `#FFFFFF`;
                        // completed.style.color = '#B1BEDC';
                        // accepted.style.backgroundColor='#FC5C00';
                        // accepted.style.color='#FFFFFF';
                        // pending.style.backgroundColor='#FFFF';
                        // cancelled.style.backgroundColor='#FFFF';
                        // rejected.style.backgroundColor='#FFFF';
                        setFilter("accepted");
                    }} id='accepted' className="bg-white text-[#90A3CD] py-[1.2vmin] px-[3vmin] text-[2.5vmin] rounded-full border-[1px] border-[#90A3CD] font-normal">Accepted</button>
                </div>
                <div className="flex flex-row items-center gap-[4vmin]">
                    <button onClick={() => {
                        let accepted = document.querySelector("#accepted");
                        let pending = document.querySelector("#pending");
                        let cancelled = document.querySelector("#cancelled");
                        let rejected = document.querySelector("#rejected");
                        pending.style.backgroundColor = '#FFFF';
                        pending.style.color = '#B1BEDC';
                        cancelled.style.backgroundColor = '#FC5C00';
                        cancelled.style.color = '#FFFFFF';
                        cancelled.style.border = 'none';
                        accepted.style.border = '1px solid #90A3CD';
                        pending.style.border = '1px solid #90A3CD';
                        rejected.style.border = '1px solid #90A3CD';
                        rejected.style.backgroundColor = '#FFFF';
                        rejected.style.color = '#B1BEDC';
                        accepted.style.backgroundColor = '#FFFF'
                        accepted.style.color = '#B1BEDC'
                        let completed = document.querySelector("#completed");
                        completed.style.backgroundColor = `#FFFFFF`;
                        completed.style.color = '#90A3CD';
                        completed.style.border = '1px solid #90A3CD'
                        // let completed = document.querySelector("#completed");
                        // completed.style.backgroundColor = `#FFFFFF`;
                        // completed.style.color = '#B1BEDC';
                        setFilter("cancelled");
                    }} id='cancelled' className="bg-white text-[#90A3CD] py-[1.2vmin] px-[3vmin] text-[2.5vmin] rounded-full border-[1px] border-[#90A3CD] font-normal">Cancelled</button>

                    <button onClick={() => {
                        let accepted = document.querySelector("#accepted");
                        let pending = document.querySelector("#pending");
                        let cancelled = document.querySelector("#cancelled");
                        let rejected = document.querySelector("#rejected");
                        pending.style.backgroundColor = '#FFFF';
                        pending.style.color = '#B1BEDC';
                        cancelled.style.backgroundColor = '#FFFF';
                        cancelled.style.color = '#B1BEDC';
                        accepted.style.backgroundColor = '#FFFF'
                        accepted.style.color = '#B1BEDC'
                        rejected.style.backgroundColor = '#FC5C00';
                        rejected.style.color = '#FFFFFF';
                        rejected.style.border = 'none';
                        accepted.style.border = '1px solid #90A3CD';
                        cancelled.style.border = '1px solid #90A3CD';
                        pending.style.border = '1px solid #90A3CD';
                        let completed = document.querySelector("#completed");
                        completed.style.backgroundColor = `#FFFFFF`;
                        completed.style.color = '#90A3CD';
                        completed.style.border = '1px solid #90A3CD'
                        // let completed = document.querySelector("#completed");
                        // completed.style.backgroundColor = `#FFFFFF`;
                        // completed.style.color = '#B1BEDC';
                        setFilter("rejected");
                    }} id='rejected' className="bg-white text-[#90A3CD] py-[1.2vmin] px-[3vmin] text-[2.5vmin] rounded-full border-[1px] border-[#90A3CD] font-normal">Rejected</button>

                    <button onClick={() => {
                        let accepted = document.querySelector("#accepted");
                        let pending = document.querySelector("#pending");
                        let cancelled = document.querySelector("#cancelled");
                        let rejected = document.querySelector("#rejected");
                        let completed = document.querySelector("#completed");
                        completed.style.backgroundColor = `#FC5C00`;
                        completed.style.color = '#FFFFFF';
                        completed.style.border = '1px solid #90A3CD'
                        completed.style.border = 'none'
                        pending.style.backgroundColor = '#FFFF';
                        pending.style.color = '#B1BEDC';
                        pending.style.border = '1px solid #90A3CD';
                        cancelled.style.backgroundColor = '#FFFF';
                        cancelled.style.color = '#B1BEDC';
                        rejected.style.backgroundColor = '#FFFFFF';
                        rejected.style.color = '#B1BEDC';
                        rejected.style.border =  ' 1px solid #90A3CD';
                        accepted.style.backgroundColor = '#FFFF'
                        accepted.style.color = '#B1BEDC'
                        setFilter("completed");
                    }} id='completed' className="bg-white text-[#90A3CD] py-[1.2vmin] px-[3vmin] text-[2.5vmin] rounded-full border-[1px] border-[#90A3CD] font-normal">Completed</button>

                </div>
            </div>
        </>

    )
}

export default BookedCarButtons