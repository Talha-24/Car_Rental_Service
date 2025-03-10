import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';

const ShowroomCarButtons = ({ setFilter }) => {
    const showroomcarbuttons = useRef();

    const location = useLocation();
    const paddingHandler = () => {
        if (location.pathname == '/showroomowner/showrooms' || location.pathname == '/showroomowner/cars') {
            showroomcarbuttons.current.style.paddingTop = '14vmin';
        }
    }
    useEffect(() => {
        paddingHandler();

    }, [])




    return (
        <>


            <div ref={showroomcarbuttons} className="flex flex-row items-center gap-[4vmin] pb-[20px]">
                <button onClick={() => {
                    setFilter("pending");
                    localStorage.setItem("CarStatus","pending");
                    let pending = document.querySelector("#pending");
                    let approved = document.querySelector("#approved");
                    let rejected = document.querySelector("#rejected");
                    pending.style.backgroundColor = '#FC4500';
                    pending.style.color = '#FFFFFF';
                    pending.style.border = 'none';
                    approved.style.backgroundColor = '#FFFF';
                    approved.style.color = '#7f7f7f';
                    approved.style.border = '1px solid #777777';
                    rejected.style.backgroundColor = '#FFFF';
                    rejected.style.color = '#7f7f7f';
                    rejected.style.border = '1px solid #777777'
                }} id='pending' className="bg-white text-[#7f7f7f]  w-[85px] text-[0.9rem] rounded-full border-[1px] border-[#777777] font-normal">Pending</button>

                <button onClick={() => {
                    setFilter("approved");
                    localStorage.setItem("CarStatus", "approved");
                    let pending = document.querySelector("#pending");
                    let approved = document.querySelector("#approved");
                    let rejected = document.querySelector("#rejected");
                    pending.style.border = '1px solid #777777'
                    approved.style.border = '1px solid #777777'
                    pending.style.backgroundColor = '#FFFF';
                    pending.style.color = '#7f7f7f';
                    approved.style.backgroundColor = '#FC4500';
                    approved.style.color = '#FFFFFF';
                    approved.style.border = 'none';
                    rejected.style.backgroundColor = '#FFFF';
                    rejected.style.color = '#7f7f7f';
                    rejected.style.border = '1px solid #777777';

                    // accepted.style.backgroundColor = '#FC4500';

                    // accepted.style.color = '#FFFFFF';



                }} id='approved' className="bg-white  text-[#727272]  w-[95px] text-[0.9rem] rounded-full border-[1px] border-[#777777] font-normal">Approved</button>
                <button onClick={() => {
                    setFilter("rejected");
                    localStorage.setItem("CarStatus", 'rejected');
                    let pending = document.querySelector("#pending");
                    let approved = document.querySelector("#approved");
                    let rejected = document.querySelector("#rejected");
                    pending.style.border = '1px solid #777777'
                    approved.style.border = '1px solid #777777'
                    pending.style.backgroundColor = '#FFFF';
                    pending.style.color = '#7f7f7f';
                    approved.style.backgroundColor = '#FFFF';
                    approved.style.color = '#7f7f7f';
                    rejected.style.backgroundColor = '#FC4500';
                    rejected.style.color = '#FFFFFF';
                    rejected.style.border = 'none';
                }} id='rejected' className="bg-white text-[#7f7f7f]  w-[85px] text-[0.9rem] rounded-full border-[1px] border-[#777777] font-normal">Rejected</button>
            </div>








        </>
    )
}

export default ShowroomCarButtons