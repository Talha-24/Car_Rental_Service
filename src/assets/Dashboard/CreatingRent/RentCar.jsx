import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import serverRequestHandler from '../../Utils/http';
import imageUpload from '../../Utils/UploadImage';
import { IoMdCamera, IoMdTrash } from 'react-icons/io';
import localhost from '../../Utils/LocalHost';
import { EndPoint, obj } from '../../Utils/RoutesPaths';
import { useForm } from 'react-hook-form';
import { Title } from './RentCar.style';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ToastContainer } from 'react-toastify';
import { Toast } from '../../Utils/Toasthot';

const RentCar = ({ }) => {



    const schema = yup.object({
        title: yup.string().required("* Mandatory field is required").min(4, "Car name is too short").matches(/[A-Za-z]/,"* Title must be in Uppercase and Lowercase letters"),
        feature: yup.string().required("* Mandatory field is required"),
        model: yup.string().required("* Mandatory field is required"),
        fuelType: yup.string().required("* Mandatory field is required"),
        brand: yup.string().required("* Mandatory field is required"),
        location: yup.string().required("* Mandatory field is required"),
        mileage: yup.string().min(1).required(),
        realPrice: yup.string().min(3).required(),
        driverType: yup.string().required("* Mandatory field is required"),
        description: yup.string().required("* Mandatory field is required").min(40, "Description must be at least 40 characters"),
    }).required();





    const noValidationResolver = async () => {
        return {
            values: {},
            errors: {},
        };
    };



    const { register, formState: { errors }, handleSubmit, setValue, getValues,clearErrors } = useForm({

        resolver: localStorage.getItem("UpdateCar") == "true" ? noValidationResolver() : yupResolver(schema),



    });
    const onSubmit = (data) => {
        data.pictures = pictures;
        data.transmission = "auto";
        data.showroomId = localStorage.getItem("Showroomid");
        createCar(data);
    }

    const [isRead, setisRead] = useState(false);
    const [pictures, setpictures] = useState([]);
    const moveTo = useNavigate();
    const [apiBrands, setapiBrands] = useState([]);
    const [postBrand, setpostBrand] = useState("");
    const locate = useLocation();
    const locateData = locate.state && locate.state.data ? locate.state.data : '';
    const [SuperAdminCar, setSuperAdminCar] = useState(locateData);

    async function createCar(data) {


        try {
            let response = await serverRequestHandler(EndPoint.createcar, `post`, data);
            moveTo(-1);
            Toast.success("✔ Car Created Successfully, wait for approval ✨", 2000)
        } catch (error) {
            Toast.error(error.message ?? error, 3000)
        }
    }


    const imageone = useRef(null);
    const [status, setStatus] = useState('pending');
    async function updateStatus(state) {
        const body = {
            carId: SuperAdminCar._id ?? locate.state.id ?? "",
            status: state,
        }

        try {
            let updatecar = await serverRequestHandler(EndPoint.carapproval, `post`, body);
            Toast.success("Car Status Updated", 2000);
            moveTo(-1);
        } catch (error) {
            Toast.error(error.message ?? error, 3000);
        }

    }



    useEffect(() => {
        getbrands();
        styleHandler();
        getLocation();
        showroomcar();
    }, []);



    const showroomcar = () => {
        if (locate.pathname == obj.superadminrentcar) {
            setisRead(true);
            return getShowroomcar();
        }
        else if (locate.pathname != obj.superadminrentcar) {
            // setisRead(true);
            return getShowroomcar();
        }
    }


    const styleHandler = () => {
        let carinputs = document.querySelectorAll(".carinput");
        carinputs.forEach(function (car) {
            if (locate.pathname == obj.superadminrentcar) {
                setisRead(true);
                car.style.color = '#9b9b9b';
            }
        })
    }



    async function getbrands() {
        try {
            let brands = await serverRequestHandler(EndPoint.getBrands, `get`);
            setapiBrands(brands);
        } catch (error) {
            Toast.error(error.message ?? error, 3000);
        }
    }
    const saveBrandCode = (e) => {
        console.log("Brand : ",errors)
        setpostBrand(e.target.value);
        clearErrors("brand");
    }
    const [Locations, setLocations] = useState([]);
    async function getLocation() {
        try {
            let locations = await serverRequestHandler(EndPoint.getLocations, `get`);
            setLocations(locations);
        } catch (error) {
            Toast.error(error.message ?? error, 3000);
        }
    }
    const [showroomId, setshowroomId] = useState();
    const [showroomOwnerId, setshowroomOwnerId] = useState();


    async function getShowroomcar() {
        try {
            let car = await serverRequestHandler(EndPoint.getSingleCar(locate.state?.id?.detailsId || locate.state.id), `get`);
            setshowroomId(car.showroomId);
            setshowroomOwnerId(car.showroomOwnerId);
            setValue("title", car.title)
            setValue("model", car.model)
            setValue("feature", car.feature)
            setValue("location", car.location)
            setValue("fuelType", car.fuelType)
            setValue("driverType", car.driverType)
            setValue("mileage", car.mileage)
            setValue("brand", car.brand)
            setValue("realPrice", car.realPrice)
            setValue("description", car.description)
            setpictures(car.pictures);
            localStorage.setItem("CarStatus", car.status);
        } catch (error) {
            Toast.error(error.message ?? error);
        }

    }
    async function updateCar() {
        const body = {
            "title": getValues("title"),
            "feature": getValues("feature"),
            "model": getValues("model"),
            "fuelType": getValues("fuelType"),
            "brand": getValues("brand"),
            "location": getValues("location"),
            "mileage": getValues("mileage"),
            "realPrice": getValues("realPrice"),
            "driverType": getValues("driverType"),
            "description": getValues("description"),
            "pictures": pictures,
            showroomId: showroomId,
        };

        try {
            let updatedresponse = await serverRequestHandler(EndPoint.updateCar(locate.state.id.detailsId), `put`, body);
            Toast.success("Car is updated ✔", 3000, 'dark');
            moveTo(-1);
            localStorage.setItem("UpdateCar", false);
        } catch (error) {
            Toast(error.message ?? error);
        }
    }
    const deletepicture = (idx) => {
        setpictures([...pictures.slice(0, idx), ...pictures.slice(idx + 1)]);
    }
    return (
        <div id='createparent' className='min-h-[100vh] w-[100%] flex items-center justify-center bg-[#F6F7F9] p-[3vmin]'>
            <form className="flex flex-col w-[100%]" onSubmit={handleSubmit(onSubmit)}>
                <Title className=''>Create a car for Rent</Title>
                <p className='text-[18px] my-[4px] text-[#FC4500] font-medium'>Car Details</p>
                <p>Your car details here ...</p>
                <div className='flex flex-row w-[100%] my-[5px]  justify-between gap-[2vmin]'>
                    <div className='flex flex-col w-[50%]'>
                        <label htmlFor="">Title</label>
                        <span className='flex items-center w-[100%]'>
                            <input readOnly={isRead} className={`carinput h-[45px] px-[10px] rounded-[5px] w-[100%] outline-none ${errors.title?.type === 'required' || errors.title?.type === 'pattern' ? 'border-[1px] border-[red]' : 'border-none'}`}
                                defaultValue={SuperAdminCar?.title ?? getValues("title")}
                                {...register("title")}
                                type="text" placeholder='Tesla,Corolla'
                            />
                        </span>
                        {(errors.title && <p className='text-[12px] font-semibold text-[#FC4500]'>{errors.title.message ?? ""}</p>)}
                    </div>
                    <div className='flex flex-col w-[50%] inputparent'>
                        <label htmlFor="">Model</label>

                        <select className={`carinput h-[45px] px-[10px] rounded-[5px] w-[100%] outline-none ${errors.carmodel?.type === 'required' || errors.carmodel?.type === 'pattern' ? 'border-[1px] border-[red]' : 'border-none'}`} readOnly={isRead} defaultValue={getValues("Model")}
                            {...register("model")}>
                            <option value="" readOnly>Select Model</option>
                            {SuperAdminCar ? <option value={SuperAdminCar.model}>{SuperAdminCar.model}</option> : <>
                                <option value="1981" key="0">1981</option><option value="1982" key="1">1982</option><option value="1983" key="2">1983</option><option value="1984" key="3">1984</option><option value="1985" key="4">1985</option><option value="1986" key="5">1986</option><option value="1987" key="6">1987</option><option value="1988" key="7">1988</option><option value="1989" key="8">1989</option><option value="1990" key="9">1990</option><option value="1991" key="10">1991</option><option value="1992" key="11">1992</option><option value="1993" key="12">1993</option><option value="1994" key="13">1994</option><option value="1995" key="14">1995</option><option value="1996" key="15">1996</option><option value="1997" key="16">1997</option><option value="1998" key="17">1998</option><option value="1999" key="18">1999</option><option value="2000" key="19">2000</option><option value="2001" key="20">2001</option><option value="2002" key="21">2002</option><option value="2003" key="22">2003</option><option value="2004" key="23">2004</option><option value="2005" key="24">2005</option><option value="2006" key="25">2006</option><option value="2007" key="26">2007</option><option value="2008" key="27">2008</option><option value="2009" key="28">2009</option><option value="2010" key="29">2010</option><option value="2011" key="30">2011</option><option value="2012" key="31">2012</option><option value="2013" key="32">2013</option><option value="2014" key="33">2014</option><option value="2015" key="34">2015</option><option value="2016" key="35">2016</option><option value="2017" key="36">2017</option><option value="2018" key="37">2018</option><option value="2019" key="38">2019</option><option value="2020" key="39">2020</option><option value="2021" key="40">2021</option><option value="2022" key="41">2022</option><option value="2023" key="42">2023</option><option value="2024" key="43">2024</option><option value="2025" key="44">2025</option>
                                <option value={new Date().getFullYear()}>Latest</option>
                            </>}
                        </select>
                        {(errors.model && <p className='text-[12px] font-semibold text-[#FC4500]'>{errors.model.message ?? ""}</p>)}
                    </div>
                </div>
                <div className='flex items-center justify-center my-[5px] gap-[2vmin]'>
                    <div className='flex flex-col gap-[5px] w-[50%]'>
                        <label htmlFor="feature">Feature</label>
                        <select id='feature'
                            {...register("feature")}
                            className={`carinput h-[45px] px-[10px] rounded-[5px] w-[100%] outline-none ${errors.feature && errors.feature?.message ? 'border-[1px] border-[red]' : 'border-none'}`}
                        >
                            {locate.pathname == obj.userrentcar && getValues("feature") || locate.pathname == obj.superadminrentcar && getValues("feature") ? <option selected value={getValues("feature")}>{getValues("feature")}</option> : ''}
                            <option value="" className='border-none outline-none'>Select Feature</option>
                            <option defaultValue={true} value='manual'>Manual</option>
                            <option value="auto">Auto</option>
                        </select>
                        {(errors.feature && <p className='text-[12px] font-semibold text-[#FC4500]'>{errors.feature.message}</p>)}
                    </div>
                    <div className='flex flex-col gap-[5px] w-[50%]'>
                        <label htmlFor="">Location</label>
                        <select
                            className={`carinput h-[45px] px-[10px] rounded-[5px] w-[100%] outline-none ${errors.location?.type === 'required' || errors.location?.type === 'pattern' ? 'border-[1px] border-[red]' : 'border-none'}`}
                            {...register("location")}
                        >
                            <option value="">Select Location</option>
                            {locate.pathname == obj.userrentcar && getValues("location") || locate.pathname == obj.superadminrentcar ? <option selected>{getValues("location")}</option> : ''}
                            {SuperAdminCar ? <><option defaultValue={SuperAdminCar.location}>{SuperAdminCar.location}</option></> : Locations.map(function (location, idx) {
                                return (<option key={idx} defaultValue={location.name}>{location.name.toUpperCase()}</option>)
                            })}
                        </select>
                        {(errors.location && <p className='text-[12px] font-semibold text-[#FC4500]'>{errors.location.message ?? ""}</p>)}

                    </div>
                </div>
                <div className='flex flex-row w-[100%] my-[5px] justify-between gap-[2vmin]'>
                    <div className='flex flex-col w-[100%]'>
                        <label htmlFor="">Fuel Type</label>
                        <select
                            className={`carinput h-[45px] px-[10px] rounded-[5px] w-[100%] outline-none ${errors.fuelType && errors.fuelType?.message ? 'border-[1px] border-[red]' : 'border-none'}`}
                            readOnly={isRead}
                            {...register("fuelType")}

                        >
                            <option value="">Select Fueltype</option>
                            {locate.pathname == obj.userrentcar && getValues("fuelType") || locate.pathname == obj.superadminrentcar && locate ? <option selected >{getValues("fuelType")}</option> : ''}
                            {SuperAdminCar ? <option value={SuperAdminCar.fuelType}>{SuperAdminCar.fuelType}</option> : <>
                                <option value="petrol">Petrol</option>
                                <option value="diesel">Diesel</option>
                                <option value="cng">CNG</option>
                                <option value="electric">Electric</option>
                            </>}
                        </select>
                        {(errors.fuelType && <p className='text-[12px] font-semibold text-[#FC4500]'>{errors.fuelType.message ?? ""}</p>)}
                    </div>

                    <div className='flex flex-col w-[100%]' >
                        <label htmlFor="" placeholder=''>Driver Type</label>
                        <select readOnly={isRead}
                            className={`carinput h-[45px] px-[10px] rounded-[5px] w-[100%] outline-none ${errors.driverType && errors.driverType.message ? 'border-[1px] border-[red]' : 'border-none'}`}
                            name="" id=""
                            {...register("driverType")} >
                            <option value="">Select Driver</option>
                            {locate.pathname == obj.userrentcar && getValues("driverType") || locate.pathname == obj.superadminrentcar && getValues("driverType") ? <><option selected value={getValues("driverType")}>{getValues("driverType")}</option></> : ''}
                            {SuperAdminCar ? <> <option defaultValue={SuperAdminCar.driverType}>{SuperAdminCar.driverType}</option> </> : <>  <option value='withDriver'>With Driver</option>
                                <option value='withoutDriver'>Without Driver</option></>}
                        </select>
                        {(errors.driverType && <p className='text-[12px] font-semibold text-[#FC4500]'>{errors.driverType.message ?? ""}</p>)}
                    </div>
                </div>
                <div className='flex flex-row w-[100%] my-[5px] justify-between' >
                    <div className='flex flex-col w-[100%]'>
                        <label htmlFor="">Mileage</label>
                        <span className='flex items-center w-[100%]'>
                            <input readOnly={isRead}
                                className={`carinput h-[45px] px-[10px] rounded-[5px] w-[100%] outline-none ${errors.mileage?.type === 'required' || errors.mileage?.type === 'pattern' ? 'border-[1px] border-[red]' : 'border-none'}`}
                                defaultValue={SuperAdminCar ? SuperAdminCar.mileage : getValues("mileage")}
                                {...register("mileage")} type="number" placeholder='15000' />
                        </span>
                        {(errors.mileage && <p className='text-[12px] font-semibold text-[#FC4500]'>{errors.mileage.message ?? ""}</p>)}
                    </div>
                    <div className='flex flex-col w-[100%] ml-[10px]'>
                        <label htmlFor="" placeholder=''>Brand</label>
                        <select readOnly={isRead}
                            className={`carinput h-[45px] px-[10px] rounded-[5px] w-[100%] outline-none ${errors.brand && errors.brand?.message ? 'border-[1px] border-[red]' : 'border-none'}`}
                            name="" id=""
                            {...register("brand")}
                            onChange={(e) => {
                                saveBrandCode(e);
                            }}

                        >
                            {SuperAdminCar ? <>
                                <option value={SuperAdminCar.brand}>{SuperAdminCar.brand}</option>
                            </> : <>
                                {apiBrands.map(function (brand, idx) {

                                    console.log("Brand",brand);
                                    return <option value={brand._id} key={idx} className="">{brand.name.toUpperCase()}</option>
                                })}
                            </>}
                        </select>
                        {(errors.brand && <p className='text-[12px] font-semibold text-[#FC4500]'>{errors.brand.message ?? ""}</p>)}
                    </div>
                </div>
                <div className='flex flex-row w-[100%] my-[5px] justify-between gap-[2vmin]'>
                    <div className='flex flex-col w-[100%]'>
                        <label htmlFor="" placeholder=''>Price</label>
                        <span className='flex items-center w-[100%]'>
                            <input readOnly={isRead}
                                className={`carinput h-[45px] px-[10px] rounded-[5px] w-[100%] outline-none ${errors.price && errors.price?.message === 'pattern' ? 'border-[1px] border-[red]' : 'border-none'}`}
                                defaultValue={SuperAdminCar ? SuperAdminCar.discountedPrice : getValues("realPrice")}
                                {...register("realPrice")}


                                type="number" placeholder="23000" />
                        </span>
                    </div>
                </div>

                {(errors.realPrice && <p className='text-[12px] font-semibold text-[#FC4500]'>{errors.realPrice.message ?? ""}</p>)}


                <div className='w-[100%] flex flex-col'>
                    <label htmlFor="">Description</label>
                    <textarea readOnly={isRead} defaultValue={SuperAdminCar ? SuperAdminCar.description : getValues("description")}


                        {...register("description")}

                        className={`carinput h-[150px] rounded-[5px] outline-none px-[5px] py-[3px] ${errors.description && errors.description.message ? 'border-[1px] border-[red]' : ''}`}


                    ></textarea>
                    <p className='text-[12px] text-[#FC4500] font-semibold'>{errors.description?.message ?? ''}</p>
                </div>
                <div className='w-[100%] flex flex-col'>
                    <p htmlFor="">Pictures</p>
                    <div className=''>
                        <label htmlFor='carpictures' className='' >
                            <input id='carpictures'

                                type="file"

                                onChange={(e) => {
                                    let files=e.target.files;
                                    for (let image of files) {
                                        if (image.type == "image/png" || image.type == "image/jpeg" || image.type == 'image/jpg' || image.type == "image/gif") {
                                            const formdata = new FormData()
                                            formdata.append('file', image);
                                            postimageone(formdata);

                                            async function postimageone(formdata) {
                                                try {
                                                    let response = await imageUpload(formdata); setpictures(old => [...old, response]);
                                                    Toast.success("✔ Image uploaded successfully!", 1000);
                                                } catch (error) {
                                                    Toast.error(error.message ?? error, 3000);
                                                }
                                            }
                                        } else if (image.type == "application/pdf") {
                                            Toast.error(`PDF is not acceepted \n Please upload in image of following formats \n JPEG, PNG, JPG, GIF`);
                                        } else if (image.type == "video/mp4") {
                                            Toast.error("Videos are not accepted \n Make sure you are uploading images");
                                        }
                                        else {
                                            Toast.error("Invalid file type \n Please upload the image of following format \n JPEG, PNG, JPG, GIF")
                                        }
                                    }




                                    // files.forEach((function (image,idx) {
                                    //    
                                    // }))
                                }}
                                hidden multiple/>
                            <IoMdCamera id='btncamera' color='#FFFFFF' fontSize='30px' />
                        </label>
                        {errors.pictures && <p className='text-[12px] text-[#FC4500]'>{errors.pictures?.message}</p>}

                        <div id="imagecontainer" className='my-[5px]' >
                            {pictures ? pictures.map(function (picture, idx) {
                                return (<>
                                    <div id="image" key={idx}>
                                        <IoMdTrash onClick={() => {
                                            deletepicture(idx);
                                        }} id='trashicon' fontSize='20px' color='white' />
                                        <img id='img' src={localhost() + picture} alt="" />
                                    </div>
                                </>)
                            }) : ''}
                        </div>
                    </div>

                    {locate.pathname == obj.superadminrentcar && localStorage.getItem("CarStatus") == 'pending' ? <>
                        <div className='w-[100%] flex flex-row items-center justify-center gap-[20px] my-[20px] '>
                            <button onClick={() => {
                                setStatus("rejected");
                                updateStatus("rejected");
                            }}>
                                Reject
                            </button>
                            <button onClick={() => {
                                updateStatus("approved");
                            }} >Approve</button>
                        </div>
                    </> : (locate.pathname == obj.superadminrentcar && localStorage.getItem("CarStatus") == 'approved' ? <div id='continue' className='w-[100%] flex flex-row items-center justify-center py-[10px]'> <p className='text-[#24343d] py-[0.4rem] px-[1rem] text-[0.7rem] border-[1px] border-red-600 rounded-full'>You approved this car</p> </div> : (locate.pathname == obj.superadminrentcar && localStorage.getItem("CarStatus") == 'rejected' ? <div id='continue' className='w-[100%] flex flex-row items-center justify-center py-[10px]'> <p className='text-[#24343d] py-[0.4rem] px-[1rem] text-[0.7rem] border-[1px] border-red-600 rounded-full'>You rejected this car</p> </div> : (locate.pathname == obj.userrentcar && localStorage.getItem("UpdateCar") == 'true' ? <button onClick={() => { updateCar() }} >Update Car</button> : <input className='text-[#FFFFFf] font-semibold bg-[#FC4500] w-[100px] px-[10px] py-[8px] rounded-[4px] self-end my-[20px] text-sm cursor-pointer' type='submit' value="Create Car" />)))}
                </div>
            </form>
            <ToastContainer />

        </div>
    )
}

export default RentCar