import React from 'react'
import { Link } from 'react-router-dom';
import image1 from '../assets/images/pilot.jpg';
import image3 from '../assets/images/pilot2.jpg';

const PrivateToursComponent2 = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row'>
                <div className='flex flex-col md:w-1/2'>

                    <div className='relative my-10 p-10'>
                        <p className='lg:text-center text-1xl lg:text-1xl my-2'>You will enjoy a grand view along the way. The sights from a Private Helicopter flight are breathtaking. You’ll be thousands of feet in the air, so you’ll be able to see from miles</p>
                        <img src={image1} alt='example' className='w-full h-82 object-cover rounded-md' />


                    </div>

                </div>
                <div className='flex flex-col md:w-1/2 p-10'>
                    <img src={image3} alt='example' className='w-full h-[360px] object-cover rounded-md' />

                    <div className='relative my-2'>
                        <p className='text-center text-4xl font-bold mb-4'>Tailored Flights Anywhere In Iceland

                        </p>
                        <p className='lg:text-center text-1xl lg:text-1xl my-2'>The AS350 helicopters are one of the most popular air touring helicopters and were actually designed for sightseeing tours in Hawaii. The Airbus seats 5 passengers, 1 in the front and 4 in the back. Each passenger has a great 180°view as the back row is elevated to see above the front seats.</p>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default PrivateToursComponent2