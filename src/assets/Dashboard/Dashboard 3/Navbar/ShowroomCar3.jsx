import { useEffect, useState } from "react";
import "./car.css"
import axios from "axios";
import Car1 from "../../Cars/CarComponents/Carsss/Car1";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import serverRequestHandler from "../../../Utils/http";
import Pagenation from "../../../Pagenation/Pagenation";
import { EndPoint } from "../../../Utils/RoutesPaths";
import { Toast } from "../../../Utils/Toasthot";
const ShowRoomCar3 = () => {
    const [carsData, setcarsData] = useState([]);
    const [noofcars,setnoofcars]=useState(3);
    const [pageNo,setpageno]=useState(1);
    const [totalPages,settotalpages]=useState('');
  



    async function getData() {

        const endPoint = EndPoint.showroomcars(pageNo,noofcars).recentcar;
        const method = 'get';

        try {
            const response = await serverRequestHandler(endPoint, method);
            setcarsData(response.data);
            settotalpages(response.totalCount/noofcars);
            Toast.success("Recommended cars retrieved successfully!");
        } catch (error) {
            Toast.error(error?.message??error??"Recommended Cars Could not retrieved");
        }

    }
    useEffect(() => {
        getData();
    }, [noofcars,pageNo])




    return (
        <>
            <div id='recentcars' className='flex flex-row flex-wrap items-center flex-grow min-h-[300px] my-[30px]'>
                {carsData?.map(function (car, idx) {
                    return <Car1 isRentNow={true} key={idx} car={car} />
                })}
            </div>            
        </>
    )
}

export default ShowRoomCar3