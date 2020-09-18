import React from 'react';
import IpodDisplay from './IpodDisplay';
import IpodController from './IpodController';

const Ipod = (props) => {
    const {temp} = props;
    return (
        <div className='ipod'>
            <IpodDisplay

            />
            <IpodController
                
            />
        </div>
    )
}
export default Ipod;
