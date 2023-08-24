/* eslint-disable no-unused-vars */
import React from 'react';
// import RightSide from './RightSide';
// import { Container } from 'postcss';
// import AdsSide from './AdsSide';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import world from '../src/assets/earth-americas-solid.svg'
import fire from '../src/assets/fire-solid.svg'
import gems from '../src/assets/gem-regular.svg'
import love from '../src/assets/heart-regular.svg'

const Home = () => {
    return (
        <div>
            <section className='grid grid-cols-4 gap-5'>
                <section>
                    <h1>This right side</h1>
                </section>
                <section className='col-span-2'>
                    <h1>This Container side</h1>
                </section>
                <section>
                    {/* Navber */}
                    <div className='flex justify-between my-5'>
                        <div><img className='w-8' src={world} alt="" /></div>
                        <div><img className='w-8' src={fire} alt="" /></div>
                        <div><img className='w-8' src={gems} alt="" /></div>
                        <div><img className='w-8' src={love} alt="" /></div>
                    </div>

                    {/* slider */}
                    


                    <h1>This is ADS slider</h1>
                    <h1>helooo</h1>
                </section>
            </section>
        </div>
    );
};

export default Home;