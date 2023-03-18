import React from 'react';
import { Link } from 'react-router-dom';

import image3 from '../assets/images/heli1.jpeg';

const OurFleetComponent2 = () => {
  return (
    <div>
      <div className='my-8 page-heading sm:text-4xl text-2xl text-[#50A477] italic font-bold uppercase text-center'>
        Be flying high with us

      </div>
      <div className='grid sm:grid-cols-10 gap-4 px-8'>
        <div></div>
        <div className='col-span-4 mt-10'>
          <p className='text-3xl text-[#50A477] font-bold italic'>AS 350 B3 OE- XHG</p>
          <ul className='list-disc text-[15px] mt-2 text-lg list-inside italic'>
            <li>Capacity: 1 Pilot + 4 Passengers</li>
            <li>Cruising speed: 140 kts</li>
            <li>Powered By: TURBOMECA Arriel 2 engine (632 kW)</li>
            <li>Max Load: 2,800 kgs</li>
            <li>Serial Number: S/N 4512</li>
            <li>
              Preferred for: Passenger Transport (Private Trips, Family
              Tours)
            </li>
          </ul>
        </div>
        <div className='col-span-4'>
          <div className='my-10'>
            <img
              src={image3}
              alt='example'
              className='w-full h-[350px] object-cover rounded-md'
            />
          </div>
        </div>
        <div></div>
      </div>

    </div>
  );
};

export default OurFleetComponent2;