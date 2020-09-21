import React from 'react';
import "./IpodDisplay.css";
import MainMenu from "./MainMenu";

const IpodDisplay = (props) => {
    const {temp} = props;
    return (
        <div className='ipodDisplay'>
            {/* <div className="ipod-navbar"> </div> */}
            <div className='ipod-screen'>
                <MainMenu

                />
            </div>
        </div>
    )
}
export default IpodDisplay;