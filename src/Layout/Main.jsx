// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet } from 'react-router-dom';

import RightSide from '../RightSide';
import AdsSide from '../AdsSide';

const Main = () => {
    return (
        <div>
            <section className='grid grid-cols-4 gap-5'>
                <section>
                    <h1>This right side</h1>
                    <RightSide></RightSide>
                </section>
                <section className='col-span-2'>
                    <Outlet></Outlet>
                </section>
                <section>
                    <AdsSide></AdsSide>
                </section>
            </section>
        </div>
    );
};

export default Main;