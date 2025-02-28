import Logo from './Header Components/Logo'
import SearchBar from './Header Components/SearchBar'
import Icons from './Header Components/Icons/Icons'
import UserLogo from './Header Components/UserLogo'
import { useEffect, useState } from 'react'
import UserProfile from '../../Components/Profile/UserProfile.jsx'
import FilterModale from '../../FilteredCars/FilterModale.jsx'

const UserHeader = () => {



  const [carsFilter, setcarsFilter] = useState(false);
  const [profile,setProfile]=useState(false);

const openProfile=()=> setProfile(true);
const closeProfile=()=> setProfile(false);


  const openFilter = () => setcarsFilter(true);
  const closeFilter = () => setcarsFilter(false);
  useEffect(() => {
    console.log("True/False", carsFilter);
  }, [])




  return (
    <div className='py-[15px]  bg-white flex items-center justify-between w-[100%] header px-[15px]'>
      <div className='flex items-center gap-[40px] w-[100%]'>
        <UserLogo />
        <SearchBar openFilter={openFilter} />
      </div>      
      <Icons openProfile={openProfile} />
      {carsFilter && <FilterModale closeFilter={closeFilter}  />}
      {profile && <UserProfile closeProfile={closeProfile} />}
    </div>

  )
}

export default UserHeader