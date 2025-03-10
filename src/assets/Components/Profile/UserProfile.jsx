import React, { useEffect, useRef, useState } from 'react'
import "./UserProfile.css";
import { Close, CrossImage, Input, Logout, P, Parent, Save, UserDetail } from './UserProfile';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import serverRequestHandler from '../../Utils/http';
import { FaArrowLeft } from "react-icons/fa6";
import Toast from '../../Toaster/Toaster';
import imageUpload from '../../Utils/UploadImage';
const UserProfile = ({ closeProfile }) => {


    const [firstname, setfirstname] = useState(localStorage.getItem("firstname"));
    const [lastname, setlastname] = useState(localStorage.getItem("lastname"));
    const [email, setemail] = useState(localStorage.getItem("email"));
    const [profilepicture, setprofilepicture] = useState(localStorage.getItem("ProfilePicture"));
    const [updatedProfileData,setupdatedProfileData]=useState([]);
    const hiddeninput = useRef(null);
    const userimagecontainer = useRef(null);

    const navigate = useNavigate();

    async function getProfile() {
        const endPoint=`/auth/viewProfile`;
        const method=`get`;
        try {
            let response = await serverRequestHandler(endPoint,method);
            setfirstname(response.firstName);
            setlastname(response.lastName);
            setemail(response.email);
            localStorage.setItem("ProfilePicture",response.profilePic)
        } catch (error) {
            Toast(error.message);
        }


    }






    useEffect(() => {
        getProfile();
    }, [])


    async function updateProfile() {
        const body={
            "firstName": firstname,
            "profilePic": profilepicture,
            "lastName": lastname,
        };
        const URL = `http://localhost:5000/api/auth/updateProfile`;
        const endPoint=`/auth/updateProfile`;
        const method=`post`;
        try {

            let updatedprofiledata =await serverRequestHandler(endPoint,method,body);
            localStorage.setItem("ProfilePicture", updatedprofiledata.profilePic);
            localStorage.setItem("lastname", updatedprofiledata.lastName);
            localStorage.setItem("firstname", updatedprofiledata.firstName);
            Toast("Profile Updated!");

        } catch (error) {

        }


    }







    return (
        <Parent id='userProfileContainer' className='w-[100%] border-[1px] border-[#F6F7F9] min-h-[92vh] py-[17px] px-[31px] flex flex-col justify-start'>
             {/* <Close id="close" onClick={() => { closeProfile() }}> */}

                    <FaArrowLeft onClick={()=>{
                        navigate("/showroomowner/homecars");
                    }} id='backarrow'  />
                        {/* <CrossImage src="https://icons.iconarchive.com/icons/fa-team/fontawesome/512/FontAwesome-Arrow-Left-icon.png" alt="" /> */}
                    {/* </Close> */}
            <span className='w-[100%] h-[100%] border-[1px] border-[#dadada] rounded'>
                <div id='userprofile'>
                    <h6 className='text-[32px] text-[#222222] font-semibold'>My profile</h6>
                    <div id="profile" className='flex flex-row items-center gap-[20px] w-[100%]'>
                        <div id="picture" className='h-[118px] w-[118px] border-[2px] border-[#dadada] rounded-full'>
                            <img ref={userimagecontainer} src={profilepicture ? 'http://localhost:5000/' + profilepicture : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'} alt="Profile Picture" />
                        </div>
                        <div id="picturedata" className=''>
                            <button onClick={() => {
                                hiddeninput.current.click();
                            }} className=''>Upload</button>
                            <input ref={hiddeninput} type="file" onChange={(e) => {
                                let image = e.target.files[0];
                                const formdata = new FormData();
                                formdata.append('file', image);
                                uploadimage();
                                async function uploadimage() {
                                    try {
                                        let imageresponse = await imageUpload(formdata);
                                        setprofilepicture(imageresponse);
                                        userimagecontainer.current.src = imageresponse ? `http://localhost:5000/` + imageresponse : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';
                                        Toast("✔  Image is Uploaded Successfully!");
                                    } catch (error) {
                                        Toast(error.message);

                                    }

                                }
                            }} hidden />
                            <div className='flex items-center gap-[5px]'>
                                <img className='w-[17px] h-[17px]' src="https://car-rantal-mauve.vercel.app/assets/imgs/info.png" alt="" />
                                <div className='py-[10px]'>
                                    <P>JPG, JPEG, PNG Min: 400px Max: 1024px</P>
                                    <P>This image you upload will be saved permanently</P>
                                </div></div>
                        </div>
                    </div>


                    <UserDetail id="firstname">
                        <label  htmlFor="">First name</label>

                        {/* <input>{firstname}</input> */}
                        <Input className='inputag' type="text" onChange={(e) => {
                            setfirstname(e.target.value);
                        }} value={firstname} />
                    </UserDetail>
                    <UserDetail id="lastname">
                        <label htmlFor="">Last name</label>
                        {/* <input >{lastname}</input> */}
                        <Input className='inputtag' type="text" onChange={(e) => { setlastname(e.target.value) }} value={lastname} />

                    </UserDetail>
                    <UserDetail id="email">
                        <label htmlFor="">Email</label>
                        {/* <input>{email}</input> */}
                        <Input  disabled={true}  className='text-[#898989] inputtag' type="email" value={email} />
                    </UserDetail>
                    <div id="profilebuttons">
                        <Logout onClick={() => {
                            localStorage.setItem("Token",'');
                            localStorage.setItem("isForgot",false);
                            navigate("/");
                        }} id="signoutbtn">LOGOUT</Logout>
                        <Save onClick={() => {
                            updateProfile();
                            closeProfile();
                        }} id="savebtn" >Save Changes</Save>
                    </div>
                </div>
            </span>

        </Parent >
    )
}

export default UserProfile