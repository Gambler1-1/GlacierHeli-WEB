import React from 'react'
import TourComponent1 from './TourComponent1'
import TourComponent2 from './TourComponent2'
import TourComponent3 from './TourComponent3'

const Tour = () => {
    return (
        <div>
            <TourComponent1 />
            <div className='p-10'>
                <TourComponent2 />
                <div className='pt-10'>
                    <TourComponent3 />
                </div>
            </div>

        </div>

    )
}

export default Tour