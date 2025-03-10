import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import NavButton from '../../Header/SideBar2/Components/SideBarBtns/NavButton';
import { FaCarTunnel } from 'react-icons/fa6';
const SuperAdminBtn = () => {


    const BtnData = [{

        label: 'Showroom',
        to: 'showrooms',
        icon: <FaCarTunnel />,
    }, {
        label: "Cars",
        to: 'cars',
        icon: <FaCarTunnel />,
    }

    ]


    return (
        <>
        {BtnData.map(function(btn,key){
            return(
                <NavButton key={key} to={btn.to} label={btn.label} icon={btn.icon} />
            )
        })}

        </>

    )
}

export default SuperAdminBtn