import React from 'react'
import { Link } from 'react-router-dom';
import { FaStar, FaArrowsAlt, FaUser } from 'react-icons/fa';
import { FaStickyNote, FaEraser, FaHelicopter } from 'react-icons/fa';

import image1 from '../assets/images/heli2-min.jpeg';
import image2 from '../assets/images/AirD-HAUF.jpg';

const OurFleetComponent3 = () => {
    return (
        <div>
            {/* <div className='flex flex-col md:flex-row'>
                <div className='flex flex-col md:w-1/2 p-4'>

                    <div className='relative my-2'>
                        
                        <img src={image1} alt='example' className='w-full h-82 object-cover rounded-md' />
                    </div>

                </div>
                <div className='flex flex-col md:w-1/2 p-4 justify-conent'>

                    <div className='relative my-2'>
                        <p className='text-center text-4xl font-bold mb-4'>AS 350 B3 OE-XHX 

                        </p>
                        <ul class="list-disc text-[15px] text-lg list-inside">
                            <li>Capacity: 1 Pilot + 5 Passenger</li>
                            <li>Cruising speed: 130 kts</li>
                            <li>Powered By: TURBOMECA Arriel 2B1 turboshaft engine (632 kW)</li>
                            <li>Max Load:  2,250 kgs</li>
                            <li>Serial Number: S/N 3544</li>
                            <li>Preferred for: Passenger Transport (Private Trips, Family Tours)</li>
                        </ul>
                        
                    </div>

                </div>
                
            </div> */}
            <div className='lg:grid lg:grid-cols-11 gap- my-10'>
            <div></div>
           
            <div className='col-span-4'>
            <div className='my-10'>
               <img
                 src={image1}
                 alt='example'
                 className='w-full h-[350px] object-cover rounded-md'
               />
             </div>
            </div>
            <div></div>
            <div className='col-span-4 mt-10'>
            <p className='text-3xl font-bold text-[#50A477] italic'>AS 350 B3 OE- XHX</p>
            <ul className='list-disc text-[15px] mt-2 text-lg list-inside italic'>
              <li>Capacity: 1 Pilot + 5 Passengers</li>
              <li>Cruising speed: 130 kts</li>
              <li>Powered By: TURBOMECA Arriel 2B1 turboshaft engine (632 kW)</li>
              <li>Max Load: 2,250 kgs</li>
              <li>Serial Number: S/N 3544</li>
              <li>
                Preferred for: Passenger Transport (Private Trips, Family Tours)
              </li>
            </ul>
            </div>
            <div></div>
        </div>
            
        </div>
    )
}

export default OurFleetComponent3