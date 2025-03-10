import Section_two from "../../../Sign In/Section_two"
import MailVerification from "./MailVerification"
const Verification = (propse) => {
  return (
    <div className="flex w-[100%] flex-row items-center justify-center verification ">
      <Section_two/>
      <MailVerification useremail={propse.useremail} role={propse.role} />
    </div>
  )
}

export default Verification