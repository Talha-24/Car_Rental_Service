import "./car.css"
import Car1 from './Carsss/Car1'
import Car2 from './Carsss/Car2'
import Car3 from './Carsss/Car3'
import Car4 from './Carsss/Car4'
const CarsInfo = () => {
  return (
    <div className='py-2  flex flex-row  gap-[40px]  px-8' id='carcontainer' >

       <div  className='flex flex-row items-center gap-[20px] cardiv'>
       <Car1/>
       <Car2/>
       </div>
       <div className='flex flex-row items-center gap-[20px] cardiv'>
      <Car3/>
      <Car4/>
      </div>
     
      
  
    </div>
  )
}

export default CarsInfo