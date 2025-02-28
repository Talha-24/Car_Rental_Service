import React, { useEffect, useReducer, useRef, useState } from 'react'
import "./CreateShowroom.css";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { Input } from './CreateShowroom';
import { useLocation, useNavigate } from 'react-router-dom';
const CreateShowroom = () => {
  const [showroomdetails, setshowroomdetails] = useState({});
  const [ID, setId] = useState('');
  const [superAdminShowroom,setsuperAdminShowroom]=useState(null);

  const navigate = useNavigate('');
  const location=useLocation();
  console.log("Navigation from Location.....",location);

  async function addShowroom() {
    const Token = localStorage.getItem("Token");
    const URL = `http://localhost:5000/api/showroom`
    try {
      let response = await axios.post(URL, {
        "showRoomName": showroomname,
        "location": showroomlocation,
        "showRoomPicture": showroompicture,
        "phone": ownerphonenumber,
      }, {
        headers: {
          Authorization: `Bearer ${Token}`,
        }
      })
      setshowroomdetails(response.data.data);
      toast.success(response.data.message);
      localStorage.setItem("Showroomowner", true);
      navigate(-1);

    } catch (error) {

    }


  }



  const [showroomname, setShowroomname] = useState('');
  const [showroomlocation, setShowroomlocation] = useState('');
  const [ownerphonenumber, setOwnerphonenumber] = useState('');
  const [showroompicture, setshowroompicture] = useState('');
  //File
  const image = useRef(null);
  const showImage = useRef(null);


  //Erros
  const [showroomnameError, setshowroomError] = useState('');
  const [showroomlocationError, setshowroomlocationError] = useState('');
  const [ownerphonenumberError, setownerphonenumberError] = useState('');
  const [showroompictureError, setshowroompictureError] = useState('');

  const detailsHandler = () => {
    // if (!/[A-Za-z0-9!@#$%^&*]/.test(showroomname)) {
    //   setshowroomError('* Mandatory, field is required');
    //   return;
    // }
    if (showroomname.length < 5) {
      setshowroomError('* Length, is too short');
      return;
    }
    // if (!/[A-Za-z0-9!@#$%^&*]/.test(showroomlocation)) {
    //   setshowroomError('');
    //   setshowroomlocationError('* Mandatory, field is required');
    //   return;
    // }
    if (!/[A-Za-z0-9!@#$%^&*]/.test(ownerphonenumber)) {
      setshowroomlocationError('');
      setownerphonenumberError('* Mandatory, field is required');
      return;
    }
    if (ownerphonenumber < 10) {
      setownerphonenumberError('* Phone number is too short');
      return;
    }
    addShowroom();
    setshowroomError('');
    setshowroomlocationError('');
    setownerphonenumberError('');
  }



  const handleImage = (e) => {
    const file = e.target.files[0];
    console.log("Showroom picture : ", file);
    const formdata = new FormData();
    formdata.append('file', file);
    console.log("Image : ", formdata);
    UploadImage(formdata);
    async function UploadImage() {

      const URL = `http://localhost:5000/api/upload/anyfile`;
      try {
        let response = await axios.post(URL, formdata);
        console.log("Showroom Created Image : ", response.data.data);
        setshowroompicture(response.data.data);
        buttons.current.style.display = 'flex';
      } catch (error) {
        console.log("Error", error);
      }

    }





  }

  useEffect(() => {



    getshowroomdetails();
    // buttons.current.style.display = 'flex';


  }, [])


  async function getshowroomdetails() {
    const URL = `http://localhost:5000/api/showroom/get/userShowRoom`;
    const Token = localStorage.getItem("Token");
    try {
      let response = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${Token}`,
        }
      })
      setOwnerphonenumber(response.data.data.phone)
      setShowroomlocation(response.data.data.location);
      setShowroomname(response.data.data.showRoomName);
      setshowroompicture(response.data.data.showRoomPicture);
      setId(response.data.data._id);
    } catch (error) {
      console.log(error);

    }

  }

  const buttons = useRef(null);






  const [locations, setlocations] = useState(null);
  const [status,setStatus]=useState(null);
  
  async function getLocation() {


    try {
      let response = await axios.get(`http://localhost:5000/api/location/getAll`);
      setlocations(response.data.data);
    } catch (error) {    }



  }
  useEffect(() => {
    getLocation();
    getRequestedShowroom();
  }, [])




 const navigateBack=useNavigate();




   const getRequestedShowroom =()=>{
   getShowrooms();

   }


   async function getShowrooms() {
    const Token=localStorage.getItem("Token");
    const showroomId=location.state.showroomid;
    const URL=`http://localhost:5000/api/showroom/${showroomId}`;
    try {
      let requestedShowroom=await axios.get(URL,{
        headers: {
          Authorization: `Bearer ${Token}`,
        }
      });
      setStatus(requestedShowroom.data.data.status);
      console.log("Status",status);
      setsuperAdminShowroom(requestedShowroom.data.data);
      setsuperAdminShowroompic(requestedShowroom.data.data.showRoomPicture);

    } catch (error) {
      console.log(".........error.........",error);
      
    }
    
  }
const [superAdminShowroompic,setsuperAdminShowroompic]=useState(null);




async function Showroomstatus(status) {
  const Token=localStorage.getItem("Token");
  const URL=`http://localhost:5000/api/showroom/approve`;
  try {
    const rejectShowroom=await axios.post(URL,{

      showroomId: `${location.state.showroomid}`,
      status: `${status}`,

    },{
      headers: {
        Authorization: `Bearer ${Token}`,
      }
    })
     console.log("....",rejectShowroom);
     toast.success(rejectShowroom.data.message);
     navigateBack(-1);

    
  } catch (error) {
    console.log("......",error);
    
  }
  
}













  return (
    <div className='w-[100%] p-[3vmin] bg-[#f6f7f9] '>
      <form onSubmit={(e) => { e.preventDefault() }} id='Parent'>
        <h5>Showroom Details</h5>
        <h6>Please enter your info</h6>
        <span id="inputs">
          <label htmlFor="">Showroom Name</label>
          <Input value={showroomdetails.showRoomName ? showroomdetails.showRoomName : (location.pathname == '/showroomowner/showrooms/addshowroom'  && superAdminShowroom ? superAdminShowroom.showRoomName : (location.pathname ==  '/showroomowner/notification/addshowroom' ? location.state.data.showRoomName  : showroomname ))} onChange={(e) => { setShowroomname(e.target.value) }} type="text" placeholder="Type here" />
          <p className='text-sm font-semibold text-red-600'>{showroomnameError}</p>
        </span>
        <span id="inputs">
          <label htmlFor="">Location</label>
          {}

          <select className='w-[60%] h-[2.5rem]' name="" id="" onChange={(e) => { setShowroomlocation(e.target.value); }}>
            {superAdminShowroom? <><option value={superAdminShowroom.location}>{superAdminShowroom.location}</option></> : locations.map(function (locat, idx) {
            return <option id={idx} className='capitalize' value={locat.name}>{showroomlocation ? showroomlocation : locat.name}</option>

          })} 


 </select>
        </span>
        <p className='text-sm font-semibold text-red-600'>{showroomlocationError}</p>

        <span id="inputs">
          <label htmlFor="">Phone</label>
          <Input value={ location.pathname == '/showroomowner/showrooms/addshowroom' && superAdminShowroom ?  superAdminShowroom.phone : (location.pathname == '/showroomowner/notification/addshowroom' ? location.state.data.phone : ownerphonenumber )  } onChange={(e) => { setOwnerphonenumber(e.target.value) }} type="text" placeholder="03xxxxxxxxxx" />
        </span>
        <p className='text-sm font-semibold text-red-600'>{ownerphonenumberError}</p>
        <span id="inputss">
          <label htmlFor="">Add Showroom Pic</label>
          <button onClick={() => {
            image.current.click();
          }}>
            <img ref={showImage} src={superAdminShowroom ? 'http://localhost:5000/' +superAdminShowroompic : (showroompicture ? 'http://localhost:5000/' + showroompicture : (location.state && location.data? 'http://localhost:5000/' + location.state.data.showRoomPicture : 'https://cdn-icons-png.flaticon.com/512/3366/3366741.png'))} className='object-cover h-[4vmin] w-[4vmin]' alt="" />
            <input ref={image} type="file" onChange={(e) => { handleImage(e) }} hidden />
          </button>
        </span>

       
        {localStorage.getItem("Showroomowner") == 'true' ?<span ref={buttons}  className='w-[100%] flex justify-center gap-[4vmin]'>
          <button  className='bg-transparent text-[#FC5C00] border-[1px] border-[#FC5C00]' onClick={() => {

            (async function deleteShowroom() {

              const URL = `http://localhost:5000/api/showroom/${ID}`;
              try {
                let response = await axios.delete(URL);
                toast(response.data.data);
                console.log("Delete Response : ", response);
                toast.info("Showroom Deleted Successfully");
                localStorage.setItem("Showroomowner", false);
                navigate(-1);
              } catch (error) {
                console.log("Showroom not deleted ", error.response.data.message);
                toast.error(error.response.data.message, {
                  autoClose: 1000,
                });

              }

            })();
          }}>Delete</button>
          <button  onClick={() => { detailsHandler(); }}>Save</button>
        </span> : (location.pathname == '/showroomowner/showrooms/addshowroom'  && superAdminShowroom && status == 'pending' ? 

        <>
        <div className="flex flex-row w-[100%] items-center justify-center gap-[25px]">
        <button onClick={()=>{

         Showroomstatus("rejected");

        }}>Reject
          </button>
          <button onClick={()=>{
            
            Showroomstatus('approved');

          }}>Approve
            </button>
            </div>
            </>

         : (location.pathname == '/showroomowner/showrooms/addshowroom' && superAdminShowroom && status == 'approved' ? <div id='continue' className='w-[100%] flex flex-row items-center justify-center py-[10px]'> <p className='text-[#24343d] py-[0.4rem] px-[1rem] text-[0.7rem] border-[1px] border-red-600 rounded-full'>You approved this showroom</p> </div> : (location.pathname == '/showroomowner/showrooms/addshowroom' && superAdminShowroom && status == 'rejected' ? <div id='continue' className='w-[100%] flex flex-row items-center justify-center py-[10px]'> <p className='text-[#24343d] py-[0.4rem] px-[1rem] text-[0.7rem] border-[1px] border-red-600 rounded-full'>You rejected this showroom</p> </div>: (location.pathname == '/showroomowner/notification/addshowroom' ? '' : <button id='continue' onClick={() => { detailsHandler(); }}>Continue</button>  ) )))}


        

      </form>
    </div>
  )
}

export default CreateShowroom