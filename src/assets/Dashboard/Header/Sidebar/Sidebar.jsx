import Price from "./Components/Price"
import Type from "./Components/Type"

const Sidebar = () => {
  return (
    <div className='text-black bg-[#f4f6f7] w-[200px] min-h-[100vh] px-10 pt-[100px] flex flex-col gap-[10vmax] sidebar'>
        <Type/>
        <Price/>
    </div>
  )
}

export default Sidebar