import axios, { Axios } from "axios"
import PopularCars from "./PopularCars/PopularCars"
import ShowRoomCar from "./ShowRoomCar"
import ShowRoomCar2 from "./ShowRoomCar2"
import ShowRoomCar3 from "./ShowroomCar3"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import serverRequestHandler from "../../../Utils/http"
import localhost from "../../../Utils/LocalHost"
import Toast from "../../../Toaster/Toaster"
import SearchBar from "../../Header/Header Components/SearchBar"

const HomeCars = () => {


  const [showroomdata, setshowroomData] = useState('');
  const [totalData, settotalData] = useState();
  const [currentPage, setcurrentPage] = useState(1);
  const [carsPerPage, setcarsPerPage] = useState(8);
  const [totalPages, settotalPages] = useState();
  const totalButtons = Math.ceil(totalPages / carsPerPage);
  async function showroomcars() {
    const endPoint = `/showroom/getAll?page=${currentPage}?&pageSize=${carsPerPage}`;
    const method = 'get'
    try {
      const showroomresponse = await serverRequestHandler(endPoint, method);
      settotalPages(showroomresponse.totalCount);
      setshowroomData(showroomresponse.data);
    } catch (error) {
      Toast(error.message);
    }
  }

  useEffect(() => {
    showroomcars();
  }, [carsPerPage, currentPage])
  const navigate = useNavigate();

  return (
    <div className='w-[100%] px-[8vmin] pt-[5vmin] flex flex-col  items-center justify-center homecars  h-[100%]'>
      <div id="NavCarDetails" className="w-[100%] h-[280px] bg-[#Fc4500] p-[20px] rounded-[10px]">
        <div id="text" className="w-[80%] h-[260px] flex flex-col gap-[3vmin] pt-[10px]">
          <h3 className="text-[25px] font-semibold  text-[#f5f2f2]">Easy way to rent a car at a low price</h3>
          <p className="text-[15px]   text-[#FFFFFF]">Providing cheap car rental services and safe and comfortable facilities.</p>
          <p className="border-[1px] self-start border-[#FFFFFF] text-[white] py-[8px] px-[12px] rounded-[0.5vmin] font-normal text-[1rem] w-[100px] mt-[10px] cursor-pointer "> Rental Car</p>
        </div>
        {/* <img id='NavCarDetails' className="min-w-[98%] max-h-fit rounded-[1vmin] items-start" src="src\assets\Dashboard\Dashboard 3\Navbar\Ads 2.svg" alt="" /> */}
        {/* <img  className="w-[400px] h-[280px]" src="https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OI5M9Rq66nfXUkiFAwslaUEahMsBqRmo9LBq9IiDWlZi~bQHdVMVwUArn9PZI3WdpM9BTqHLvDmItixD7P5Er5P5~d837G5mqI89UeiDAyuKoAgTjdqeExheqkRo4l7SEFz~bD6gYkuh4oiVtO9veOh4ERLh~rS68T3nObmGIYxcM2g7h0P4iJi9ui5zsed4qBQuNKa~wJEc9wqewFS-9jJMvfYv6ZZF3KvHV9Y9kwLKmjYuJc-aiVBTqN3o-ETAwyGSazjFQkeb5v5z~kDJBWgq~Kq7pJLjjJz0bUjX1tMnAEZ-~LPh2bX7MIQgjq~siQ6BrpGjSkFC6BNuViZvdg__" alt="" /> */}
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
      <div className="w-[100%] flex text-center text-[#000000] font-semibold text-[2.5vmin] py-[2vmin]">
        <p id='popular' className='text-[20px] text-[#27282d] font-normal'>Recent Cars</p>
      </div>
      <ShowRoomCar3 />
      <div className="w-[100%] flex text-center text-[#000000] font-semibold text-[2.5vmin] py-[2vmin]">
        <p id='showroom' className='text-[20px] font-normal text-[#27282d]'>Showrooms</p>
      </div>
      <div className='py-[1vmin] px-[6vmin] w-[100%]' id='carcontainer' >
        <div className='flex flex-row items-center w-[100%] gap-[10px] flex-wrap'>
          {showroomdata ? showroomdata.map(function (showroom, key) {
            const id = showroom._id;
            const showroompicture = showroom.showRoomPicture;
            return (
              <div key={key} className='text-black max-w-[262px] max-h-[369px] bg-[#FFFFFF] rounded-lg flex flex-col  justify-between p-[18.64px]'>
                <img className="w-[253px] h-[136px] object-cover border-[1px] border-black" src={showroompicture ? localhost() + showroompicture : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'} alt="" />
                <div id="carinfo" className='flex flex-col items-start w-[100%]'>
                  <div className='w-[100%]'>
                    <p className=' text-[17px] my-[7px] font-medium  text-[#000000]'>{showroom.showRoomName}</p>
                  </div>
                  <div className='flex flex-row flex-wrap items-center justify-between w-[100%]'>
                    <p className='font-thin text-[0.9rem] text-[#111111]'>Location </p>
                    <p className="text-[#90A3BF] capitalize text-[#86D9FA]">{showroom.location}</p>
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
                  <button onClick={() => {
                    navigate('showroomCars', { state: { showroomid: id } });
                  }
                  } className='bg-[#FF4500] h-[40px] w-[65px] rounded-sm text-white font-semibold text-[1rem] self-end w-[100px]'>View</button>
                </div>
              </div>
            )
          }) : ''}
        </div>
        <div id="pagination" className="flex flex-row items-center justify-end w-[100%] ">
          <div className="flex flex-row items-center mr-[8px]">
            <span className="flex flex-row">
              <IoMdArrowDropleft fontSize={'1.4rem'} color="#D4D4D5" />
              <p className="text-[#D4D4D5]">Previous</p>
            </span>
          </div>
          {Array.from({ length: totalButtons }, (_, idx) => {
            return <button onClick={() => {
              setcurrentPage(idx + 1);
            }} className="mr-[2px] p-[2px] w-[24px] font-normal rounded">{idx + 1}</button>
          })}
          <div className="flex flex-row items-center ml-[8px]">
            <p className="text-[#D4D4D5]">Next</p>
            <span className="flex flex-row items-center">
              <IoMdArrowDropright color="#D4D4D5" fontSize={'1.4rem'} />
            </span>
          </div>
          <select onChange={(e) => {
            setcarsPerPage(e.target.value);
          }} name="" id="" className="border-[1px] border-[#FC5500] rounded-sm">
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="24">24</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
          </select>

        </div>
      </div>
    </div>
  )
}

export default HomeCars