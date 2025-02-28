import { useEffect, useState } from "react";
import "./car.css"
import axios from "axios";
import Car1 from "../../Cars/CarComponents/Carsss/Car1";
const ShowRoomCar3 = () => {

    const [carsData, setcarsData] = useState([]);
    const [showroomData, setshowroomData] = useState([]);//Fazool

    async function getData() {

        try {
            const response = await axios.get(`http://localhost:5000/car/getAll?pageSize=3`);
            setcarsData(response.data.data.data);

        } catch (error) {
            console.log("Error: ", error);

        }


    }
    useEffect(() => {
        getData();
    }, [])




    return (
        <div className='py-[1vmin]  flex flex-row  w-[100%] p-[5.5vmin]' id='carcontainer'  >
            <div className='flex flex-row items-center justify-between h-[300px] w-[100%]'>
                {carsData.map(function (car, idx) {
                    return <Car1 isRentNow={true} key={idx} car={car}  />
                })}
            </div>
        </div>
    )
}

export default ShowRoomCar3