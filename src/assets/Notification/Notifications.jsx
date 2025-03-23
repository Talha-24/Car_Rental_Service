import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Back, CarsContainer, Category, Circleone, Circlethree, Circletwo, Common, H1, Heading, Label, Main, NotificationContainer, } from './Notification'
import { useNavigate } from 'react-router-dom';
import httpRequestHandler from '../Utils/http';
import swal from 'sweetalert';
import serverRequestHandler from '../Utils/http';
import Toast from '../Toaster/Toaster';
import Pagenation from '../Pagenation/Pagenation';
import { EndPoint, obj } from '../Utils/RoutesPaths';

const Notifications = ({  }) => {

    const [seenMessages, setseenMessages] = useState([]);
    const [unseenMessages, setunseenMessages] = useState('');
    const [Messages, setMessages] = useState(null);
    const [totalCountread, settotalCountread] = useState(null);
    const [totalCountunread, settotalCountunread] = useState(null);
    const [NoOfItems, setNoOfItems] = useState('');
    const [readNotificationCount, setreadNotificationCount] = useState(10);
    const [unreadNotificationCount, setunreadNotificationCount] = useState(10);
    const [unreadPages, setunreadPages] = useState(Math.ceil(totalCountunread / unreadNotificationCount));

    //Pagenation Variables

    const [pageno, setpageno] = useState(1);
    async function ReadNotification() {

        try {
            const Notifications = await serverRequestHandler(EndPoint.showroomcars(pageno, readNotificationCount).readNotification, `get`,)
            setseenMessages([...Notifications.data]);
            settotalCountread(Notifications.totalCount);
        } catch (error) {
            Toast.error(error.message ?? error);
        }
    }



    async function unReadMessages() {

        try {
            const Notifications = await serverRequestHandler(EndPoint.showroomcars(pageno, readNotificationCount).unreadNotification, `get`);
            setunseenMessages([...Notifications.data]);
            settotalCountunread(Notifications.totalCount);
            Toast.info("Notifications Retrieved Successfully!");

        } catch (error) {
            Toast.success(error.message ?? error);
        }
    }

    useEffect(() => {
        ReadNotification();
        unReadMessages();
        showDot();
    }, [unreadNotificationCount, readNotificationCount, unreadPages]);
    const moveTo = useNavigate();

    async function readNotification(param) {
        try {
            let Notification = await httpRequestHandler(EndPoint.readone, `post`, {
                notificationId: param,
            });
            Toast.info("Notification Read Successfully!",500);
        } catch (error) {
            Toast.error(error.message ?? error);
        }

    }



    const showDot=()=>{
        if(totalCountread >0){
            localStorage.setItem("Notification",1);
            return;
        }

        else if(totalCountread == 0){
            localStorage.setItem("Notification",0);
            return;
        }
    }
   


    const readAll = async () => {

        try {
            const approval = await serverRequestHandler(EndPoint.readAll, `post`, {});
            Toast.info("All Notification Read Successfully!",1000);

        } catch (error) {
            Toast.error(error.message??error);
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
                                console.log("UNSEEN MESSAGE",key,message);
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
                                            { message.type == 'showroom' ? moveTo("addshowroom", { state: { id: message.showroom._id } }) : (message.type == 'booking' ? moveTo('cardetails', { state: { id: message.booking._id } }) : (message.type == 'car' ? moveTo('/showroomowner/bookedcars', { state: { id: message.Car?._id } }) : '')) }
                                        }} className="bg-[#FC4500] py-[5px] px-[12px] h-[30px] w-[auto] text-[12px] self-start">Visit</button>
                                    </div>)}) : ''}
                        </div>
                        {totalCountunread == '0' || totalCountread == 0 ? '' :
                            <div className='w-[100%] flex justify-end'>
                                <button onClick={() => { readAll(); }}>Read All message</button>
                            </div>}
                        <Pagenation setpageno={setpageno} />
                    </div>
                </NotificationContainer>
                <NotificationContainer id="unread">
                    <div className='flex flex-row justify-between items-center'>
                        <div>
                            <Heading>Read</Heading>
                            <p>Total : <span className='text-[#FC4500] text-[16px] font-semibold'> {totalCountread}</span></p>
                        </div>

                        <select className='border-[1px] border-[#FC4500] rounded-sm' onChange={(e) => {
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
                   console.log("Seen Message",key,message);

                   console.log("Seen Message",key,message.showroom?._id);
                                return (
                                    <div key={key} id='notificationbox' className='flex flex-col justify-between   min-h-[117px] w-[360px] my-[8px] border-[1px] border-[#a7a7a8] p-[12px] rounded'>
                                        <div className='w-[100%] flex flex-row justify-around'>
                                            <p className='text-[16px]'>{message.message}</p>
                                            {message.type && message.type == 'booking' ? <span id='booking' className='bg-[#808080] h-[10px] w-[10px] rounded-full ml-[4px]'></span> : (message.type && message.type == 'showroom' ? <span className='bg-[#008000] h-[10px] w-[10px] rounded-full' id='showroom'></span> : (message.type && message.type == 'car' ? <span id='notification' className='bg-[#808080] h-[10px] w-[10px] rounded-full ml-[4px]'></span> : ''))}
                                        </div>
                                        <button onClick={() => {
                                            { location.pathname == obj.usernotification && message.type == 'booking' ? moveTo("cardetails", { state: { id: message.booking?._id } }) : (location.pathname == obj.usernotification && message.type == 'showroom' ? moveTo('addshowroom', { state: { data: message.showroom?._id } }) : (location.pathname == obj.usernotification && message.type == 'car' ? moveTo("/showroomowner/showroomcars/cardetails", { state: { id: message.car?._id } }) : '')) }
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