import "./car.css"
import Car1 from './Carsss/Car1'
import Car2 from './Carsss/Car2'
import Car3 from './Carsss/Car3'
import Car4 from './Carsss/Car4'
const CarsInfo = () => {
  return (
    <div className='py-[1vmin]  flex flex-row  gap-[4vmin]  px-[6vmin] w-[100%]' id='carcontainer' >

       <div  className='flex flex-row items-center gap-[4vmin]'>
       <Car1/>
       <Car2/>
       </div>
       <div className='flex flex-row items-center gap-[4vmin]'>
      <Car3/>
      <Car4/>
      </div>
     
      
  
    </div>
  )
}

export default CarsInfo