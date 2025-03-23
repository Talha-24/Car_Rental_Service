import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { obj } from '../../../../Utils/RoutesPaths';
import Toast from '../../../../Toaster/Toaster';

const ShowroomCarButtons = ({ setFilter }) => {
    const showroomcarbuttons = useRef();
    const [index, setIndex] = useState(0);
    const location = useLocation();
    const paddingHandler = () => {
        if (location.pathname == obj.superadminhome || location.pathname == obj.superadmincars) {
            showroomcarbuttons.current.style.paddingTop = '14vmin';
            return;
        }
    }
    useEffect(() => {
        paddingHandler();

    }, [])


    const Buttons = [{ label: "Pending", status: "pending", },
    { label: "Approved", status: "approved", },
    { label: "Rejected", status: "rejected", },

    ]




    return (
        <>
            <div ref={showroomcarbuttons} className="flex flex-row items-center gap-[10px] pb-[20px] flex-wrap">
                {Buttons ? Buttons.map(function (button, idx) {
                    return (
                        <>
                            <button key={idx} onClick={() => {
                                setIndex(idx);
                                setFilter(button.status)
                            }} id={button.status} className={`text-[#7f7f7f]  w-[100px] text-[0.9rem] rounded-full border-[1px] border-[#777777] font-normal ${index == idx ? 'bg-[#FC4500] text-white' : 'bg-[#ffffff]'}`}>{button.status}</button>
                        </>

                    )

                }) : ''}
            </div>
        </>
    )
}

export default ShowroomCarButtons