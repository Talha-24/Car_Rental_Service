import React, { useEffect, useRef } from 'react'
import { Button, Buttonone, Element, Error, Form, ImageContainer, Input, InputButton, InputParent, Label, Select, Span, Textarea, TextareaParent, TextFeat, TextFeatChild, Title } from './RentCar'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import axios, { toFormData } from 'axios';
import { P, UserProfile } from '../../Components/Profile/UserProfile';
import { useLocation, useNavigate } from 'react-router-dom';
import serverRequestHandler from '../../Utils/http';
import Toast from '../../Toaster/Toaster';
import imageUpload from '../../Utils/UploadImage';
import { IoMdCamera, IoMdTrash } from 'react-icons/io';
import localhost from '../../Utils/LocalHost';

const RentCar = ({ filter }) => {
    const [carimageone, setcarimageone] = useState(null);
    const [carimagetwo, setcarimagetwo] = useState(null);
    const [carimagethree, setcarimagethree] = useState(null);
    const [isRead, setisRead] = useState(false);
    const [pictures, setpictures] = useState([]);
    const moveTo = useNavigate();
    const [title, setTitle] = useState('');
    const [model, setModel] = useState('');
    const [feature, setFeature] = useState('');
    const [fueltype, setFueltype] = useState('');
    const [drivertype, setDrivertype] = useState('');
    const [mileage, setMileage] = useState('');
    const [brand, setBrand] = useState('');
    const [actualPrice, setActualprice] = useState('');
    const [discountPrice, setdiscountPrice] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    //Errors 
    const [mileageError, setmileageError] = useState('');
    const [priceError, setpriceError] = useState('');
    const [titleError, settitleError] = useState('');
    const [modelError, setmodelError] = useState('');
    const [featureError, setfeatureError] = useState('');
    const [fuelError, setfuelError] = useState('');
    const [driverError, setdriverError] = useState('');
    const [brandError, setbrandError] = useState('');
    const [discountError, setdiscountError] = useState('');
    const [descriptionError, setdescriptionError] = useState('');
    const [locationError, setLocationError] = useState('');
    const [apiBrands, setapiBrands] = useState([]);
    const [postBrand, setpostBrand] = useState("");
    const locate = useLocation();
    const locateData = locate.state && locate.state.data ? locate.state.data : '';
    const [SuperAdminCar, setSuperAdminCar] = useState(locateData);
    async function createCar() {
        const endPoint = `/car/create`;
        const body = {
            "title": title.toLowerCase(),
            "feature": feature.toLowerCase(),
            "model": model.toLowerCase(),
            "fuelType": fueltype.toLowerCase(),
            "brand": postBrand.toLowerCase(),
            "location": location.toLowerCase(),
            "mileage": mileage.toLowerCase(),
            "realPrice": discountPrice,
            "driverType": drivertype,
            "description": description.toLowerCase(),
            "pictures": pictures,
            "transmission": "auto",
            "showroomId": localStorage.getItem('Showroomid')
        }
        const method = `post`;
        try {
            let response = await serverRequestHandler(endPoint, method, body);
            Toast("✔ Car Created Successfully, wait for approval ✨");
            moveTo(-1);
        } catch (error) {
            Toast(error.message);
        }
    }




    const submitHandler = () => {

        /*  if (!/[A-Za-z0-9]/.test(title)) {
              settitleError("* Field is mandatory");
              return;
          }
  
          // if (/[0-9]/.test(model)) {
          //     setmodelError('* Field is mandatory');
          //     settitleError("");
          //     return;
          // }
  
          if (!/[A-Za-z0-9]/.test(feature)) {
              setfeatureError('* Field is mandatory');
              return;
          }
  
          if (!/[A-Za-z0-9]/.test(fueltype)) {
              setfeatureError('');
  
              setfuelError('* Field is mandatory');
              return;
          }
          if (!/[A-Za-z0-9]/.test(drivertype)) {
              setfuelError('');
  
  
              setdriverError('* Field is mandatory');
  
              return;
          }
          if (!/[A-Za-z0-9]/.test(mileage)) {
              setdriverError('');
              setmileageError('* Field is mandatory');
  
              return;
          }
          if (!/[A-Za-z0-9]/.test(brand)) {
              setmileageError('');
              setmodelError('* Field is mandatory');
              return;
          }
          if (!/[A-Za-z0-9]/.test(actualPrice)) {
              setmodelError('');
              setpriceError('* Field is mandatory');
              return;
          }
          if (actualPrice < 5000) {
              setpriceError('min. 6000 & max. 100000000');
              return;
          }
  
          if (!/[A-Za-z0-9]/.test(discountPrice)) {
              setpriceError('min. 6000 & max. 100000000');
              setdiscountError('* Field is mandatory');
              return;
          }
          if (!/[A-Za-z0-9!]/.test(description)) {
              setdiscountError('');
              setdescriptionError('* Field is mandatory');
              return;
          }
          if (!/[A-Za-z/d]/.test(location)) {
              setdescriptionError('* Field is mandatory');
              setLocationError('* Field is mandatory');
              return;
          }*/


        createCar();
        // setLocationError('');
        // settitleError("");
        // setmodelError('');
        // setfeatureError("");
        // setfuelError(" ");
        // setdriverError("");
        // setmileageError("");
        // setbrandError("");
        // setpriceError("");
        // setdescriptionError("");
        // setLocationError("");




    }

    const imageone = useRef(null);
    const imagetwo = useRef(null);
    const imagethree = useRef(null);
    const imageonedisplay = useRef(null);
    const imagetwodisplay = useRef(null);
    const imagethreedisplay = useRef(null);




    const [status, setStatus] = useState('pending');
    async function updateStatus(state) {
        const body = {
            carId: SuperAdminCar._id ?? locate.state.id,
            status: state,
        }
        const endPoint = `/car/approve`;
        const method = `post`;
        try {
            let updatecar = await serverRequestHandler(endPoint, method, body);
            Toast("Status Updated!");
            moveTo(-1);
        } catch (error) {
            Toast(error.message);
        }

    }



    useEffect(() => {
        getbrands();
        styleHandler();
        getLocation();
        showroomcar();
    }, []);

    const showroomcar = () => {
        console.log("Showroom Carssss")
        if (locate.pathname == '/showroomowner/showroomcars/rentcar') {
            setisRead(true);
            return getShowroomcar();
        }
        else if (locate.pathname == '/showroomowner/cars/rentcar') {
            setisRead(true);
            return getShowroomcar();
        }
    }


    const styleHandler = () => {
        let carinputs = document.querySelectorAll(".carinput");
        carinputs.forEach(function (car) {
            if (locate.pathname == '/showroomowner/cars/rentcar') {
                setisRead(true);
                car.style.color = '#9b9b9b';
            }
        })
    }



    async function getbrands() {
        const endPoint = `/brand/getAll`;
        const method = `get`;
        try {
            let brands = await serverRequestHandler(endPoint, method);
            setapiBrands(brands);
        } catch (error) {
            Toast(error.message);
        }
    }
    const saveBrandCode = (e) => {
        setpostBrand(e.target.value);
    }
    const [Locations, setLocations] = useState([]);
    async function getLocation() {
        const endPoint = `/location/getAll`;
        const method = `get`;
        try {
            let locations = await serverRequestHandler(endPoint, method);
            setLocations(locations);
        } catch (error) {
            Toast(error.message);
        }
    }
    const [showroomId, setshowroomId] = useState();
    const [showroomOwnerId, setshowroomOwnerId] = useState();
    async function getShowroomcar() {
        const endPoint = `/car/getOne/${locate.state?.id?.detailsId || locate.state.id}`;
        const method = `get`;
        try {
            let car = await serverRequestHandler(endPoint, method);
            setshowroomId(car.showroomId);
            setshowroomOwnerId(car.showroomOwnerId);
            setTitle(car.title);
            setModel(car.model);
            setFeature(car.feature);
            setLocation(car.location);
            setFueltype(car.fuelType);
            setDrivertype(car.driverType);
            setMileage(car.mileage);
            setpostBrand(car.brand);
            setdiscountPrice(car.discountedPrice);
            setDescription(car.description);
            setpictures(car.pictures)
        } catch (error) {
            Toast(error.message);
        }

    }
    async function updateCar() {
        const method = `put`;
        const endPoint = `/car/update/${locate.state.id.detailsId}`;
        const body = {
            "title": title.toLowerCase(),
            "feature": feature.toLowerCase(),
            "model": model.toLowerCase(),
            "fuelType": fueltype.toLowerCase(),
            "brand": postBrand,
            "location": location.toLowerCase(),
            "mileage": mileage,
            "realPrice": discountPrice,
            "driverType": drivertype,
            "description": description.toLowerCase(),
            "pictures": pictures,
            showroomId: showroomId,
        };

        try {
            let updatedresponse = await serverRequestHandler(endPoint, method, body);
            Toast("Car is updated ✔");
            moveTo(-1);
            localStorage.setItem("UpdateCar", false);
        } catch (error) {
            Toast(error.message);
        }

    }
    const deletepicture = (idx) => {
        setpictures([...pictures.slice(0, idx), ...pictures.slice(idx + 1)]);
    }

    return (
        <div className='min-h-[100vh] w-[100%] flex items-center justify-center bg-[#F6F7F9] p-[3vmin]'>
            <Form onSubmit={(e) => { e.preventDefault() }}>
                <Title >Create a car for Rent</Title>
                <InputParent className='flex flex-row w-[100%]  justify-between gap-[2vmin]'>
                    <Element className='flex flex-col'>
                        <Label htmlFor="">Title</Label>
                        <Span className='border-1 border-gray-600 flex items-center'>
                            <Input disabled={isRead} className='carinput'
                                value={SuperAdminCar?.title ?? title}
                                onChange={(e) => setTitle(e.target.value)}
                                type="text" placeholder='i.e Tesla,Corolla' />
                        </Span>
                        <Error>{titleError}</Error>
                    </Element>
                    <Element className='flex flex-col'>
                        <Label htmlFor="">Model</Label>

                        <Select disabled={isRead} value={model} onChange={(e) => { setModel(e.target.value) }}>
                            <option value="" disabled>Select Model</option>
                            {SuperAdminCar ? <option value={SuperAdminCar.model}>{SuperAdminCar.model}</option> : <>
                                <option value="1981" key="0">1981</option><option value="1982" key="1">1982</option><option value="1983" key="2">1983</option><option value="1984" key="3">1984</option><option value="1985" key="4">1985</option><option value="1986" key="5">1986</option><option value="1987" key="6">1987</option><option value="1988" key="7">1988</option><option value="1989" key="8">1989</option><option value="1990" key="9">1990</option><option value="1991" key="10">1991</option><option value="1992" key="11">1992</option><option value="1993" key="12">1993</option><option value="1994" key="13">1994</option><option value="1995" key="14">1995</option><option value="1996" key="15">1996</option><option value="1997" key="16">1997</option><option value="1998" key="17">1998</option><option value="1999" key="18">1999</option><option value="2000" key="19">2000</option><option value="2001" key="20">2001</option><option value="2002" key="21">2002</option><option value="2003" key="22">2003</option><option value="2004" key="23">2004</option><option value="2005" key="24">2005</option><option value="2006" key="25">2006</option><option value="2007" key="26">2007</option><option value="2008" key="27">2008</option><option value="2009" key="28">2009</option><option value="2010" key="29">2010</option><option value="2011" key="30">2011</option><option value="2012" key="31">2012</option><option value="2013" key="32">2013</option><option value="2014" key="33">2014</option><option value="2015" key="34">2015</option><option value="2016" key="35">2016</option><option value="2017" key="36">2017</option><option value="2018" key="37">2018</option><option value="2019" key="38">2019</option><option value="2020" key="39">2020</option><option value="2021" key="40">2021</option><option value="2022" key="41">2022</option><option value="2023" key="42">2023</option><option value="2024" key="43">2024</option><option value="2025" key="44">2025</option>
                                <option value={new Date().getFullYear()}>Latest</option>
                            </>}

                        </Select>

                        <Error>{modelError}</Error>
                    </Element>
                </InputParent>
                <InputParent>
                    <Element className='flex flex-col'>
                        <Label htmlFor="">Feature</Label>
                        <Select onChange={(e) => {
                            setFeature(e.target.value);
                        }} className='w-[300px] capitalize' name="" id="">
                            {locate.pathname == '/showroomowner/showroomcars/rentcar' && feature || locate.pathname == '/showroomowner/cars/rentcar' && feature ? <option selected value={feature}>{feature}</option> : ''}
                            <option value="" className='border-none outline-none'>Select Feature</option>
                            <option defaultValue={true} value='Manual'>Manual</option>
                            <option value="auto">Auto</option>
                        </Select>
                        <Error>{featureError}</Error>
                    </Element>
                    <Element className='flex flex-col'>
                        <Label htmlFor="">Location</Label>
                        <Select onChange={(e) => { setLocation(e.target.value) }} >
                            <option value="">Select Location</option>
                            {locate.pathname == '/showroomowner/showroomcars/rentcar' && location || locate.pathname == '/showroomowner/cars/rentcar' ? <option selected>{location}</option> : ''}
                            {SuperAdminCar ? <><option value={SuperAdminCar.location}>{SuperAdminCar.location}</option></> : Locations.map(function (location, idx) {
                                return (<option key={idx} value={location.name}>{location.name.toUpperCase()}</option>)
                            })}
                        </Select>
                        <Error>{locationError}</Error>
                    </Element>
                </InputParent>
                <InputParent className='flex flex-row w-[100%] justify-between gap-[2vmin]'>
                    <Element className='flex flex-col'>
                        <Label htmlFor="">Fuel Type</Label>
                        <Select disabled={isRead} onChange={(e) => {
                            setFueltype(e.target.value);
                        }}>
                            <option value="">Select Fueltype</option>
                            {locate.pathname == '/showroomowner/showroomcars/rentcar' && fueltype || locate.pathname == '/showroomowner/cars/rentcar' && locate ? <option selected >{fueltype}</option> : ''}
                            {SuperAdminCar ? <option value={SuperAdminCar.fuelType}>{SuperAdminCar.fuelType}</option> : <>
                                <option value="petrol">Petrol</option>
                                <option value="diesel">Diesel</option>
                                <option value="cng">CNG</option>
                                <option value="electric">Electric</option>
                            </>}
                        </Select>
                        <Error>{fuelError}</Error>
                    </Element>
                    <Element className='flex flex-col'>
                        <Label htmlFor="" placeholder=''>Driver Type</Label>
                        <Select disabled={isRead} className='carinput' name="" id="" onChange={(e) => { setDrivertype(e.target.value); }}>
                            {locate.pathname == '/showroomowner/showroomcars/rentcar' && drivertype || locate.pathname == '/showroomowner/cars/rentcar' && drivertype ? <><option selected value={drivertype}>{drivertype}</option></> : ''}
                            {SuperAdminCar ? <> <option value={SuperAdminCar.driverType}>{SuperAdminCar.driverType}</option> </> : <>  <option value='withDriver'>With Driver</option>
                                <option value='withoutDriver'>Without Driver</option></>}
                        </Select>
                        <Error>{driverError}</Error>
                    </Element>
                </InputParent>
                <InputParent className='flex flex-row w-[100%] justify-between' >
                    <Element className='flex flex-col'>
                        <Label htmlFor="">Mileage</Label>
                        <Span className='border-1 border-gray-600 flex items-center'>
                            <Input disabled={isRead} className='carinput' value={SuperAdminCar ? SuperAdminCar.mileage : mileage} onChange={(e) => { setMileage(e.target.value) }} type="text" placeholder='15000' />
                        </Span>
                        <Error>{mileageError}</Error>
                    </Element>
                    <Element className='flex flex-col'>
                        <Label htmlFor="" placeholder=''>Brand</Label>

                        <Select disabled={isRead} className='carinput' name="" id="" onChange={(e) => {
                            saveBrandCode(e);
                        }} >
                            {SuperAdminCar ? <>
                                <option value={SuperAdminCar.brand}>{SuperAdminCar.brand}</option>
                            </> : <>
                                {apiBrands.map(function (brand, idx) {
                                    return <option value={brand._id} key={idx} className="">{brand.name.toUpperCase()}</option>
                                })}
                            </>}
                        </Select>
                        <Error>{brandError}</Error>
                    </Element>
                </InputParent>
                <InputParent className='flex flex-row w-[100%] justify-between gap-[2vmin]'>
                    <Element className='flex flex-col'>
                        <Label htmlFor="" placeholder=''>Price</Label>
                        <Span className='border-1 border-gray-600 flex items-center'>
                            <Input disabled={isRead} className='carinput' value={SuperAdminCar ? SuperAdminCar.discountedPrice : discountPrice} onChange={(e) => { setdiscountPrice(e.target.value) }} type="text" placeholder="23000" />
                        </Span>
                    </Element>
                </InputParent>
                <TextareaParent>
                    <Label htmlFor="">Description</Label>
                    <Textarea disabled={isRead} value={SuperAdminCar ? SuperAdminCar.description : description} onChange={(e) => { setDescription(e.target.value) }} className='carinput'></Textarea>
                    <Error>{descriptionError}</Error>
                </TextareaParent>
                <Element className='w-[100%] flex flex-col'>
                    <Label htmlFor="">Pictures</Label>
                    <ImageContainer>
                        <InputButton disabled={isRead} onClick={() => { imageone.current.click(); }}>
                            <input disabled={isRead} type="file" ref={imageone} onChange={(e) => {
                                const image = e.target.files[0];
                                const formdata = new FormData()
                                formdata.append('file', image);
                                postimageone(formdata);
                                async function postimageone(formdata) {
                                    try {
                                        let response = await imageUpload(formdata); setpictures(old => [...old, response])
                                    } catch (error) { }
                                }
                            }} hidden />
                            <IoMdCamera color='#929292' fontSize='20px' />
                        </InputButton>
                        <div id="imagecontainer" disabled={isRead} >
                            {pictures ? pictures.map(function (picture, idx) {
                                return (<>
                                    <div disabled={isRead} id="image">
                                        <IoMdTrash disabled={isRead} onClick={() => {
                                            deletepicture(idx);
                                        }} id='trashicon' fontSize='20px' color='white' />
                                        <img disabled={isRead} id='img' src={localhost() + picture} alt="" />
                                    </div>
                                </>)
                            }) : ''}
                        </div>
                    </ImageContainer>
                    {locate.pathname == '/showroomowner/cars/rentcar' && localStorage.getItem("CarStatus") == 'pending' ? <>
                        <div className='w-[100%] flex flex-row items-center justify-center gap-[20px] my-[20px] '>
                            <Buttonone onClick={() => {
                                setStatus("rejected");
                                updateStatus("rejected");
                            }}>
                                Reject
                            </Buttonone>
                            <Buttonone onClick={() => {
                                updateStatus("approved");
                            }} >Approve</Buttonone>
                        </div>
                    </> : (locate.pathname == '/showroomowner/cars/rentcar' && localStorage.getItem("CarStatus") == 'approved' ? <div id='continue' className='w-[100%] flex flex-row items-center justify-center py-[10px]'> <p className='text-[#24343d] py-[0.4rem] px-[1rem] text-[0.7rem] border-[1px] border-red-600 rounded-full'>You approved this car</p> </div> : (locate.pathname == '/showroomowner/cars/rentcar' && localStorage.getItem("CarStatus") == 'rejected' ? <div id='continue' className='w-[100%] flex flex-row items-center justify-center py-[10px]'> <p className='text-[#24343d] py-[0.4rem] px-[1rem] text-[0.7rem] border-[1px] border-red-600 rounded-full'>You rejected this car</p> </div> : (locate.pathname == '/showroomowner/showroomcars/rentcar' && localStorage.getItem("UpdateCar") == 'true' ? <Button onClick={() => { updateCar() }} >Update Car</Button> : <Button onClick={() => { submitHandler(); }}>Create Car</Button>)))}


                </Element>


            </Form>
            <ToastContainer />

        </div>
    )
}

export default RentCar