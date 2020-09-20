import React from 'react';
import "./IpodController.css";
import TouchArea from './TouchArea.js';

const IpodController = (props) => {
    const {temp} = props;
    return (
        <div className='ipodController'>
            <div className='parent-touch-area'>
                <TouchArea
                
                />
            </div>
        </div>
    )
}
export default IpodController;