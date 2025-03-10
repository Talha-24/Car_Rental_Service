import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import localhost from "../../../../../Utils/LocalHost";

const Profilepicture = (propse) => {
  //Picture from External APi


  let profilepicture = localStorage.getItem("ProfilePicture");
  const navigate = useNavigate();
  return (
    <div onClick={() => {
     navigate("/my-profile")
    }}
      className="cursor-pointer h-[40px] w-[40px] border-1 border-[#f8fAf8] navoptions">
      <img className='h-[100%] w-[100%] rounded-full object-cover' src={profilepicture ? localhost() + profilepicture : "https://car-rantal-mauve.vercel.app/assets/imgs/profile.webp"} alt="" />
    </div>
  )
}

export default Profilepicture