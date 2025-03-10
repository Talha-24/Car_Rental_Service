import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import React from 'react';
import InputMask from 'react-input-mask';
import serverRequestHandler from "../../Utils/http";
import Toast from "../../Toaster/Toaster";
import imageUpload from "../../Utils/UploadImage";
import localhost from "../../Utils/LocalHost";
const CreateRent = (propse) => {
    console.log("...",);
    const location = useLocation();
    const moveTo = useNavigate('');
    const [isreadonly, setReadonly] = useState(false);
    const [data, setData] = useState(propse.data ?? '');
    const [username, setusername] = useState('');
    const [usercnic, setusercnic] = useState(propse.personDetails.UserCnic ?? '');
    const [guarantiername, setguarantiername] = useState(propse.personDetails.GranteeName ?? '');
    const [guarantiercnic, setguarantiercnic] = useState(propse.personDetails.GranteeCnic ?? '');
    const [usercnicfront, setusercnicfront] = useState(propse.personDetails.UserCnicPicFront ?? '');
    const [usercnicback, setusercnicback] = useState(propse.personDetails.UserCnicPicBack ?? '');
    const [guarantiercnicfront, setguarantiercnicfront] = useState(propse.personDetails.GranteeCnicPicFront ?? '');
    const [guarantiercnicback, setguarantiercnicback] = useState(propse.personDetails.GranteeCnicPicBack ?? '');
    const [guarantierphonenumber, setguarantierphonenumber] = useState(propse.personDetails.GranteePhoneNumber ?? '2222222');
    const [noOfDays, setnoOfDays] = useState(0);

    const [totalCost, settotalConst] = useState(propse.personDetails ? propse.personDetails.TotalCost : propse.rentPrice);

    useEffect(() => {
        settotalConst(propse.rentPrice * noOfDays);
    }, [noOfDays])



    //Accessing CNIC image tag
    const userfrontcnic = useRef(null);
    const userbackcnic = useRef(null);
    const suretyfrontcnic = useRef(null);
    const suretybackcnic = useRef(null);
    //For Displaying images
    const ufi = useRef(null)
    const ubi = useRef(null)
    const gfi = useRef(null)
    const gbi = useRef(null);
    function userData() {
        bookacar();
    }
    async function bookacar() {
        const URL = `localhost()api/booking/addtobooking`;
        const endPoint = `/booking/addtobooking`;
        const body = {
            "TotalCost": totalCost,
            "UserCnic": usercnic,
            "UserCnicPicBack": usercnicback,
            "UserCnicPicFront": usercnicfront,
            "GranteeCnic": guarantiercnic,
            "GranteeName": guarantiername,
            "GranteeCnicPicFront": guarantiercnicfront,
            "GranteeCnicPicBack": guarantiercnicback,
            "GranteeNameCnic": "grantee_name_cnic.jpg",
            "status": "pending",
            "showRoom": "67aa2d2ae9a7d33e719661d7",
            "Car": location.state.id,
            "GranteePhoneNumber": guarantierphonenumber
        };
        const method = `post`;
        try {
            let submit = await serverRequestHandler(endPoint, method, body);
            moveTo('bookingpending');
            toast.success(submit.message ?? "Booking Created Sucessfully 🤗!");
        } catch (error) {
            Toast(error.message);
        }
    }


    useEffect(() => {
        DisableInput();
    }, [location])

    const DisableInput = () => {
        if (location.pathname == '/showroomowner/bookedcars/cardetails' || location.pathname == '/showroomowner/notification/cardetails' || location.pathname == '/showroomowner/showroomcars/cardetails') {
            ubi.current.style.cursor = 'not-allowed';
            ufi.current.style.cursor = 'not-allowed';
            gbi.current.style.cursor = 'not-allowed';
            gfi.current.style.cursor = 'not-allowed';
            let inputStyling = document.querySelectorAll("#inputStyling");
            inputStyling.forEach(function (input) {
                input.style.color = '#8a8a8a';
            })
            return setReadonly(true);
        }
    }


    return (
        <form aria-disabled={true} id='rentdetails' onSubmit={(e) => { e.preventDefault() }} className="w-[100%] min-h-[300px] bg-[#FFFFFF] rounded py-[2em] flex flex-col items-center justify-around dd">
            <div className="w-[100%] min-h-[300px] bg-[#FFFFFF] rounded py-[2em] px-[2vmin] flex flex-row justify-around dd">
                <div className="flex flex-col gap-[2vmin] dd_parent w-[50%] px-[6vmin]">
                    <div className="flex flex-col">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[3vmin]">Name</label>
                        <input id='inputStyling' disabled={isreadonly} onChange={(e) => { setusername(e.target.username) }} value={localStorage.getItem("firstname")} className="py-[1vmin] px-[2vmin] text-[2.5vmin]   border-[1px] bg-[#F6F7F9] rounded-[1vmin]" placeholder="M. Talha" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[3vmin]">Surety Name</label>
                        <input id='inputStyling' disabled={isreadonly} onChange={(e) => { setguarantiername(e.target.value) }} value={propse.personDetails.GranteeName ? propse.personDetails.GranteeName : (data ? data.GranteeName : guarantiername)} className="py-[1vmin] px-[2vmin] text-[2.5vmin]   border-[1px] bg-[#F6F7F9] rounded-[1vmin]" placeholder="Enter Name" type="text" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[3vmin]">CNIC Number</label>
                        <InputMask id='inputStyling' disabled={isreadonly} mask="99999-9999999-9" className="py-[1vmin] px-[2vmin] text-[2.5vmin]   border-[1px] bg-[#F6F7F9] rounded-[1vmin]" maskChar={null} value={propse.personDetails.UserCnic ? propse.personDetails.UserCnic : (data ? data.UserCnic : usercnic)} onChange={(e) => {
                            setusercnic(e.target.value);
                        }} placeholder="User CNIC Number" />
                    </div>
                    <div className="flex flex-col w-[100%] items-start mt-[3vmin]">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[3vmin]">CNIC
                            <span className='flex flex-row gap-[4vmin] mt-[20px]'>
                                <span>
                                    <img onClick={() => {
                                        userfrontcnic.current.click();
                                    }} ref={ubi} src={usercnicfront ? localhost() + usercnicfront : (propse.personDetails ? localhost() + propse.personDetails.UserCnicPicFront : (data ? localhost() + data.UserCnicPicFront : 'https://www.nadra.gov.pk/wp-content/uploads/2023/12/NIC.png'))} alt="No Image Uploaded" className="h-[10vmin] w-[20vmin] border-[1px] bg-[#c8c9c8] object-cover cursor-pointer" />
                                    <p className="text-[2.2vmin] font-light text-center mt-[.2rem]" >Front Side</p>
                                    <input disabled={isreadonly} ref={userfrontcnic} onChange={(e) => {
                                        const frontside = e.target.files[0];
                                        const formData = new FormData();
                                        formData.append('file', frontside);

                                        (async function getimage() {
                                            const apiURL = `localhost()api/upload/anyfile`;
                                            const endPoint = `/upload/anyfile`
                                            const method = 'post';

                                            try {
                                                let image = await imageUpload(formData);
                                                setusercnicfront(image);
                                                toast.info('✔ Your CNIC Front Pic uploaded successfully!', {
                                                    autoClose: 1000,
                                                    theme: 'dark',
                                                });
                                            } catch (error) {
                                            }
                                        })();



                                    }} type="file" hidden />

                                </span>
                                <span>
                                    <img onClick={() => {
                                        userbackcnic.current.click();
                                    }} ref={ufi} src={usercnicback ? localhost() + usercnicback : (propse.personDetails ? localhost() + propse.personDetails.UserCnicPicBack : (data ? localhost() + data.UserCnicPicBack : "https://gnnhd.tv/_next/image?url=https%3A%2F%2Fgnnhd.tv%3A8000%2Fmedia%2F115216%2Fid.jpg&w=3840&q=75"))} alt="No Image Uploaded" className="h-[10vmin] w-[20vmin] border-[1px] bg-blue-600 object-fill cursor-pointer" />
                                    <p className="text-[2.2vmin] font-light text-center mt-[.2rem]" >Back Side</p>
                                </span>
                            </span>
                            <input disabled={isreadonly} ref={userbackcnic} onChange={(e) => {
                                const backside = e.target.files[0];
                                const formData = new FormData();
                                formData.append('file', backside);

                                (async function getimage() {
                                    try {
                                        let image = await imageUpload(formData);
                                        setusercnicback(image);
                                        toast.info('✔ Your CNIC Back Pic uploaded successfully!', {
                                            theme: 'dark',
                                            autoClose: 2000,
                                        });
                                    } catch (error) { }
                                })();

                            }} className="py-[1vmin] px-[2vmin] text-[2.5vmin]  bg-[#F6F7F9] rounded-[1vmin]" type="file" placeholder="0000000000" hidden />

                        </label>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[3vmin]">Rent Days</label>
                        <InputMask id='inputStyling' disabled={isreadonly} mask="999" className="py-[1vmin] px-[2vmin] text-[2.5vmin] border-[1px] bg-[#F6F7F9] rounded-[1vmin]" maskChar={null} value={noOfDays} placeholder="How many days?" onChange={(e) => {
                            setnoOfDays(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="flex flex-col gap-[2vmin] dd_parent w-[50%] px-[6vmin]">
                    <div className="flex flex-col">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[3vmin]">Email</label>
                        <input disabled={isreadonly} id='inputStyling' onChange={(e) => { setusername(e.target.username) }} value={localStorage.getItem("email")} className="py-[1vmin] px-[2vmin] text-[2.5vmin]   border-[1px] bg-[#F6F7F9] rounded-[1vmin]" placeholder="M. Talha" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[3vmin]">Phone Number</label>
                        <InputMask id='inputStyling' disabled={isreadonly} mask="9999-9999999" className="py-[1vmin] px-[2vmin] text-[2.5vmin] border-[1px] bg-[#F6F7F9] rounded-[1vmin]" maskChar={null} value={propse.personDetails.GranteePhoneNumber ? propse.personDetails.GranteePhoneNumber : (data ? data.GranteePhoneNumber : guarantierphonenumber)} placeholder="Surety Phone Number" onChange={(e) => {
                        setguarantierphonenumber(e.target.value);
                        }} />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[3vmin]">Surety CNIC Number</label>
                        <InputMask id='inputStyling' disabled={isreadonly} mask="99999-9999999-9" className="py-[1vmin] px-[2vmin] text-[2.5vmin] border-[1px] bg-[#F6F7F9] rounded-[1vmin]" maskChar={null} value={propse.personDetails.GranteeCnic ? propse.personDetails.GranteeCnic : (data ? data.GranteeCnic : guarantiercnic)} placeholder="Surety CNIC Number" onChange={(e) => {
                            setguarantiercnic(e.target.value);
                        }} />

                    </div>
                    <div className="flex flex-col w-[100%] items-start mt-[3vmin]">
                        <label htmlFor='' className="text-black  font-semibold text-[3vmin]">Surety CNIC
                            <span className='flex flex-row gap-[4vmin] mt-[20px] cursor-pointer'>
                                <span className="cursor-pointer">

                                    <img onClick={() => {
                                        suretyfrontcnic.current.click();
                                    }} ref={gfi} src={guarantiercnicfront ? localhost() + guarantiercnicfront : (propse.personDetails ? localhost() + propse.personDetails.GranteeCnicPicFront : (data ? localhost() + data.GranteeCnicPicFront : 'https://preview.redd.it/my-new-id-card-v0-x0yuyc2ri2wc1.jpeg?width=1080&crop=smart&auto=webp&s=273a942a16cd1f07c9b11419288d0609d81afc89'))} alt="No Image Uploaded" className="h-[10vmin] w-[20vmin] border-[1px] bg-blue-600 object-cover" />
                                    <p className="text-[2.2vmin] font-light text-center mt-[.2rem]" >Front Side</p>
                                    <input disabled={isreadonly} ref={suretyfrontcnic} id='imageone' name='imageone' onChange={(e) => {
                                        const frontside = e.target.files[0];
                                        const formData = new FormData();
                                        formData.append('file', frontside);

                                        (async function getimage() {
                                            try {
                                                let image = await imageUpload(formData);
                                                setguarantiercnicfront(image);
                                                toast.info('✔ Surity CNIC Front Pic uploaded successfully!', {
                                                    autoClose: 2000,
                                                    theme: "dark",
                                                });
                                            } catch (error) {

                                            }
                                        })();
                                    }} type="file" hidden />
                                </span>
                                <span>
                                    <img onClick={() => {
                                        suretybackcnic.current.click();
                                    }} ref={gbi} src={guarantiercnicback ? localhost() + guarantiercnicback : (propse.personDetails ? localhost() + propse.personDetails.GranteeCnicPicBack : (data ? localhost() + data.GranteeCnicPicBack : 'https://gnnhd.tv/_next/image?url=https%3A%2F%2Fgnnhd.tv%3A8000%2Fmedia%2F115216%2Fid.jpg&w=3840&q=75'))} alt="No Image Uploaded" className="h-[10vmin] w-[20vmin] border-[1px] bg-blue-600 object-cover" />
                                    <p className="text-[2.2vmin] font-light text-center mt-[.2rem]" >Back Side</p>
                                </span>
                            </span>
                            <input disabled={isreadonly} ref={suretybackcnic} onChange={(e) => {
                                const backside = e.target.files[0];
                                const formData = new FormData();
                                formData.append('file', backside);
                                (async function getimage() {
                                    try {
                                        let image = await imageUpload(formData);
                                        toast.info('✔ Surity CNIC Back Pic uploaded successfully!', {
                                            theme: 'dark',
                                            autoClose: 2000,
                                        });
                                        setguarantiercnicback(image);
                                        gbi.current.src = `localhost()` + guarantiercnicback;
                                    } catch (error) {
                                    }
                                })();
                            }} className="py-[1vmin] px-[2vmin] text-[2.5vmin]  bg-[#F6F7F9] rounded-[1vmin]" type='file' hidden />
                        </label>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[3vmin]">Total Cost</label>
                        <InputMask id='inputStyling' disabled={isreadonly} mask="9999999999999" className="py-[1vmin] px-[2vmin] text-[2.5vmin] border-[1px] bg-[#F6F7F9] rounded-[1vmin]" maskChar={null} value={propse.personDetails.TotalCost ?? totalCost} placeholder="How many days?" />
                    </div>
                </div>
            </div>
            {location.pathname == '/showroomowner/bookedcars/cardetails' || location.pathname == '/showroomowner/notification/cardetails' || location.pathname == '/showroomowner/showroomcars/cardetails' ? '' : <div className="flex items-center justify-center w-[100%]">
                <button onClick={() => { userData(); }} className="py-[1.5vmin] px-[2vmin] w-[20%] bg-[#FF5C00] rounded-[0.7vmin] text-[2.5vmin] text-white">Rent Now!</button>
            </div>}
        </form>

    )
}

export default CreateRent