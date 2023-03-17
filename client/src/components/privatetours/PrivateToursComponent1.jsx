import React from 'react'
import PrivateTours from '../assets/images/5.jpg'

const PrivateToursComponent1 = () => {
    return (
        <div className="h-screen bg-cover bg-center opacity-1 bg-no-repeat bg-top sm:bg-center md:bg-top lg:bg-top xl:bg-top" style={{ backgroundImage: `url(${PrivateTours})` }}>
            <h1 className="absolute inset-x-1/4 lg:inset-y-2/4 inset-y-1/4 text-white lg:text-5xl font-bold text-center">
                <span className='text-3xl mb-2'>Book Your Private Tour</span><br />
                <span className='lg:text-[20px]'>
                    If you are looking for a Private Helicopter tour,
                    you are at the right place. Let’s plan a Private tour for you.<br/>
                <button class="text-black drop-shadow-md md:inline-flex items-center bg-white border-0 py-3 px-4 focus:outline-none hover:bg-[#3870c7] text-sm mt-4 md:mt-0 uppercase rounded-lg mb-2">
                    Get in touch
                </button>
            </span>
        </h1>

        </div >
    )
}

export default PrivateToursComponent1