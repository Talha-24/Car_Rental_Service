import CarImage from "./Car/CarImage"
import CarName from "./Car/CarName"
import CarProperties from "./Car/CarProperties"
import RentPerDay from "./Car/RentPerDay"

const Car = () => {

   
  return (
    <div className='w-[200px] h-[250px] text-black bg-[#ffffff] rounded-lg flex flex-col justify-between p-[10px]'>
     <CarName/>
<CarImage/>
    <CarProperties/>
    <RentPerDay/>
</div>
  )
}

export default Car