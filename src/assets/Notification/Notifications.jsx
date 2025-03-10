import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Back, CarsContainer, Category, Circleone, Circlethree, Circletwo, Common, H1, Heading, Label, Main, NotificationContainer, } from './Notification'
import { useNavigate } from 'react-router-dom';
import httpRequestHandler from '../Utils/http';
import swal from 'sweetalert';
import serverRequestHandler from '../Utils/http';
import Toast from '../Toaster/Toaster';
const Notifications = ({ closeNotification }) => {

    const [seenMessages, setseenMessages] = useState([]);
    const [unseenMessages, setunseenMessages] = useState('');
    const [Messages, setMessages] = useState(null);
    const [totalCountread, settotalCountread] = useState(null);
    const [totalCountunread, settotalCountunread] = useState(null);
    const [NoOfItems, setNoOfItems] = useState('');
    const [readNotificationCount, setreadNotificationCount] = useState(10);
    const [unreadNotificationCount, setunreadNotificationCount] = useState(10);
    const [unreadPages, setunreadPages] = useState(Math.ceil(totalCountunread / unreadNotificationCount));
    async function ReadNotification() {
        const endPoint = `/notification/approval/notifications?page=1&pageSize=${readNotificationCount}&isRead=true`;
        const method = 'get';
        try {
            const Notifications = await serverRequestHandler(endPoint, method,)
            setseenMessages([...Notifications.data]);
            settotalCountread(Notifications.totalCount);
        } catch (error) {
            Toast(error.message);
        }
    }


    async function unReadMessages() {
        const endPoint = `/notification/approval/notifications?page=1&pageSize=${unreadNotificationCount}&isRead=false`;
        const method = `get`;
        try {
            const Notifications = await serverRequestHandler(endPoint, method);
            setunseenMessages([...Notifications.data]);
            settotalCountunread(Notifications.totalCount);
        } catch (error) {
            Toast(error.message);
        }
    }

    useEffect(() => {
        ReadNotification();
        unReadMessages();
    }, [unreadNotificationCount, readNotificationCount, unreadPages]);
    const moveTo = useNavigate();
    async function readNotification(param) {
        let endPoint = `/notification/approval/singleRead`;
        let body = { notificationId: param };
        let reqType = `post`;
        try {
            let Notification = await httpRequestHandler(endPoint, reqType, body);
        } catch (error) {
            Toast(error.message);
        }

    }




    return (
        <Main id='notificationparent'>
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
                    <div className='flex flex-row justify-between items-center'>
                        <div>
                            <Heading>Unread</Heading>
                            <p>Total : <span className='text-[#FC4500] text-[16px] font-semibold'> {totalCountunread}</span></p>
                        </div>

                        <select className='border-[1px] border-[#FC4500] rounded-sm' onChange={(e) => {
                            setunreadNotificationCount(e.target.value);
                        }} name="" id="">
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="50">50</option>
                            <option value="60">60</option>
                            <option value="70">70</option>
                            <option value="80">80</option>
                            <option value="90">90</option>
                            <option value="100">100</option>
                        </select>
                    </div>
                    <div className='w-[100%] [100%] flex flex-row flex-wrap'>
                        <div id="messagescontainer" className='w-[100%] p-[0px] flex  flex-row flex-wrap justify-between'>

                            {unseenMessages ? unseenMessages.map(function (message, key) {
                                return (

                                    <div key={key} id='notificationbox' className='flex flex-col justify-start gap-[20px] min-h-[117px] w-[370px] my-[8px] border-[1px] border-[#a7a7a8] p-[12px] rounded'>
                                        <div className='w-[100%] flex flex-row items-start'>
                                            <p className='text-[16px]'>{message.message}</p>

                                            {message.type && message.type == 'showroom' ? <span className='bg-[#008000] h-[10px] w-[10px] rounded-full' id='showroom'></span> : (message.type && message.type == 'booking' ? <span id='booking' className='bg-[#808080] h-[10px] w-[10px] rounded-full ml-[4px]'></span>
                                                : '')}
                                                
                                                <span id='notification' className='bg-[#FF4500] h-[10px] w-[10px] rounded-full ml-[4px]'></span>
                                        
                                        </div>
                                        <button onClick={() => {
                                            readNotification(message._id);
                                            { message.type == 'showroom' ? moveTo("addshowroom", { state: { _id: message.showroom._id } }) : (message.type == 'booking' ? moveTo('cardetails', { state: { id: message.booking._id } }) : (message.type == 'car' ? moveTo('cars', { state: { id: message.Car._id } }) : '')) }
                                        }} className="bg-[#FC4500] py-[5px] px-[12px] h-[30px] w-[auto] text-[12px] self-start">Visit</button>
                                    </div>
                                )

                            }) : ''}





                        </div>

                    </div>

                </NotificationContainer>
                <NotificationContainer id="unread">
                <div className='flex flex-row justify-between items-center'>
                        <div>
                    <Heading>Read</Heading>
                    <p>Total : <span className='text-[#FC4500] text-[16px] font-semibold'> {totalCountread}</span></p>
                    </div>

                    <select className='border-[1px] border-[#FC4500] rounded-sm' onChange={(e)=>{
                        setreadNotificationCount(e.target.value);
                    }} name="" id="">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                    <option value="60">60</option>
                    <option value="70">70</option>
                    <option value="80">80</option>
                    <option value="90">90</option>
                    <option value="100">100</option>
                    </select>
                    </div>
                    <div className='w-[100%] h-[100%] flex flex-row flex-wrap'>
                        <div id="messagescontainer" className='w-[100%] p-[0px] flex  flex-row flex-wrap justify-between'>

                            {seenMessages ? seenMessages.map(function (message, key) {


                                return (
                                    <div key={key} id='notificationbox' className='flex flex-col justify-between   min-h-[117px] w-[360px] my-[8px] border-[1px] border-[#a7a7a8] p-[12px] rounded'>
                                        <div className='w-[100%] flex flex-row justify-around'>
                                            <p className='text-[16px]'>{message.message}</p>
                                            {message.type && message.type == 'booking' ? <span id='booking' className='bg-[#808080] h-[10px] w-[10px] rounded-full ml-[4px]'></span> : (message.type && message.type == 'showroom' ? <span className='bg-[#008000] h-[10px] w-[10px] rounded-full' id='showroom'></span> : (message.type && message.type == 'car' ? <span id='notification' className='bg-[#808080] h-[10px] w-[10px] rounded-full ml-[4px]'></span> : ''))}
                                        </div>
                                        <button onClick={() => {

                                            { location.pathname == '/showroomowner/notification' && message.type == 'booking' ? moveTo("cardetails", { state: { data: message.booking } }) : (location.pathname == '/showroomowner/notification' && message.type == 'showroom' ? moveTo('addshowroom', { state: { data: message.showroom } }) : (location.pathname == '/showroomowner/notification' && message.type == 'cars' ? moveTo("Cars", { state: { data: message.car } }) : '')) }

                                        }} className="bg-[#FC4500] py-[5px] px-[12px] h-[30px] w-[auto] text-[12px] self-start">Visit</button>
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

export default Notifications