import About from "./Social Components/About"
import Community from "./Social Components/Community"
import Social from "./Social Components/Social"

const Socials = () => {
  return (
    <div id="itemcontainer" className='text-black flex pb-[3vmin] flex-row gap-[50px]  w-[100%]'>
        <About/>
        <Community/>
        <Social/>
      </div>
  )
}

export default Socials