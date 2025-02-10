import MailVerification from "./MailVerification"
import SectionThree from "./SectionThree"
const Verification = (propse) => {
  return (
    <div className="flex w-[100%] flex-row items-center justify-center verification ">
    
    <SectionThree/>
     
        <MailVerification useremail={propse.useremail} role={propse.role}/>

    </div>
  )
}

export default Verification