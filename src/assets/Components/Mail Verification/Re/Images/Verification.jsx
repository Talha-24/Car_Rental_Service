import MailVerification from "./MailVerification"
import Slider from "../../../Slider/Slider";
const Verification = (propse) => {


  return (
    <div className="flex w-[100%] flex-row items-center justify-center verification ">
      <Slider />
      <MailVerification  />
    </div>
  )
}

export default Verification