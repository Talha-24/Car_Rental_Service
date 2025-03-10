import React, { useEffect, useReducer, useRef, useState } from 'react'
import "./CreateShowroom.css";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { Input } from './CreateShowroom';
import { useLocation, useNavigate } from 'react-router-dom';
import serverRequestHandler from '../../Utils/http';
import Toast from '../../Toaster/Toaster';
import InputMask from 'react-input-mask';
import imageUpload from '../../Utils/UploadImage';
import localhost from '../../Utils/LocalHost';



const CreateShowroom = () => {
  const [showroomdetails, setshowroomdetails] = useState({});
  const [ID, setId] = useState('');
  const [superAdminShowroom, setsuperAdminShowroom] = useState(null);
  const [isReadonly, setisReadonly] = useState(false);
  const navigate = useNavigate('');
  const location = useLocation();
  async function addShowroom() {
    const endPoint = `/showroom`;
    const method = `post`;
    const body = {
      "showRoomName": showroomname,
      "location": showroomlocation,
      "showRoomPicture": showroompicture,
      "phone": ownerphonenumber,
    }
    try {
      let response = await serverRequestHandler(endPoint, method, body);
      setshowroomdetails(response);
      toast.success(" ✔ Showroom Created Successfully, wait for approval ✨");
      localStorage.setItem("Showroomid", response._id);
      localStorage.setItem("Showroomowner", true);
      getshowroomdetails();
      navigate(-1);
    } catch (error) {
      Toast(error.message);
    }


  }
  const [showroomname, setShowroomname] = useState('');
  const [showroomlocation, setShowroomlocation] = useState('');
  const [ownerphonenumber, setOwnerphonenumber] = useState('');
  const [showroompicture, setshowroompicture] = useState('');
  const image = useRef(null);
  const showImage = useRef(null);
  const [showroomnameError, setshowroomError] = useState('');
  const [showroomlocationError, setshowroomlocationError] = useState('');
  const [ownerphonenumberError, setownerphonenumberError] = useState('');
  const [showroompictureError, setshowroompictureError] = useState('');

  const detailsHandler = () => {
    addShowroom();
    setshowroomError('');
    setshowroomlocationError('');
    setownerphonenumberError('');
  }

  const formHandling = () => {
    setshowroomError('');
    setownerphonenumberError('');
    setshowroomError('')
    if (!/[A-Za-z0-9!@#$%^&*]/.test(showroomname)) {
      setshowroomError('* Mandatory, field is required');
      return;
    }
    if (showroomname.length < 5) {
      setshowroomError('* Length, is too short');
      return;
    }
    if (!/[A-Za-z0-9!@#$%^&*]/.test(showroomlocation)) {
      setshowroomError('');
      setshowroomlocationError('* Mandatory, field is required');
      return;
    }
    if (!/[0-9!@#$%^&*]/.test(ownerphonenumber)) {
      setshowroomlocationError('');
      setownerphonenumberError('* Mandatory, field is required');
      return;
    }
    if (ownerphonenumber < 10) {
      setownerphonenumberError('* Phone number is too short');
      return;
    }

  }


  const handleImage = (e) => {
    const file = e.target.files[0];
    const formdata = new FormData();
    formdata.append('file', file);
    UploadImage();
    async function UploadImage() {
      try {
        let response = await imageUpload(formdata);
        setshowroompicture(response);
        buttons.current.style.display = 'flex';
      } catch (error) {
        Toast('❌ File is not uploaded!');
      }

    }





  }

  useEffect(() => {
    getshowroomdetails();
  }, [])

  useEffect(() => {

    formHandling();

  }, [showroomname, showroomlocation, ownerphonenumber])

  const [showroomstatus, setshowroomstatus] = useState('');

  async function getshowroomdetails() {
    const method = `get`;
    const endPoint = `/showroom/get/userShowRoom`;
    try {
      let response = await serverRequestHandler(endPoint, method);
      setOwnerphonenumber(response.phone)
      setShowroomlocation(response.location);
      setShowroomname(response.showRoomName);
      setshowroompicture(response.showRoomPicture);
      setId(response._id);
      localStorage.setItem("Showroomid", response._id);
      setshowroomstatus(response.status);
      localStorage.setItem("Showroomstatus", response.status);

    } catch (error) {

    }

  }

  const buttons = useRef(null);



  useEffect(() => {
    getshowroomdetails();

  }, []);


  const [locations, setlocations] = useState(null);
  const [status, setStatus] = useState(null);

  async function getLocation() {
    const endPoint = `/location/getAll`;
    const method = `get`;

    try {
      let response = await serverRequestHandler(endPoint, method);
      setlocations(response);
      { localStorage.getItem("Showroomstatus") == 'pending' || localStorage.getItem("Showroomstatus") == 'rejected' ? setisReadonly(!true) : setisReadonly(false) }
    } catch (error) {

      Toast(error.message);

    }



  }
  useEffect(() => {
    getLocation();
    getRequestedShowroom();
  }, [])

  const navigateBack = useNavigate();
  const getRequestedShowroom = () => {
    getShowrooms();

  }
  async function getShowrooms() {
    const Token = localStorage.getItem("Token");
    const showroomId = location.state?._id ?? location.state?.showroomid ?? '';
    const endPoint = `/showroom/${showroomId}`;
    const method = `get`;
    try {
      let requestedShowroom = await serverRequestHandler(endPoint, method);
      setStatus(requestedShowroom.status);
      { location.pathname == '/showroomowner/notification/addshowroom' ? setshowroomdetails(requestedShowroom) : '' }
      setsuperAdminShowroom(requestedShowroom);
      setsuperAdminShowroompic(requestedShowroom.showRoomPicture);
      Toast("✔ Showroom retrieved successfully!");
    } catch (error) {
      Toast(error.message);

    }

  }
  const [superAdminShowroompic, setsuperAdminShowroompic] = useState(null);
  async function Showroomstatus(status) {
    const endPoint = `/showroom/approve`;
    const method = `post`;
    const body = {
      showroomId: `${location.state.showroomid}`,
      status: `${status}`,
    }
    try {
      const rejectShowroom = await serverRequestHandler(endPoint, method, body);
      console.log("Reject Showroom Response", rejectShowroom);
      navigateBack(-1);
    } catch (error) {
      Toast(error.message);
    }
  }
  return (
    <div id='createshowroomcontainer' className='w-[100%] p-[30px]'>
      <form onSubmit={(e) => { e.preventDefault() }} id='Parent'>
        <h5>Showroom Details</h5>
        <h6>Please enter your info</h6>
        <span id="inputs">
          <label htmlFor="">Showroom Name</label>
          <InputMask disabled={isReadonly} className='outline-none rounded-lg text-[#B3B9B5] px-[12px] w-[50%] h-[45px]  showroominput' value={showroomdetails?.showRoomName ? showroomdetails?.showRoomName : (location.pathname == '/showroomowner/showrooms/addshowroom' && superAdminShowroom ? superAdminShowroom.showRoomName : (location.pathname == '/showroomowner/notification/addshowroom' ? location.state?.data?.showRoomName : showroomname))} onChange={(e) => { setShowroomname(e.target.value) }} type="text" placeholder="Type here" />
          <p className='text-sm font-semibold text-red-600'>{showroomnameError}</p>
        </span>
        <span id="inputs">
          <label htmlFor="">Location</label>
          <select disabled={isReadonly} className='w-[50%] outline-none rounded-lg h-[45px] bg-[#f6f7f9] capitalize px-[10px] showroominput' name="" id="" onChange={(e) => { setShowroomlocation(e.target.value); }}>
            <option value={location.state?.data?.location ?? showroomlocation ?? 'Select Location'}>{location?.state?.data?.location ?? showroomlocation ?? 'Select Location'}</option>
            {superAdminShowroom ? <><option className='' value={location.state?.data?.location ?? superAdminShowroom.location}>{superAdminShowroom.location}</option></> : locations?.map(function (locat, idx) {
              return <option id={idx} className='capitalize' value={locat.name}>{showroomlocation ? showroomlocation : locat.name}</option>
            })}
          </select>
        </span>
        <p className='text-sm font-semibold text-red-600'>{showroomlocationError}</p>
        <span id="inputs">
          <label htmlFor="">Phone</label>
          <InputMask disabled={isReadonly} mask="9999-9999999" className='outline-none text-[#B3B9B5] rounded-lg px-[12px] w-[50%] h-[45px] showroominput' value={location.pathname == '/showroomowner/showrooms/addshowroom' && superAdminShowroom ? superAdminShowroom.phone : (location.pathname == '/showroomowner/notification/addshowroom' ? location.state?.data?.phone : ownerphonenumber)} onChange={(e) => { setOwnerphonenumber(e.target.value) }} type="text" placeholder="03xxxxxxxxxx" />
        </span>
        <p className='text-sm font-semibold text-red-600'>{ownerphonenumberError}</p>
        <span id="inputss" className='mt-[20px]'>
          <label htmlFor="">Showroom Picture</label>
          <div className='h-[140px] w-[200px] mb-[10px]' onClick={() => { image.current.click(); }}>
            <img ref={showImage} src={superAdminShowroom ? localhost() + superAdminShowroompic : (location.state && location.data ? localhost() + location.state.data.showRoomPicture : (showroompicture ? localhost() + showroompicture : 'https://cdn-icons-png.flaticon.com/512/3366/3366741.png'))} className='object-cover h-[100%] w-[100%] border-[1px] border-black' alt="" />
            <input disabled={isReadonly} ref={image} type="file" onChange={(e) => { handleImage(e) }} hidden />
          </div>
        </span>
        {showroomstatus == 'approved' ? <span ref={buttons} className='w-[100%] flex justify-center gap-[4vmin]'>
          <button className='bg-transparent text-[#FC5C00] border-[1px] border-[#FC5C00]' onClick={() => {
            (async function deleteShowroom() {
              const endPoint = `/showroom/${ID}`;
              const method = `delete`;
              try {
                let response = await serverRequestHandler(endPoint, method);
                Toast("Showroom deleted successfully!");
                localStorage.setItem("Showroomstatus", 'deleted');
                localStorage.setItem("Showroomowner", false);
                navigate(-1);
              } catch (error) {
                Toast(error.message);
              }
            })();
          }}>Delete</button>
          <button onClick={() => { detailsHandler(); }}>Save</button>
        </span> : (location.pathname == '/showroomowner/showrooms/addshowroom' && superAdminShowroom && status == 'pending' ?
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
          : (location.pathname == '/showroomowner/showrooms/addshowroom' && superAdminShowroom && status == 'approved' ? <div id='continue' className='w-[100%] flex flex-row items-center justify-center py-[10px]'> <p className='text-[#24343d] py-[0.4rem] px-[1rem] text-[0.7rem] border-[1px] border-red-600 rounded-full'>You approved this showroom</p> </div> : (location.pathname == '/showroomowner/showrooms/addshowroom' && superAdminShowroom && status == 'rejected' ? <div id='continue' className='w-[100%] flex flex-row items-center justify-center py-[10px]'> <p className='text-[#24343d] py-[0.4rem] px-[1rem] text-[0.7rem] border-[1px] border-red-600 rounded-full'>You rejected this showroom</p> </div> : (location.pathname == '/showroomowner/notification/addshowroom' ? '' : (showroomstatus == 'pending' ? <> <div id='continue' className='w-[100%] flex flex-row items-center justify-center py-[10px]'> <p className='text-[#24343d] py-[0.4rem] px-[1rem] text-[0.7rem] border-[1px] border-red-600 rounded-full'>Your Showroom is pending for approval please wait until we approve it. We will notify you soon
          </p> </div> </> : (showroomstatus && showroomstatus == 'rejected' ? <div id='continue' className='w-[100%] flex flex-col gap-[10px] items-center justify-center py-[10px]'> <button onClick={() => {
            addShowroom();
          }}>Resubmit</button>
            <p className='text-[#24343d] py-[0.4rem] px-[1rem] text-[0.7rem] border-[1px] border-red-600 rounded-full'>Your showroom has been rejected update your details and resubmit again</p> </div>
            : <button className='w-[170px] mt-[30px]' onClick={() => { detailsHandler(); }}>Create Showroom</button>))))))}
        {location.state?.data?.isDeleted ? <><div id='continue' className='w-[100%] flex flex-row items-center justify-center py-[10px]'> <p className='text-[#24343d] py-[0.4rem] px-[1rem] text-[0.7rem] border-[1px] border-red-600 rounded-full'>You deleted this showroom</p> </div></> : ''}
      </form>
    </div>
  )
}

export default CreateShowroom