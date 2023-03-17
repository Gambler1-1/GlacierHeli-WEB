import React, { useEffect, useState } from 'react';
import tales from '../assets/images/game.jpeg';
import props from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaPlaneDeparture, FaClock, FaMapMarkerAlt, FaPlaneArrival } from 'react-icons/fa';
import { faCalendar, faCalendarAlt, faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import Form from '../utils/Form2';

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
            A Thrilling Heli Ride from Modrudalur towards Mount Askja
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
                <h1>70 Minutes</h1>
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
            <p>Ever wondered what a lake inside a volcano looks like? Then, Mount Askja, in the Land of Ice and Fire, would be a perfect destination for it. With mountains veiled with snowy tops, the deepest lake of dazzling waters, alongside amber edges of the caldera. You’ll get the most therapeutic experience of your life here. </p>
            <br />
            <h2 className=' text-2xl font-bold'>About Mount Askja</h2>
            <p>Mount Askja (Icelandic for “caldera”) is located in the Vatnajökull Glacier National Park of Iceland. It’s 1,516 meters (4,974 feet) high volcanic crater with a 200 m deep lake inside. Alongside a round milky geothermal lake. The famous Askja belongs to the Dyngjufjöll mountain range.<br /><br /></p>
            <p>Over 10,000 years ago, Mount Askja erupted, forcing the lava chamber roof to collapse, forming the largest caldera in Iceland, an 8 km (5 miles) long and 200 m (656 feet) depressed lake now known as Lake Öskjuvatn. Even though its base is submerging day by day. Askja mountain is an active volcano site. With several powerful volcanic eruptions in the past. It became very popular among other active volcanoes in Iceland. The last major eruption that took place in 1961 produced about 0.1 km of lava. Even though its base is submerging day by day.<br /><br /></p>
            <h2 className=' text-2xl font-bold'>Best way to get to Mount Askja</h2>
            <p>Going to Askja caldera by road is a tedious task in itself. The F-roads leading towards the cliff include two river crossings, lava fields, and mushy sandy sections. Which is a 4-hour long risky drive. So for that reason, we prefer you to book our thrilling ride from Modrudalur toward Mount Askja this year. And enjoy the alluring affairs of radiant waters, fumes of Askja, hot springs, and much more in the area.<br /><br /></p>
            <h2 className=' text-2xl font-bold'>Total tour Time and distance</h2>
            <ul class="list-disc text-[15px] text-lg list-inside ">
              <li className='flex'> Meeting Point: &nbsp;  <FaPlaneDeparture className='text-[#50A477]' />&nbsp; Beitarhúsið, Möðrudalur </li>
              <li className='flex'> Total tour time &nbsp; <FaClock className='text-[#50A477]' />&nbsp; 70-90 minutes (may fluctuate)</li>
              <li className='flex'>Total distance from Möðrudalur: &nbsp; <FaMapMarkerAlt className='text-[#50A477]' />  &nbsp;51 kilometers (32 miles)</li>
              <li className='flex'> Sightseeing Destination/ Time: &nbsp;<FaPlaneArrival className='text-[#50A477]' /> &nbsp; Mount Askja/ 15 Min</li>
              <li className='flex'> Final Destination &nbsp;<FaClock className='text-[#50A477]' /> &nbsp;Beitarhúsið, Möðrudalur</li>

            </ul>
            <br />
            <h2 className=' text-2xl font-bold'> What will you see from above?</h2>
            <p>Y​​ou will be in awe of the Icelandic highland’s magnificence as we soar approach the Askja Caldera.</p>
            <p>After Taking off from the pickup point, the sights of the Möðrudalur settlement will amaze you. And you will be fascinated by the multicolored turf houses and structures below. When compared to the expanse of greenery around, they will appear miniature.
              A little while later, you will be treated to the shimmering views of Modrudalur kettle hole lakes. The slanting angles of the sun's rays will further highlight the unspoiled Icelandic natural beauty. Some other main attractions you will see from the ride include:
            </p>
            <ul class="list-disc text-[15px] text-lg list-inside">
              <li class="font-bold">Grafarlandsfoss</li>
              <p>Grafarlandsfoss is a small waterfall nestled in fresh green meadow plains on the way to Lake Askja. Its waters appear frothy from above as it is a steep cascade. You might also see shrubbery flowers blooming in the early summertime from above. </p>
              <li class="font-bold">Herðubreið Mountain </li>
              <p>On your way to Askja Caldera, you’ll get a breathtaking glimpse of Iceland’s national mountain, Herðubreið Mountain. It is situated 34 kilometers (21 miles) from Askja crater and 87 kilometers (51 miles) from Modrudalur. The beautiful high table Mount Herdubreid (1682 meters in height) is covered with snow throughout the year. People named it Iceland’s highland queen because of its beauty. </p>
              <li class="font-bold">Ódáðahraun desert </li>
              <p>The Ódáðahraun desert is a 46000 square kilometer barren region of otherworldly topography and spanning lava fields. Due to the ruggedness of the region, the desert inspires fear among the locals and was a major hideout for the outlaws. Coincidentally, you’ll also have a view of Herðubreiðarlindir (oasis) in the Highland of Iceland.   </p>
            </ul>
            <br />
            <h2 className=' text-2xl font-bold'>What will you see after Touchdown?</h2>
            <p>After arriving, you’ll find yourself walking over the rocky amber-colored land of Mount Askja. And have a blissful sight of the famous volcano and Öskjuvatn lake (aka Lake Askja). </p>
            <p class="font-bold underline italic">Öskjuvatn lake</p>
            <p>Lake Askja( Öskjuvatn lake ) remains cold and icy throughout the year. If the weather permits, you can get a beautiful reflection of the surrounding mountains in the glacial waters. </p>
            <p class="font-bold underline italic">Lake Vitti:</p>
            <p>Unlike Lake Öskjuvatn, Lake Vitti remains warm throughout the year. The geothermal springs underneath make it pleasant to take a swim in Krafla crater lake. With that, you can have the best times of your life by soaking yourself in the warm waters for a refreshing change.  </p>

            <br /><h2 className=' text-2xl font-bold'>Summing up</h2>


            <p>Heli Ride could be your ultimate chance to visit the famous Icelandic Highlands, the deep blue waters of öskjuvatn lake, and the hot Askja springs altogether. The flight is really comfortable and can be the best way to get to Mount Askja. We also provide a private tour of the area. Please note that the landing is subject to weather conditions. <br /><br /></p>
          </div>

          <h2 className='text-2xl italic font-bold lg:my-8'>
            Main Attractions
          </h2>
          <ul class="list-disc italic text-[15px] text-lg list-inside">
            <li>Möðrudalur
            </li>
            <li> Grafarlandsfoss
            </li>
            <li>Herðubreið Mountain
            </li>
            <li>Odadahraun desert
            </li>
            <li>Herðubreiðarlindir (oasis)
            </li>
            <li>Mount Askja
            </li>
            <li>Öskjuvatn lake
            </li>
            <li>Lake Vitti

            </li>
          </ul>
          {/* <h1 className='text-3xl font-bold my-8'>
                        What to Bring on the Tour
                    </h1>
                    <ul class="list-disc text-[15px] text-lg list-inside">
                        <li class="mb-2">Warm Clothing

                        </li>
                        <li class="mb-2"> Snacks
                        </li>
                        <li class="mb-2">Binoculars (if desired)
                        </li>
                        <li class="mb-2">
                            Most importantly, a smile!
                        </li>
                    </ul> */}
          <br />
          <h3 className='font-bold underline'>FAQ’s</h3>

          <div className="w-full mx-auto mt-4">
            <ul>
              <li className="py-2 border-gray-200 border-solid border-b">
                <div className="flex justify-between items-center bg-[#50A477] rounded-lg">
                  <h3 className="uppercase p-4 text-gray-800 text-sm font-bold md:text-lg text-white xl:text-[20px] w-10/12">
                    What to Bring on the Askja Tour?
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
                    Warm Clothing, Snacks, water, Binoculars (if desired), Sturdy shoes, an SLR camera, And Most importantly, a smile!
                  </p>
                )}
              </li>
              <li className="pb-2 border-gray-200 border-solid border-b">
                <div className="flex justify-between items-center bg-[#50A477] rounded-lg">
                  <h3 className="p-4 uppercase text-gray-800 text-sm font-bold md:text-lg text-white xl:text-[20px]">
                    Is the meal included in the tour?
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
                    No, it's not included.
                  </p>
                )}
              </li>
              <li className="pb-2 border-gray-200 border-solid border-b">
                <div className="flex justify-between items-center bg-[#50A477] rounded-lg">
                  <h3 className="p-4 uppercase text-gray-800 text-sm font-bold md:text-lg text-white xl:text-[20px]">
                    Is landing included in the tour?
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
                    Yes, Landing is included (Subject to weather conditions).
                  </p>
                )}
              </li>
              <li className="pb-2 border-gray-200 border-solid border-b">
                <div className="flex justify-between items-center bg-[#50A477] rounded-lg">
                  <h3 className="p-4 uppercase text-gray-800 text-xs font-bold md:text-lg text-white xl:text-[20px]">
                    When is the best time to visit the Icelandic volcano?
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
                    The best time to visit Mt, Askiya is in the summer.
                  </p>
                )}
              </li>

            </ul>
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