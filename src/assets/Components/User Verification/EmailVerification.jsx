import UserVerification from "./UserVerification"
import Section_two from "../Sign In/Section_two"
import style from "../../SideBarIcon/Styling";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { obj } from "../../Utils/RoutesPaths";
const EmailVerification = () => {
    
    const navigate = useNavigate();
    return (
        <>
            {style().width >= 790 ? <Section_two /> : <FaArrowLeft onClick={() => {
                navigate(obj.login);
            }} className='fixed top-[5%] left-[5%] text-[20px] text-[#FC4500]' />}
            <UserVerification />
        </>
    )
}
export default EmailVerification