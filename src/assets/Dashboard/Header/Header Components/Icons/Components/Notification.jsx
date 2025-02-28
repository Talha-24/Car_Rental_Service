import { useState } from "react";
import Notifications from "../../../../../Notification/Notifications.jsx"
import { useNavigate } from "react-router-dom";
const Notification = (propse) => {



  const [notification, setnotification] = useState(false);
  const openNotification = () => setnotification(true);
  const closeNotification = () => setnotification(false);
  const moveTo = useNavigate();





  return (
    <>

      <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#F0F0F0] rounded-full cursor-pointer" onClick={() => {
        moveTo('notification');
      }}>
        <img className="h-[20px] w-[20px]" src="https://static.thenounproject.com/png/607762-200.png" alt="" />

      </div>
      {notification && <Notifications closeNotification={closeNotification} />}
    </>

  )
}

export default Notification