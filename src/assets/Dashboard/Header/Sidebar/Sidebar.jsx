import Price from "./Components/Price"
import Type from "./Components/Type"

const Sidebar = () => {
  return (
    <div className='text-black  bg-[#f4f6f7]  w-[20%] min-h-[100vh] px-[4vmin]  py-[4vmin] flex flex-col justify-start  gap-[10vmax] sidebar'>
        <Type/>
        <Price/>
    </div>
  )
}

export default Sidebar