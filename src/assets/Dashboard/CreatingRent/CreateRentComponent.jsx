
const CreateRentComponent = () => {
  return (
<div className="flex flex-row w-[40%] cardetails">
    <div className="flex flex-col gap-[2vmin] cardetails">
      <div className="flex flex-col justify-between items-center bg-[#FF5C00] rounded min-h-[230px] w-[100%] createrent py-2">
        <div className="flex flex-col gap-[4vmin]">
          <h4 className="text-[4vmin] font-semibold text-left px-[4vmin] text-white">Sports car with the best <br /> design and acceleration</h4>
          <p className=" text-white text-left px-[4vmin] w-[80%] text-[2vmin]">Safety and comfort while driving a 
          futuristic and elegant sports car</p>
        </div>
        <img className="w-[80%] h-[80%] my-[4vmin]" src="src\assets\Dashboard\CreatingRent\image 8.png" alt="" />
    </div>
      <div className="flex flex-row gap-[5%] w-[100%]">
       <img  className="w-[30%]" src="src\assets\Dashboard\CreatingRent\View 1.png" alt="" />
       <img  className="w-[30%]" src="src\assets\Dashboard\CreatingRent\View 2.png" alt="" />
       <img className="w-[30%]"  src="src\assets\Dashboard\CreatingRent\View 3.png" alt="" />
      </div>
</div>
<div className="">
{/* <CreateRent/>  */}

</div>
    
      
      
    </div>
  )
}

export default CreateRentComponent