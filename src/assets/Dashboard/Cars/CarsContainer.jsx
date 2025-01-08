import CarsInfo from "./CarComponents/CarsInfo"
import CarTypeBtns from "./Others/CarTypeBtns"

const CarsContainer = () => {
  return (
<div className='w-[100%] min-h-[100vh] py-[20px]'>
<CarTypeBtns/>
<CarsInfo/>
<CarsInfo/>
<CarsInfo/>
<CarsInfo/>

</div>
    
  )
}

export default CarsContainer