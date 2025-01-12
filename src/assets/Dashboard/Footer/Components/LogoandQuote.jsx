import Logo from '../../Header/Header Components/Logo'
import Quote from './Quote'

const LogoandQuote = () => {
  return (
    <div id="logoandquote" className='flex flex-col gap-[3vmax] place-items-start  text-black w-[100%]'>
    <Logo/>
    <Quote/>
      
    </div>
  )
}

export default LogoandQuote