import MailVerification from "./MailVerification"
import SectionThree from "./SectionThree"

const Verification = () => {
  return (
    <div className="flex w-[100%] flex-row items-center justify-center verification ">
        <SectionThree/>
        <MailVerification/>

    </div>
  )
}

export default Verification