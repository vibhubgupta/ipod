import React from 'react';
import IpodDisplay from './IpodDisplay';
import IpodController from './IpodController';

class Ipod extends React.Component {
    constructor() {
        super();
        this.state = {
            menuvisible: false,
        }
    }
    changeMainMenuHandler = () => {
        this.setState(state => ({
            menuvisible: !state.menuvisible,
        }));
    }



    render () {
        console.log(this.state);
        return (
            <div className='ipod'>
                <IpodDisplay
                    menuvisible={this.menuvisible}
                />
                <IpodController
                    openMenuHandler={this.changeMainMenuHandler}
                />
            </div>
        )
    }
}
export default Ipod;
