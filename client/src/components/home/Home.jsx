import React from 'react'
import HomeComponent1 from './HomeComponent1'
import HomeComponent2 from './HomeComponent2'
import HomeComponent3 from './HomeComponent3'
import HomeComponent4 from './HomeComponent4'
import HomeComponent5 from './HomeComponent5'
import HomeComponent6 from './HomeComponent6'
import Carousel from '../utils/Carousal'

const home = () => {

    return (
        <div className="">
            <HomeComponent1 />

            <div className='px-10 pb-10 '>
                <HomeComponent2 />

            </div>
            <HomeComponent3 />

            <div className='p-10'>
                <HomeComponent4 />
            </div>

            <Carousel />
            <HomeComponent5 />

            <div className='px-10 pb-10'>
                <HomeComponent6 />
            </div>
        </div>
    )
}

export default home