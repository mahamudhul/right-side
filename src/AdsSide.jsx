// eslint-disable-next-line no-unused-vars
import React from 'react';
import world from '../src/assets/earth-americas-solid.svg'
import fire from '../src/assets/fire-solid.svg'
import gems from '../src/assets/gem-regular.svg'
import love from '../src/assets/heart-regular.svg'
import Slider from './Component/Slider';
import Features from './Component/Features';
import CountDown from './Component/CountDown';
import State from './Component/State';
import { Link } from 'react-router-dom';

const AdsSide = () => {
    return (
        <div>
            {/* Navber */}
            <div className='flex justify-between my-5'>
                <div><Link to='/docs'><p className='text-2xl font-bold text-blue-500'>Docs</p></Link></div>
                <div><img className='w-8' src={world} alt="" /></div>
                <div><img className='w-8' src={fire} alt="" /></div>
                <div><img className='w-8' src={gems} alt="" /></div>
                <div><img className='w-8' src={love} alt="" /></div>
            </div>

            {/* slider */}
            <Slider></Slider>


            <div className="divider"></div>
            <CountDown></CountDown>

            <State></State>
            <div className="divider"></div>


            {/* rating */}
            {/* <Rating></Rating> */}

            <Features></Features>
        </div>
    );
};

export default AdsSide;