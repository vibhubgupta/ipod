import React from 'react';
import "./IpodController.css";
import TouchArea from './TouchArea.js';
// import ZingTouch from 'zingtouch';

const IpodController = (props) => {
        
    return (
        <div className='ipodController'>
            <div className='parent-touch-area'>
                <TouchArea
                    openMenuHandler={props.openMenuHandler}
                    openSongHandler={props.openSongHandler}
                    openGameHandler={props.openGameHandler}
                    openSettingHandler={props.openSettingHandler}
                    shiftClickUp={props.shiftClickUp}
                    shiftClickDown={props.shiftClickDown}
                />
            </div>
        </div>
    )
} 
export default IpodController;