import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Car2 from "../Dashboard/Cars/CarComponents/Carsss/Car1";
import Car1 from '../Dashboard/Cars/CarComponents/Carsss/Car3';
import Car3 from '../Dashboard/Cars/CarComponents/Carsss/Car3';

const ShowroomCars = () => {



const location=useLocation();
console.log();

  useEffect(() => {
    showroomcars();
  }, [])

  const [showroomcarsarray,setshowroomcarsarray]=useState('');
  const [totalCount,settotalCount]=useState("");

    const pageSize=36;



    async function showroomcars() {
      const Token=localStorage.getItem("Token");
        const baseLink=`http://localhost:5000/api/`
        const apiLink=`${baseLink}/car/getAll?showroomId=${location.state.showroomid}&pageSize=${pageSize}`;
     try {
        let showroomcarsdata=await axios.get(apiLink,{

          headers: {
            Authorization: `Bearer ${Token}`,
          }
          
        });
        setshowroomcarsarray(showroomcarsdata.data.data.data)
        settotalCount(showroomcarsdata.data.data.totalCount);
        console.log();
        toast.success(showroomcarsdata.data.message,{
          autoClose: 500,
        });
        
     } catch (error) {
        console.log("Showroom ",error);
     }








        
    }













console.log("Showroom array",showroomcarsarray);

  return (
    <span className='w-[100%] h-[100%] p-[5vmin]'>
      <h1 className='text-[5vmin] mb-[4vmin] text-center font-semibold'>Showroom Cars</h1>
      <p className="text-[2.6vmin] font-semibold">Total Cars : {totalCount ? totalCount : 'N/A'}</p>
    <div className='h-[100%] w-[100%]  flex flex-row flex-wrap gap-[3vmin] '>
    {showroomcarsarray? showroomcarsarray.map(function(showroom){

   
      return(

        <Car3 showroom={showroom} />

      )

    }): '' }
        
    </div>
    </span>
  )
}

export default ShowroomCars