import React, { useEffect, useState } from 'react';
import props from "react";
import tales from '../assets/images/geothermal.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCalendarAlt, faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import Form from '../utils/Form2';
import { FaPlaneDeparture, FaClock, FaMapMarkerAlt, FaPlaneArrival } from 'react-icons/fa';


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
            Tales of Ice And Fire; the Þórisjökull And Hengill Tour                    </h1>
          <div class="flex items-center my-2">
            <div class="flex-1 border-b border-dotted border-gray-400"></div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="p-4">
              <div className='text-center text-[#50A477]'>
                <FontAwesomeIcon icon={faClock} className='lg:h-10' />
              </div>

              <div class="lg:text-2xl text-[15px] text-center font-semibold">
                <h1>130 Minutes</h1>
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
            <p>This is your sign to cherish the tales of ice and fire. Book our Combo Heli Ride from Reykjavik city to Þórisjökull and Hengill. And experience the Crisp glacier air tantalizing your senses, alongside the warmth of hot springs.
              <br /><br /></p>

            <h2 className=' lg:text-2xl text-[15px] mb-6 font-bold '>
              About the Destinations
            </h2>
            <ul class="list-disc text-[15px] text-lg list-inside">
              <li class="font-bold">Þórisjökull Glacier</li>
              <p>Þórisjökull (pronounced as θouːrɪs jœːkʏtl) or Thórisjökull Glacier is derived from Old Norse, which means "Þóris's glacier" or "the glacier of Þórr." The glacier has a height of 1,350 meters (4,429 feet) and is located near the town of Borgarnes. Also, This glacier is a small part of the Langjökull glacier, the largest glacier in Iceland.
                <br /><br /></p>
              <p>The glacier is situated approximately 73 kilometers( 45 miles) away from Reykjavik city. Another important fact to note about this glacier, is that it is a tuya. Which makes it a rare subglacial volcano. Please note that these distances are for traveling through the land.

                <br /><br /></p>
              <li class="font-bold">Hangill Geothermal Area </li>
              <p>The hengill volcano is a geothermal area located about 40 km (25 miles) from Reykjavik. In southwest Iceland, this active volcano area is considered very popular among tourists. For this reason, it includes vast numbers of geysers, mud pools, and hot springs. The hengill volcanic system is pretty complex, with one volcano in the mid and several small volcanoes around it.
                <br /><br /></p>
              <p>The area's complexity is due to the tectonic rupture of the European and American plates. But they are slowly moving apart now. However, it has not erupted for the past 2,000 years. Hengill geothermal area is a popular destination among tourists for its warm geothermal bathing pools. They also go to nearby geothermal power plants to learn about the Icelandic government's renewable initiatives.</p>

            </ul>
            <br />
            <h2 className='font-bold'>Why should you take our helicopter ride?</h2>
            <p>This ice-fire helicopter flight is very unique in itself, as it concludes the duo landing. The pathways to this famous glacier are extensive and time-consuming. So, it’s better not to take the roads. Now the question pops up here! Is that, why you should take our heli ride? You should book us because our heli ride experiences are comfortable and time efficient.
              <br /><br /></p>
            <p>Moreover, During the journey toward the Thorisjokull glacier. As, we will fly you across the highest and most bedazzled waterfalls of Iceland; the famed Glymur! You'll feel the Crisp fresh glacier air tantalizing your senses, and the warmth of hot springs while you breathe.
              <br /><br /></p>
            <p className='font-bold'>All in all, This helicopter tour will save you from hours of hiking and will let you enjoy the panoramic sights just by sitting back in the sky.
              <br /><br /></p>
            <h2 className='font-bold'>Complete Tour Guide</h2>
            <h3 className='font-bold italic'>What will I see from the chopper?</h3>
            <p>As soon as the ride starts, You will get some scenic views from the chopper of Reykjavik city. Its multicolor rooftops, aquamarine ocean, Lush greens, rugged terrain, unique plants, little islands, and other popular structures will excite you.
              <br /><br /></p>
            <p>Midway towards Þórisjökull, your eyes will dart towards Þingvellir National Park and Þingvallavatn Lake. The expansive plains of the UNESCO World Heritage site would give you a soothing sensation. However, you will also be able to pinpoint the gorged-out fissure separating the tectonic plates.

              <br /><br /></p>
            <p>Proceeding further, as it's a combo tour, we'd be landing in two different places in one tour. You’ll also get to land on both destinations and admire the art of mother nature.
            </p>
            <br />
            <h3 className='font-bold'>Our 1st destination </h3>
            <p className='font-bold italic'>would be the ultimate Þórisjökull; </p>

            <p>The first thing you may notice when standing on Þórisjökull Glacier is its stunning landscape. The glacier is surrounded by snow-capped mountains and offers breathtaking views of the surrounding area. You may feel a sense of awe and wonder as you take in the scenery, and the views it offers. Walking on the glacier itself can be an adventure.
            </p>
            <p>As you explore the glacier, you may hear the sound of melting ice and feel the crunching of snow and ice beneath your feet.
            </p>
            <p> <span className='font-bold italic'>NOTE:</span>  We also offer snowmobiling at the Þórisjökull Glacier, for private tour bookings.
            </p>
            <br />
            <h3 className='font-bold'>Our 2nd destination </h3>
            <p className='font-bold italic'>The Hengill Volcanic System;</p>

            <p>Right after the cold winds of the glacier, our pilot will take you straight toward the second destination; the Hengill Volcano. Which is situated in the southwest on an old volcano in Iceland. Step down the chopper, and feel the warmth of the truculent volcano. The active volcanic craters and their surroundings give off the tone of a remote geothermal area.

            </p>
            <p>You may feel compelled to capture the picture-perfect views, and lie in cozy hot springs just to relax. However, our tour guides who ensure that our esteemed customers see every scenic spot from various vantage points.

            </p>
            <br />
            <h2 className='font-bold italic'>Combo Tour</h2>
            <h2 className='font-bold italic'>Total tour Time and distance
            </h2>
            <ul class="list-disc text-[15px] text-lg list-inside">
            <li className='flex'> Meeting Point: &nbsp;  <FaPlaneDeparture className='text-[#50A477]' />&nbsp; Ace FBO Reykjavík City</li>
              <li className='flex'> Total tour time &nbsp; <FaClock className='text-[#50A477]' />&nbsp; 100-130 minutes (may fluctuate)</li>
              <li className='flex'>Total distance from Reykjavík &nbsp; <FaMapMarkerAlt className='text-[#50A477]' />  &nbsp; Þórisjökull = 73 kilometers (45 miles)</li>
              <li className='flex'>Total distance from Reykjavík &nbsp; <FaMapMarkerAlt className='text-[#50A477]' />  &nbsp; Hengill = 36 kilometers (22 miles)</li>
              <li className='flex'> Sightseeing Destination/ Time: &nbsp;<FaPlaneArrival className='text-[#50A477]' /> &nbsp; Þórisjökull glacier & Hengill volcano / 15-20 Min each</li>
              <li className='flex'> Final Destination &nbsp;<FaClock className='text-[#50A477]' /> &nbsp;Ace FBO Reykjavík City</li>
            </ul>
            <br />
            <p className='font-bold'>Main Attractions</p>
            <ul class="list-disc text-[15px] text-lg list-inside">
              <li>Reykjavik City</li>
              <li>Hallgrímskirkja Church </li>
              <li>Þórisjökull Glacier</li>
              <li>Glymur Waterfall</li>
              <li>Reydharvatn Lake</li>
              <li>Þingvellir National Park</li>
              <li>Þingvallavatn Lake (largest lake in Iceland) </li>
              <li>Hengill Geothermal Area</li>
              <li>Hot springs</li>
            </ul>
            <br />
            <h2 className='font-bold'>Conclusion</h2>
            <p>Glacier Heli prizes itself for providing a complete package - our visite populaire if you will - with a comfortable ride. And two landing destinations, in one tour! If you want to get more information. Contact us!</p>
          </div>
          <br />
          <h3 className='font-bold underline'>FAQ’s</h3>

          <div className="w-full mx-auto mt-4">
            <ul>
              <li className="py-2 border-gray-200 border-solid border-b">
                <div className="flex justify-between items-center bg-[#50A477]  rounded-lg">
                  <h3 className="uppercase p-4 text-gray-800 text-sm font-bold md:text-lg text-white xl:text-[20px] w-10/12">
                    Why is this tour called tales of ice and fire?
                  </h3>
                  <div
                    className="cursor-pointer"
                    onClick={() =>
                      question === 0 ? setquestion(null) : setquestion(0)
                    }
                  >
                    {question === 0 ? (
                      <svg
                        className="rounded-full"
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
                        className="rounded-full"
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
                    Because the tour concludes with duo landings.

                  </p>
                )}
              </li>
              <li className="pb-2 border-gray-200 border-solid border-b">
                <div className="flex justify-between items-center bg-[#50A477] rounded-lg">
                  <h3 className="p-4 uppercase text-gray-800 text-sm font-bold md:text-lg text-white xl:text-[20px]">
                    Is the Hengill volcanic system still active?

                  </h3>
                  <div
                    className="cursor-pointer"
                    onClick={() =>
                      question === 1 ? setquestion(null) : setquestion(1)
                    }
                  >
                    {question === 1 ? (
                      <svg
                        className="rounded-full"
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
                        className="rounded-full"
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
                    Yes, the Volcanic site is still active. In fact, you can see cooled-down magma running down in the surroundings.


                  </p>
                )}
              </li>
              <li className="pb-2 border-gray-200 border-solid border-b">
                <div className="flex justify-between items-center bg-[#50A477] rounded-lg">
                  <h3 className="p-4 uppercase text-gray-800 text-sm font-bold md:text-lg text-white xl:text-[20px]">
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
                        className="rounded-full"
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
                        className="rounded-full"
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
                    Nowadays, there are guided tours such as the one we are providing, which take all the necessary precautions recommended.

                  </p>
                )}
              </li>
              <li className="pb-2 border-gray-200 border-solid border-b">
                <div className="flex justify-between items-center bg-[#50A477] rounded-lg">
                  <h3 className="p-4 uppercase text-gray-800 text-xs font-bold md:text-lg text-white xl:text-[20px]">
                    What to Bring to the Helicopter Tour?


                  </h3>
                  <div
                    className="cursor-pointer"
                    onClick={() =>
                      question === 3 ? setquestion(null) : setquestion(3)
                    }
                  >
                    {question === 3 ? (
                      <svg
                        className="rounded-full"
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
                        className="rounded-full"
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
                    Camera/mobile phone camera/video gear (NOT drone), A smile, and a vigor to explore!

                  </p>
                )}
              </li>

            </ul>
          </div>
          <div className='border border-gray-400 p-4 mt-6'>
            <div className='my-8 lg:grid lg:grid-cols-3'>
              <div>
                <h1 className='lg:text-3xl font-semibold '>What's Included</h1>
              </div>
              <div className='lg:text-[25px] text-[15px]'>
                <div>&#10003;  Landing</div>
                <div>&#10003;  Experienced English Guide</div>
              </div>


            </div>
            <div className='my-8 lg:grid lg:grid-cols-3'>
              <div>
                <h1 className='lg:text-3xl font-semibold'>Not Included</h1>
              </div>
              <div className='lg:text-[25px] text-[15px]'>
                <div>&#9747; MEALS</div>
              </div>


            </div>
          </div>
        </div>
        <div class="col-span-2">
          <h1 className='text-center font-bold mt-10  lg:text-3xl'>BOOK THIS TOUR</h1>
          <div class="bokunWidget" data-src="https://widgets.bokun.io/online-sales/103ed684-7b5c-437e-ba25-4fae951ded34/experience-calendar/694171"></div>

          <div className='h-[600px]'>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;