import React, { useEffect, useState } from 'react'
import { CarsContainer, H1, Main } from './FavouriteCar'
import axios from 'axios'
import Car1 from "../Dashboard/Cars/CarComponents/Carsss/Car1"
import serverRequestHandler from "../Utils/http.js"
import {Toast} from "../../assets/Utils/Toasthot.js"
import Pagenation from '../Pagenation/Pagenation.jsx'
import { useLocation } from 'react-router-dom'
import { EndPoint, obj } from '../Utils/RoutesPaths.js'
const FavouriteCars = () => {


  const [favcars, setfavcars] = useState([]);
  const [recentCars, setrecentCars] = useState([]);
  const [pageno, setpageno] = useState(1);
  const [pagesize, setpagesize] = useState(3);
  const [recentpagesize, setrecentpagesize] = useState(8);
  const [totalpages, settotalpages] = useState(0);
  const location = useLocation();


  async function getFavCars() {


    try {
      let favouritecars = await serverRequestHandler(EndPoint.showroomcars(pageno, pagesize).favcars, `get`);
      setfavcars(favouritecars.data);
      settotalpages(favouritecars.totalCount);
      // Toast.success("Favorite Cars retrieved successfully!",3000);
      Toast.success("Favorite Cars retrieved successfully!",3000)

    } catch (error) {
      Toast.error(error?.message ?? error);
    }


  }

  const [removefavorite, setremovefavorite] = useState(1);
  const [searchedcars, setsearchedcars] = useState([]);
  const [searchedcount, setsearchedcount] = useState(0);
  const totalBtns = (totalpages / pagesize);


  useEffect(() => {
    getCars();
  }, [recentpagesize, location]);



  const getCars = () => {

    if (location.pathname != obj.favcarone && location.pathname != obj.searchedcars) {
      getFavCars();
      return;

    }
    else if (location.pathname == obj.favcarone) {
      getRecentCars();
      return;
    }
    else if (location.pathname == obj.searchedcars) {
      findcar();
      return;
    }

  }


  async function findcar() {
    try {
      let url = await serverRequestHandler(EndPoint.searchcar(location.state), `get`, {});
      setsearchedcars(url.carsWithFavorites);
      setsearchedcount(url.totalCount);
    } catch (error) {
      Toast.error(error.message ?? error);
    }


  }


  async function getRecentCars() {

    try {

      const recentcars = await serverRequestHandler(EndPoint.showroomcars(pageno, recentpagesize).recentcar, `get`);
      setrecentCars(recentcars.data);
      settotalpages(Math.round(recentcars.totalCount / recentpagesize));
      // Toast.success("Recommended Cars Retrieved Successfully",)
    } catch (error) {
      Toast.error(error.message ?? error);

    }
  }


  return (
    <Main>
      <div className='flex flex-row items-center w-[100%] justify-between'>
        {location.pathname == '/showroomowner/homecars/recentcars' ? <H1>Recommended Cars</H1> : (location.pathname == obj.searchedcars ? <H1>Searched Cars</H1> : <H1>Favorite Cars</H1>)}
      </div>
      <CarsContainer>
        {favcars ? favcars.map(function (car, idx) {
          return (
            <Car1 isRentNow={true} key={idx} car={car.car} />
          )
        }) : ''}
        {recentCars ? recentCars.map(function (car, idx) {
          return (
            <Car1 isRentNow={true} key={idx} car={car} />
          )
        }) : ""}
        {searchedcars ? searchedcars.map(function (car, idx) {
          return (
            <Car1 isRentNow={true} key={idx} car={car} />
          )
        }) : ''}
      </CarsContainer>
      <Pagenation setnoofcars={location.pathname == obj.favcarone ? setrecentpagesize : setpagesize} setpageno={setpageno} totalpages={location.pathname == obj.favcarone ? totalpages : totalBtns} />
    </Main>
  )
}

export default FavouriteCars