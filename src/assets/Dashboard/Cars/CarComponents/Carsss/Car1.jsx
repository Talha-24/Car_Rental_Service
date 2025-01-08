import CarName from '../Car/CarName'
import CarImage from '../Car/CarImage'
import CarProperties from '../Car/CarProperties'
import RentPerDay from '../Car/RentPerDay'

const Car1 = () => {
  return (
    <div className='w-[220px] h-[250px] text-black border-[1px] border-[#dadada]  rounded-lg flex flex-col justify-between p-[10px]'>
     <CarName/>
<CarImage/>
    <CarProperties/>
    <RentPerDay/>
</div>
  )
}

export default Car1