import MailVerification from "./MailVerification"
import SectionThree from "./SectionThree"

const Verification = () => {
  return (
    <div className="flex flex-row items-center justify-center verification ">
        <SectionThree/>
        <MailVerification/>

    </div>
  )
}

export default Verification