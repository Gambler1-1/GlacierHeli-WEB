import React from 'react'
import { Link } from 'react-router-dom';
import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';
import image4 from '../assets/images/4.jpg';
import image5 from '../assets/images/5.jpg';
import image6 from '../assets/images/6.jpg';
import image7 from '../assets/images/7.jpg';

import Form from '../utils/Form1';

const PrivateToursComponent3 = () => {
    return (
        <div>
            <div>
                <div className='lg:grid lg:grid-cols-2 lg:gap-10'>
                    <p className='text-center lg:text-2xl text-2xl text-[#002c52] font-bold mb-4'>The Golden Circle Helicopter Tour with Landing at Mighty Mount Esja
                    </p>
                    <div className='grid grid-cols-4'>
                        <img src={image1} alt='example' className='w-full h-82 object-cover border-2 border-grey ' />
                        <img src={image2} alt='example' className='w-full h-82 object-cover border-2 border-grey' />
                        <img src={image4} alt='example' className='w-full h-82 object-cover border-2 border-grey' />
                        <img src={image6} alt='example' className='w-full h-82 object-cover border-2 border-grey' />
                    </div>
                </div>


                <div className='lg:grid lg:grid-cols-2 lg:gap-10 mt-2 lg:mt-10'>
                    <p className='text-center lg:text-2xl text-2xl text-[#002c52] font-bold mb-4'>Flyover whole Iceland Helicopter tour with Multiple landings
                    </p>
                    <div className='grid grid-cols-4'>
                        <img src={image5} alt='example' className='w-full h-82 object-cover border-2 border-grey ' />
                        <img src={image4} alt='example' className='w-full h-82 object-cover border-2 border-grey' />
                        <img src={image1} alt='example' className='w-full h-82 object-cover border-2 border-grey' />
                        <img src={image1} alt='example' className='w-full h-82 object-cover border-2 border-grey' />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default PrivateToursComponent3