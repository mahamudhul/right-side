// eslint-disable-next-line no-unused-vars
import React from 'react';
import 'react-awesome-slider/dist/styles.css';

import books1 from '../assets/books1.webp'
import books2 from '../assets/book2.jpg'
import books3 from '../assets/books3.jpg'
import books4 from '../assets/books4.jpg'
import books5 from '../assets/books5.jpg'
import books6 from '../assets/books6.jpeg'


const Slider = () => {
    return (
        <div className=' text-center mb-10'>
            <div className="h-96 carousel carousel-vertical rounded-box">
                <div className="carousel-item h-full ">
                    <img src={books1} className="" />
                </div>
                <div className="carousel-item h-full ">
                    <img src={books2} className="" />
                </div>
                <div className="carousel-item h-full ">
                    <img src={books3} className="" />
                </div>
                <div className="carousel-item h-full ">
                    <img src={books4} className="" />
                </div>
                <div className="carousel-item h-full ">
                    <img src={books5} className="" />
                </div>
                <div className="carousel-item h-full">
                    <img src={books6} className="" />
                </div>
            </div>

            <div>
                <p className='font-bold text-2xl text-center'>Some Books For You</p>
            </div>
        </div>
    );
};

export default Slider;