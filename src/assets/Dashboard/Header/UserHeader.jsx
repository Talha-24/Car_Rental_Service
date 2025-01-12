import Logo from './Header Components/Logo'
import SearchBar from './Header Components/SearchBar'
import Icons from './Header Components/Icons/Icons'
import UserLogo from './Header Components/UserLogo'

const UserHeader = () => {
  return (
    <div className='py-[4.5vmin] bg-white flex items-center justify-between w-[100%] header px-[5vmin]'>
        <div className='flex items-center gap-[10vmin] w-[100%]'>
     <UserLogo/>
        <SearchBar/>
        </div>
        <Icons/>
             
    </div>
  )
}

export default UserHeader