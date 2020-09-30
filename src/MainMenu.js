import React, {useState, useEffect} from "react";
import "./MainMenu.css";


const MainMenu = (props) => {
    const [state,setState] = useState(false);
    
    useEffect(() => {
        setState(props.menuvisible);
        console.log(props.menuvisible);
    },[props.menuvisible, state])

    return (
        <div style={{display: props.menuvisible ? "block" : "none"}} className='main-menu'>
            <h3>iPod.js</h3>
            <ul>
                <li style={{backgroundColor: props.firstvisible ? "lightblue" : "white"}}><span>Music</span><img alt="" src="https://www.flaticon.com/svg/static/icons/svg/271/271228.svg" className="arrow1"></img></li>
                <li style={{backgroundColor: props.secondvisible ? "lightblue" : "white"}}><span>Games</span><img alt="" src="https://www.flaticon.com/svg/static/icons/svg/271/271228.svg" className="arrow2"></img></li>
                <li style={{backgroundColor: props.thirdvisible ? "lightblue" : "white"}}><span>Settings</span><img alt="" src="https://www.flaticon.com/svg/static/icons/svg/271/271228.svg" className="arrow3"></img></li>
            </ul>
            
        </div>
    )
}
export default MainMenu;