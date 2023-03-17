import React from 'react'
import { FaStickyNote, FaEraser, FaHelicopter } from 'react-icons/fa';

const OurFleetDescription = () => {
    return (
        <div className='lg:grid lg:grid-cols-6 my-10'>
            <div></div>
            <div className="flex justify-between col-span-4">
                <div className="flex flex-col items-center">
                    <FaStickyNote className="text-[#50A477] text-[45px] lg:text-[60px] mb-2" />
                    <span className='lg:text-2xl text-1xl'>WELL MAINTAINED</span>
                    <span className='text-center lg:text-[10px] text-[10px]'>Avoid the crowds, and travel in a highly sanitized environment.</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaEraser className="text-[#50A477] text-[45px] lg:text-[60px] mb-2" />
                    <span className='lg:text-2xl text-1xl'>Clean & Sanitized
                    </span>
                    <span className='text-center lg:text-[10px] text-[10px]'>Skip airport queues, save time and enjoy more comfortable seats.</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaHelicopter className="text-[#50A477] text-[45px] lg:text-[60px] mb-2" />
                    <span className='lg:text-2xl text-1xl'>Experienced Crew</span>
                    <span className='text-center lg:text-[10px] text-[10px]'>Define your itineraries, and fly in absolute luxury and privacy.</span>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default OurFleetDescription