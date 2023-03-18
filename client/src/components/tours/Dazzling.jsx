import React, { useEffect, useState } from 'react';
import props from "react";
import tales from '../assets/images/hengiltour.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCalendarAlt, faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import Form from '../utils/Form2';
import { FaPlaneDeparture, FaClock, FaMapMarkerAlt, FaPlaneArrival } from 'react-icons/fa';
import reyktour1 from '../assets/images/Rtour4image1.jpeg'
import reyktour2 from '../assets/images/Rtour4image2.jpeg'
import reyktour3 from '../assets/images/Rtour4image3.jpeg'
import reyktour4 from '../assets/images/Rtour4image4.jpeg'
import Booking from '../utils/BookingForm';

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
            The Hengill Volcano; Helicopter Tour
          </h1>
          <div class="flex items-center my-2">
            <div class="flex-1 border-b border-dotted border-gray-400"></div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="p-4">
              <div className='text-center text-[#50A477] '>
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

          <div className='text-[15px] text-justify  text-lg '>
            <p>Glacierheli is now providing a trip to the most active volcano site in the land of Ice and fire. A geothermal area where the gates of Mordor open. By flying over the lava-covered fields interspersed with colorful basalt rocks and steaming hot springs, you'll get an experience like never before.  <br /><br /></p>
            <h2 className=' text-2xl font-bold'>Gates of Mordor; Hengill Volcano</h2>
            <p>The Hengill volcano is a geothermal area about 40 km (25 miles) from Reykjavik. In southwest Iceland, this active volcano area is considered very popular among tourists. For this reason, it includes vast numbers of geysers, mud pools, and hot springs. The Hengill volcanic system is complex, with one volcano in the middle and several small volcanoes around it.
              <br /><br /></p>
            <p>The area's complexity is due to the tectonic rupture of the European and American plates. But they are slowly moving apart now. However, it has yet to erupt for the past 2,000 years. Hengill geothermal area is a popular tourist destination for its warm geothermal bathing pools. They also go to nearby geothermal power plants to learn about the Icelandic government's renewable initiatives.
              <br /><br /></p>
            {/* <p>The second landing of this tour would be at the Hengill Geothermal Area. The area received its name from the Hengill volcano which is situated in a remote valley that can only be accessed by a helicopter or a hike. The valley boasts hot springs, boiling mud pots that you can walk towards and observe from very up close. The magical place will wrap you around its enchanted little finger and make you fall in love with the otherworldly beauty surrounding you.<br /><br /></p> */}
            <h2 className=' text-2xl font-bold'>Best way to get to Hengill Volcano:</h2>
            <p>
              Our helicopter ride is the best way to get to the Hengill volcano. This is because the pathway to hengill is quite extensive and time-consuming. Also, you cannot travel if you have your family with you. It is because the road is rough and dangerous, which is why the most comfortaable way is the Hengill Volcano helicopter tour.
            </p>
            <h2 className=' text-2xl font-bold'>Total tour Time and distance</h2>
            <ul class=" text-[15px] text-lg list-inside">
              <li className='flex'> Meeting Point: &nbsp;  <FaPlaneDeparture className='text-[#50A477]' />&nbsp; Ace FBO Reykjavík City</li>
              <li className='flex'> Total tour time &nbsp; <FaClock className='text-[#50A477]' />&nbsp; 50-60 minutes (may fluctuate)</li>
              <li className='flex'>Total distance from Reykjavík &nbsp; <FaMapMarkerAlt className='text-[#50A477]' />  &nbsp; 40 kilometers (25 miles)</li>
              <li className='flex'> Sightseeing Destination/ Time: &nbsp;<FaPlaneArrival className='text-[#50A477]' /> &nbsp; Hengill volcano / 20-25 Min</li>
              <li className='flex'> Final Destination &nbsp;<FaClock className='text-[#50A477]' /> &nbsp;Ace FBO Reykjavík City</li>


            </ul>
            <h2 className=' text-2xl font-bold'>What You'll See From the Helicopter?</h2>
            <p>Mount Hengill is quite close to Reykjavik city. If you take a helicopter tour of Hengill, the sights of Reykjavik city will amaze you as the Black rocky terrain, covered with snow or shrubbery, all together give off a splendor exclusive to Reykjavik's surroundings.</p>
            <p>The sights included in this tour will be the dazzling Hellisheiði Plateau, Hengill Geothermal Area, Nesjavallavirkjun, Hellisheiðarvirkjun, Bláfjöll mountain range. Furthermore, the tour will also let you see a glimpse of the futuristic Hellisheidi Power Plant. This plant is of immense importance to Iceland as over 90% of houses in Iceland, and 99% of Reykjavik homes are heated by geothermal water.
            </p>
            <p>From a bird's eye view, you will see the infrastructure of Reykjavik - small colorful buildings, bustling streets, and beautiful coastlines and docks. You will recognize the area due to the steam vents, colorful hot springs, and impressive ruggedness. A little further, you might catch a fleeting glimpse of Þingvellir National Park. The park is a UNESCO Heritage sight with dramatic views.
            </p>
            <p>Hengill Geothermal Area; As you close in on Hengill, In the landing place of Hengill, which was named after the Hengill volcano; the landscape's unique, enthralling beauty will beseech your senses in a crackling deluge. The tour will sweep you across boiling mud pots, spectacular hot springs, and sheep gnawing on the lush green that carpets the landscape. These vast vistas of untouched landscapes provide an unfiltered view of the wonders of Iceland. You will see nature just as God intended it and created it.
            </p>
            <p>Hellisheiði plateau will always welcome you into its everlasting beauty. In winter, the white snow carpets the landscape as the sun ripples off of the sparkling Ice and casts rainbows into our eyes. It feels as if we are intruding on an isolated kingdom of Ice.</p>
            <p>Kristnitökuhraun Lava Field and Craters; On our way back, we will make a scenic aerial pass over Iceland's glorious capital; Reykjavik. The ebb and flow of texture, color, sights, and sounds will mesmerize your senses and make you want to stay and get lost in Iceland's untouched beauty.</p>
          </div>


          <h2 className='lg:text-3xl font-bold my-6'>
            Main Attractions
          </h2>
          <ul class="list-disc text-[15px] text-lg list-inside">
            <li>Reykjavik City
            </li>
            <li > Hellisheiði Plateau
            </li>
            <li >Hengill Geothermal Area
            </li>
            <li >Hellisheiðarvirkjun
            </li>
            <li>Nesjavallavirkjun
            </li>
            <li>Bláfjöll
            </li>
            <li>Kristnitökuhraun Lava Field and Craters </li>
          </ul>
          <h2 className=' text-2xl font-bold'>Summing Up</h2>
          <p className=' text-lg'>To sum up, getting to Mount Hengill on a helicopter ride makes up for a thrilling tour. From high up in the air, you can appreciate the beauty of the mountain's rough landscape, snow-capped peaks, and bubbling geothermal areas.
            The ride is an adventure that will leave you with memories that will last a lifetime. The helicopter provides a unique perspective of Mount Hengill, allowing you to see parts of the mountain that are otherwise inaccessible by foot.
          </p>
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