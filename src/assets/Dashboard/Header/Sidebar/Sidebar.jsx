import Price from "./Components/Price"
import Type from "./Components/Type"

const Sidebar = () => {
  return (
    <div className=' text-black w-[40%]  min-h-[100vh] px-10 pt-[100px] flex flex-col gap-[10vmax] sidebar'>
        <Type/>
        <Price/>
    </div>
  )
}

export default Sidebar