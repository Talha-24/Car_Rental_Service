import Car from './Car'
import "./car.css"
const CarsInfo = () => {
  return (
    <div className='py-2 flex flex-row gap-[40px] flex-wrap px-8' id='carcontainer' >

        <div className='flex  gap-[30px]'>
        <Car/>
        <Car/>
        </div>
        

     <div className='flex  gap-[30px]'>
      <Car/>
      <Car/>
      </div>


    </div>
  )
}

export default CarsInfo