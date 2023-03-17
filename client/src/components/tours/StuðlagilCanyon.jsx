import React, { useEffect } from 'react';
import { useState } from 'react';
import tales from '../assets/images/askja.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaPlaneDeparture, FaClock, FaMapMarkerAlt, FaPlaneArrival } from 'react-icons/fa';
import { faCalendar, faCalendarAlt, faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import Form from '../utils/Form2';
import image from '../assets/images/studlagil.png'
<<<<<<< Updated upstream
import northtour1 from '../assets/images/Ntour2image3.jpeg'
import northtour2 from '../assets/images/Ntour2image4.jpeg'
import northtour3 from '../assets/images/Ntour2image2.jpeg'
=======
import Booking from '../utils/BookingForm';

>>>>>>> Stashed changes

import props from "react";

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
      <div className="bg-image bg-cover bg-center h-[550px] sm:h-[400px] md:h-[550px] uppercase" style={{ backgroundImage: `url(${image})` }}>
      </div>
      <div class="lg:grid lg:grid-cols-5 gap-4 p-10">
        <div class="col-span-3 md:col-span-3 text-2xl">
          <h1 className='lg:text-3xl sm:text-2xl text-[15px] mb-6 font-bold uppercase'>
            Stuðlagil Canyon Helicopter Tour
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
                <h1>60 Minutes</h1>
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
            <p>Looking forward to the most thrilling helicopter ride in Iceland? Then join us on the Stuðlagil Canyon Helicopter tour. A magical place where mother nature speaks for herself. Because of its lush green views, a gushing river of multiple shades, and basalt columns on each riverside. It's becoming one of the most popular tourist destinations in Iceland.<br /><br /></p>
            <h2 className='font-bold '>About the tour/ What You Should expect</h2>
            <ul class="list-disc text-[15px] text-lg list-inside">
              <li>Elegant and calming views</li>
              <li>An Instagrammable Spot</li>
              <li>Our Helicopter ride saves time</li>
              <li>A glimpse of Stuðlagil waterfall</li>
              <li>Safe and secure Experience</li>
              <li>Proper guide about the tour by the pilot</li>
              <li>Services as per schedule</li>
              <li>Worth your time and price</li>
              <li>Best to visit in summer</li>
              <li>Customized plans are also offered</li>
            </ul>
            <br />
            <h2 className='font-bold underline'>Detailed Tour Guide</h2>
            <p className='font-bold'>What does the name suggest?</p>
            <p>Studlaberg in Icelandic means “basalt column.” Gil means “ravine or gorge.” Now, we know the region as the combination of these words: Stuðlagil, or (literally) basalt gorge.</p>
            <br />
            <img
              src={northtour1}
              alt='example'
              className='w-full h-[400px] object-cover rounded-md'
            />
            <br />
            <p className='font-bold'>How did it form? </p>
            <p>Just before 2016, not even Icelandic natives knew about Stuðlagil. The gorge was completely submerged by the glacial waters. It would have stayed that way had the water not been diverted for Fljótsdalur Power Station in 2007-2008. </p>
            <br />
            <p className='font-bold'>Where is it located?</p>
            <p>It is located on the east side of Iceland, which is 36 kilometers (22 miles) from Möðrudalur. The distance from the most nearby town Egilsstaðir, is 70 kilometers (43 miles). Going to Myvatn from SStuðlagilis 140 kilometers (87 miles) and 600 kilometers (372 miles) from Reykjavík.</p>
            <br />
            <h2 className='font-bold'>How to get to Stuðlagil Canyon?</h2>
            <p>Officially, there are two ways to get to Stuðlagil canyon. One is by a gravel road which is quite a task. Because the road is full of bumpy marble-like rocks and operates two-way traffic. So, travelers face difficulty throughout the freeway.<br /><br /></p>
            <p>The second one is through the Helicopter Ride from Möðrudalur. Going by Helicopter is way more comfortable and saves you time as well. Another reason we don’t prefer visitors to go by road is that there are no signs or clear tags, also it's not very family friendly. By choosing our Stuðlagil canyon helicopter tour. You will get a safe and secure ride right on time. And you’d be able to enjoy the breathtaking views of basalt rocks and lushy green rivers without any worries. <br /><br /></p>
            <br />
            <img
              src={northtour3}
              alt='example'
              className='w-full h-[400px] object-cover rounded-md'
            />
            <br />
            <h2 className='font-bold'>Total Tour Time and Distance</h2>
            <ul class="list-disc text-[15px] text-lg list-inside">
              <li className='flex'> Meeting Point: &nbsp;  <FaPlaneDeparture className='text-[#50A477]' />&nbsp; Beitarhúsið, Möðrudalur </li>
              <li className='flex'> Total tour time &nbsp; <FaClock className='text-[#50A477]' />&nbsp; 50-60 minutes (may fluctuate)</li>
              <li className='flex'>Total distance from Möðrudalur: &nbsp; <FaMapMarkerAlt className='text-[#50A477]' />  &nbsp;36 kilometers (22 miles)</li>
              <li className='flex'> Sightseeing Destination/ Time: &nbsp;<FaPlaneArrival className='text-[#50A477]' /> &nbsp; Stuðlagil canyon / 15-20 Min</li>
              <li className='flex'> Final Destination &nbsp;<FaClock className='text-[#50A477]' /> &nbsp;Beitarhúsið, Möðrudalur</li>

            </ul>
            <br />
            <p className='font-bold'>Places you will get to see on StuðlagilCanyon Tour</p>
            <p>On the way to Stuðlagil Canyon, you will be able to enjoy the calming views of Studlafoss Waterfall, alluring ponds of multiple shades, and nearby farms as well as lush greens. <br /><br /></p>
            <p className='font-bold underline italic'>Studlafoss Waterfall</p>

            <p>Stuðlafoss is a gleaming jewel of a waterfall in South Iceland. River Fossá is the major water source of the fall, dropping a whopping 30 meters (100 feet).</p>
            <p>At the base of the waterfall, you can find a turquoise pool to relax and admire the natural wonder. The landscape around provides a rugged look at rock formation, spersed with lush green vegetation. </p>
            <p>We will fly over the waterfall, with the nearby town of Kirkjubæjarklaustur visible in the distance. However, if the weather permits, we will land near the waterfall.
            </p>
            <p>
              After you get off the helicopter at Stuðlagil Canyon, you will be taken aback by the periwinkle blue and green colors of the gorge river, alongside 20 - 30 m high basalt columns. These basalt column forms when still magma cools down, resulting in form of hexagonal-shaped volcanic basalt rocks. That’s one of the major factors which makes it unique from other popular places in Iceland.
            </p>
            <br />
            <img
              src={northtour2}
              alt='example'
              className='w-full h-[400px] object-cover rounded-md'
            />
            <br />
            <p>Moreover, The breathtaking views of StuðlagilCanyon will be your perfect spot for instagrammable shots. With our Stuðlagil Canyon Helicopter Tour, you’ll get an experience like never before.</p>
            <br />
            <p>Other popular places around the gorge area include Studlafoss waterfall, Kárahnjúkar Hydropower Plant, and StuðlagilHiking Trail. However, our knowledgeable guide will tell you everything about the history and geology of the area and answer any questions that might come to mind. </p>
            <p className='font-bold'>Best time to visit</p>
            <p>If you want to get the most out of your tour, Then it's best to visit StuðlagilCanyon in summer. In winter the pathway is covered in snow and becomes very slippery. Also, the water turns brown and gray. Which gives extreme somber vibes. </p>
            <p>That was all about our Stuðlagil Canyon Helicopter Tour. You will get the most unforgettable adventure of your life. Rest assured your eyes will feast on the intriguing ruggedness of this Nordic natural wonder. </p>
            <p>If you want to see more of our helicopter tours, customized plans, and tours from Reykjavík or Möðrudalur, do check out: Happy exploring!</p>
            <br />
            <p className='font-bold'>What’s Included</p>
            <ul class="list-disc text-[15px] text-lg list-inside">
              <li>Tour guidelines</li>
              <li>Amazing aerial views</li>
            </ul>
            <br />
            <p className='font-bold'>What to Bring With You</p>
            <ul class="list-disc text-[15px] text-lg list-inside">
              <li>Warm clothing, preferably waterproof overalls</li>
              <li>Snacks and water</li>
              <li>Binoculars (optional)</li>
              <li>Camera gear</li>
            </ul>
            <br />
            <p className='font-bold'>What’s Not Included</p>
            <ul class="list-disc text-[15px] text-lg list-inside">
              <li>Meals</li>

            </ul>
          </div>
          <br />
          <h1 className='font-semi-bold text-4xl text-[#062C52]'>FAQ's</h1>

          <div className="w-full mx-auto mt-4">
            <ul>
              <li className="py-2 border-gray-200 border-solid border-b">
                <div className="flex justify-between items-center bg-[#50A477] rounded-lg">
                  <h3 className="capitalize p-4 text-gray-800 text-sm font-bold md:text-lg text-white xl:text-[20px] w-10/12">
                    What is the best time to visit Stuðlagil Canyon?
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
                    The best time to visit Stuðlagil Canyon is during the summer months, from June to September.
                  </p>
                )}
              </li>
              <li className="pb-2 border-gray-200 border-solid border-b">
                <div className="flex justify-between items-center bg-[#50A477] rounded-lg">
                  <h3 className="p-4 capitalize text-gray-800 text-sm font-bold md:text-lg text-white xl:text-[20px]">
                    Can I camp in Stuðlagil Canyon?
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
                    No, camping is not allowed in Stuðlagil Canyon.
                  </p>
                )}
              </li>
              <li className="pb-2 border-gray-200 border-solid border-b">
                <div className="flex justify-between items-center bg-[#50A477] rounded-lg">
                  <h3 className="p-4 capitalize text-gray-800 text-sm font-bold md:text-lg text-white xl:text-[20px]">
                    Is Stuðlagil Canyon man-made?
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
                    Stuðlagil Canyon was created when the force of a river so powerful forced its way from the Highlands to the North of the island.
                  </p>
                )}
              </li>


            </ul>
          </div>

        </div>
        <div class="col-span-2">
          <h1 className='text-center font-bold mt-10 bg-[#50A477] rounded-md text-white p-2 lg:text-3xl'>Travel Details</h1>
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