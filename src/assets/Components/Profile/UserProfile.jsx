import React, { useEffect, useRef, useState } from 'react'
import "./UserProfile.css";
import { Close, CrossImage, Input, Logout, P, Parent, Save, UserDetail } from './UserProfile';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const UserProfile = ({ closeProfile }) => {


    const [firstname, setfirstname] = useState(localStorage.getItem("firstname"));
    const [lastname, setlastname] = useState(localStorage.getItem("lastname"));
    const [email, setemail] = useState(localStorage.getItem("email"));
    const [profilepicture, setprofilepicture] = useState(localStorage.getItem("ProfilePicture"));
    const hiddeninput = useRef(null);
    const userimagecontainer = useRef(null);

    const navigate = useNavigate();

    // async function getProfile() {
    //     const token = localStorage.getItem('Token');
    //     const URL = `http://localhost:5000/api/auth/viewProfile`;
    //     try {
    //         let response = await axios.get(URL, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             }

    //         })

    //         console.log("userprofile", response.data.data);
    //         setfirstname(response.data.data.firstName);
    //         setlastname(response.data.data.lastName);
    //         setemail(response.data.data.email);

    //     } catch (error) {

    //         console.log("userProfile Error : ", error);

    //     }


    // }






    // useEffect(() => {
    //     getProfile();
    // }, [])


    async function updateProfile() {
        localStorage.setItem("ProfilePicture", profilepicture);
        localStorage.setItem("lastname", lastname);
        localStorage.setItem("firstname", firstname);
        const Token = localStorage.getItem("Token");
        const URL = `http://localhost:5000/api/auth/updateProfile`;
        try {

            let updatedprofiledata = (URL, {

                "firstName": firstname,
                "profilePic": profilepicture,
                "lastName": lastname,

                headers: {
                    Authorization: `Bearer ${Token}`,
                }
            })

            console.log("Updated Profile Data : ...",updatedprofiledata);


        } catch (error) {

        }


    }







    return (
        <Parent id='userProfileContainer' className='w-[100%] border-[1px] border-[#F6F7F9] min-h-[92vh]  p-[3vmin] flex flex-col justify-start'>
            <span>

                <div id='userprofile'>
                    <h6>My Profile</h6>
                    <div id="profile" className='flex flex-row gap-[10px] w-[100%]'>
                        <div id="picture" className='h-[18vmin] w-[18vmin] border-[2px] border-[#dadada] rounded-full'>
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
                                uploadimage(image);
                                async function uploadimage(image) {
                                    try {

                                        let imageresponse = await axios.post(`http://localhost:5000/api/upload/anyfile`, formdata);
                                        console.log(imageresponse.data.data);
                                        setprofilepicture(imageresponse.data.data);
                                        userimagecontainer.current.src = imageresponse.data.data ? `http://localhost:5000/` + imageresponse.data.data : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';
                                    } catch (error) {
                                        console.log("Error : ", error);

                                    }

                                }
                            }} hidden />
                            <div className='flex items-center gap-[5px]'>
                                <img className='w-[2.5vmin] h-[2.5vmin]' src="https://static-00.iconduck.com/assets.00/circle-information-icon-256x256-iur97f49.png" alt="" />
                                <div className='py-[10px]'>
                                    <P>JPG,JPEG,min 400px max 1024px</P>
                                    <P>This image you save will be saved permanently</P>
                                </div></div>
                        </div>
                    </div>


                    <UserDetail id="firstname">
                        <label htmlFor="">First name</label>

                        {/* <input>{firstname}</input> */}
                        <Input type="text" onChange={(e) => {
                            setfirstname(e.target.value);
                        }} value={firstname} />
                    </UserDetail>
                    <UserDetail id="lastname">
                        <label htmlFor="">Last name</label>
                        {/* <input >{lastname}</input> */}
                        <Input type="text" onChange={(e) => { setlastname(e.target.value) }} value={lastname} />

                    </UserDetail>
                    <UserDetail id="email">
                        <label htmlFor="">Email</label>
                        {/* <input>{email}</input> */}
                        <Input className='text-[#898989]' type="email" value={email} />
                    </UserDetail>

                    <Close id="close" onClick={() => { closeProfile() }}>
                        <CrossImage src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-coloricon-1/21/39-512.png" alt="" />
                    </Close>
                    <div id="profilebuttons">
                        <Logout onClick={() => {

                            localStorage.setItem("Token",'');
                            navigate("/");



                        }} id="signoutbtn">Logout</Logout>
                        <Save onClick={() => {
                            updateProfile();
                            closeProfile();
                            toast.success("Profile updated!", {
                                autoClose: 1000,
                            });
                        }} id="savebtn" >Save Changes</Save>
                    </div>
                </div>
            </span>

        </Parent >
    )
}

export default UserProfile