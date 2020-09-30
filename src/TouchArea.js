import React from 'react';
import "./TouchArea.css"

class TouchArea extends React.Component {

    render() {
      return (
        <div onMouseOver={ this.handleEvent } className="touch-area">
            <div className='touch-div-11' onClick={this.props.shiftClickUp} >
                
            </div>
            <div className='touch-div-12' onClick={this.props.openMenuHandler}>
              <span>MENU</span>
            </div>
            <div className='touch-div-13' onClick={this.props.shiftClickDown}>

            </div>
            <div className='touch-div-21' onClick={this.props.shiftClickUp}>
              <img alt="" src="https://www.flaticon.com/svg/static/icons/svg/854/854183.svg"></img>
            </div>
            <div
                className='touch-div-22'
                onClick={() => {
                  this.props.openSongHandler()
                }} 
                onClick={() => {
                  this.props.openGameHandler()
                }}
                onClick={() => {
                  this.props.openSettingHandler()
                }}>
                <img alt="" src="https://www.flaticon.com/svg/static/icons/svg/545/545666.svg"></img>
            </div>
            <div className='touch-div-23' onClick={this.props.shiftClickDown}>
              <img alt="" src="https://www.flaticon.com/svg/static/icons/svg/854/854184.svg"></img>
            </div>
            <div className='touch-div-31'>

            </div>
            <div className='touch-div-32'>
              <img alt="" src="https://www.flaticon.com/svg/static/icons/svg/1828/1828859.svg"></img>
            </div>
            <div className='touch-div-33'>

            </div>
        </div>
      );
    }
  }

export default TouchArea;