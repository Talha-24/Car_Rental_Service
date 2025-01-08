import Logo from './Header Components/Logo'
import SearchBar from './Header Components/SearchBar'
import Icons from './Header Components/Icons/Icons'

const Header = () => {
  return (
    <div className='py-8 bg-white flex items-center justify-between w-[100%]  border-2 border-x-gray-500 px-10 sticky'>
        <div className='flex items-center gap-[35px]'>
        <Logo/>
        <SearchBar/>
        </div>
        <Icons/>
        

        
    </div>
  )
}

export default Header