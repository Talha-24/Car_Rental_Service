import React, { useEffect, useState } from 'react'
import { CarsContainer, H1, Main } from './FavouriteCar'
import axios from 'axios'
import Car1 from "../Dashboard/Cars/CarComponents/Carsss/Car1"
import serverRequestHandler from "../Utils/http.js"
import Toast from "../Toaster/Toaster.js"
const FavouriteCars = () => {


  const [favcars, setfavcars] = useState([]);
  async function getFavCars() {
    const endPoint=`/favorite?`;
    const method=`get`;

    try {
      let favouritecars = await serverRequestHandler(endPoint,method);
      setfavcars(favouritecars.data);
    } catch (error) {
      Toast(error.message);
    }


  }

  const [removefavorite, setremovefavorite] = useState(1);
  useEffect(() => {
    getFavCars();
  }, [removefavorite]);

  const [currentPage, setCurrentPage] = useState(1);
  const [carsperpage, setcarsperpage] = useState(3);
  const LastIndex = currentPage * carsperpage;
  const FirstIndex = LastIndex - carsperpage;
  const totalPages = Math.ceil(favcars.length / carsperpage);
  const carsonpage = favcars.slice(FirstIndex, LastIndex);
  return (
    <Main>
      <div className='flex flex-row items-center w-[100%] justify-between'>
      <H1>Favorite Cars</H1>
      <div  className=''> 
        <select onChange={(e)=>{
          setcarsperpage(e.target.value);
        }} className='border-[1px] border-[#FC4500] rounded-sm'>
          <option value="3">3</option>
          <option value="6">6</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="500">500</option>
        </select>
      </div>
      </div>
      <CarsContainer>
        {carsonpage ? carsonpage.map(function (car, idx) {
          return (
            <Car1 isRentNow={true} key={idx} car={car.car} />
          )
        }) : "No Cars"}
      </CarsContainer>
    </Main>
  )
}

export default FavouriteCars