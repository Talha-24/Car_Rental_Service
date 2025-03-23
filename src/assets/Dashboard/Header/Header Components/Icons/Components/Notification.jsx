import { Link,  } from "react-router-dom";
const Notification = () => {




  return (
    <>

      <Link to='notification' className="w-[40px] h-[40px] flex items-center justify-center bg-[#F0F0F0] rounded-full cursor-pointer" id='notificationicon' onClick={() => {}}>
        <img className="h-[20px] w-[20px]" src= {localStorage.getItem("Notification") == 1 ? "https://www.svgrepo.com/show/304531/notification-alert.svg" : "https://static.thenounproject.com/png/607762-200.png" } alt="" />

      </Link>
    </>

  )
}

export default Notification