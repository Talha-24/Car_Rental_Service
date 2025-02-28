import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Back, CarsContainer, Category, Circleone, Circlethree, Circletwo, Common, H1, Heading, Label, Main, NotificationContainer, } from './Notification'
import { useNavigate } from 'react-router-dom';

const FavouriteCars = ({ closeNotification }) => {


    const [seenMessages, setseenMessages] = useState([]);
    const [unseenMessages, setunseenMessages] = useState('');
    const [Messages, setMessages] = useState(null);



    async function ReadNotification() {
        let Token = localStorage.getItem('Token');
        const baseURL = `http://localhost:5000/api`;
        const apiLink = `${baseURL}//notification/approval/notifications?page=1&pageSize=10&isRead=true`;

        try {
            const Notifications = await axios.get(apiLink, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                }
            })


            setseenMessages([...Notifications.data.data.data]);

        } catch (error) {
            console.log("Error", error);
        }
    }


    async function unReadMessages() {
        let Token = localStorage.getItem('Token');
        const baseURL = `http://localhost:5000/api`;
        const apiLink = `${baseURL}//notification/approval/notifications?page=1&pageSize=10&isRead=false`;
        try {
            const Notifications = await axios.get(apiLink, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                }
            })

            setunseenMessages([...Notifications.data.data.data]);





        } catch (error) {
            console.log("Error", error);
        }


    }



    useEffect(() => {
        ReadNotification();
        unReadMessages();
    }, []);

    console.log("Seen Messages", seenMessages);
    console.log("Unseen Messages", unseenMessages);








    const moveTo = useNavigate();





    async function readNotification(param) {
        console.log("Param", param);
        const Token=localStorage.getItem("Token");
        try {
            let Notification = await axios.post(`http://localhost:5000/api/notification/approval/singleRead`, {
                notificationId: param,
            }, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                }
            })

            console.log("Notification Succeeded", Notification);

        } catch (error) {
            console.log("Error", error);
        }

    }




    return (
        <Main>
            <CarsContainer>
                <Category>
                    <Common className="common">
                        <Label htmlFor="cars" className='flex items-center gap-[1vmin] text-[7px]'>Cars
                        </Label>
                        <Circleone></Circleone>
                    </Common>

                    <Common className="common">
                        <Label htmlFor="cars" className='flex items-center gap-[1vmin] text-[7px]'>Bookings


                        </Label>
                        <Circletwo></Circletwo>
                    </Common>

                    <Common className="common">
                        <Label htmlFor="cars" className='flex items-center gap-[1vmin] text-[7px]'>Showrooms

                        </Label>
                        <Circlethree></Circlethree>
                    </Common>
                </Category>

                <NotificationContainer id="read" >
                    <Heading>Unread</Heading>
                    <div className='w-[100%] [100%] flex flex-row flex-wrap'>
                        <div id="messagescontainer" className='w-[100%] p-[0px] flex  flex-row flex-wrap justify-between'>

                            {unseenMessages ? unseenMessages.map(function (message) {
                                console.log(message.type);

                                return (
                                    <div className='flex flex-col justify-start gap-[20px] h-[117px] w-[350px] my-[8px] border-[1px] border-[#a7a7a8] p-[12px] rounded'>
                                        <div className='w-[100%] flex flex-row justify-between'>
                                            <p className='text-[16px]'>{message.message}</p>
                                            {message.type && message.type == 'showroom' ? <div className='bg-[#008000] h-[10px] w-[10px] rounded-full' id='showroom'></div> : (message.type && message.type == 'booking' ? <div id='booking' className='bg-[#808080] h-[10px] w-[10px] rounded-full ml-[4px]'></div>
                                                : '')}<div id='notification' className='bg-[#FF4500] h-[10px] w-[10px] rounded-full ml-[4px]'></div>
                                        </div>
                                        <button onClick={() => {
                                            readNotification(message._id);
                                            { message.type == 'showroom' ? moveTo("addshowroom", { state: { data: message.showroom } }) : (message.type == 'booking' ? moveTo('cardetails', { state: { data: message.booking } }) : (message.type == 'cars' ? moveTo('cars', { state: { data: message.cars } }) : '')) }

                                        }} className="bg-[#FC4500] py-[5px] px-[12px] h-[40px] w-[auto] text-[12px] self-start">Visit</button>
                                    </div>
                                )

                            }) : ''}





                        </div>

                    </div>

                </NotificationContainer>
                <NotificationContainer id="unread">
                    <Heading>Read</Heading>
                    <div className='w-[100%] h-[100%] flex flex-row flex-wrap'>
                        <div id="messagescontainer" className='w-[100%] p-[0px] flex  flex-row flex-wrap justify-between'>

                            {seenMessages ? seenMessages.map(function (message) {
                                console.log(message.type);

                                return (
                                    <div className='flex flex-col justify-start  gap-[4vmin] h-[117px] w-[350px] my-[8px] border-[1px] border-[#a7a7a8] p-[12px] rounded'>
                                        <div className='w-[100%] flex flex-row justify-between'>
                                            <p className='text-[16px]'>{message.message}</p>

                                            {message.type && message.type == 'booking' ? <div id='booking' className='bg-[#808080] h-[10px] w-[10px] rounded-full ml-[4px]'></div> : (message.type && message.type == 'showroom' ? <div className='bg-[#008000] h-[10px] w-[10px] rounded-full' id='showroom'></div> : (message.type && message.type == 'car' ? <div id='notification' className='bg-[#808080] h-[10px] w-[10px] rounded-full ml-[4px]'></div> : ''))}


                                        </div>
                                        <button onClick={() => {

                                            { location.pathname == '/showroomowner/notification' && message.type == 'booking' ? moveTo("cardetails", { state: { data: message.booking } }) : (location.pathname == '/showroomowner/notification' && message.type == 'showroom' ? moveTo('addshowroom', { state: { data: message.showroom } }) : (location.pathname == '/showroomowner/notification' && message.type == 'cars' ? moveTo("Cars", { state: { data: message.car } }) : '')) }

                                        }} className="bg-[#FC4500] py-[5px] px-[12px] h-[40px] w-[auto] text-[12px] self-start">Visit</button>
                                    </div>
                                )

                            }) : ''}





                        </div>

                    </div>



                </NotificationContainer>




            </CarsContainer>
        </Main>
    )
}

export default FavouriteCars