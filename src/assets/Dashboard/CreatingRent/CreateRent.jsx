import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateRent = (propse) => {
    const location = useLocation();
    const moveTo=useNavigate('');
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
    const [guarantierphonenumber, setguarantierphonenumber] = useState(propse.personDetails.GranteePhoneNumber ?? '');
    //Accessing CNIC image tag
    const userfrontcnic = useRef(null);
    const userbackcnic = useRef(null);
    const suretyfrontcnic = useRef(null);
    const suretybackcnic = useRef(null);

    const inputStyling=useRef(null);
    //For Displaying images

    
    const ufi = useRef(null)
    const ubi = useRef(null)
    const gfi = useRef(null)
    const gbi = useRef(null);

    function userData() {
        bookacar();
    }

    async function bookacar() {
        const URL = `http://localhost:5000/api/booking/addtobooking`;
        try {
            const token = localStorage.getItem("Token");
            let submit = await axios.post(URL,
                {
                    "TotalCost": 500.0,
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
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`  // Corrected header format
                    }
                }
            );
            moveTo('bookingpending');
            toast.success(submit.data.message);
        } catch (error) {
            console.error("Car Rent Failed:", error.response.data.message);
            toast.warn(error.response.data.message)
        }
    }


    useEffect(() => {
        DisableInput();
    }, [location])




    const DisableInput = () => {
        if (location.pathname == '/showroomowner/bookedcars/cardetails' || location.pathname == '/showroomowner/notification/cardetails' ) {
            ubi.current.style.cursor='not-allowed';
            ufi.current.style.cursor='not-allowed';
            gbi.current.style.cursor='not-allowed';
            gfi.current.style.cursor='not-allowed';
            let inputStyling=document.querySelectorAll("#inputStyling");
            inputStyling.forEach(function(input){
                input.style.color='#8a8a8a';
            })
            return setReadonly(true);
        }
    }


    return (

        <form aria-disabled={true} onSubmit={(e) => { e.preventDefault() }} className="w-[100%] min-h-[300px] bg-[#FFFFFF] rounded py-[2em] flex flex-col items-center justify-around dd">
            <div className="w-[100%] min-h-[300px] bg-[#FFFFFF] rounded py-[2em] px-[2vmin] flex flex-row justify-around dd">
                <div className="flex flex-col gap-[2vmin] dd_parent w-[50%] px-[6vmin]">
                    <div className="flex flex-col">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[3vmin]">Name</label>
                        <input id='inputStyling' disabled={isreadonly}  onChange={(e) => { setusername(e.target.username) }} value={localStorage.getItem("firstname")} className="py-[1vmin] px-[2vmin] text-[2.5vmin]   border-[1px] bg-[#F6F7F9] rounded-[1vmin]" placeholder="M. Talha" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[3vmin]">Surety Name</label>
                        <input id='inputStyling' ref={inputStyling} disabled={isreadonly} onChange={(e) => { setguarantiername(e.target.value) }} value={propse.personDetails.GranteeName ? propse.personDetails.GranteeName : (data ? data.GranteeName : guarantiername)} className="py-[1vmin] px-[2vmin] text-[2.5vmin]   border-[1px] bg-[#F6F7F9] rounded-[1vmin]" placeholder="00000000000" type="text" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[3vmin]">CNIC Number</label>
                        <input id='inputStyling' ref={inputStyling} disabled={isreadonly} onChange={(e) => { setusercnic(e.target.value) }} value={propse.personDetails.UserCnic ? propse.personDetails.UserCnic : (data ? data.UserCnic : usercnic)} className="py-[1vmin] px-[2vmin] text-[2.5vmin]  border-[1px] bg-[#F6F7F9] rounded-[1vmin]" placeholder="Please enter your CNIC Number" type="number" />
                    </div>
                    <div className="flex flex-col w-[100%] items-start mt-[3vmin]">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[3vmin]">CNIC
                            <span className='flex flex-row gap-[4vmin] mt-[20px]'>
                                <span>
                                    <img onClick={() => {
                                        userfrontcnic.current.click();
                                    }} ref={ubi} src={usercnicfront ? 'http://localhost:5000/' + usercnicfront : (propse.personDetails ? 'http://localhost:5000/' + propse.personDetails.UserCnicPicFront : (data ? 'http://localhost:5000/' + data.UserCnicPicFront : 'https://www.nadra.gov.pk/wp-content/uploads/2023/12/NIC.png'))} alt="No Image Uploaded" className="h-[10vmin] w-[20vmin] border-[1px] bg-[#c8c9c8] object-cover cursor-pointer" />
                                    <p className="text-[2.2vmin] font-light text-center mt-[.2rem]" >Front Side</p>
                                    <input disabled={isreadonly} ref={userfrontcnic} onChange={(e) => {
                                        const frontside = e.target.files[0];
                                        const formData = new FormData();
                                        formData.append('file', frontside);

                                        (async function getimage() {
                                            const apiURL = `http://localhost:5000/api/upload/anyfile`;
                                            try {
                                                let image = await axios.post(apiURL, formData);
                                                setusercnicfront(image.data.data);
                                                toast.info('✔ Your CNIC Front Pic uploaded successfully!',{
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
                                    }} ref={ufi} src={usercnicback ? 'http://localhost:5000/' + usercnicback : (propse.personDetails ? 'http://localhost:5000/' + propse.personDetails.UserCnicPicBack : (data ? 'http://localhost:5000/' + data.UserCnicPicBack : "https://gnnhd.tv/_next/image?url=https%3A%2F%2Fgnnhd.tv%3A8000%2Fmedia%2F115216%2Fid.jpg&w=3840&q=75"))} alt="No Image Uploaded" className="h-[10vmin] w-[20vmin] border-[1px] bg-blue-600 object-fill cursor-pointer" />
                                    <p className="text-[2.2vmin] font-light text-center mt-[.2rem]" >Back Side</p>
                                </span>
                            </span>
                            <input disabled={isreadonly} ref={userbackcnic} onChange={(e) => {
                                const backside = e.target.files[0];
                                const formData = new FormData();
                                formData.append('file', backside);

                                (async function getimage() {
                                    const apiURL = `http://localhost:5000/api/upload/anyfile`;
                                    try {
                                        let image = await axios.post(apiURL, formData);
                                        setusercnicback(image.data.data);
                                        toast.info('✔ Your CNIC Back Pic uploaded successfully!',{
                                            theme: 'dark',
                                            autoClose: 2000,
                                        });
                                    } catch (error) { }
                                })();

                            }} className="py-[1vmin] px-[2vmin] text-[2.5vmin]  bg-[#F6F7F9] rounded-[1vmin]" type="file" placeholder="0000000000" hidden />

                        </label>
                    </div>
                </div>
                <div className="flex flex-col gap-[2vmin] dd_parent w-[50%] px-[6vmin]">
                    <div className="flex flex-col">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[3vmin]">Email</label>
                        <input  disabled={isreadonly} id='inputStyling' onChange={(e) => { setusername(e.target.username) }} value={localStorage.getItem("email")} className="py-[1vmin] px-[2vmin] text-[2.5vmin]   border-[1px] bg-[#F6F7F9] rounded-[1vmin]" placeholder="M. Talha" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[3vmin]">Phone Number</label>
                        <input id='inputStyling'  disabled={isreadonly} onChange={(e) => { setguarantierphonenumber(e.target.value) }} value={propse.personDetails.GranteePhoneNumber ? propse.personDetails.GranteePhoneNumber : (data ? data.GranteePhoneNumber : guarantierphonenumber)} className="py-[1vmin] px-[2vmin] text-[2.5vmin]   border-[1px] bg-[#F6F7F9] rounded-[1vmin]" placeholder="00000000000" type="number" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[3vmin]">Surety CNIC Number</label>
                        <input id='inputStyling' ref={inputStyling} disabled={isreadonly} onChange={(e) => { setguarantiercnic(e.target.value) }} value={propse.personDetails.GranteeCnic ? propse.personDetails.GranteeCnicn : (data ? data.GranteeCnic : guarantiercnic)} className="py-[1vmin] px-[2vmin] text-[2.5vmin]  border-[1px] bg-[#F6F7F9] rounded-[1vmin]" placeholder="Surety CNIC Number" type="text" />
                    </div>
                    <div className="flex flex-col w-[100%] items-start mt-[3vmin]">
                        <label htmlFor='' className="text-black  font-semibold text-[3vmin]">Surety CNIC
                            <span className='flex flex-row gap-[4vmin] mt-[20px] cursor-pointer'>
                                <span className="cursor-pointer">

                                    <img onClick={() => {
                                        suretyfrontcnic.current.click();

                                    }} ref={gfi} src={guarantiercnicfront ? 'http://localhost:5000/' + guarantiercnicfront : (propse.personDetails ? 'http://localhost:5000/' + propse.personDetails.GranteeCnicPicFront : (data? 'http://localhost:5000/' + data.GranteeCnicPicFront : 'https://preview.redd.it/my-new-id-card-v0-x0yuyc2ri2wc1.jpeg?width=1080&crop=smart&auto=webp&s=273a942a16cd1f07c9b11419288d0609d81afc89') )} alt="No Image Uploaded" className="h-[10vmin] w-[20vmin] border-[1px] bg-blue-600 object-cover" />
                                    <p className="text-[2.2vmin] font-light text-center mt-[.2rem]" >Front Side</p>
                                    <input disabled={isreadonly} ref={suretyfrontcnic} id='imageone' name='imageone' onChange={(e) => {
                                        const frontside = e.target.files[0];
                                        const formData = new FormData();
                                        formData.append('file', frontside);

                                        (async function getimage() {
                                            const apiURL = `http://localhost:5000/api/upload/anyfile`;
                                            try {
                                                let image = await axios.post(apiURL, formData);
                                                setguarantiercnicfront(image.data.data);
                                                toast.info('✔ Surity CNIC Front Pic uploaded successfully!',{
                                                    autoClose: 2000,
                                                    theme:"dark",
                                                });
                                            } catch (error) {

                                            }
                                        })();
                                    }} type="file" hidden />
                                </span>
                                <span>
                                    <img onClick={() => {
                                        suretybackcnic.current.click();
                                    }} ref={gbi} src={guarantiercnicback ? 'http://localhost:5000/' + guarantiercnicback : (propse.personDetails ? 'http://localhost:5000/' + propse.personDetails.GranteeCnicPicBack : (data?  'http://localhost:5000/'+data.GranteeCnicPicBack : 'https://gnnhd.tv/_next/image?url=https%3A%2F%2Fgnnhd.tv%3A8000%2Fmedia%2F115216%2Fid.jpg&w=3840&q=75' ) )} alt="No Image Uploaded" className="h-[10vmin] w-[20vmin] border-[1px] bg-blue-600 object-cover" />
                                    <p className="text-[2.2vmin] font-light text-center mt-[.2rem]" >Back Side</p>
                                </span>
                            </span>
                            <input disabled={isreadonly} ref={suretybackcnic} onChange={(e) => {
                                const backside = e.target.files[0];
                                const formData = new FormData();
                                formData.append('file', backside);
                                (async function getimage() {
                                    const apiURL = `http://localhost:5000/api/upload/anyfile`;
                                    try {
                                        let image = await axios.post(apiURL, formData);

                                        toast.info('✔ Surity CNIC Back Pic uploaded successfully!',{
                                            theme: 'dark',
                                            autoClose:2000,

                                        });

                                        setguarantiercnicback(image.data.data);

                                        gbi.current.src = `http://localhost:5000/` + guarantiercnicback;
                                    } catch (error) {


                                    }

                                })();
                            }} className="py-[1vmin] px-[2vmin] text-[2.5vmin]  bg-[#F6F7F9] rounded-[1vmin]" type='file' hidden />
                        </label>
                    </div>

                </div>

                {/* <div className="flex flex-col justify-start gap-[1vmin] dd_parent w-[50%]">
                    <div className="flex flex-col mt-2 w-[100%] px-[6vmin]">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[2.5vmin] ">Phone No</label>
                        <input onChange={(e) => { setuserphonenumber(e.target.value) }} value={userphonenumber} className="py-[1vmin] px-[2vmin] text-[2.5vmin]   border-[1px] bg-[#F6F7F9] rounded-[1vmin] " placeholder="0000000000" type="number" />
                    </div>
                    <div className="flex flex-col mt-2 w-[100%] px-[6vmin]">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[2.5vmin] ">Phone No</label>
                        <input onChange={(e) => { setuserphonenumber(e.target.value) }} value={userphonenumber} className="py-[1vmin] px-[2vmin] text-[2.5vmin]   border-[1px] bg-[#F6F7F9] rounded-[1vmin] " placeholder="0000000000" type="number" />
                    </div>
                    <div className="flex flex-col mt-2 w-[100%] px-[6vmin]">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[2.5vmin] ">Phone No</label>
                        <input onChange={(e) => { setuserphonenumber(e.target.value) }} value={userphonenumber} className="py-[1vmin] px-[2vmin] text-[2.5vmin]   border-[1px] bg-[#F6F7F9] rounded-[1vmin] " placeholder="0000000000" type="number" />
                    </div>
                    <div className="flex flex-row  items-center gap-[10vmin] w-[100%] px-[6vmin]">
                        <div className="flex flex-col gap-[1.5vh] items-start w-[100%]">
                            <p className="text-sm font-semibold text-[2vmin]">User Cnic</p>
                            <input id='cnic' onChange={(e) => { setusercnicimage(e.target.value) }} value={usercnicimage} className="h-[4vmin] text-[1.5vmin]" type="file" />

                        </div>
                        <div className="flex flex-col gap-[1.5vh] items-start w-[100%]">
                            <p className="text-sm font-semibold text-[2vmin]">Guarantier Cnic</p>
                            <input id='cnic' onChange={(e) => { setguarantiercnicimage(e.target.value) }} value={guarantiercnicimage} className="h-[4vmin]  text-[1.5vmin]" type="file" />
                        </div>

                    </div>
                </div> */}
            </div>
            {location.pathname == '/showroomowner/bookedcars/cardetails' || location.pathname == '/showroomowner/notification/cardetails' ? '' : <div className="flex items-center justify-center w-[100%]">
                <button onClick={() => { userData(); }} className="py-[1.5vmin] px-[2vmin] w-[20%] bg-[#FF5C00] rounded-[0.7vmin] text-[2.5vmin] text-white">Rent Now!</button>
            </div>}
        </form>

    )
}

export default CreateRent