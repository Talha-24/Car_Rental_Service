import "./car.css"
import Car5 from './Carsss/Car5'
import Car6 from './Carsss/Car6'
import Car7 from './Carsss/Car7'
import Car8 from './Carsss/Car8'
const CarsInfo2 = () => {
  return (
    <div className='py-2  flex flex-row gap-[40px]  px-8' id='carcontainer' >
        <div className="flex  gap-[20px] flex-row">
      <Car5/>
      <Car6/>
      </div>
      <div className="flex gap-[20px] flex-row">
      <Car7/>
      <Car8/>
      </div>
    </div>
  )
}

export default CarsInfo2