import CarsInfo from "./CarComponents/CarsInfo"
import CarTypeBtns from "./Others/CarTypeBtns"
import "./CarContainer.css";
const CarsContainer = (propse) => {
  return (
<div id='carcontainerrr' className='min-h-[100vh] py-[4vmin] w-[80%] carscontainer overflow-x-scroll'>
<CarTypeBtns/>

<CarsInfo setselectUser={propse.setselectUser}/>


</div>
  )
}

export default CarsContainer