import axios, { Axios } from "axios"
import ShowRoomCar3 from "./ShowroomCar3"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import serverRequestHandler from "../../../Utils/http"
import localhost from "../../../Utils/LocalHost"
import {Toast} from "../../../Utils/Toasthot"
import Pagenation from "../../../Pagenation/Pagenation";
import { EndPoint, obj } from "../../../Utils/RoutesPaths";

const HomeCars = () => {


  const [showroomdata, setshowroomData] = useState('');
  const [currentPage, setcurrentPage] = useState(1);
  const [carsPerPage, setcarsPerPage] = useState(8);
  const [totalPages, settotalPages] = useState();

  const totalButtons = Math.ceil(totalPages / carsPerPage);
async function showroomcars() {
    try {
      const showroomresponse = await serverRequestHandler(EndPoint.showroomcars(currentPage, carsPerPage).link, `get`);
      settotalPages(showroomresponse.totalCount);
      setshowroomData(showroomresponse.data);
      Toast.success("Showrooms retrieved successfully!",3000);
    } catch (error) {
      Toast.error(error.message??error);
    }
  }

  useEffect(() => {
    showroomcars();
  }, [carsPerPage, currentPage])
  const navigate = useNavigate();

  return (
    <div className='w-[100%] pt-[5vmin] flex flex-col  items-center justify-center homecars mx-[10px] h-[100%]'>
      <div id="NavCarDetails" className="w-[100%] h-[280px] bg-[#Fc4500] p-[20px] rounded-[10px]">
        <div id="text" className="w-[80%] h-[260px] flex flex-col gap-[3vmin] pt-[10px]">
          <h3 className="text-[25px] font-semibold  text-[#f5f2f2]">Easy way to rent a car at a low price</h3>
          <p className="text-[15px]   text-[#FFFFFF]">Providing cheap car rental services and safe and comfortable facilities.</p>
          <p className="border-[1px] self-start border-[#FFFFFF] text-[white] py-[8px] px-[12px] rounded-[0.5vmin] font-normal text-[1rem] mt-[10px] cursor-pointer"> Rental Car</p>
        </div>
      </div>
      <div className="my-[16px] align-start w-[100%]">
        <div id='searchbar' className='w-[378px] bg-white rounded-full'>
          <div className='border-[1px] border-[#f8c75e] rounded-full w-[100%] flex flex-row justify-between items-center h-[40px] cursor-pointer' >
            <input type="text" placeholder='Search ...' className='w-[241.17px] h-[100%] pl-[15px] outline-none text-[#000000] text-[16px]   rounded-full  border-[#FDF7EC] placeholder:text-[14px] placeholder:  placeholder:text-[#cbcbcb] font-normal' />
            <div className="w-[45px] h-[40px] bg-[#FC4500] flex items-center justify-center  rounded-r-full">
              <img className="w-[16px] h-[16px] text-white" src="https://static-00.iconduck.com/assets.00/search-icon-2044x2048-psdrpqwp.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] flex text-center justify-between items-center text-[#000000] font-semibold text-[2.5vmin] py-[2vmin]">
        <p id='popular' className='text-[20px] text-[#27282d] font-normal'>Recent Cars</p>
        <p onClick={() => {
          navigate(obj.recentcar);
        }} className="text-[#0000FF] cursor-pointer text-[16px] font-normal ">View All</p>
      </div>
      <ShowRoomCar3 />
      <div className="w-[100%] flex text-center text-[#000000] font-semibold text-[2.5vmin] py-[2vmin]">
        <p id='showroom' className='text-[20px] font-normal text-[#27282d]'>Showrooms</p>
      </div>
      <div className='py-[1vmin] px-[6vmin] w-[100%]' id='carcontainer' >
        <div className='flex flex-row flex-wrap items-center gap-[10px]  w-[100%]'>
          {showroomdata ? showroomdata.map(function (showroom, key) {
            const id = showroom._id;
            const showroompicture = showroom.showRoomPicture;
            return (
              <div key={key} className='text-black w-[262px]  max-h-fit  rounded-lg flex flex-col  justify-between p-[18.64px]  bg-white showroom'>
                <img className="w-[100%] h-[146px] object-cover border-[1px] border-black" src={showroompicture ? localhost() + showroompicture : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'} alt="" />
                <div id="carinfo" className='flex flex-col items-start w-[100%]'>
                  <div className='w-[100%]'>
                    <p className=' text-[17px] my-[7px] font-medium  text-[#000000] showroomname'>{showroom.showRoomName}</p>
                  </div>
                  <div className='flex flex-row flex-wrap items-center justify-between w-[100%]'>
                    <p className='font-thin text-[0.9rem] text-[#111111]'>Location </p>
                    <p className="capitalize text-[#86D9FA]">{showroom.location}</p>
                  </div>
                  <div className='flex flex-row items-center justify-between w-[100%]'>
                    <p className='font-thin text-[0.9rem] text-[#111111]'>Available Cars</p>
                    <p className="text-[#86D9FA]">{showroom.carCount}</p>
                  </div>
                  <div className='flex flex-row items-center justify-between w-[100%]'>
                    <p className='font-thin text-[0.9rem] text-[#111111]'>Phone</p>
                    <p className="text-[#86D9FA] capitalize">{showroom.phone}</p>
                  </div>
                  <div className='flex flex-row items-center justify-between w-[100%] my-[10px]'>
                    <p className='font-thin text-[0.9rem] text-[#111111]'>Phone</p>
                    <p className="text-[red] capitalize">{showroom.status}</p>
                  </div>
                </div>
                <div className='flex flex-col  w-[100%] items-end'>
                  <button onClick={() => {navigate(obj.showroomcarstwo, { state: { showroomid: id } });}} className='bg-[#FF4500] h-[40px] rounded-sm text-white font-semibold text-[1rem] self-end w-[100px]'>View</button>
                </div>
              </div>
            )
          }) : ''}
        </div>
        <Pagenation pageno={currentPage} setpageno={setcurrentPage} setnoofcars={setcarsPerPage} totalpages={totalButtons} />
      </div>
    </div>
  )
}

export default HomeCars