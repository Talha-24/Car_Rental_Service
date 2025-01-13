
const CreateRentComponent = () => {
  return (
<div className="flex flex-row w-[50%]">
    <div className="flex flex-col gap-[2vmin]">
      <div className="flex flex-col justify-between items-center bg-[#FF5C00] rounded min-h-[230px] w-[100%] createrent py-2">
        <div className="flex flex-col gap-[20px]">
          <h4 className="text-xl font-semibold text-center text-white">Sports car with the best design and acceleration</h4>
          <p className=" text-white text-center px-10">Safety and comfort while driving a 
          futuristic and elegant sports car</p>
        </div>
        <img className="h-[70px]" src="src\assets\Dashboard\CreatingRent\image 8.png" alt="" />
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