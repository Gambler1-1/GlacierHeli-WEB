import React from 'react';
import aboutus from '../assets/images/aboutus.jpg';

const AboutUsBackground = () => {
    return (
        
        <div className="bg-image bg-cover bg-center h-[600px] uppercase" style={{ backgroundImage: `url(${aboutus})` }}>
            <div className="container mx-auto py-12">
            </div>
        </div>
        
    );
};

export default AboutUsBackground;