import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import localhost from "../../../../../Utils/LocalHost";

const Profilepicture = (propse) => {
  //Picture from External APi


  let profilepicture = localStorage.getItem("dp") != 'undefined' ? localStorage.getItem("dp") : false ;
  const navigate = useNavigate();
  return (
    <div onClick={() => {
     navigate("/my-profile")
    }}
      className="cursor-pointer h-[40px] w-[40px] border-[1px] rounded-full navoptions">
      <img className='h-[100%] w-[100%] rounded-full object-cover' src={profilepicture ? localhost() + profilepicture : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"} alt="" />
    </div>
  )
}

export default Profilepicture