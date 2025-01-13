import TypeText from './CarTypeComponents/TypeText'
import CarName from './CarTypeComponents/CarName'
import CarNameTwo from './CarTypeComponents/CarNameTwo'
import CarNameThree from './CarTypeComponents/CarNameThree'
import CarNameFour from './CarTypeComponents/CarNameFour'

const Type = () => {
    let carnames={carOne: "Mehran",
                  carTwo: "XLI Corolla",
                  carThree: "Lemozin",
                  carfour: "Parado",
    }

  return (
    <div className='flex flex-col gap-[4vmin] mt-[2vmin] w-[100%]'>
        <TypeText/>
        <CarName  carname={carnames.carOne} />
        <CarNameTwo carname={carnames.carTwo}/>
        <CarNameThree carname={carnames.carThree}/>
        <CarNameFour carname={carnames.carfour} />
        
    </div>
  )
}

export default Type