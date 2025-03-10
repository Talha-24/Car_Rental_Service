import { useEffect, useState } from "react";
import "./car.css"
import axios from "axios";
const ShowRoomCar = () => {



    const [showroomdata, setshowroomData] = useState('');
    const count = 1;
    async function showroomcars() {
        const token = localStorage.getItem("Token");
        try {
            const showroomresponse = await axios.get(`http://localhost:5000/api/showroom/getAll?page=${count}&pageSize=4`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setshowroomData(showroomresponse.data.data.data);
            console.log("Showroom Data: ", showroomdata);

        } catch (error) {
            console.log("ShowRoom Cars Error : ", error);

        }


    }



    useEffect(() => {
        showroomcars();
    }, [])








    return (
        <div className='py-[1vmin]  flex flex-row  gap-[4vmin]  px-[6vmin] w-[100%]' id='carcontainer' >

            <div className='flex flex-row items-center gap-[4vmin] w-[100%]'>
                {showroomdata ? showroomdata.map(function (showroom, idx) {
                    
                    return (
                        <div key={idx} className='w-[25%] h-[100%] border-[1px]   text-black bg-[#ffffff] rounded-lg flex flex-col justify-between p-[10px] '>

                            <img className="w-[100%] h-[50%]" src={'http://localhost:5000/' + showroom.showRoomPicture} alt="" />

                            <div id="carinfo" className='flex flex-col items-start w-[100%]'>

                                <div className='w-[100%]'>
                                    <p className='font-bold text-[0.9rem]  text-[#111111] capitalize'>{showroom.showRoomName}</p>

                                </div>
                                <div className='flex flex-row flex-wrap items-center justify-between w-[100%]'>
                                    <p className='font-semibold text-[0.9rem] text-[#111111]'>Location </p>
                                    <p className="text-[#90A3BF] font-semibold capitalize">{showroom.location}</p>

                                </div>
                                <div className='flex flex-row flex-wrap items-center justify-between w-[100%]'>
                                    <p className='font-semibold text-[0.9rem] text-[#111111]'>Phone </p>
                                    <p className="text-[#90A3BF] font-semibold capitalize">{showroom.phone}</p>

                                </div>





                                <div className='flex flex-row items-center justify-between w-[100%]'>
                                    <p className='font-semibold text-[0.9rem]  text-[#111111]'>Available Cars</p>
                                    <p className="text-[#90A3BF] font-semibold">30</p>

                                </div>

                            </div>
                            <div className='flex flex-col  w-[100%] items-end'>

                                <button className='py-[1.3vmin] px-[1.2vmin] bg-[#FF5C1E] rounded-sm text-white font-semibold text-[2vmin] w-[28%] self-end'>View</button>
                            </div>
                        </div>
                    )
                }) : "No Dat Found"}






                {/* <div className='w-[50%] h-[100%] border-[1px]   text-black bg-[#ffffff] rounded-lg flex flex-col justify-between p-[10px]'>

                    <img className="w-[100%] h-[50%]" src="https://s3-alpha-sig.figma.com/img/4ece/cc7d/fd4ccd202b60d95579c3c95c9626b637?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C~thMos-rBDxSlzLR4XszYTdIm8E-q7biEMlhripV4zXvR3XZQ5FPZcKvmVQRSOq7uUHJFe0tsZEmCrjVoCjAKxCRmbAEW9fhDAapQRG-rk9SNcJSKOSGcE6q7HYFV6bI2DpTJJlIpBH2aupqFBIRDmgcR8Xsg3BxFrgQkRB1-lzMMo0LL7T6h6h9mRmxjXmktkb0V09JTaWFqaU-MNKBXQWo2f~wem02FANCrHI5wNJZI6u5W7SBSHbNMWBxvgj8eqOgrmzc~QvOAF5eN5otNEArP7qIGBvv-Cf4F1RwkrfscJmTXzt5jNGD9O5G93~OmcL~OHRjUxJP19xJjarQg__" alt="" />

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

                        <button className='py-[1.3vmin] px-[1.2vmin] bg-[#FF5C1E] rounded-sm text-white font-semibold text-[2.5vmin] w-[48%]'>View</button>
                    </div>
                </div> */}
            </div>








            {/* <div className='flex flex-row items-center gap-[4vmin] w-[100%]'>
                <div className='w-[50%] h-[100%] border-[1px]  text-black bg-[#ffffff] rounded-lg flex flex-col justify-between p-[10px]'>

                    <img className="w-[100%] h-[50%]" src="https://s3-alpha-sig.figma.com/img/4ece/cc7d/fd4ccd202b60d95579c3c95c9626b637?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C~thMos-rBDxSlzLR4XszYTdIm8E-q7biEMlhripV4zXvR3XZQ5FPZcKvmVQRSOq7uUHJFe0tsZEmCrjVoCjAKxCRmbAEW9fhDAapQRG-rk9SNcJSKOSGcE6q7HYFV6bI2DpTJJlIpBH2aupqFBIRDmgcR8Xsg3BxFrgQkRB1-lzMMo0LL7T6h6h9mRmxjXmktkb0V09JTaWFqaU-MNKBXQWo2f~wem02FANCrHI5wNJZI6u5W7SBSHbNMWBxvgj8eqOgrmzc~QvOAF5eN5otNEArP7qIGBvv-Cf4F1RwkrfscJmTXzt5jNGD9O5G93~OmcL~OHRjUxJP19xJjarQg__" alt="" />

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

                        <button className='py-[1.3vmin] px-[1.2vmin] bg-[#FF5C1E] rounded-sm text-white font-semibold text-[2.5vmin] w-[48%]'>View</button>
                    </div>
                </div>








                <div className='w-[50%] h-[100%] border-[1px]   text-black bg-[#ffffff] rounded-lg flex flex-col justify-between p-[10px]'>

                    <img className="w-[100%] h-[50%]" src="https://s3-alpha-sig.figma.com/img/4ece/cc7d/fd4ccd202b60d95579c3c95c9626b637?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C~thMos-rBDxSlzLR4XszYTdIm8E-q7biEMlhripV4zXvR3XZQ5FPZcKvmVQRSOq7uUHJFe0tsZEmCrjVoCjAKxCRmbAEW9fhDAapQRG-rk9SNcJSKOSGcE6q7HYFV6bI2DpTJJlIpBH2aupqFBIRDmgcR8Xsg3BxFrgQkRB1-lzMMo0LL7T6h6h9mRmxjXmktkb0V09JTaWFqaU-MNKBXQWo2f~wem02FANCrHI5wNJZI6u5W7SBSHbNMWBxvgj8eqOgrmzc~QvOAF5eN5otNEArP7qIGBvv-Cf4F1RwkrfscJmTXzt5jNGD9O5G93~OmcL~OHRjUxJP19xJjarQg__" alt="" />

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

                        <button className='py-[1.3vmin] px-[1.2vmin] bg-[#FF5C1E] rounded-sm text-white font-semibold text-[2.5vmin] w-[48%]'>View</button>
                    </div>
                </div>
            </div> */}



        </div>
    )
}

export default ShowRoomCar