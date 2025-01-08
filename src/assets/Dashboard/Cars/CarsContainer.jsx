import CarsInfo2 from "./CarComponents/CarInfo2"
import CarsInfo from "./CarComponents/CarsInfo"
import CarTypeBtns from "./Others/CarTypeBtns"

const CarsContainer = () => {
  return (
<div className='h-[100vh] w-[60%] py-[20px] pt-[110px]'>
<CarTypeBtns/>
<CarsInfo/>
<CarsInfo2/> 


</div>
    
  )
}

export default CarsContainer