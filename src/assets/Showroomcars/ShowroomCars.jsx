import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Car1 from '../Dashboard/Cars/CarComponents/Carsss/Car1.jsx';
import serverRequestHandler from '../Utils/http.js';
import Toast from '../Toaster/Toaster.js';

const ShowroomCars = () => {

  const location = useLocation();
  useEffect(() => {
    showroomcars();
  }, [])

  const [showroomcarsarray, setshowroomcarsarray] = useState('');
  const [totalCount, settotalCount] = useState("");

  const pageSize = 36;



  async function showroomcars() {
    const Token = localStorage.getItem("Token");
    const endPoint = `/car/getAll?showroomId=${location.state.showroomid}&pageSize=${pageSize}`;
    const method = `get`;
    try {
      let showroomcarsdata = await serverRequestHandler(endPoint, method);
      setshowroomcarsarray(showroomcarsdata.data)
      settotalCount(showroomcarsdata.totalCount);
      console.log();
      toast.success(showroomcarsdata.message ?? "Succeeded", {
        autoClose: 500,
      });
    } catch (error) {
      Toast(error.message);
    }
  }
  return (
    <span className='w-[100%] h-[100%] p-[5vmin]'>
      <h1 className='text-[5vmin] mb-[4vmin] text-center font-semibold'>Showroom Cars</h1>
      <p className="text-[2.6vmin] font-semibold">Total Cars : {totalCount ? totalCount : 'N/A'}</p>
      <div className='w-[100%]  flex flex-row flex-wrap gap-[3vmin] '>
        {showroomcarsarray ? showroomcarsarray.map(function (showroom, idx) {

          return (
            <Car1 isRentNow={true} key={idx} car={showroom} />
          )
        }) : ''}
      </div>
    </span>
  )
}

export default ShowroomCars