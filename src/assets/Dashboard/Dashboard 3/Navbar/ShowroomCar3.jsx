import { useEffect, useState } from "react";
import "./car.css"
import axios from "axios";
const ShowRoomCar3 = () => {



    const [cars, setCars] = useState([]);


    //     useEffect(() => {
    //         setCars(propse.carsData);
    // cars.forEach(function(data,idx){
    //     console.log(idx,data)
    // })    
    //     }, [])
    

    const [carsData, setcarsData] = useState([]);
    async function getData() {
        const response = await axios.get(`http://localhost:5000/car/getAll?pageSize=4`);
        try {
            console.log("Successful: ", response.data.data.data);
            setcarsData(response.data.data.data);

        } catch (error) {
            console.log("Error: ", error);

        }


    }
    useEffect(() => {
        getData();
    }, [])




    return (
        <div className='py-[1vmin] bg-yellow-300  flex flex-row  gap-[4vmin]  px-[6vmin] w-[100%] overflow-x-scroll' id='carcontainer' >


             <div className='flex flex-row items-center gap-[4vmin] w-[100%]'>
                {carsData.map(function (car, idx) {
                    console.log(car.brand.name);
                    console.log(car.pictures[0]);
                    return <>

                        <div key={idx} className='w-[50%] h-[100%] border-[1px] flex-grow  text-black bg-[#ffffff] rounded-lg flex flex-col justify-between p-[10px]'>
                            <div id="logo" className='flex flex-row justify-between  items-center'><b className="capitalize">{car.brand.name}</b>
                                <svg onClick={(e) => { console.log(e.target) }} className="w-[3vmin] h-[4vmin]" id='svg' viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.62 18.8101C11.28 18.9301 10.72 18.9301 10.38 18.8101C7.48 17.8201 1 13.6901 1 6.6901C1 3.6001 3.49 1.1001 6.56 1.1001C8.38 1.1001 9.99 1.9801 11 3.3401C12.01 1.9801 13.63 1.1001 15.44 1.1001C18.51 1.1001 21 3.6001 21 6.6901C21 13.6901 14.52 17.8201 11.62 18.8101Z" stroke="#90A3BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            <img className="w-[100%] h-[20%]  my-[5vmin]" src={'http://localhost:5000/'+car.pictures[0]} alt="" />

                            <div id="carinfo" className='flex flex-col items-start w-[100%]'>

                                <div className='w-[100%]'>
                                    <p className='font-bold text-[0.9rem]  text-[#111111]'>Ammar Rent Car</p>

                                </div>
                                <div className='flex flex-row flex-wrap items-center justify-between w-[100%]'>
                                    <p className='font-semibold text-[0.9rem] text-[#111111]'>Location </p>
                                    <p className="text-[#90A3BF] font-semibold capitalize">{car.location}</p>

                                </div>





                                <div className='flex flex-row items-center justify-between w-[100%]'>
                                    <p className='font-semibold text-[0.9rem]  text-[#111111]'>Car Model</p>
                                <p className="text-[#90A3BF] font-semibold">{car.model}</p>

                                </div>

                            </div>
                            <div className='flex flex-col  w-[100%] items-end'>

                                <button className='py-[1.3vmin] px-[1.2vmin] bg-[#FF5C1E] rounded-sm text-white font-semibold text-[2.5vmin] w-[48%]'>Rent</button>
                            </div>
                        </div>
                    </>;
                })} 








                {/* <div className='w-[50%] h-[100%] border-[1px]   text-black bg-[#ffffff] rounded-lg flex flex-col justify-between p-[10px]'>
                    <div id="logo" className='flex flex-row justify-between  items-center'><b>Koienigsegg</b>
                        <svg onClick={(e) => { console.log(e.target) }} className="w-[3vmin] h-[4vmin]" id='svg' viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.62 18.8101C11.28 18.9301 10.72 18.9301 10.38 18.8101C7.48 17.8201 1 13.6901 1 6.6901C1 3.6001 3.49 1.1001 6.56 1.1001C8.38 1.1001 9.99 1.9801 11 3.3401C12.01 1.9801 13.63 1.1001 15.44 1.1001C18.51 1.1001 21 3.6001 21 6.6901C21 13.6901 14.52 17.8201 11.62 18.8101Z" stroke="#90A3BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <img className="w-[100%]  h-[30%] my-[5vmin]" src="src\assets\Dashboard\Dashboard 3\Navbar\Car-5.png" alt="" />

                    <div id="carinfo" className='flex flex-col items-start w-[100%]'>

                        <div className='w-[100%]'>
                            <p className='font-bold text-[0.9rem]  text-[#111111]'>Ammar Rent Car</p>

                        </div>
                        <div className='flex flex-row flex-wrap items-center justify-between w-[100%]'>
                            <p className='font-semibold text-[0.9rem] text-[#111111]'>Location </p>
                            <p className="text-[#90A3BF] font-semibold">Islamabad</p>

                        </div>





                        <div className='flex flex-row items-center justify-between w-[100%]'>
                            <p className='font-semibold text-[0.9rem]  text-[#111111]'>Available Cars</p>
                            <p className="text-[#90A3BF] font-semibold">30</p>

                        </div>

                    </div>
                    <div className='flex flex-col mt-[2vmin]  w-[100%] items-end'>

                        <button className='py-[1.3vmin] px-[1.2vmin] bg-[#FF5C1E] rounded-sm text-white font-semibold text-[2.5vmin] w-[48%]'>Rent</button>
                    </div>
                </div> */}
            </div>









            {/* <div className='flex flex-row items-center gap-[4vmin] w-[100%]'>
                <div className='w-[50%] h-[100%] border-[1px]  text-black bg-[#ffffff] rounded-lg flex flex-col justify-between p-[10px]'>
                    <div id="logo" className='flex flex-row justify-between  items-center'><b>Koienigsegg</b>
                        <svg onClick={(e) => { console.log(e.target) }} className="w-[3vmin] h-[4vmin]" id='svg' viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.62 18.8101C11.28 18.9301 10.72 18.9301 10.38 18.8101C7.48 17.8201 1 13.6901 1 6.6901C1 3.6001 3.49 1.1001 6.56 1.1001C8.38 1.1001 9.99 1.9801 11 3.3401C12.01 1.9801 13.63 1.1001 15.44 1.1001C18.51 1.1001 21 3.6001 21 6.6901C21 13.6901 14.52 17.8201 11.62 18.8101Z" stroke="#90A3BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <img className="w-[100%] h-[30%]  my-[5vmin]" src="src\assets\Dashboard\Dashboard 3\Navbar\Car-1.png" alt="" />

                    <div id="carinfo" className='flex flex-col items-start w-[100%]'>

                        <div className='w-[100%]'>
                            <p className='font-bold text-[0.9rem]  text-[#111111]'>Ammar Rent Car</p>

                        </div>
                        <div className='flex flex-row flex-wrap items-center justify-between w-[100%]'>
                            <p className='font-semibold text-[0.9rem] text-[#111111]'>Location </p>
                            <p className="text-[#90A3BF] font-semibold">Islamabad</p>

                        </div>





                        <div className='flex flex-row items-center justify-between w-[100%]'>
                            <p className='font-semibold text-[0.9rem]  text-[#111111]'>Available Cars</p>
                            <p className="text-[#90A3BF] font-semibold">30</p>

                        </div>

                    </div>
                    <div className='flex flex-col mt-[2vmin]  w-[100%] items-end'>

                        <button className='py-[1.3vmin] px-[1.2vmin] bg-[#FF5C1E] rounded-sm text-white font-semibold text-[2.5vmin] w-[48%]'>Rent</button>
                    </div>
                </div>








                <div className='w-[50%] h-[100%] border-[1px]   text-black bg-[#ffffff] rounded-lg flex flex-col justify-between p-[10px]'>
                    <div id="logo" className='flex flex-row justify-between  items-center'><b className="text-[1.2vw]">Koienigsegg</b>
                        <svg onClick={(e) => { console.log(e.target) }} className="w-[3vmin] h-[4vmin]" id='svg' viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.62 18.8101C11.28 18.9301 10.72 18.9301 10.38 18.8101C7.48 17.8201 1 13.6901 1 6.6901C1 3.6001 3.49 1.1001 6.56 1.1001C8.38 1.1001 9.99 1.9801 11 3.3401C12.01 1.9801 13.63 1.1001 15.44 1.1001C18.51 1.1001 21 3.6001 21 6.6901C21 13.6901 14.52 17.8201 11.62 18.8101Z" stroke="#90A3BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <img className="w-[100%] h-[30%]  my-[5vmin]" src="src\assets\Dashboard\Dashboard 3\Navbar\Car.png" alt="" />

                    <div id="carinfo" className='flex flex-col items-start w-[100%]'>

                        <div className='w-[100%]'>
                            <p className='font-bold text-[0.9rem]  text-[#111111]'>Ammar Rent Car</p>

                        </div>
                        <div className='flex flex-row flex-wrap items-center justify-between w-[100%]'>
                            <p className='font-semibold text-[0.9rem] text-[#111111]'>Location </p>
                            <p className="text-[#90A3BF] font-semibold">Islamabad</p>

                        </div>





                        <div className='flex flex-row items-center justify-between w-[100%]'>
                            <p className='font-semibold text-[0.9rem]  text-[#111111]'>Available Cars</p>
                            <p className="text-[#90A3BF] font-semibold">30</p>

                        </div>

                    </div>
                    <div className='flex flex-col mt-[2vmin]  w-[100%] items-end'>

                        <button className='py-[1.3vmin] px-[1.2vmin] bg-[#FF5C1E] rounded-sm text-white font-semibold text-[2.5vmin] w-[48%]'>Rent</button>
                    </div>
                </div>
            </div> */}



        </div>
    )
}

export default ShowRoomCar3