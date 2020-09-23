import React from 'react';
import "./TouchArea.css"

class TouchArea extends React.Component {

    render() {
      return (
        <div onMouseOver={ this.handleEvent } className="touch-area">
            <div className='touch-div-11' >
                {/* { this.state.message } */}
            </div>
            <div className='touch-div-12' onClick={this.props.openMenuHandler}>
              <span>MENU</span>
            </div>
            <div className='touch-div-13'>

            </div>
            <div className='touch-div-21'>
              <img alt="" src="https://www.flaticon.com/svg/static/icons/svg/854/854183.svg"></img>
            </div>
            <div className='touch-div-22'>
                <img alt="" src="https://www.flaticon.com/svg/static/icons/svg/545/545666.svg"></img>
            </div>
            <div className='touch-div-23'>
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