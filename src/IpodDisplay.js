import React from 'react';
import "./IpodDisplay.css";
import MainMenu from "./MainMenu";

const IpodDisplay = (props) => {
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
                    menuvisible={props.menuvisible}
                    firstvisible={props.firstvisible}
                    secondvisible={props.secondvisible}
                    thirdvisible={props.thirdvisible}
                />
                <div style={{display: props.songvisible ? "block" : "none"} } className="songs-screen">
                    <h3>Songs</h3>
                </div>
                <div style={{display: props.gamevisible ? "block" : "none"} } className="games-screen">
                    <h3>Games</h3>
                </div>
                <div style={{display: props.settingvisible ? "block" : "none"} } className="setting-screen">
                    <h3>Settings</h3>
                </div>
            </div>
        </div>
    )
}
export default IpodDisplay;