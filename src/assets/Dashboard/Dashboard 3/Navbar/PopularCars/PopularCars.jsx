import PopularCar1 from "./PopularCar1"
import PopularCar2 from "./PopularCar2"
import PopularCar3 from "./PopularCar3"
import PopularCar4 from "./PopularCar4"

const PopularCars = () => {
  return (
    <div className='py-[1vmin]  flex flex-row  gap-[4vmin]  px-[6vmin] w-[100%]' id='carcontainer' >
          <div className='flex flex-row items-center gap-[4vmin] w-[100%]'>
    <PopularCar1/>
    <PopularCar2/>
       </div>
       <div className='flex flex-row items-center gap-[4vmin] w-[100%]'>
   <PopularCar3/>
     <PopularCar4/>
      </div>

        
    </div>
  )
}

export default PopularCars