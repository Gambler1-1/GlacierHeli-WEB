import React from 'react'
import Form2 from '../utils/Form2'
import PrivateToursDescription from './PrivateToursDescription'
import PrivateToursComponent1 from './PrivateToursComponent1'
import PrivateToursComponent3 from './PrivateToursComponent3'
const OurFleet = () => {
    return (
        <div>
            <PrivateToursComponent1 />
            <div className='p-10'>
                <PrivateToursDescription />
                <PrivateToursComponent3 />

            </div>
            <div className='lg:grid lg:grid-cols-7'>
                <div></div>
                <div></div>
                <div className='ml-4 col-span-3'>
                    <h1 className='text-center lg:text-3xl text-[#50A477] uppercase font-bold'>Come fly with us! <br /><span className='text-black text-[15px]'> Consult Us</span></h1>

                    <div className='h-[590px] mb-10'>
                        <Form2 />
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>

        </div>
    )
}

export default OurFleet