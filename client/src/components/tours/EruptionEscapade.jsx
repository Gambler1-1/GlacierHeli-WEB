import React, { useEffect, useState } from 'react';
import props from "react";
import volcanic from '../assets/images/Mountaskja.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FaPlaneDeparture, FaClock, FaMapMarkerAlt, FaPlaneArrival } from 'react-icons/fa';
import Booking from '../utils/BookingForm'


import Form from '../utils/Form2';
import reyktour1 from '../assets/images/Rtour1image1.jpeg'
import reyktour2 from '../assets/images/Rtour1image2.jpeg'
import reyktour3 from '../assets/images/Rtour1image3.jpeg'

const Tour = () => {

    const [question, setquestion] = useState(0);
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=103ed684-7b5c-437e-ba25-4fae951ded34';
        script.async = true;
        document.body.appendChild(script);

        const div = document.createElement('div');
        div.classList.add('bokunWidget');
        document.body.appendChild(div);

        return () => {
            document.body.removeChild(script);
            document.body.removeChild(div);
        };
    }, []);
    return (
        <div>
            <div>
                <div class="absolute inset-x-1/4 inset-y-[50%] text-white font-bold text-center">
                    <button class="bg-[#F7C033] opacity-100 py-2 text-2xl italic px-8 text-black ">Book Now</button>
                </div>
            </div>
            <div className="bg-image bg-cover bg-center h-[550px] sm:h-[400px] md:h-[550px] uppercase" style={{ backgroundImage: `url(${volcanic})` }}>

            </div>
            <div class=" lg:grid lg:grid-cols-5 gap-4 p-10">
                <div class=" col-span-3 md:col-span-3 text-2xl">
                    <h1 className=' lg:text-3xl sm:text-2xl text-[15px] mb-6 font-bold uppercase'>
                        A Flashing Heli Ride; Reykjavik City And Mount Esja
                    </h1>
                    <div class="flex items-center my-2">
                        <div class="flex-1 border-b border-dotted border-gray-400"></div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-4">
                            <div className='text-center text-[#50A477]'>
                                <FontAwesomeIcon icon={faClock} className='lg:h-10' />
                            </div>

                            <div class="lg:text-2xl text-[15px] text-center font-semibold">
                                <h1>40 Minutes</h1>
                            </div>
                            <div class="text-lg font-medium">
                                <span id="ampm"></span>
                            </div>
                        </div>
                        <div class="p-4">
                            <div className='text-center text-[#50A477]'>
                                <FontAwesomeIcon icon={faUser} className='lg:h-10' />
                            </div>

                            <div class="lg:text-2xl text-[15px] text-center font-semibold">
                                <h1>Age 2+</h1>
                            </div>
                            <div class="text-lg font-medium">
                                <span id="ampm"></span>
                            </div>
                        </div>

                    </div>
                    <div class="flex items-center lg:my-2">
                        <div class="flex-1 border-b border-dotted border-gray-400"></div>
                    </div>

                    <div className='text-[15px] text-justify text-lg'>
                        <p>In the land of ice and fire, enjoy the outshining views of Reykjavík city and admire the beauty of Mount Esja. The thrill is doubled when you catch the sights of charcoal gray peaks, basalt and tuff rocks, and multicolored rooftops. Not to forget the sparkling summer blues and elevated hiking trails!</p>
                        <br />
                        <img
                            src={reyktour1}
                            alt='example'
                            className='w-full h-[400px] object-cover rounded-md'
                        />
                        <br />
                        <h2 className='font-bold text-2xl'>About Mount Esja</h2>
                        <p>Mount Esja, also called Esjan (carved stone) range, is located 10 km east of Reykjavík. Although it’s flat-topped, you'll also find a big rock called Steinn. Its highest peak is at 914 meters (about 3,000 feet). The sheer size of this range makes it a landmark of Reykjavík city. <br /><br /></p>
                        <p>Although it's flat-topped, Its highest peak is at 914 meters (about 3,000 feet). Some estimates claim that it may be 3.2 million years old. Its formation and date make it popular among geologists and tourists alike. And because of its heavenly views, it's getting more popular daily.<br /><br /></p>
                        <h3 className='font-bold text-2xl'>Best Way to Get to Mt Esja</h3>
                        <p>By air is the easiest way to get to mount esja from  Reykjavík city. The good news is that we at Glacier Heli provide the most time-efficient combo tour from <span className='font-bold'>Reykjavík city to Mount Esja</span> . We’ll provide you with an unparalleled and unforgettable adventure, with you longing to visit the mountain on our helicopter tour again.  </p>
                        <br />
                        <img
                            src={reyktour2}
                            alt='example'
                            className='w-full h-[400px] object-cover rounded-md'
                        />
                        <br />
                        <h2 className='font-bold text-2xl'>Total tour Time and distance</h2>
                        <ul className="text-[15px] text-lg list-inside">
                            <li className='flex'> Meeting Point: &nbsp;  <FaPlaneDeparture className='text-[#50A477]' />&nbsp; Ace FBO Reykjavík City</li>
                            <li className='flex'> Total tour time &nbsp; <FaClock className='text-[#50A477]' />&nbsp; 25-35 minutes (may fluctuate)</li>
                            <li className='flex'>Total distance from Reykjavík &nbsp; <FaMapMarkerAlt className='text-[#50A477]' />  &nbsp;10 kilometers (6.2 miles)</li>
                            <li className='flex'> Sightseeing Destination/ Time: &nbsp;<FaPlaneArrival className='text-[#50A477]' /> &nbsp; Mount Esja/ 10 Min</li>
                            <li className='flex'> Final Destination &nbsp;<FaClock className='text-[#50A477]' /> &nbsp;Ace FBO Reykjavík City</li>
                        </ul>
                        <br />
                        <h2 className='font-bold text-2xl'>What Will You See From The Chopper?</h2>
                        <br />
                        <img
                            src={reyktour3}
                            alt='example'
                            className='w-full h-[400px] object-cover rounded-md'
                        />
                        <br />
                        <p>You will get to see an immense view of Reykjavik city itself. Find yourself passing through the vast sapphire and aquamarine ocean <span className='italic'>(Faxaflói Bay)</span> , engulfing the city shore and colorful settlements dotting the vast Arctic.

                            <br /><br /></p>
                        <p>The view from this 914-meter-high mountain is terrific! The symmetrical basalt rocks, lava fields, and magma ash will remind you of the history of this volcanic range. Moreover, you will gaze upon the small islands smattering the ocean while the crumbling mountains take your breath away. </p>
                        <p>Moreover, the lush greens, rugged terrain, unique plants and species of the range, and windy weather is <span className='font-bold'>what represents Mount Esja</span> . On some other days, you might find yourself immersed in misty clouds at the top of the mountain. However, On a clear day, you can be lucky enough to glimpse what lies beyond the town of Mosfellsbaer. Our <span className='font-bold'>Mount Esja Helicopter Tour</span> is the best way to familiarize yourself with Iceland's majestic landscape.<br /><br /></p>
                        <h2 className='font-bold text-2xl'>Summing Up</h2>
                        <p><span className='font-bold'>Mount Esja Iceland</span> is a mountain range formed by volcanic activity eons ago and is a sight to behold when gazed down from above. Also, it's the closest tourist destination from Reykjavík. From the panoramic views of the city, to the basalt rocky formations that seem unreal, you cannot help but to fall in love with mount esja.
                        </p>
                        <p>Come aboard with us while we take you for a helicopter ride above the dormant volcano, and show you its majesty with comfort.
                        </p>
                        <span className='italic'>Because, Icelandic beauty cannot look any more appealing than this!</span>

                    </div>

                    <br />
                    <h1 className='font-semi-bold text-4xl text-[#062C52]'>FAQ's</h1>

                    <div className="w-full mx-auto mt-4">
                        <ul>
                            <li className="py-2 border-gray-200 border-solid border-b">
                                <div className="flex justify-between items-center bg-[#50A477] rounded-lg">
                                    <h3 className="capitalize p-4 text-gray-800 text-sm font-bold md:text-lg text-white xl:text-[20px] w-10/12">
                                        What to Bring on the helicopter tour?              </h3>
                                    <div
                                        className="cursor-pointer"
                                        onClick={() =>
                                            question === 0 ? setquestion(null) : setquestion(0)
                                        }
                                    >
                                        {question === 0 ? (
                                            <svg
                                                className="rounded-full mr-4"
                                                style={{ background: "#002D51" }}
                                                viewBox="0 0 24 24"
                                                fill="white"
                                                height="40px"
                                                width="40px"
                                                {...props}
                                            >
                                                <path d="M8.7 14.7a1 1 0 01-1.4-1.4l4-4a1 1 0 011.4 0l4 4a1 1 0 01-1.4 1.4L12 11.42l-3.3 3.3z" />
                                            </svg>
                                        ) : (
                                            <svg
                                                className="rounded-full mr-4"
                                                style={{ background: "#002D51" }}
                                                viewBox="0 0 24 24"
                                                fill="white"
                                                height="40px"
                                                width="40px"
                                                {...props}
                                            >
                                                <path d="M15.3 9.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4l3.3 3.29 3.3-3.3z" />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                                {question === 0 && (
                                    <p className="p-2 text-gray-800 bg-white border-gray-800 border-2 text-sm xl:text-lg rounded-b-lg ">
                                        Camera or mobile phone camera, Binoculars (if desired), Most importantly, a smile!
                                    </p>
                                )}
                            </li>
                            <li className="pb-2 border-gray-200 border-solid border-b">
                                <div className="flex justify-between items-center bg-[#50A477] rounded-lg">
                                    <h3 className="p-4 capitalize text-gray-800 text-sm font-bold md:text-lg text-white xl:text-[20px]">
                                        Is Mount Esja active?
                                    </h3>
                                    <div
                                        className="cursor-pointer"
                                        onClick={() =>
                                            question === 1 ? setquestion(null) : setquestion(1)
                                        }
                                    >
                                        {question === 1 ? (
                                            <svg
                                                className="rounded-full mr-4"
                                                style={{ background: "#002D51" }}
                                                viewBox="0 0 24 24"
                                                fill="white"
                                                height="40px"
                                                width="40px"
                                                {...props}
                                            >
                                                <path d="M8.7 14.7a1 1 0 01-1.4-1.4l4-4a1 1 0 011.4 0l4 4a1 1 0 01-1.4 1.4L12 11.42l-3.3 3.3z" />
                                            </svg>
                                        ) : (
                                            <svg
                                                className="rounded-full mr-4"
                                                style={{ background: "#002D51" }}
                                                viewBox="0 0 24 24"
                                                fill="white"
                                                height="40px"
                                                width="40px"
                                                {...props}
                                            >
                                                <path d="M15.3 9.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4l3.3 3.29 3.3-3.3z" />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                                {question === 1 && (
                                    <p className="p-2 text-gray-800 bg-white border-gray-800 border-2 text-sm xl:text-[18px] rounded-b-lg font-semibold">
                                        No, the mountain is a dormant volcano. However, scientists have detected plate tectonic movement in recent years.
                                    </p>
                                )}
                            </li>
                            <li className="pb-2 border-gray-200 border-solid border-b">
                                <div className="flex justify-between items-center bg-[#50A477] rounded-lg">
                                    <h3 className="p-4 capitalize text-gray-800 text-sm font-bold md:text-lg text-white xl:text-[20px]">
                                        Can I see Steinn from above?
                                    </h3>
                                    <div
                                        className="cursor-pointer"
                                        onClick={() =>
                                            question === 2 ? setquestion(null) : setquestion(2)
                                        }
                                    >
                                        {question === 2 ? (
                                            <svg
                                                className="rounded-full mr-4"
                                                style={{ background: "#002D51" }}
                                                viewBox="0 0 24 24"
                                                fill="white"
                                                height="40px"
                                                width="40px"
                                                {...props}
                                            >
                                                <path d="M8.7 14.7a1 1 0 01-1.4-1.4l4-4a1 1 0 011.4 0l4 4a1 1 0 01-1.4 1.4L12 11.42l-3.3 3.3z" />
                                            </svg>
                                        ) : (
                                            <svg
                                                className="rounded-full mr-4"
                                                style={{ background: "#002D51" }}
                                                viewBox="0 0 24 24"
                                                fill="white"
                                                height="40px"
                                                width="40px"
                                                {...props}
                                            >
                                                <path d="M15.3 9.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4l3.3 3.29 3.3-3.3z" />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                                {question === 2 && (
                                    <p className="p-2 text-gray-800 bg-white border-gray-800 border-2 text-sm xl:text-[18px] rounded-b-lg font-semibold">
                                        On a clear day, you might get lucky to catch a glimpse of the famous hiking trail of rocks.
                                    </p>
                                )}
                            </li>
                            <li className="pb-2 border-gray-200 border-solid border-b">
                                <div className="flex justify-between items-center bg-[#50A477] rounded-lg">
                                    <h3 className="p-4 capitalize text-gray-800 text-xs font-bold md:text-lg text-white xl:text-[20px]">
                                        What is the best time of year for a helicopter tour of Mount Esja?

                                    </h3>
                                    <div
                                        className="cursor-pointer"
                                        onClick={() =>
                                            question === 3 ? setquestion(null) : setquestion(3)
                                        }
                                    >
                                        {question === 3 ? (
                                            <svg
                                                className="rounded-full mr-4"
                                                style={{ background: "#002D51" }}
                                                viewBox="0 0 24 24"
                                                fill="white"
                                                height="40px"
                                                width="40px"
                                                {...props}
                                            >
                                                <path d="M8.7 14.7a1 1 0 01-1.4-1.4l4-4a1 1 0 011.4 0l4 4a1 1 0 01-1.4 1.4L12 11.42l-3.3 3.3z" />
                                            </svg>
                                        ) : (
                                            <svg
                                                className="rounded-full mr-4"
                                                style={{ background: "#002D51" }}
                                                viewBox="0 0 24 24"
                                                fill="white"
                                                height="40px"
                                                width="40px"
                                                {...props}
                                            >
                                                <path d="M15.3 9.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4l3.3 3.29 3.3-3.3z" />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                                {question === 3 && (
                                    <p className="p-2 text-gray-800 bg-white border-gray-800 border-2 text-sm xl:text-[18px] rounded-b-lg font-semibold">
                                        The best time of year for a helicopter tour of Mount Esja is during the summer months (June-August) when the weather is usually clear and the daylight hours are long.
                                    </p>
                                )}
                            </li>

                        </ul>
                    </div>
                </div>
                <div class="col-span-2">
                    <h1 className='text-center font-bold mt-10 bg-[#50A477] p-2 rounded-md text-white lg:text-3xl'>Travel Details</h1>
                    <Booking />
                    <div className='h-[600px]'>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tour;