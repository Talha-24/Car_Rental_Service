import { useEffect, useState } from "react";
import "./car.css"
import axios from "axios";
import Car1 from "../../Cars/CarComponents/Carsss/Car1";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import serverRequestHandler from "../../../Utils/http";
const ShowRoomCar3 = () => {
    const [carsData, setcarsData] = useState([]);
    async function getData() {
        const endPoint = `/car/getAll`;
        const method = 'get';
        try {
            const response = await serverRequestHandler(endPoint, method);
            setcarsData(response.data);
        } catch (error) {

        }


    }
    useEffect(() => {
        getData();
    }, [])




    const [carsPerPage, setcarsPerPage] = useState(3);
    const [currentPage, setcurrentPage] = useState(1);
    const lastIndex = (currentPage * carsPerPage);
    const firstIndex = (lastIndex - carsPerPage);
    const totalPages = Math.ceil(carsData?.length / carsPerPage);

    const itemsonpage = carsData?.slice(firstIndex, lastIndex);


    return (
        <>
            <div id='recentcars' className='flex flex-row flex-wrap items-center justify-between min-h-[300px] my-[30px]'>
                {itemsonpage?.map(function (car, idx) {
                    return <Car1 isRentNow={true} key={idx} car={car} />
                })}
            </div>
            <div id="pagination" className="flex flex-row items-center justify-end w-[100%] ">
                <div className="flex flex-row items-center mr-[8px]">
                    <span className="flex flex-row">
                        <IoMdArrowDropleft fontSize={'1.4rem'} color="#D4D4D5" />
                        <p className="text-[#D4D4D5]">Previous</p>

                    </span>
                </div>

                {Array.from({ length: totalPages - 1 }, (_, idx) => {
                    return <button onClick={() => {
                        setcurrentPage(idx + 1);
                    }} className="mr-[2px] p-[2px] w-[24px] font-normal rounded">{idx + 1}</button>
                })}
                <div className="flex flex-row items-center ml-[8px]">

                    <p className="text-[#D4D4D5]">Next</p>
                    <span className="flex flex-row items-center">
                        <IoMdArrowDropright color="#D4D4D5" fontSize={'1.4rem'} />
                    </span>

                </div>

            </div>
        </>
    )
}

export default ShowRoomCar3