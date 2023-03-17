import React from 'react'
import OurFleetComponent1 from './OurFleetComponent1'
import OurFleetComponent2 from './OurFleetComponent2'
import OurFleetComponent3 from './OurFleetComponent3'
import OurFleetDescription from './OurFleetDescription'
const OurFleet = () => {
    return (
        <div>
            <OurFleetComponent1 />
            <OurFleetDescription />
            <OurFleetComponent2 />
            <OurFleetComponent3 />

        </div>
    )
}

export default OurFleet