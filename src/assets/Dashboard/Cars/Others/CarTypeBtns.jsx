import axios from 'axios';
import Availabletext from './Title'
import Buttons from './Buttons'
import { useEffect, useState } from 'react';
import Car1 from '../CarComponents/Carsss/Car1';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Car5 from '../CarComponents/Carsss/Car5';
import serverRequestHandler from '../../../Utils/http';
import Toast from '../../../Toaster/Toaster';
import localhost from '../../../Utils/LocalHost';
import Title from './Title';
const CarTypeBtns = () => {
  const [totalCount, settotalCount] = useState([]);
  const [carsData, setcarsData] = useState('');
  const [filter, setFilter] = useState('pending');
  const [superadminShowrooms, setsuperAdminShowrooms] = useState('');
  const moveTo = useNavigate('');
  const location = useLocation();
  async function getBookedCars() {
    const endPoint=`/booking/getAll?page=1&pageSize=10&status=${filter}`;
    const method=`get`;
    try {
      let response = await serverRequestHandler(endPoint,method);
      settotalCount(response.totalCount);
      setcarsData(response.data);
    } catch (error) {
      Toast(error.message);
    }

  }

  useEffect(() => {    
    getSuperAdminShowrooms();
    getSuperAdminCars();
    carsHandler();
  }, [filter, location])



  const carsHandler = () => {

    if (location.pathname != '/showroomowner/showroomcars') {return getBookedCars();}
    else {return getmyshowroomcars();}
  }
  const getSuperAdminShowrooms = () => {
    if (localStorage.getItem("Showroomowner") == 'superAdmin') {
      return getShowrooms();
    }
    if(location.pathname == '/showroomowner/myorders'){
      return getMyOrders();
    }
  }
  const getSuperAdminCars = () => {
    if (localStorage.getItem("Showroomowner") == 'superAdmin' || location.pathname == '/showroomowner/cars') {

      return getCars();
    }
  }

  const [superAdminCars, setsuperAdminCars] = useState([]);
  async function getShowrooms() {
    const endPoint=`/showroom/getAll?page=1&pageSize=10&status=${filter}`;
    const method=`get`;
    try {
      let getResponse = await serverRequestHandler(endPoint,method);
      setsuperAdminShowrooms(getResponse.data);
    } catch (error) {

    }

  }

  async function getCars() {
    const endPoint=`/car/getall?pageSize=10&page=1&status=${filter}`;
    const  method=`get`;
    try {
      const cars = await serverRequestHandler(endPoint,method);
      setsuperAdminCars(cars.data);

      toast.info(cars.data.message, {
        autoClose: 1000,
        theme: 'dark',
      })
    } catch (error) {
    }

  }
  const movetocreatecar = useNavigate('');//Navigation
  async function getmyshowroomcars() {
    const endPoint=`/car/getAll?showroomId=${localStorage.getItem("Showroomid")}&page=1pageSize=10&status=${filter}`
    const method=`get`;
    try {
      const response = await serverRequestHandler(endPoint,method);
      settotalCount(response.totalCount);
      setcarsData(response.data);
    } catch (error) {
      Toast(error.message);
    }

  }



  async function getMyOrders() {
    const showroomId=localStorage.getItem('Showroomid');
    // const URL = `http://locahost:5000/api/booking/getAll?status=${filter}&showRoom=${showroomId}&page=1&pageSize=10`;
    const Token = localStorage.getItem("Token");
    const endPoint=`/booking/getAll?status=${filter}&showRoom=${showroomId}&page=1&pageSize=10`;
    const method=`get`;
    try {

      const orderedCars = await serverRequestHandler(endPoint,method);

          } catch (error) {
    }
  }


  return (
    <div className='px-[60px] w-[100%]'>
      {localStorage.getItem("Showroomowner") == 'false' || localStorage.getItem("Showroomowner") == 'true' ? <>
        <Title/>
      </> : ''}
      {location.pathname == '/showroomowner/showroomcars' ? <div className="w-[100%] flex flex-row items-center justify-end pr-[10vmin] pb-[3vmin]">
        <button onClick={() => {
          movetocreatecar('rentcar');
          localStorage.setItem("UpdateCar", false);
        }} className='py-[1vmin] px-[1vmin] w-[120px] bg-[#FC4500]'>Upload Cars</button>
      </div> : ''}
      <Buttons setFilter={setFilter} />
      {location.pathname == '/showroomowner/showrooms' ? <>
        <h3 className='text-[20px] py-[4px]'>Showrooms</h3>
      </> : ''}
      {location.pathname == '/showroomowner/cars' ? <>
        <h3 className='text-[20px] py-[20px]'>Cars</h3>
      </> : ''}
      <div className='flex flex-row flex-wrap gap-[25px]'>
        {location.pathname == '/showroomowner/cars' && superAdminCars ? superAdminCars.map(function (Car, key) {
          return <Car5 key={key} Car={Car} filter={filter}  />
        })
        : ''}



        {location.pathname == '/showroomowner/showrooms' && superadminShowrooms ? <>
          {superadminShowrooms.map(function (showroom, key) {
            return (<div key={key} className='w-[272px] min-h-[308px]    text-black bg-[#FFFFFF] rounded-lg flex flex-col justify-between p-[10px] border-[1px] border-[#bdbebe]'>
              <img className="w-[253px] h-[176px] object-cover rounded-lg border-[1px] border-[#90A3BF]" src={showroom.showRoomPicture ? localhost() + showroom.showRoomPicture : ''} alt="" />
              <div id="carinfo" className='flex flex-col items-start w-[100%]'>
                <div className='w-[100%]'>
                  <p className='font-semibold text-[16px]  capitalize text-[#212529] py-[6px]'>{showroom.showRoomName}</p>
                </div>
                <div className='flex flex-row flex-wrap items-center justify-between w-[100%]'>
                  <p className='text-[0.9rem] text-[#111111] font-light'>Location </p>
                  <p className="font-normal text-[#59cbf8] capitalize">{showroom.location}</p>
                </div>
                <div className='flex flex-row items-center justify-between w-[100%]'>
                  <p className='text-[0.9rem]  text-[#111111] font-light'>Available Cars</p>
                  <p className="font-normal text-[#59cbf8]">{showroom.carCount}</p>
                </div>
                <div className='flex flex-row items-center justify-between w-[100%]'>
                  <p className='text-[0.9rem]  text-[#111111] font-light'>Phone</p>
                  <p className="font-normal text-[#59cbf8]">{showroom.phone}</p>
                </div>
                <div className='flex flex-row items-center justify-between w-[100%] py-[10px]'>
                  <p className='text-[0.9rem]  text-[#111111] font-light'>Status</p>
                  <p className="font-normal text-[red] capitalize">{showroom.status}</p>
                </div>
              </div>
              <div className='flex flex-row  w-[100%] items-end justify-end'>
                <button onClick={() => {
                  moveTo('addshowroom', { state: { showroomid: showroom._id } });
                }} className='bg-[#FC4500] rounded-sm text-white font-semibold text-[1rem] text-center w-[62px] h-[37px]'>View</button>
              </div>
            </div>)
          })}
        </> : ''}
        {carsData ? carsData.map(function (car, idx) {
          return (<>
            <Car1 getbookedCars={getBookedCars} isRentNow={true} key={idx} car={car} bookedCar={car.Car} filter={filter} detailsid={car ? car._id ?? '' : ''} carid={car ? car?.Car?._id : ''} />
          </>);
        }) : <h6 className='absolute top-[60%] left-[50%] font-bold translate-x-[-50%] translate-y-[-50%] text-[#CBCDCF] text-3xl'>No Bookings</h6>}
      </div>
    </div>
  )
}

export default CarTypeBtns