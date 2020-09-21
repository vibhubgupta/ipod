import React from "react";
import "./MainMenu.css";


const MainMenu = (props) => {
    const {temp} = props;
    return (
        <div className='main-menu'>
            <ul>
                <li><span>All Songs</span><img src="https://www.flaticon.com/svg/static/icons/svg/271/271228.svg"></img></li>
                <li><span>Artists</span><img src="https://www.flaticon.com/svg/static/icons/svg/271/271228.svg" className="arrow2"></img></li>
                <li><span>Albums</span><img src="https://www.flaticon.com/svg/static/icons/svg/271/271228.svg" className="arrow3"></img></li>
            </ul>
        </div>
    )
}
export default MainMenu;