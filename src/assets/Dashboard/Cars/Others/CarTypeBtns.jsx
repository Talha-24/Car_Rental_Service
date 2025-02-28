import axios from 'axios';
import Availabletext from './Availabletext'
import Buttons from './Buttons'
import { useEffect, useState } from 'react';
import Car4 from '../CarComponents/Carsss/Car4';
import Car3 from '../CarComponents/Carsss/Car3';
import Car2 from '../CarComponents/Carsss/Car2';
import Car1 from '../CarComponents/Carsss/Car1';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Car5 from '../CarComponents/Carsss/Car5';
const CarTypeBtns = () => {
  const [totalCount, settotalCount] = useState('');
  const [carsData, setcarsData] = useState('');
  const [filter, setFilter] = useState('pending');
  const [superadminShowrooms, setsuperAdminShowrooms] = useState('');
  const moveTo = useNavigate('');
  console.log("Filter", filter);
  const location = useLocation();



  async function getBookedCars() {
    const token = localStorage.getItem("Token"); // Your token
    const URL = `http://localhost:5000/api/booking/getAll?page=1&pageSize=10&status=${filter}`;
    try {
      let response = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      settotalCount(response.data.data.totalCount);
      setcarsData(response.data.data.data);
    } catch (error) {
      console.error("Booking Error:", error.response ? error.response.data : error.message);
    }

  }



  useEffect(() => {
    getBookedCars();
    getSuperAdminShowrooms();
    getSuperAdminCars();
  }, [filter, location])

  const getSuperAdminShowrooms = () => {

    if (localStorage.getItem("Showroomowner") == 'superAdmin') {
      return getShowrooms();
    }



  }

  const getSuperAdminCars = () => {

    if (localStorage.getItem("Showroomowner") == 'superAdmin' || location.pathname == '/showroomowner/cars') {

      return getCars();
    }
  }



  const [superAdminCars, setsuperAdminCars] = useState([]);

  async function getShowrooms() {
    const Token = localStorage.getItem("Token");
    const URL = `http://localhost:5000/api/showroom/getAll?page=1&pageSize=10&status=${filter}`
    try {
      let getResponse = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${Token}`,
        }
      })
      setsuperAdminShowrooms(getResponse.data.data.data);

    } catch (error) {

    }

  }

  async function getCars() {
    const Authentication = localStorage.getItem("Token");
    try {
      const cars = await axios.get(`http://localhost:5000/api/car/getAll?pageSize=10&page=1&status=${filter}`, {
        headers: {
          Authorization: `Bearer ${Authentication}`,
        }
      })

      setsuperAdminCars(cars.data.data.data);
      toast.info(cars.data.message, {
        autoClose: 1000,
        theme: 'dark',
      })
    } catch (error) {
    }

  }






  const movetocreatecar = useNavigate('');

  return (
    <div className='px-[60px] w-[100%]'>
      {/* <Availabletext /> */}
      {localStorage.getItem("Showroomowner") == 'false' || localStorage.getItem("Showroomowner") == 'true' ? <>
        <Availabletext />
      </> : ''}
      {location.pathname == '/showroomowner/showroomcars' ? <div className="w-[100%] flex flex-row items-center justify-end pr-[10vmin] pb-[3vmin]">
        <button onClick={() => { movetocreatecar('rentcar'); }} className='py-[1vmin] px-[1vmin] w-[120px] bg-[#FC4500]'>Upload Cars</button>
      </div> : ''}

      <Buttons setFilter={setFilter} />

      {location.pathname == '/showroomowner/showrooms' ? <>
        <h3 className='text-[20px] py-[4px]'>Showrooms</h3>
      </> : ''}
      {location.pathname == '/showroomowner/cars' ? <>
        <h3 className='text-[20px] py-[20px]'>Cars</h3>
      </> : ''}

      <div className='flex flex-row flex-wrap gap-[25px]'>

        {location.pathname == '/showroomowner/cars' && superAdminCars ? superAdminCars.map(function(Car){
          return <Car5  Car={Car} filter={filter}  />

        })

                                  

         : ''}



        {location.pathname == '/showroomowner/showrooms' && superadminShowrooms ? <>
          {superadminShowrooms.map(function (showroom) {
            console.log("showrooms", showroom);
            return (<div className='w-[272px] min-h-[308px]    text-black bg-[#FFFFFF] rounded-lg flex flex-col justify-between p-[10px] border-[1px] border-[#bdbebe]'>
              <img className="w-[253px] h-[176px] object-cover rounded-lg border-[1px] border-[#90A3BF]" src={showroom.showRoomPicture ? 'http://localhost:5000/' + showroom.showRoomPicture : ''} alt="" />
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

          console.log("car", car);
          return (<>

            <Car1 getbookedCars={getBookedCars} isRentNow={true} key={idx} car={car} bookedCar={car.Car} filter={filter} detailsid={car ? car._id : ''} carid={car ? car.Car._id : ''} />

          </>);

        }) : <h6 className='absolute top-[60%] left-[50%] font-bold translate-x-[-50%] translate-y-[-50%] text-[#CBCDCF] text-3xl'>No Bookings</h6>}
      </div>
    </div>
  )
}

export default CarTypeBtns