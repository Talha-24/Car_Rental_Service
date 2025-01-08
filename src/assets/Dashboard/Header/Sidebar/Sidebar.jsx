import Price from "./Components/Price"
import Type from "./Components/Type"

const Sidebar = () => {
  return (
    <div className='bg-white text-black w-[300px] min-h-[100vh] px-10 flex flex-col gap-[50px]'>
        <Type/>
        <Price/>
    </div>
  )
}

export default Sidebar