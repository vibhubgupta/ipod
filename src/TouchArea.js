import React from 'react';
import { useState, useEffect } from "react";

class TouchArea extends React.Component {
    constructor() {
      super();
      this.state = {
        message: "mouse event"
      }
    }
    
    const useMousePosition = () => {
        const [mousePosition, setMousePosition] = useState({ x: null, y: null });
      
        const updateMousePosition = ev => {
          setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
      
        useEffect(() => {
          window.addEventListener("mousemove", updateMousePosition);
      
          return () => window.removeEventListener("mousemove", updateMousePosition);
        }, []);
      
        return mousePosition;
    };

    render() {
      return (
        <div onMouseOver={ this.handleEvent } className="touch-area">
            <div className='touch-div-11' >
                { this.state.message }
            </div>
            <div className='touch-div-12'>

            </div>
            <div className='touch-div-13'>

            </div>
            <div className='touch-div-21'>

            </div>
            <div className='touch-div-22'>
                
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