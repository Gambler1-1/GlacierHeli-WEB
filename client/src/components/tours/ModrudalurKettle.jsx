import { useState } from 'react';
import { useEffect } from 'react';
import tales from '../assets/images/kettle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaPlaneDeparture, FaClock, FaMapMarkerAlt, FaPlaneArrival } from 'react-icons/fa';
import { faCalendar, faCalendarAlt, faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import Form from '../utils/Form2';
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
      <div className="bg-image bg-cover bg-center h-[550px] sm:h-[400px] md:h-[550px] uppercase" style={{ backgroundImage: `url(${tales})` }}>
      </div>
      <div class="lg:grid lg:grid-cols-5 gap-4 p-10">
        <div class="col-span-3 md:col-span-3 text-2xl">
          <h1 className='lg:text-3xl sm:text-2xl text-[15px] mb-6 font-bold uppercase'>
            Modrudalur Kettle Holes: Helicopter Ride Experience
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
                <h1>25 Minutes</h1>
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
            <p>Join us in a one-of-a-kind helicopter ride experience of Modrudalur Kettle Holes (Small Ponds) located in the North-Eastern region of Iceland. A mysterious place that has never been explored by any tour agency in Iceland except Glacierheli.is. The leading cause this place has remained unrevealed is that the Möðrudalsleið road is incomplete and closed for any kind of movement. But now it's possible to enjoy the breathtaking views from above by helicopter.We are offering a complete tour of these dazzling kettles around Modrudalur in the comfort of our Helicopter Ride. For more information, please stick with us to the very end.<br /><br /></p>
            <h2 className='font-bold'>How do these kettle holes form?</h2>
            <p>In general, some specific conditions or geological abnormalities result in a jökulhlaup impact i.e overflow of water due to floods, Glacier receding (melting of ice chunks) , Seismic activity (earthquakes) , and Volcanic activity.<br /><br /></p>
            <p>Kettle Holes are shallow ponds formed in outwash plains, or sandurs, at a glacier’s toe. Usually, such small ponds occur in the Southern Iceland region due to high volcanic activity. But after the reveal of these small ponds in Modrudalur in the northeastern region of Iceland. It is now possible to enjoy similar views of the southern region on the east side.  <br /><br /></p>
            <p className='font-bold'>Our helicopter ride is unique in this perspective because we are the only tour agency providing a helicopter ride towards Modrudalur kettle holes. <br /><br /></p>
            <h2 className='font-bold'>How does Modrudalur Kettle seem?</h2>
            <p>
              Even though these kettles look beautiful from the ground, they look quite ethereal from the sky. The water from above looks sparkling, almost turquoise. However, that is not the only hue. Depending upon the weather condition and the position of the sun, you will see shades of blue, green and muddy brown of the glacial water.

            </p>
            <br />
            <h2 className='font-bold'>Total Tour Time And Distance</h2>
            <ul class="list-disc text-[15px] text-lg list-inside italic">
            <li className='flex'> Meeting Point: &nbsp;  <FaPlaneDeparture className='text-[#50A477]' />&nbsp; Beitarhúsið, Möðrudalur </li>
              <li className='flex'> Total tour time &nbsp; <FaClock className='text-[#50A477]' />&nbsp; 15-20 minutes (may fluctuate)</li>
              
              <li className='flex'> Final Destination &nbsp;<FaClock className='text-[#50A477]' /> &nbsp;Beitarhúsið, Möðrudalur</li>
            </ul>
            <br />
            <h2 className='font-bold'>More about the Kettle Helicopter Tour</h2>
            <p>The tour we are providing is between 15-20 minutes. During the flight, you will get some fascinating views of small ponds. Please note that the landing near the kettle holes is subject to weather conditions. It is sometimes impossible to land safely here due to fierce winds and cloudy skies. So, we cannot assure the landing. </p>
            <p>We are the only tour agency currently providing our guests a unique way of exploring Icelandic natural phenomena.</p>
          </div>
          <h3 className='font-bold underline'>FAQ’s</h3>

          <div className="w-full mx-auto mt-4">
            <ul>
              <li className="py-2 border-gray-200 border-solid border-b">
                <div className="flex justify-between items-center bg-[#50A477] rounded-lg">
                  <h3 className="uppercase p-4 text-gray-800 text-sm font-bold md:text-lg text-white xl:text-[20px] w-10/12">
                    Can I jump in the kettle holes?
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
                    No, it is not advisable to jump in the holes, because they are usually dangerously deep
                  </p>
                )}
              </li>
              <li className="pb-2 border-gray-200 border-solid border-b">
                <div className="flex justify-between items-center bg-[#50A477] rounded-lg">
                  <h3 className="p-4 uppercase text-gray-800 text-sm font-bold md:text-lg text-white xl:text-[20px]">
                    How should I dress?
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
                    Please dress according to the weather: warm clothing and water-proof.
                  </p>
                )}
              </li>
              <li className="pb-2 border-gray-200 border-solid border-b">
                <div className="flex justify-between items-center bg-[#50A477] rounded-lg">
                  <h3 className="p-4 capitalize text-gray-800 text-sm font-bold md:text-lg text-white xl:text-[20px]">
                    Can I surprise my better half with a proposal/wedding anniversary there?
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
                    With our customized plans, you can get a plan according to your needs and wants. You can get more information about our customized Iceland tours here.
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