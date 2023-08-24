// eslint-disable-next-line no-unused-vars
import React from 'react';

const CountDown = () => {
    return (
        <div className='mt-5'>
            <div>
                <p className='font-bold'>25% off on CHINESE LANGUAGE COURSE</p>
            </div>
            <span className="countdown">
                <span style={{ "--value": 45 }}></span>
            </span>

        </div>
    );
};

export default CountDown;