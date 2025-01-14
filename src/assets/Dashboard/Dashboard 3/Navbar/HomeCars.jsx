import PopularCars from "./PopularCars/PopularCars"
import ShowRoomCar from "./ShowRoomCar"
import ShowRoomCar2 from "./ShowRoomCar2"

const HomeCars = () => {
  return (
    <div className='w-[100%] px-[8vmin] pt-[5vmin] flex flex-col  items-center justify-center   h-[100%]'>
      <div id="NavCarDetails" className="bg-[#FF5C00]  flex flex-col w-[100%] rounded-[1vmin] items-start px-[12vmin]">

        <div id="text" className="w-[80%] flex flex-col gap-[3vmin] py-[8vmin]">
          <h3 className="text-[4vmin] font-semibold  text-[#f5f2f2]">Easy way to rent a car at a low price</h3>
          <p className="text-[3vmin]   text-[#FFFFFF]">Providing cheap car rental services and safe and comfortable facilities.</p>

          <div id="button"  >
            <button className="border-[1px] border-[#7B7B7B] text-[#FFFFFF] py-[1vmin] px-[2vmin] rounded-[0.5vmin] text-[3vmin]"> Rental Car</button>
          </div>
        </div>

        
        <div id="image" className="w-[100%] flex flex-row justify-end my-[5vmin]">
          <img className="w-[60vmin]" src="src\assets\Dashboard\Dashboard 3\Navbar\image.png" alt="" />
        </div>
      </div>
      <div className="w-[100%] flex justify-between text-[#90A3BF] font-semibold text-[2.5vmin] py-[2vmin]">
        <p className=''>Popular Car</p><p className=''>Showroom Car</p>
      </div>



     <PopularCars/>








      <div className="w-[100%] flex text-center text-[#90A3BF] font-semibold text-[2.5vmin] py-[2vmin]">
        <p className=''>Showroom Car</p>
      </div>
      <ShowRoomCar />
      <ShowRoomCar2 />


    </div>
  )
}

export default HomeCars