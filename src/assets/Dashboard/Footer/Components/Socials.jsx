import About from "./Social Components/About"
import Community from "./Social Components/Community"
import Social from "./Social Components/Social"

const Socials = () => {
  return (
    <div id="itemcontainer" className='text-black flex flex-row gap-[6vmin]'>
        <About/>
        <Community/>
        <Social/>
     
      </div>
  )
}

export default Socials