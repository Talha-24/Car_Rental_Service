import Buttons from './Buttons'
import { useEffect, useState } from 'react';
import Car1 from '../CarComponents/Carsss/Car1';
import { useLocation, useNavigate } from 'react-router-dom';
import Car5 from '../CarComponents/Carsss/Car5';
import serverRequestHandler from '../../../Utils/http';
import localhost from '../../../Utils/LocalHost';
import Title from './Title';
import Pagenation from '../../../Pagenation/Pagenation';
import { EndPoint, obj } from '../../../Utils/RoutesPaths';
import { Toast } from '../../../Utils/Toasthot';




const CarTypeBtns = () => {
  const [totalCount, settotalCount] = useState(0);
  const [carsData, setcarsData] = useState('');
  const [filter, setFilter] = useState('pending');
  const [superadminShowrooms, setsuperAdminShowrooms] = useState('');
  const moveTo = useNavigate();
  const location = useLocation();
  const [currentPage, setcurrentpage] = useState(1);
  const [totalnoofcars, settotanoofcars] = useState(3);





  async function getBookedCars() {
    try {
      let response = await serverRequestHandler(EndPoint.showroomcars(currentPage, totalnoofcars, filter).bookedcars, `get`);
      settotalCount(response.totalCount / 3);
      setcarsData(response.data);
      Toast.success("Booked Cars loaded successfully",2000);
    } catch (error) {
      Toast.error(error.message ?? error,2000);
    }

  }

  useEffect(() => {
    getSuperAdminShowrooms();
    getSuperAdminCars();
    carsHandler();
  }, [filter, location, currentPage, totalnoofcars])



  const carsHandler = () => {

    if (location.pathname != obj.usershowroomcars && location.pathname != obj.myorders && location.pathname != obj.superadminhome && location.pathname != obj.superadmincars ) {
      return getBookedCars();
    }

    else if (location.pathname == obj.myorders) {
      return getMyOrders();
    }

    else if(location.pathname != "/showroomowner/showroomcar/rentcar" && location.pathname != obj.superadminhome && location.pathname != obj.superadmincars) {
      return getmyshowroomcars();
    }
  }

  
  const getSuperAdminShowrooms = () => {
    if (localStorage.getItem("Showroomowner") == 'superAdmin' && location.pathname !='/showroomowner/cars') {
      return getShowrooms();
    }

  }
  const getSuperAdminCars = () => {
    if (location.pathname == obj.superadmincars) {
      return getCars();
    }
  }

  const [superAdminCars, setsuperAdminCars] = useState([]);
  const [superAdmintotal, setsuperAdmintotal] = useState();
  async function getShowrooms() {

    const endPoint = EndPoint.superAdminShowroom(currentPage, totalnoofcars, filter);

    try {
      let getResponse = await serverRequestHandler(endPoint, `get`);

      setsuperAdminShowrooms(getResponse.data);
      settotalCount(getResponse.totalCount ?? '');
      setsuperAdmintotal(getResponse.totalCount);
      Toast.success("Showrooms retrieved successfully",2000);
    } catch (error) {
      Toast.error(error ?? error.message ?? "Showroom retrieval failed",3000);
    }

  }

  async function getCars() {
    try {
      const cars = await serverRequestHandler(EndPoint.showroomcars(totalnoofcars, currentPage, filter).getCars, `get`);
      setsuperAdminCars(cars.data);
      settotalCount(Math.round(cars.totalCount / 3));
      Toast.success(cars?.data?.message ?? "Car Retrieved Successfully",2000);
    } catch (error) {
      Toast.error(error?.message ?? error,3000);
    }

  }
  const movetocreatecar = useNavigate('');

  async function getmyshowroomcars() {

    try {
      const response = await serverRequestHandler(EndPoint.showroomcars(currentPage, totalnoofcars, filter).myshowroomcars, `get`);
      settotalCount(response.totalCount);
      setcarsData(response.data);
      Toast.success("Showroom Cars retrieved Successfully",2000);
     
    } catch (error) {
      Toast.error(error.message ?? error,3000);
    }

  }


  const [myorders, setmyorders] = useState();
  const [totalCars, settotalcars] = useState();


  async function getMyOrders() {
    try {
      const orderedCars = await serverRequestHandler(EndPoint.showroomcars(currentPage, totalnoofcars, filter, localStorage.getItem('Showroomid')).myorders, `get`);
      setmyorders(orderedCars.data);
      settotalcars(Math.round(orderedCars.totalCount / 3));
      Toast.success("My Orders loaded successfully",2000);
    } catch (error) {
      Toast.error(error.message ?? error,3000);
    }
  }




  return (
    <div className='px-[10px] w-[100%]'>
      {localStorage.getItem("Showroomowner") == 'false' || localStorage.getItem("Showroomowner") == 'true' ? <>
        <Title />
      </> : ''}
      {location.pathname == obj.usershowroomcars ? <div className="w-[100%] flex flex-row items-center justify-end pr-[10vmin] pb-[3vmin]">
        <button onClick={() => {
          movetocreatecar('rentcar');
          localStorage.setItem("UpdateCar", false);
        }} className='py-[1vmin] px-[1vmin] w-[120px] bg-[#FC4500]'>Upload Cars</button>
      </div> : ''}
      <Buttons setFilter={setFilter} />
      {location.pathname == obj.superadminhome ? <>
        <h3 className='text-[20px] py-[4px]'>Showrooms</h3>
      </> : ''}
      {location.pathname == obj.superadmincars ? <>
        <h3 className='text-[20px] py-[20px]'>Cars</h3>
      </> : ''}
      <div className='flex flex-row flex-wrap gap-[25px]'>
        {location.pathname == obj.superadmincars && superAdminCars ? superAdminCars.map(function (Car, key) {

          return <Car5 key={key} Car={Car} filter={filter} />
        })
          : ''}
        {location.pathname == obj.superadminhome && superadminShowrooms ? <>
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

          console.log("Booked Cars",car);

          return (<>
          
            <Car1 getbookedCars={getBookedCars} isRentNow={true} key={idx} car={car} bookedCar={car.Car} filter={filter} detailsid={car ? car._id ?? '' : ''} carid={car ? car?.Car?._id : ''} />
          
          
          </>);
        }) : (myorders && location.pathname == obj.myorders ?
          <>
            {myorders.map(function (car, idx) {
              localStorage.setItem("orderStatus", car.status);

              return (
                <Car1 key={idx} car={car.Car??''} bookingId={car._id??""} myorders={getMyOrders} />
              )
            })}



          </> :'')}
      </div>

      <Pagenation setpageno={setcurrentpage} setnoofcars={settotanoofcars} totalpages={totalCount} />
    </div>
  )
}

export default CarTypeBtns