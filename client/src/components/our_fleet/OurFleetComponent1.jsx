import React from 'react'
import ourfleet from '../assets/images/mainfleetimage-min.jpeg'

const OurFleetComponent1 = () => {
    return (
        <div>
         <div className="relative h-screen bg-cover bg-center bg-no-repeat bg-top sm:bg-center md:bg-top lg:bg-top xl:bg-top" style={{ backgroundImage: `url(${ourfleet})` }}>
        </div>
        <div class="absolute inset-x-1/4 inset-y-[15%] text-white font-bold text-center">
        <h1 className="lg:text-5xl italic text-[#062C52] uppercase text-5xl">
        Our fleet
        </h1>
      </div>
        </div>
       
        

    )
}

export default OurFleetComponent1