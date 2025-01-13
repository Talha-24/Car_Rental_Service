import "./car.css"
import Car5 from './Carsss/Car5'
import Car6 from './Carsss/Car6'
import Car7 from './Carsss/Car7'
import Car8 from './Carsss/Car8'
const CarsInfo2 = () => {
  return (
    <div className='py-[1vmin]  flex flex-row gap-[4vmin] w-[100%]  px-[6vmin]' id='carcontainer' >
        <div className="flex  flex-row items-center gap-[4vmin]">
      <Car5/>
      <Car6/>
      </div>
      <div className="flex flex-row  items-center gap-[4vmin]">
      <Car7/>
      <Car8/>
      </div>
    </div>
  )
}

export default CarsInfo2