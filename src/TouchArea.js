import React from 'react';
import { useState, useEffect } from "react";

class TouchArea extends React.Component {

    
//onClick={this.props.openMenuHandler()}
    render() {
      return (
        <div onMouseOver={ this.handleEvent } className="touch-area">
            <div className='touch-div-11' >
                {/* { this.state.message } */}
            </div>
            <div className='touch-div-12'>

            </div>
            <div className='touch-div-13'>

            </div>
            <div className='touch-div-21'>

            </div>
            <div className='touch-div-22' onClick={this.props.openMenuHandler()}>
                
            </div>
            <div className='touch-div-23'>

            </div>
            <div className='touch-div-31'>

            </div>
            <div className='touch-div-32'>

            </div>
            <div className='touch-div-33'>

            </div>
        </div>
      );
    }
  }

export default TouchArea;