import React, { useEffect, useState } from 'react'
import {CarsContainer, H1, Main } from './FavouriteCar'
import axios from 'axios'
import Car1 from "../Dashboard/Cars/CarComponents/Carsss/Car1"
import Car2 from '../Dashboard/Cars/CarComponents/Carsss/Car2'
const FavouriteCars = () => {
  const [favcars,setfavcars]=useState([]);
  async function getFavCars() {
      const URL=`http://localhost:5000/api/favorite`
      const Token=localStorage.getItem("Token");

  try {
     let favouritecars= await axios.get(URL,{
      headers: {
        Authorization: `Bearer ${Token}`,
      }
     })
     console.log("FavCars : ",favouritecars.data.data.data);
     setfavcars(favouritecars.data.data.data);
    
  } catch (error) {
    console.log("FavCar Error : ",error);
    
  }

    
  }
  const [removefavorite,setremovefavorite]=useState(1);

  useEffect(() => {
    
    getFavCars();

  }, [removefavorite]);
  
  return (
    <Main>
        <H1>Favourite Cars</H1>

        <CarsContainer>
          {favcars ? favcars.map(function(car,idx){
            
            return(
            // <Car2 picture={car.car.pictures[0]} car={car} getFavCars={getFavCars()} removefavorite={removefavorite} setremovefavorite={setremovefavorite} />
            <Car1 isRentNow={true} key={idx} car={car.car} />

            )
          }): "No Cars"}


        </CarsContainer>
    </Main>
  )
}

export default FavouriteCars