import React from 'react';
import IpodDisplay from './IpodDisplay';
import IpodController from './IpodController';

class Ipod extends React.Component {
    constructor() {
        super();
        this.state = {
            menuvisible: false,
            gamevisible: false,
            songvisible: false,
            settingvisible: false,
            firstvisible: false,
            secondvisible: false,
            thirdvisible: false,
        }
    }
    changeMainMenuHandler = (state) => {
        if(!this.state.menuvisible && this.state.songvisible){
            this.setState(state => ({
                menuvisible: !state.menuvisible,
                songvisible: !state.songvisible,
            }));
        } else if(!this.state.menuvisible && this.state.gamevisible){
            this.setState(state => ({
                menuvisible: !state.menuvisible,
                gamevisible: !state.gamevisible,
            }));
        } else if(!this.state.menuvisible && this.state.settingvisible){
            this.setState(state => ({
                menuvisible: !state.menuvisible,
                settingvisible: !state.settingvisible,
            }));
        } else{
            this.setState(state => ({
                menuvisible: !state.menuvisible,
            }));
        }
    }
    changeMusicHandler = (state) => {
        console.log("music opened");
        if(this.state.firstvisible && this.state.menuvisible && !this.state.songvisible){
            this.setState(state => ({
                menuvisible: !state.menuvisible,
                songvisible: !state.songvisible,
            }));
        }
        console.log(this.state.songvisible);
    }
    changeGameHandler = (state) => {
        console.log("game opened");
        if(this.state.secondvisible && this.state.menuvisible && !this.state.gamevisible){
            this.setState(state => ({
                menuvisible: !state.menuvisible,
                gamevisible: !state.gamevisible,
                secondvisible: !state.secondvisible,
            }));
        }
        console.log(this.state.gamevisible);
    }
    changeSettingHandler = (state) => {
        console.log("setting opened");
        if(this.state.thirdvisible && this.state.menuvisible && !this.state.settingvisible){
            this.setState(state => ({
                menuvisible: !state.menuvisible,
                settingvisible: !state.settingvisible,
            }));
        }
        console.log(this.state.settingvisible);
    }
    handleClickUp = (state) => {
        if(!this.state.firstvisible && !this.state.secondvisible && !this.state.thirdvisible){
            this.setState(state =>({
                firstvisible: !state.firstvisible,
            }))
            console.log("0");
        }else if(this.state.firstvisible){
            this.setState(state =>({
                firstvisible: !state.firstvisible,
                thirdvisible: !state.thirdvisible,
            }))
            console.log("3");
        }else if(this.state.secondvisible){
            this.setState(state => ({
                firstvisible: !state.firstvisible,
                secondvisible: !state.secondvisible,
            }));
            console.log("1");
        }
        else if(this.state.thirdvisible){
            this.setState(state => ({
                secondvisible: !state.secondvisible,
                thirdvisible: !state.thirdvisible,
            }));
            console.log("2");
        }
    }
    handleClickDown = (state) => {
        if(!this.state.firstvisible && !this.state.secondvisible && !this.state.thirdvisible){
            this.setState(state =>({
                firstvisible: !state.firstvisible,
            }))
            console.log("0");
        } else if(this.state.firstvisible){
            this.setState(state =>({
                firstvisible: !state.firstvisible,
                secondvisible: !state.secondvisible,
            }))
            console.log("2");
        } else if(this.state.secondvisible){
            this.setState(state =>({
                secondvisible: !state.secondvisible,
                thirdvisible: !state.thirdvisible,
            }))
            console.log("3");
        } else if(this.state.thirdvisible){
            this.setState(state =>({
                thirdvisible: !state.thirdvisible,
                firstvisible: !state.firstvisible,
            }))
            console.log("1");
        }
    }

    render () {
        console.log(this.state);
        return (
            <div className='ipod'>
                <IpodDisplay
                    menuvisible={this.state.menuvisible}
                    songvisible={this.state.songvisible}
                    gamevisible={this.state.gamevisible}
                    settingvisible={this.state.settingvisible}
                    firstvisible={this.state.firstvisible}
                    secondvisible={this.state.secondvisible}
                    thirdvisible={this.state.thirdvisible}
                />
                <IpodController
                    openMenuHandler={this.changeMainMenuHandler}
                    openGameHandler={this.changeGameHandler}
                    openSongHandler={this.changeMusicHandler}
                    openSettingHandler={this.changeSettingHandler}
                    shiftClickUp={this.handleClickUp}
                    shiftClickDown={this.handleClickDown}
                />
            </div>
        )
    }
}
export default Ipod;
