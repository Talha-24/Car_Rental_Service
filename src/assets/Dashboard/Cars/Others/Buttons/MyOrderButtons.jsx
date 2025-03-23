import React, { useState } from 'react'

const MyOrderButtons = ({ setFilter }) => {

  const [index, setIndex] = useState(null);

  
  let button = [
    { title: 'Pending', id: 'pending' },
    { title: 'Accepted', id: 'accepted' },
    { title: 'Rejected', id: 'rejected' },
    { title: 'Completed', id: 'completed' },
  ]



  return (
    <div id="btns" className="w-[100%] flex flex-row gap-[7vmin] px-[5vmin] pb-[8vmin] flex-wrap">

      {button ? button.map(function (btn, idx) {

        return (
          <button onClick={() => {
            setIndex(idx);
            setFilter(btn.id);
          }} id='pending' className={`text-[#808080]  py-[6px] px-[20px] text-[16px] rounded-full border-[1px] border-[#808080] font-normal ${index == idx ? 'bg-[#FC4500] text-[white]' : 'bg-white'}`}>{btn.title}</button>

        )
      }) : ''}
    </div>
  )
}

export default MyOrderButtons