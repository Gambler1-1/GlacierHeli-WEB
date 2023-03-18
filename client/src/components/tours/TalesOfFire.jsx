import React, { useEffect, useState } from 'react';
import props from "react";
import tales from '../assets/images/FV.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaPlaneDeparture, FaClock, FaMapMarkerAlt, FaPlaneArrival } from 'react-icons/fa';
import { faCalendar, faCalendarAlt, faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import Form from '../utils/Form2';
import Booking from '../utils/BookingForm'

import reyktour1 from '../assets/images/Rtour2image1.jpeg'
import reyktour2 from '../assets/images/Rtour2image2.jpeg'
import reyktour3 from '../assets/images/Rtour2image3.jpeg'
import reyktour4 from '../assets/images/Rtour2image4.jpeg'

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
      <div className="bg-image bg-cover bg-center h-[550px] sm:h-[400px] md:h-[550px] uppercase" style={{ backgroundImage: `url(${tales})` }}>
      </div>
      <div class="lg:grid lg:grid-cols-5 gap-4 p-10">
        <div class="col-span-3 md:col-span-3 text-2xl">
          <h1 className='lg:text-3xl sm:text-2xl text-[15px] mb-6 font-bold uppercase'>
            Do you have the Guts to do the Fagradalsfjall Volcano Tour?                    </h1>
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

          <div className='text-[15px] text-lg text-justify'>
            <p>ARE YOU ONE OF THOSE DAREDEVILS!?</p>
            <p>Then dare to explore the Fagradalsfjall Volcano in the Land of Ice and Fire.<br /><br /></p>
            <h2 className='font-bold'>The Rise of Fagradalsfjall Volcano</h2>
            <p>The Fagradalsfjall volcano in Iceland was smoked out in the Meradalir valley of Reykjanes Peninsula. It was discovered when the lava beneath the thick ice chunks flared out in the southwest of Reykjavik. Such volcanoes are extremely rare and are frequently referred to as tuya (SubGlacial Volcano). This tuya volcano is now considered one of the newest volcanic systems, erupting in 2022 after 800 years of dormancy.<br /><br /></p>
            <br />
            <img
              src={reyktour1}
              alt='example'
              className='w-full h-[400px] object-cover rounded-md'
            />
            <br />
            <p className='font-bold '>About the name</p>
            <p>The name is a compound of the Icelandic words <span className='italic'>(beautiful, valley)</span> , often pronounced as Fagradalsfjall (Fa-Gra-Dals-Fyak). <br /><br /></p>
            <p className='font-bold '>Where is it located?</p>
            <p>
              It is located near the Mid-Atlantic Ridge, a seismically active tectonic boundary where the North American and Eurasian plates meet. More about it, it’s about 32 kilometers (20 miles) from the capital, Reykjavík. And 11km ( 7 miles ) from the fishing town of Grindavik.
              <br /><br /></p>
            <p className='font-bold '>Latest Eruption</p>
            <p>
              The latest 2022 eruption drove many people to the active site in the land of fire and ice. The volcano is approximately 385 meters (1,263 feet) above sea level. Our expert guides will take you from Reykjavik city to explore the lava fields.
              <br /><br /></p>
            <h2 className='font-bold'>Total Tour Time And Distance</h2>
            <ul class="list-disc text-[15px] text-lg list-inside ">
              <li className='flex'> Meeting Point: &nbsp;  <FaPlaneDeparture className='text-[#50A477]' />&nbsp; Ace FBO Reykjavík City</li>
              <li className='flex'> Total tour time &nbsp; <FaClock className='text-[#50A477]' />&nbsp; 35-40 minutes (may fluctuate)</li>
              <li className='flex'>Total distance from Reykjavík &nbsp; <FaMapMarkerAlt className='text-[#50A477]' />  &nbsp; 32 kilometers (20 miles)</li>
              <li className='flex'> Sightseeing Destination/ Time: &nbsp;<FaPlaneArrival className='text-[#50A477]' /> &nbsp; Fagradalsfjall volcano/ 15-20 minutes</li>
              <li className='flex'> Final Destination &nbsp;<FaClock className='text-[#50A477]' /> &nbsp;Ace FBO Reykjavík City</li>
            </ul>
            <br />
            <h3 className='font-bold'>How to get to Fagradalsfjall?</h3>
            <p>Tourists have two options to get to Fagradalsfjall volcano, i.e., by road and by air. If you wanna avoid the road hustle and muddy, slippery hiking trails, then join us on our <span className='font-bold'></span> Fagradalsfjall Volcano tour. We guarantee you would want to take advantage of the completely hellish view from above.<br /><br /></p>
            <br />
            <img
              src={reyktour2}
              alt='example'
              className='w-full h-[400px] object-cover rounded-md'
            />
            <br />
            <h2 className='font-bold'>All about our Fagradalsfjall Helicopter volcano tour </h2>
            <p> <span className='font-bold'>Right after take off</span> Right after take off, you’ll catch some breathtaking views of Reykjavik city. It’s multicolor rooftops, the famous BlueLagoon spa, lush greens and blue lakes in between. More about it, you’ll also get to see the Hallgrimskirkja church and the Harpa Concert Hall.
              <br /><br /></p>
            <img
              src={reyktour3}
              alt='example'
              className='w-full h-[400px] object-cover rounded-md'
            />
            <p> <span className='font-bold'>Moving along</span> , your main attraction will be the fumes and scenic vistas of Geldingadalur Valley and Reykjanes Geopark. Our guide will not let you miss out on Gunnhver and Krýsuvík geothermal areas, where geothermal pools, fumaroles, and mud pots appear bizarrely alien. Over the horizon is the Reykjanesviti Lighthouse on the southwest coast, clearly visible from the volcano.

              <br /><br /></p>
            <p> <span className='font-bold'>After you touch down</span> , find yourself rambling over the hottest fissure openings in Iceland. Enjoying the sights of cone shaped tuya, fresh lava flow, track remnants of the cooled magma alongside the fumes of the craters. Don’t forget to get some perfect insta shots of the aftermath of August 2022 eruption. Thank us later!

              <br /><br /></p>
            <p className='font-bold'>What does the Fagradalsfjall Volcano look like?</p>
            <p> The rarely formed subglacial volcano looks like an epic formation of mother nature. You cannot miss the multicolored craters near the spatter, emitting fumes, signaling that there is no end to Earth’s core activity. And in a glimpse you’ll be amazed by the asphalt colors of ancient lava fields.

              <br /><br /></p>
            <img
              src={reyktour4}
              alt='example'
              className='w-full h-[400px] object-cover rounded-md'
            />
            <h2 className='font-bold'>Main Attractions </h2>
            <ul class="list-disc text-[15px] text-lg list-inside">
              <li>Reykjavik</li>
              <li>Blue Lagoon</li>
              <li>Geldingadalur Valley</li>
              <li>Geldingadalur & Meradalur Erosion Spots</li>
              <li>Reykjanes Geopark</li>
              <li>Gunnuhver Geothermal Area</li>
              <li>Krýsuvík Geothermal Area</li>
              <li>Reykjanesviti Lighthouse</li>
              <li>Fagradalsfjall Volcanic Craters</li>
              <li>Keflavík Airport</li>
            </ul>
            <br />
            <p>From afar, it might seem like a bigger science fair volcano model, but there is much more at stake here. Join us for the <span className='font-bold'>Fagradalsfjall Helicopter Volcano Tour</span>  today!</p>
            <br />
            <p>For more information, contact us NOW to get the best packages.</p>
          </div>
          <br />
          <h1 className='font-semi-bold text-4xl text-[#062C52]'>FAQ's</h1>

          <div className="w-full mx-auto mt-4">
            <ul>
              <li className="py-2 border-gray-200 border-solid border-b">
                <div className="flex justify-between items-center bg-[#50A477] rounded-lg">
                  <h3 className="capitalize p-4 text-gray-800 text-sm font-bold md:text-lg text-white xl:text-[20px] w-10/12">
                    How strong was the eruption in 2022?
                  </h3>
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
                    Although the Richter Scale should have a reading just above 5.0, thankfully, there were no reported injuries and deaths because of the volcanic eruption.
                  </p>
                )}
              </li>
              <li className="pb-2 border-gray-200 border-solid border-b">
                <div className="flex justify-between items-center bg-[#50A477] rounded-lg">
                  <h3 className="p-4 capitalize text-gray-800 text-sm font-bold md:text-lg text-white xl:text-[20px]">
                    Can you visit the eruption site?
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
                    Yes, it is safe to visit the volcano site. However, protective gear and caution is always prescribed.

                  </p>
                )}
              </li>
              <li className="pb-2 border-gray-200 border-solid border-b">
                <div className="flex justify-between items-center bg-[#50A477] rounded-lg">
                  <h3 className="p-4 capitalizeuppercase text-gray-800 text-sm font-bold md:text-lg text-white xl:text-[20px]">
                    Is it safe?
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
                    Nowadays, there are guided tours such as the one we provide, which take all the recommended precautions.
                  </p>
                )}
              </li>
              <li className="pb-2 border-gray-200 border-solid border-b">
                <div className="flex justify-between items-center bg-[#50A477] rounded-lg">
                  <h3 className="p-4 capitalize text-gray-800 text-xs font-bold md:text-lg text-white xl:text-[20px]">
                    Will Fagradalsfjall erupt again?

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
                    There is no sure way to predict volcanic activity. It is worth noting here that the volcano is still active, and monitored heavily by scientists. You can get more information about it in our blog about the volcano, here.

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