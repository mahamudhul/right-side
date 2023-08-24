// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Slider } from 'react-native';


const Rating = () => {
    return (
        <div>
            <div>
                <p>Provide your Feedbaack</p>
            </div>
            <div>
                <Slider
                    style={{ width: 200, height: 40 }}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#0000FF"
                    maximumTrackTintColor="#000000"
                />
            </div>
        </div>
    );
};

export default Rating;