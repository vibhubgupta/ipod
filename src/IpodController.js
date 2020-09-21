import React from 'react';
import "./IpodController.css";
import TouchArea from './TouchArea.js';

const IpodController = (props) => {
    return (
        <div className='ipodController'>
            <div className='parent-touch-area'>
                <TouchArea
                    openMenuHandler={props.openMenuHandler}
                />
            </div>
        </div>
    )
}
export default IpodController;