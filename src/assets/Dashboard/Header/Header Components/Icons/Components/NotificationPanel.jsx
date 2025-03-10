import React from 'react'



const NotificationPanel = (propse) => {
    let notificationPicture = localStorage.getItem("ProfilePicture");
    return (
        <div className='absolute top-[10%] left-[70%] height-[300px] w-[150px] flex flex-col items-start p-[2px]'>
            <h6 className="text-center w-[100%]">Notifications</h6>
            <div className='flex flex-row items-center w-[100%] relative gap-[1vmin]'>
                <span id="image" className='w-[7.5vmin] h-[7.5vmin]'>
                    <img className="h-[100%] w-[100%] rounded-full object-cover" src={notificationPicture ? 'http://localhost:5000/' + notificationPicture : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'} alt="" />
                </span>
                <span id="name" className='w-[70%]'>
                    <p>Name</p>
                    <p className='text-[2vmin]'>Message here</p>

                </span>
                <p onClick={()=>{
                    propse.closeNotification();
                }} className="absolute right-[3%] bottom-[110%] text-black font-semibold cursor-pointer">x</p>
            </div>
        </div>
    )
}

export default NotificationPanel