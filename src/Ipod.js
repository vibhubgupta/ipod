import React from 'react';
import IpodDisplay from './IpodDisplay';
import IpodController from './IpodController';

class Ipod extends React.Component {
    constructor() {
        super();
        this.state = {
            menudisplay: "false",
        }
    }
    changeMainMenuHandler = () => {
        
        this.setState(() => {
            this.state.menudisplay= "true"
        });  
    }



    render () {
        console.log("render", this.state);
        return (
            <div className='ipod'>
                <IpodDisplay

                />
                <IpodController
                    openMenuHandler={this.changeMainMenuHandler}
                />
            </div>
        )
    }
}
export default Ipod;
