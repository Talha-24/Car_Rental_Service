import CarName from '../Car/CarName'
import CarImage from '../Car/CarImage'
import CarProperties from '../Car/CarProperties'
import RentPerDay from '../Car/RentPerDay'

const Car4 = () => {
  return (
    <div className='w-[220px] h-[250px] border-[1px] border-[#dadada]  text-black bg-[#ffffff] rounded-lg flex flex-col justify-between p-[10px]'>
     <CarName/>
<CarImage/>
    <CarProperties/>
    <RentPerDay/>
</div>
  )
}

export default Car4