import CarsInfo2 from "./CarComponents/CarInfo2"
import CarsInfo from "./CarComponents/CarsInfo"
import CarTypeBtns from "./Others/CarTypeBtns"
import "./CarContainer.css";
const CarsContainer = () => {
  return (
<div id='carcontainerrr' className='min-h-[100vh] py-[4vmin] w-[80%] carscontainer'>
<CarTypeBtns/>
<CarsInfo/>
<CarsInfo2/> 
</div>
    
  )
}

export default CarsContainer