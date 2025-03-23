import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import React from 'react';
import serverRequestHandler from "../../Utils/http";
import {Toast} from "../../Utils/Toasthot";
import imageUpload from "../../Utils/UploadImage";
import localhost from "../../Utils/LocalHost";
import { EndPoint, myorders, obj } from "../../Utils/RoutesPaths";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
const CreateRent = (propse) => {

    console.log("Propse",propse);
    //Handling
    const schema = yup.object({
        GranteeName: yup.string().required("* Surety Name is required").min(3, "*Surety Name is too short").matches(/[A-Z]/, "*Name must includes UpperCase Letter (A-Z)").matches(/[a-z]/, "*Name must includes lowercase letter (a-z)"),
        GranteeCnic: yup.string().required("* User CNIC is required").matches(/^[0-9]{13}$/, "CNIC must be 13 digits in length"),
        UserCnicPicFront: yup.string().required().matches("/[A-Za-z\d]/","* Front Pic is required"),
        UserCnicPicBack: yup.string().required().matches("/[A-Za-z\d]/","* Back Pic is required"),
        GranteeCnicPicBack: yup.string().required("*User CNIC Back Pic  is required"),
        GranteeCnicPicFront: yup.string().required("*Surety CNIC Front Pic  is required"),
        UserCnic: yup.string().required("* User CNIC is required").matches(/^[0-9]{13}$/, "CNIC must be 13 digits in length"),
        TotalCost: yup.string().required(),
        GranteePhoneNumber: yup.string().required("*Surety Phone Number is required").matches(/^[0-9]{11}$/, "Surety Phone Number must be 11 digits in length"),
    }).required();

    const { register, formState: { errors }, handleSubmit, getValues, setValue, } = useForm({
        resolver: yupResolver(schema),
    });


    const onSubmit = (data) => {
        alert("Submitted");
        data.Car = location.state.id;
        data.showRoom = localStorage.getItem("CarsShowroom");
        data.status = 'pending';
        data.GranteeNameCnic = "grantee_name_cnic.jpg";
        bookacar(data);
    }


    const location = useLocation();
    const moveTo = useNavigate('');
    const [isreadonly, setReadonly] = useState(false);
    const [data, setData] = useState(propse.data ?? '');
    const [username, setusername] = useState('');
    const [noOfDays, setnoOfDays] = useState(0);
    const [totalCost, settotalConst] = useState(propse.personDetails ? propse.personDetails.TotalCost : propse.rentPrice);


    useEffect(() => {
        // settotalConst(propse.rentPrice * noOfDays);
        if (location.pathname != '/showroomowner/myorders/cardetails') {
            setValue("TotalCost", propse.rentPrice * noOfDays, { shouldValidate: true });
        }

        if (location.pathname == '/showroomowner/myorders/cardetails') {
            setValue("UserCnicPicFront", propse.personDetails.UserCnicPicFront);
            setValue("UserCnicPicBack", propse.personDetails.UserCnicPicBack);
            setValue("GranteeCnicPicFront", propse.personDetails.GranteeCnicPicFront);
            setValue("GranteeCnicPicBack", propse.personDetails.GranteeCnicPicBack);

















        }
    }, [noOfDays])



    //Accessing CNIC image tag
    // const userfrontcnic = useRef(null);
    // const userbackcnic = useRef(null);
    // const suretyfrontcnic = useRef(null);
    // const suretybackcnic = useRef(null);
    //For Displaying images
    const ufi = useRef(null)
    const ubi = useRef(null)
    const gfi = useRef(null)
    const gbi = useRef(null);



    async function bookacar(data) {

        try {
            let submit = await serverRequestHandler(EndPoint.bookingOfCar, `post`, data);
            moveTo('bookingpending');
            Toast.success(submit.message ?? "Booking Created Sucessfully 🤗!");
        } catch (error) {
            Toast.error(error.message ?? error);
        }
    }

    useEffect(() => {
        DisableInput();
    }, [location])

    const DisableInput = () => {
        if (location.pathname == obj.bookedcardetails || location.pathname == '/showroomowner/notification/cardetails' || location.pathname == obj.superadmincardetails || location.pathname == obj.myorderdetails) {
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
        <form id='rentdetails' onSubmit={handleSubmit(onSubmit)} className="w-[100%] min-h-[300px] bg-[#FFFFFF] rounded py-[2em] flex flex-col items-center justify-around dd">
            <div className="w-[100%] min-h-[300px] bg-[#FFFFFF] rounded py-[2em] px-[2vmin] flex flex-row justify-around dd">
                <div className="flex flex-col gap-[2vmin] dd_parent w-[50%] px-[6vmin]">
                    <div className="flex flex-col ">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[3vmin]">Name</label>
                        <input id='inputStyling' diabled={true} value={location.pathname === '/showroomowner/myorders/cardetails' ? propse.personDetails.user?.firstName + " " + propse.personDetails.user?.lastName : localStorage.getItem("firstname")} className="h-[45px] px-[2vmin] text-[18px]   border-[1px] bg-[#F6F7F9] rounded-[1vmin] max-eightFifty:w-[100%] " placeholder="M. Talha" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[3vmin]">Surety Name</label>
                        <input id='inputStyling' diabled={isreadonly}
                            {...register("GranteeName")}
                            defaultValue={propse.personDetails.GranteeName ? propse.personDetails.GranteeName : (data ? data.GranteeName : getValues("GranteeName"))} className={`h-[45px] px-[0.6rem] text-[18px]   border-[1px] bg-[#F6F7F9] rounded-[1vmin] outline-none ${errors.GranteeName?.type === 'required' ? "border-[1.5px] border-[red]" : "border-none"}`} placeholder="Enter Name" type="text" />
                    </div>
                    <p className="text-[12px] font-semibold text-[#FC4500]">{errors.GranteeName?.message ?? ''}</p>
                    <div className="flex flex-col">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[3vmin]">CNIC Number</label>
                        <input id='inputStyling' diabled={isreadonly} className={`h-[45px] px-[0.6rem] text-[18px]   border-[1px] bg-[#F6F7F9] rounded-[1vmin] outline-none ${errors.UserCnic ? "border-[1.5px] border-[red]" : "border-none"} `} defaultValue={propse.personDetails.UserCnic ? propse.personDetails.UserCnic : (data ? data.UserCnic : getValues("UserCnic") ?? "")}
                            {...register("UserCnic")}
                            placeholder="User CNIC Number" />
                    </div>
                    <p className="text-[12px] font-semibold text-[#FC4500]">{errors.UserCnic?.message ?? ''}</p>
                    <div className="flex flex-col w-[100%] items-start mt-[3vmin]">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[3vmin]">User CNIC</label>
                        <span className='flex flex-row justify-between w-[100%] mt-[20px]'>
                            <span>
                                <label htmlFor="userfront" className="text-[14px] font-normal text-center mt-[.2rem]" >
                                    <img ref={ubi} src={ (propse.personDetails?.UserCnicPicFront ? localhost() + propse.personDetails.UserCnicPicFront : (data ? localhost() + data.UserCnicPicFront :  getValues("UserCnicPicFront") ? localhost() + getValues("UserCnicPicFront") : 'https://www.nadra.gov.pk/wp-content/uploads/2023/12/NIC.png'))} alt="No Image Uploaded" className={`h-[100px] w-[180px] border-[1px] object-cover cursor-pointer bg-[gray]  text-[14px] font-normal ${errors.UserCnicPicFront?.type === 'required' ? 'border-[1.5px] border-[red]' : 'border-none'}`} />
                                    Front Side
                                    <input diabled={isreadonly} id="userfront"
                                        {...register("UserCnicPicFront")}
                                        onChange={(e) => {
                                            const frontside = e.target.files[0];
                                            const formData = new FormData();
                                            formData.append('file', frontside);
                                            (async function getimage() {
                                                try {
                                                    let image = await imageUpload(formData);
                                                    setValue("UserCnicPicFront", image, { shouldValidate: true });
                                                    Toast.success('✔ Your CNIC Front Pic uploaded successfully!', 1000);
                                                    
                                                } catch (error) {
                                                    Toast.error(error.message ?? '❌ Your CNIC Back Pic is not uploaded!' ?? error, 1000);
                                                }
                                            })();
                                        }} type="file" hidden />
                                </label>
                                {/* <p className="text-[12px] font-semibold text-[#FC4500]">{(errors.UserCnicPicFront?.message ?? '')}</p> */}
                            </span>
                            <span>
                                <label htmlFor="userbackcnic">
                                    <img ref={ufi} src={ (propse.personDetails.UserCnicPicBack ? localhost() + propse.personDetails.UserCnicPicBack : (data ? localhost() + data.UserCnicPicBack : getValues("UserCnicPicBack") ? localhost() + getValues("UserCnicPicBack") : "https://gnnhd.tv/_next/image?url=https%3A%2F%2Fgnnhd.tv%3A8000%2Fmedia%2F115216%2Fid.jpg&w=3840&q=75"))} alt="No Image Uploaded" className={`h-[100px] w-[180px] max-eight:h-[70px]  text-[14px] font-normal object-cover cursor-pointer bg-[gray] ${errors.userbackimg?.type === 'required' ? 'border-[1.5px] border-[red]' : ''}`} />
                                    <p className="text-[14px] font-normal text-center mt-[.2rem]" >Back Side</p>
                                    <input diabled={isreadonly} id="userbackcnic"
                                        {...register("UserCnicPicBack")}
                                        onChange={(e) => {
                                            const backside = e.target.files[0];
                                            const formData = new FormData();
                                            formData.append('file', backside);
                                            (async function getimage() {
                                                try {
                                                    let image = await imageUpload(formData);
                                                    // setusercnicback(image);
                                                    setValue("UserCnicPicBack", image, { shouldValidate: true });
                                                    Toast.success('✔ Your CNIC Back Pic uploaded successfully!', 1000);
                                                } catch (error) {
                                                    Toast.error(error?.message ?? error ?? '❌ Your CNIC Back Pic is not uploaded!');
                                                }
                                            })();
                                        }} className="h-[45px] px-[2vmin] text-[18px]  bg-[#F6F7F9] rounded-[1vmin]"



                                        type="file"
                                        hidden />
                                </label>
                                {/* <p className="text-[12px] font-semibold bg-slate-800 text-[#FC4500] p-[10px]">{(errors.UserCnicPicBack?.message ?? "")} </p> */}
                            </span>
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[3vmin]">Rent Days</label>
                        <input id='inputStyling' diabled={isreadonly} type="number" className={`h-[45px] px-[2vmin] text-[18px] border-[1px] bg-[#F6F7F9] rounded-[1vmin] ${errors.noofdays?.type === 'required' ? 'border-[1.5px] border-[red]' : ''}`}
                            value={location.pathname === '/showroomowner/myorders/cardetails' || location.pathname === '/showroomowner/notification/cardetails' || location.pathname === '/showroomowner/bookedcars/cardetails' ? propse.personDetails.TotalCost / propse.rentPrice : noOfDays}
                            onChange={(e) => {
                                setnoOfDays(e.target.value);
                            }}
                            min='1' max='1000' placeholder="How many days?"
                        />
                    </div>
                    <p className="text-[12px] font-semibold text-[#FC4500]">{errors.TotalCost?.message ?? ''} </p>
                </div>
                <div className="flex flex-col gap-[2vmin] dd_parent w-[50%] px-[6vmin] max-xlg:w-[100%]">
                    <div className="flex flex-col">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[18px]">Email</label>
                        <input diabled={true} id='inputStyling' onChange={(e) => { setusername(e.target.username) }} value={location.pathname === '/showroomowner/myorders/cardetails' ? propse.personDetails.user?.email : localStorage.getItem("email")} className="h-[45px] px-[2vmin] text-[18px]   border-[1px] bg-[#F6F7F9] rounded-[1vmin] outline-none" placeholder="M. Talha" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[3vmin]">Phone Number</label>
                        <input id='inputStyling' diabled={isreadonly} className={`h-[45px] px-[2vmin] text-[18px] border-[1px] bg-[#F6F7F9] rounded-[1vmin] outline-none ${errors.GranteePhoneNumber? "border-[1.5px] border-[red]" : ""}`} defaultValue={propse.personDetails.GranteePhoneNumber ? propse.personDetails.GranteePhoneNumber : (data ? data.GranteePhoneNumber : getValues("GranteePhoneNumber"))}
                            {...register("GranteePhoneNumber",)}
                            placeholder="Surety Phone Number"
                        />
                    </div>
                    <p className="text-[#FC4500] font-semibold text-[12px]">{errors.GranteePhoneNumber?.message ?? ''}</p>

                    <div className="flex flex-col">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[3vmin]">Surety CNIC Number</label>

                        <input id='inputStyling' diabled={isreadonly} className={`h-[45px] px-[2vmin] text-[18px] border-[1px] bg-[#F6F7F9] rounded-[1vmin] outline-none ${errors.GranteeCnic ? "border-[1.5px] border-[red]" : ""}`} defaultValue={propse.personDetails.GranteeCnic ? propse.personDetails.GranteeCnic : (data ? data.GranteeCnic : getValues("GranteeCnic"))}
                            {...register("GranteeCnic",

                                //  { required: " * Mandatory, field is required", pattern: /^(?=.*[\d])[\d]{13}$/ }

                            )

                            }
                            placeholder="Surety CNIC Number"


                        />
                    </div>
                    <p className="text-[12px] font-semibold text-[#FC4500]">{errors.GranteeCnic?.message ?? ''}</p>
                    <div className="flex flex-col w-[100%] items-start mt-[3vmin]">
                        <label htmlFor='' className="text-black  font-semibold text-[3vmin] w-[100%]">Surety CNIC

                            <span className='flex flex-row justify-between  mt-[20px]  w-[100%]  cursor-pointer'>

                                <label htmlFor="suretyfrontcnic" className="flex flex-col">
                                    <span className="cursor-pointer">
                                        <img onClick={() => { }} ref={gfi} src={ (propse.personDetails ? localhost() + propse.personDetails.GranteeCnicPicFront : (data ? localhost() + data.GranteeCnicPicFront : getValues("GranteeCnicPicFront") ? localhost() + getValues("GranteeCnicPicFront") : 'https://preview.redd.it/my-new-id-card-v0-x0yuyc2ri2wc1.jpeg?width=1080&crop=smart&auto=webp&s=273a942a16cd1f07c9b11419288d0609d81afc89'))} alt="No image uploaded" className={`h-[100px] text-[14px] font-normal w-[180px] border-[1px] bg-[gray] object-cover ${errors.suretyfrontimg?.type === 'required' ? 'border-[1.5px] border-[red]' : 'border-none'}`} />
                                        <p className="text-[14px] font-normal text-center mt-[.2rem]" >Front Side</p>
                                        <input diabled={isreadonly} id='suretyfrontcnic' name='imageone'

                                            {...register("GranteeCnicPicFront",)}


                                            onChange={(e) => {
                                                const formData = new FormData();
                                                formData.append('file', e.target.files[0]);
                                                (async function getimage() {
                                                    try {
                                                        let image = await imageUpload(formData);
                                                        // setguarantiercnicfront(image);
                                                        setValue("GranteeCnicPicFront", image, { shouldValidate: true });
                                                    gfi.current.src = localhost() + getValues("GranteeCnicPicFront");

                                                        Toast.success('✔ Surity CNIC Front Pic uploaded successfully!', 1000);
                                                    } catch (error) {
                                                        Toast.error(error.message ?? error, 1000);
                                                    }
                                                })();
                                            }} type="file" hidden />


                                    </span>
                                    <p className="text-[12px] font-semibold text-[#FC4500]">{errors.GranteeCnicPicFront?.message ?? ''}</p>
                                </label>


                                <label htmlFor="suretybackcnic">
                                    <span>
                                        <img ref={gbi} src={(propse.personDetails ? localhost() + propse.personDetails.GranteeCnicPicBack : (data ? localhost() + data.GranteeCnicPicBack : getValues("GranteeCnicPicBack") ? localhost() + getValues("GranteeCnicPicBack") :  'https://gnnhd.tv/_next/image?url=https%3A%2F%2Fgnnhd.tv%3A8000%2Fmedia%2F115216%2Fid.jpg&w=3840&q=75'))} alt="No Image Uploaded" className={`h-[100px]   w-[180px] bg-[gray] border-[1px] object-cover  text-[14px] font-normal ${errors.suretybackimg?.type === 'required' ? 'border-[1.5px] border-[red]' : ''}`} />
                                        <p className="text-[14px] font-light text-center mt-[.2rem]" >Back Side</p>
                                    </span>

                                    <input diabled={isreadonly} id="suretybackcnic"
                                        {...register("GranteeCnicPicBack",)}
                                        onChange={(e) => {
                                            const formData = new FormData();
                                            formData.append('file', e.target.files[0]);
                                            (async function getimage() {
                                                try {
                                                    let image = await imageUpload(formData);
                                                    Toast.success('✔ Surity CNIC Back Pic uploaded successfully!');
                                                    setValue("GranteeCnicPicBack", image, { shouldValidate: true });
                                                    gbi.current.src = localhost() + getValues("GranteeCnicPicBack");
                                                } catch (error) {
                                                }
                                            })();
                                        }} className="h-[45px] px-[2vmin] text-[18px]  bg-[#F6F7F9] rounded-[1vmin]" type='file' hidden />

                                    <p className="text-[12px] font-semibold text-[#FC4500]">{errors.GranteeCnicPicBack?.message ?? ''}</p>
                                </label>
                            </span>
                        </label>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[3vmin]">Total Cost</label>
                        <input id='inputStyling' diabled={isreadonly}
                            {...register("TotalCost")}

                            // {location.pathname === '/showroomowner/myorders/cardetails' ? "" :<>
                            // </> }
                            className="h-[45px] px-[2vmin] text-[18px] border-[1px] bg-[#F6F7F9] rounded-[1vmin]" value={propse.personDetails.TotalCost ?? getValues("TotalCost")} placeholder="?" />
                    </div>
                </div>
            </div >
            {
                location.pathname == obj.bookedcardetails || location.pathname == '/showroomowner/notification/cardetails' || location.pathname == obj.superadmincardetails ? '' : (location.pathname == obj.myorderdetails && localStorage.getItem("orderStatus") == 'accepted' ? <button onClick={() => {
                    {
                        // navigation(obj.cardetails, { state: { id: Ids } })
                        localStorage.setItem("orderStatus", "Completed");

                        name("completed", location.state.id);

                        async function name(status, carId) {

                            const endPoint = '/booking/updateStatus';
                            const method = `post`;
                            const body = {
                                'status': status,
                                'booking': carId,
                            }
                            try {
                                let response = await serverRequestHandler(endPoint, method, body);
                                Toast.success(response.data?.message ?? `Booking is ${status} Successfully`, {
                                    autoClose: 1000,
                                });
                            } catch (error) {
                                Toast.error(error.messsage ?? error ?? `* Failed to ${status} Booking`);

                            }


                        }

                    }
                }}>Complete</button> : (location.pathname == obj.myorderdetails && localStorage.getItem("orderStatus") == 'pending' ? <>
                    <div className="w-[100%] flex flex-row items-center justify-center px-[1vmin] gap-[20px]">
                        <button onClick={() => {
                            localStorage.setItem("orderStatus", "Reject");
                            name("rejected", location.state.id);
                            async function name(status, carId) {

                                const endPoint = '/booking/updateStatus';
                                const method = `post`;
                                const body = {
                                    'status': status,
                                    'booking': carId,
                                }
                                try {
                                    let response = await serverRequestHandler(endPoint, method, body);
                                    Toast.success(response.data?.message ?? `Booking is ${status} Successfully`, {
                                        autoClose: 1000,
                                    });
                                } catch (error) {
                                    Toast.error(error.messsage ?? error ?? `* Failed to ${status} Booking`);

                                }


                            }











                            moveTo(-1);
                        }} className='bg-[#FC4500] py-[0.60rem] px-[0.4rem] text-sm w-[70px] font-semibold'>Reject</button>
                        <button onClick={() => {
                            myorders("accepted", location.state.id);
                            moveTo(-1);
                            localStorage.setItem("orderStatus", "Reject");
                        }} className='bg-[#FC4500] py-[0.60rem] px-[0.4rem] text-sm w-[70px] font-semibold'>Accept</button>



                    </div>

                </> : (location.pathname === '/showroomowner/myorders/cardetails' && localStorage.getItem("orderStatus") === 'rejected' || location.pathname === '/showroomowner/myorders/cardetails' && localStorage.getItem("orderStatus") === 'completed') ? "" : <>

                    <div className="flex items-center justify-center w-[100%]">
                        <input type="submit" value='Rent Now' className="h-[40px] px-[2vmin] text-sm font-semibold w-[100px] bg-[#FF4500] rounded-[0.7vmin] text-[14px] text-white text-center" />
                    </div>
                </>
                    //  

                ))
            }
        </form >

    )
}

export default CreateRent