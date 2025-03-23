import React, { useEffect, useReducer, useRef, useState } from 'react'
import "./CreateShowroom.css";
import { useLocation, useNavigate } from 'react-router-dom';
import serverRequestHandler from '../../Utils/http';
import { Toast } from "../../Utils/Toasthot";
import imageUpload from '../../Utils/UploadImage';
import localhost from '../../Utils/LocalHost';
import { EndPoint, obj } from '../../Utils/RoutesPaths';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
const CreateShowroom = () => {
  const [showroomdetails, setshowroomdetails] = useState({});
  const [ID, setId] = useState('');
  const [superAdminShowroom, setsuperAdminShowroom] = useState(null);
  const [isReadonly, setisReadonly] = useState(false);
  const navigate = useNavigate('');
  const location = useLocation();
  const schema = yup.object({
    showRoomPicture: yup.string().required(),
    phone: yup.string().required().matches(/^[0-9]{7,11}$/, "Phone must ranges from 7-11"),
    location: yup.string().required(),
    showRoomName: yup.string().required().min(3, "*Showroom Name is too short").matches(/^[A-Za-z<>./,@\s]+$/i, "* Must includes only Uppercase and Lowercase Letters")
  }).required();



  const stopValidation = async () => {
    return (
      {
        values: {},
        errors: {},
      }
    )
  }




  const { register, formState: { errors }, handleSubmit, setValue, clearErrors, getValues } = useForm({

    resolver: location.pathname == '/showroomowner/showrooms/addshowroom' ? stopValidation() : yupResolver(schema)


  });


  const onSubmit = (data) => {


    let showroomStatus = localStorage.getItem("Showroomstatus");
    if (showroomStatus == 'pending' || showroomStatus == 'approved') {
      updateMyShowroom();
    } else {
      addShowroom(data);
    }
  }


  async function addShowroom(data) {

    try {
      let response = await serverRequestHandler(EndPoint.addshowroom, `post`, data);
      setshowroomdetails(response);
      Toast.success(" ✔ Showroom Created Successfully, wait for approval ✨");
      localStorage.setItem("Showroomid", response._id);
      localStorage.setItem("Showroomowner", true);
      localStorage.setItem("Role", "owner");
      getshowroomdetails();
      navigate(-1);
    } catch (error) {
      Toast.error(error.message ?? error);
    }


  }

  const [imageFormat, setimageFormat] = useState('');
  const [imageSize, setimageSize] = useState('');
  const showImage = useRef(null);
  const handleImage = (e) => {
    const file = e.target.files[0];
    const size = file.size / 1024;
    setimageSize(Math.floor(size));
    if (size > 1024) {
      let mb = size / 1024;
      setimageSize(Math.floor(mb));
    }
    setimageFormat(e.target.files[0].type.split("/")[1]);
    const formdata = new FormData();
    formdata.append('file', file);
    UploadImage();
    async function UploadImage() {
      try {
        let response = await imageUpload(formdata);
        Toast.success("✔ File is uploaded successfully!");
        setValue("showRoomPicture",response, { shouldValidate: true });
        clearErrors("showRoomPicture")
      } catch (error) {
      }
    }
  }


  const [showroomstatus, setshowroomstatus] = useState('');

  async function getshowroomdetails() {
    try {
      let response = await serverRequestHandler(EndPoint.usershowroom, `get`);
      setValue("phone", response.phone)
      setValue("location", response.location);
      setValue("showRoomName", response.showRoomName);
      setValue("showRoomPicture",response.showRoomPicture);
      setId(response._id);
      localStorage.setItem("Showroomid", response._id);
      setshowroomstatus(response.status);
      localStorage.setItem("Showroomstatus", response.status);
      Toast.success("Showroom retrieved successfully 🤗");
    } catch (error) {
      Toast.error(error.message ?? error);
    }
  }

  const buttons = useRef(null);



  const [locations, setlocations] = useState(null);
  const [status, setStatus] = useState(null);

  async function getLocation() {
    try {
      let response = await serverRequestHandler(EndPoint.getLocations, `get`);
      setlocations(response);
      { localStorage.getItem("Showroomstatus") == 'pending' || localStorage.getItem("Showroomstatus") == 'rejected' ? setisReadonly(!true) : setisReadonly(false) }
    } catch (error) {
      Toast.error(error.message ?? error);
    }
  }

  useEffect(() => {
    getLocation();//Check Superadmin ky liye.....

    getRequestedShowroom();
  }, [])

  const navigateBack = useNavigate();

  const getRequestedShowroom = () => {
    if (location.pathname != '/showroomowner/addshowroom') {
      getShowrooms();
      return;
    }


    if (location.pathname != '/showroomowner/showrooms/addshowroom' || localStorage.getItem("Showroomstatus") == 'pending' || localStorage.getItem("Showroomstatus") == "approved") {
      if (localStorage.getItem("Role") != "user") {
        getshowroomdetails();
      }






      return;

    }


  }

  async function getShowrooms() {
    const showroomId = location.state?._id ?? location.state.id ?? location.state?.showroomid ?? location.state.data ?? '';
    try {
      let requestedShowroom = await serverRequestHandler(EndPoint.getShowroom(showroomId), `get`);
      setStatus(requestedShowroom.status);
      {
        location.pathname == obj.showroomnotification ? setshowroomdetails(requestedShowroom) : ''
      }
      console.log(requestedShowroom);
      setsuperAdminShowroom(requestedShowroom);
      setsuperAdminShowroompic(requestedShowroom.showRoomPicture);
      setValue("showRoomPicture", requestedShowroom.showRoomPicture)
      Toast.success("✔ Showroom retrieved successfully!");
    } catch (error) {
      Toast.error(error.message ?? error);
    }

  }

  const [superAdminShowroompic, setsuperAdminShowroompic] = useState(null);

  async function Showroomstatus(status) {
    const body = {
      showroomId: `${location.state.showroomid}`,
      status: `${status}`,
    }
    try {
      const rejectShowroom = await serverRequestHandler(EndPoint.showroomstatus, `post`, body);
      Toast.success(`Showroom ${status} successfully!`);
      navigateBack(-1);
    } catch (error) {
      Toast.error(error.message ?? error);
    }
  }









  async function updateMyShowroom() {
    let id = localStorage.getItem("Showroomid");
    let endpoint = `/showroom/${id}`
    let method = `put`;
    let body = {
      'showRoomName': getValues("showRoomName"),
      'showRoomPicture': getValues("showRoomPicture"),
      'location': getValues("location"),
      'phone': getValues("phone"),
    }

    try {

      let response = await serverRequestHandler(endpoint, method, body);

      setValue("showRoomName", response.showRoomName);
      setValue("showRoomPicture", response.showRoomPicture);
      setValue("location", response.location);
      setValue("phone", response.phone);
      localStorage.setItem("Showroomid", response._id);
      navigate(-1);
      Toast.success("Updated Response");
      console.log(response);
    } catch (error) {

    } finally {

    }


  }






  return (
    <div id='createshowroomcontainer' className='w-[100%] p-[30px]'>
      <form onSubmit={handleSubmit(onSubmit)} id='Parent'>
        <h5>Showroom Details</h5>
        <h6>Please enter your info</h6>
        <span id="inputs">
          <label htmlFor="">Showroom Name</label>
          <input
            disabled={localStorage.getItem("Showroomstatus") == 'pending' || location.pathname === '/showroomowner/showrooms/addshowroom' ? true : (isReadonly ?? '')} className={`outline-none rounded-lg text-[#B3B9B5] px-[12px] w-[50%] h-[45px]  showroominput border-[1px]  ${errors.showRoomName?.type === 'required' || errors.showRoomName?.type === 'pattern' ? 'border-[red]' : 'border-[#eaeaea]'}`}
            {...register("showRoomName")}
            defaultValue={showroomdetails?.showRoomName ? showroomdetails?.showRoomName : (location.pathname == obj.superadminshowroom && superAdminShowroom ? superAdminShowroom.showRoomName : (location.pathname == obj.showroomnotification ? location.state?.data?.showRoomName : ''))}
            placeholder="Type here" />
          {(errors.showRoomName && <p className='text-[#FC4500] font-semibold text-[12px] '>{errors.showRoomName.message}</p>)}
        </span>
        <span id="inputs">
          <label htmlFor="">Location</label>
          <select
            disabled={localStorage.getItem("Showroomstatus") == 'pending' || location.pathname == '/showroomowner/showrooms/addshowroom' ? true : (isReadonly ?? '')} className={`w-[50%] outline-none rounded-lg h-[45px] border-[1px] bg-[#f6f7f9] capitalize px-[10px] showroominput ${errors.location?.type === 'required' || errors.location?.type === 'pattern' ? "border-[red]" : "border-[#eaeaea]"}`} name="" id=""
            {...register("location", { required: true })}

          >


            {/* <option  value={location.state?.data?.location ?? showroomlocation ?? 'Select Location'}>{location?.state?.data?.location ?? showroomlocation ?? 'Select Location'}</option> */}
            {superAdminShowroom ? <><option className='' defaultValue={location.state?.data?.location ?? superAdminShowroom.location}>{superAdminShowroom.location}</option></> : locations?.map(function (locat, idx) {



              return (
                <option id={idx} className='capitalize' defaultValue={locat.name}>{locat.name}</option>
              )
            })}
          </select>
        </span>
        <p role='alert' className='text-[12px] font-semibold text-[#FC4500]'>{errors.location?.message ?? ''}</p>
        <span id="inputs">
          <label htmlFor="">Phone</label>
          <input
            {...register("phone")}
            disabled={localStorage.getItem("Showroomstatus") == 'pending' || location.pathname === '/showroomowner/showrooms/addshowroom' ? true : (isReadonly ?? '')} className={`outline-none text-[#B3B9B5] rounded-lg px-[12px] w-[50%] h-[45px] showroominput border-[1px]  ${errors.phone?.type === 'required' || errors.phone?.type === 'pattern' ? 'border-[red]' : 'border-[#eaeaea]'}`} defaultValue={location.pathname == obj.superadminshowroom && superAdminShowroom ? superAdminShowroom.phone : (location.pathname == obj.showroomnotification ? location.state?.data?.phone : "")}
            max='99999999999' placeholder="03xxxxxxxxxx" />
        </span>
        <p className='text-[12px] font-semibold text-[#FC4500]'>{(errors.phone?.message ?? '')} </p>

        <span id="inputss" className='mt-[20px]'>
          <div className='h-[140px] w-[200px] mb-[10px]'>
            <label className='' htmlFor="upload">Showroom Picture

             <p>{localhost() + getValues("showRoomPicture")}</p>

              <img ref={showImage} src={localhost() + getValues("showRoomPicture")} className={`object-fit h-[100%] w-[100%] border-[1px] ${errors.fileName?.type === 'required' || errors.fileName?.type === 'pattern' ? 'border-[red]' : 'border-black'}`} alt="" />
            </label>
            <input disabled={localStorage.getItem("Showroomstatus") == 'pending' || location.pathname === '/showroomowner/showrooms/addshowroom' ? true : (isReadonly ?? '')} type='file'
              {...register("showRoomPicture")}
              onChange={(e) => {
                handleImage(e)
              }}
              id='upload' hidden />
          </div>
        </span>
        <p className='text-[12px] text-[#FC4500] font-semibold my-[10px]'> {errors.showRoomPicture?.type === 'required' ? "PNG, JPEG, JPG format image is required..." : ""}</p>
        <p className='text-[12px] text-[#000000] font-semibold '>{imageFormat ? "Format :" : " "}  {imageFormat.toUpperCase() ?? ''} {imageSize ? "Size :" : ""} {imageSize ?? ''}{imageSize ? "KB" : ""}</p>
        {showroomstatus == 'approved' ? <span className='w-[100%] flex justify-center gap-[4vmin]'>

          <input type='submit' className='w-[170px] p-[10px] self-center mt-[30px] text-center bg-[#FC4500] text-white text-[16px] font-medium cursor-pointer' value='Update Showroom' />

        </span> : (location.pathname == obj.superadminshowroom && superAdminShowroom && status == 'pending' ?
          <>
            <div className="flex flex-row w-[100%] items-center justify-center gap-[25px]">
              <button onClick={() => {
                Showroomstatus("rejected");
              }}>Reject
              </button>
              <button onClick={() => {
                Showroomstatus('approved');
              }}>Approve
              </button>
            </div>
          </>
          : (location.pathname == obj.superadminshowroom && superAdminShowroom && status == 'approved' ? <div id='continue' className='w-[100%] flex flex-row items-center justify-center py-[10px]'> <p className='text-[#24343d] py-[0.4rem] px-[1rem] text-[0.7rem] border-[1px] border-red-600 rounded-full'>You approved this showroom</p> </div> : (location.pathname == obj.superadminshowroom && superAdminShowroom && status == 'rejected' ? <div id='continue' className='w-[100%] flex flex-row items-center justify-center py-[10px]'> <p className='text-[#24343d] py-[0.4rem] px-[1rem] text-[0.7rem] border-[1px] border-red-600 rounded-full'>You rejected this showroom</p> </div> : (location.pathname == obj.showroomnotification ? '' : (showroomstatus == 'pending' ? <> <div id='continue' className='w-[100%] flex flex-row items-center justify-center py-[10px]'> <p className='text-[#24343d] py-[0.4rem] px-[1rem] text-[0.7rem] border-[1px] border-red-600 rounded-full'>Your Showroom is pending for approval please wait until we approve it. We will notify you soon
          </p> </div> </> : (showroomstatus && showroomstatus == 'rejected' ? <div id='continue' className='w-[100%] flex flex-col gap-[10px] items-center justify-center py-[10px]'> <button onClick={() => {
            addShowroom();
          }}>Resubmit</button>
            <p className='text-[#24343d] py-[0.4rem] px-[1rem] text-[0.7rem] border-[1px] border-red-600 rounded-full'>Your showroom has been rejected update your details and resubmit again</p> </div>
            : <input type='submit' value="Create Showroom" className='w-[170px] p-[10px] self-center mt-[30px] text-center bg-[#FC4500] text-white text-[16px] font-medium cursor-pointer' />))))))}
        {location.state?.data?.isDeleted ? <><div id='continue' className='w-[100%] flex flex-row items-center justify-center py-[10px]'> <p className='text-[#24343d] py-[0.4rem] px-[1rem] text-[0.7rem] border-[1px] border-red-600 rounded-full'>You deleted this showroom</p> </div></> : ''}
      </form>
    </div>
  )
}

export default CreateShowroom