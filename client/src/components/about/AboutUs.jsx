import React from 'react';
import AboutUsBackground from './AboutUsBackground';
import AboutUsComponent1 from './AboutUsComponent1';
import AboutUsComponent2 from './AboutUsComponent2'
import AboutUsComponent3 from './AboutUsComponent3'
import AboutUsComponent4 from './AboutUsComponent4'
import AboutUsComponent5 from './AboutUsComponent5'
import AboutComponent6 from './AboutUsComponent6';
import AboutComponent7 from './AboutUsComponent7';

const AboutUs = () => {
    return (


        
        <div>
            <AboutUsBackground />
            <AboutUsComponent1 />

            <div className='p-10'>
                <AboutUsComponent2 />
            </div>
            <AboutUsComponent3 />
            <div className='p-10'>
                <AboutUsComponent4 />
                <AboutUsComponent5 />
            </div>
            <AboutComponent6 />
            <div className='p-10'>
                <AboutComponent7 />
            </div>

        </div>
    )
};

export default AboutUs;