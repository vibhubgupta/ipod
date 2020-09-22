import React, {useState, useEffect} from "react";
import "./MainMenu.css";


const MainMenu = (props) => {
    const {menuvisible} = props;
    const [state,setState] = useState(false);
    
    useEffect(() => {
        setState(menuvisible);
        console.log(menuvisible);
    },[menuvisible, state])

    return (
        <div style={{display: menuvisible ? "block" : "none"}} className='main-menu'>
            <h3>iPod.js</h3>
            <ul>
                <li><span>All Songs</span><img alt="" src="https://www.flaticon.com/svg/static/icons/svg/271/271228.svg"></img></li>
                <li><span>Artists</span><img alt="" src="https://www.flaticon.com/svg/static/icons/svg/271/271228.svg" className="arrow2"></img></li>
                <li><span>Albums</span><img alt="" src="https://www.flaticon.com/svg/static/icons/svg/271/271228.svg" className="arrow3"></img></li>
            </ul>
        </div>
    )
}
export default MainMenu;