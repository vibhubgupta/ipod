import React from 'react';
import "./IpodDisplay.css";
import MainMenu from "./MainMenu";

const IpodDisplay = ({menuvisible}) => {
    
    return (
        <div className='ipodDisplay'>
            <div className="speaker">
                <img alt="" src="https://www.flaticon.com/svg/static/icons/svg/966/966328.svg"></img>
            </div>
            <div className="ipod-navbar">
                <span className="carrier">Carrier</span>
                <span className="wifi"> <img alt="" src="https://www.flaticon.com/svg/static/icons/svg/748/748151.svg"></img> </span>
                <span className="time">11:43 AM</span>
                <span className="battery"> <img alt="" src="https://www.flaticon.com/svg/static/icons/svg/569/569467.svg"></img> </span>
            </div>
            <div className='ipod-screen'>
                <MainMenu
                    menuvisible={menuvisible}
                />
            </div>
        </div>
    )
}
export default IpodDisplay;