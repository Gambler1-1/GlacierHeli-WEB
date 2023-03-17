import React, { useEffect } from 'react';
// import tales from '../assets/images/tales.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCalendarAlt, faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import Form from '../utils/Form2';

const GameOfThronesTour = () => {

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
        // <div>

        //     <div className="bg-image bg-cover bg-center h-[550px] sm:h-[400px] md:h-[550px] uppercase" style={{ backgroundImage: `url(${tales})` }}>
        //     </div>
        //     <div class="lg:grid lg:grid-cols-5 gap-4 p-10">
        //         <div class="col-span-3 md:col-span-3 text-2xl">
        //             <h1 className='lg:text-4xl text-[15px] mb-6 font-bold uppercase'>
        //                 Tales of Fire and of Ice; Þórisjökull Glacier and the Hengill Geothermal Area
        //             </h1>
        //             <div class="flex items-center my-2">
        //                 <div class="flex-1 border-b border-dotted border-gray-400"></div>
        //             </div>
        //             <div class="grid grid-cols-3 gap-4">
        //                 <div class="p-4">
        //                     <div className='text-center'>
        //                         <FontAwesomeIcon icon={faClock} className='lg:h-10' />
        //                     </div>

        //                     <div class="lg:text-2xl text-[15px] text-center font-semibold">
        //                         <h1>2Hours</h1>
        //                     </div>
        //                     <div class="text-lg font-medium">
        //                         <span id="ampm"></span>
        //                     </div>
        //                 </div>
        //                 <div class="p-4">
        //                     <div className='text-center'>
        //                         <FontAwesomeIcon icon={faUser} className='lg:h-10' />
        //                     </div>

        //                     <div class="lg:text-2xl text-[15px] text-center font-semibold">
        //                         <h1>Age2+</h1>
        //                     </div>
        //                     <div class="text-lg font-medium">
        //                         <span id="ampm"></span>
        //                     </div>
        //                 </div>
        //                 <div class="p-4">
        //                     <div className='text-center'>
        //                         <FontAwesomeIcon icon={faCalendarAlt} className='lg:h-10' />

        //                     </div>

        //                     <div class="lg:text-2xl text-[15px] text-center font-semibold">
        //                         <h1>All Months</h1>
        //                     </div>
        //                     <div class="text-lg font-medium">
        //                         <span id="ampm"></span>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="flex items-center lg:my-2">
        //                 <div class="flex-1 border-b border-dotted border-gray-400"></div>
        //             </div>
        //             <h2 className='text-[15px] lg:text-2xl'><br /><br />Join us on our most unique tour yet!<br /><br />
        //             </h2>
        //             <div className='text-[15px] lg:text-2xl'>
        //                 <p>The Tales of Fire and Ice Tour is an amalgamation of our most popular aerial tours! The tour also comes equipped with two landings; one on a glacier and the other on a volcano!<br /><br /></p>
        //                 <p>Your adventure will commence at the Reykjavik Domestic Airport. Our experienced pilot will greet you with the warmest welcome and whisk you straight towards the Þórisjökull glacier for our first landing. During the journey towards the glacier we will fly you across the highest most bedazzled waterfall in all of Iceland; the famed Glymur! This helicopter tour will save you hours of hiking and you will enjoy the panoramic view from your comfortable seat high in the sky. Once we reach our designated landing stop atop the vast glacier; you will have a chance to meander across the glacier, take photos and make countless memories! Throw snowballs, have a snowball fight! Build your very own snow angel and try making an snowman! Just simply enjoying the stunning view is enough in its own right as well! The crisp fresh glacier air is tantalizing to your senses.<br /><br /></p>
        //                 <p>From there onwards, we will take you the Þingvellir National Park, on the Golden Circle, which is a UNESCO World Heritage Site. The place is of considerable historical importance as it proudly boasts being the birthplace of the oldest existing parliament in the world. Here, You will also have a chance to gaze upon the sparkling waters of Iceland’s largest lake. The area weaves a colorful tapestry of Icelandic history. You will gaze upon the imprints of the Vikings when looking down the Canyon that splits the American and the Eurasian continents at the Þingvellir National Park. You will also have a chance to see the continental drift of the Eurasian and the North American tectonic plates that’s fully visible from above.<br /><br /></p>
        //                 <p>The second landing of this tour would be at the Hengill Geothermal Area. The area received its name from the Hengill volcano which is situated in a remote valley that can only be accessed by a helicopter or a hike. The valley boasts hot springs, boiling mud pots that you can walk towards and observe from very up close. The magical place will wrap you around its enchanted little finger and make you fall in love with the otherworldly beauty surrounding you.<br /><br /></p>
        //                 <p>
        //                     The total duration of the tour is 100-130 minutes of which 60-80 minute will be the guided helicopter flight and a 15 minute landing on a glacier; and a 15 minute landing by a remote geothermal area situated on an old volcano.
        //                 </p>
        //             </div>

        //             <h1 className='lg:text-4xl font-bold lg:my-8'>
        //                 Main Attractions
        //             </h1>
        //             <ul class="list-disc text-[15px] lg:text-2xl list-inside">
        //                 <li class="mb-2">Þórisjökull Glacier
        //                 </li>
        //                 <li class="mb-2"> Glymur Waterfall
        //                 </li>
        //                 <li class="mb-2">Þingvellir National Park
        //                 </li>
        //                 <li class="mb-2">
        //                     Hengill Geothermal Area

        //                 </li>
        //             </ul>
        //             <h1 className='lg:text-4xl font-bold my-8'>
        //                 What to Bring on the Tour
        //             </h1>
        //             <ul class="list-disc text-[15px] lg:text-2xl list-inside">
        //                 <li class="mb-2">Warm Clothing

        //                 </li>
        //                 <li class="mb-2"> Snacks
        //                 </li>
        //                 <li class="mb-2">Binoculars (if desired)
        //                 </li>
        //                 <li class="mb-2">
        //                     Most importantly, a smile!
        //                 </li>
        //             </ul>
        //         </div>
        //         <div class="col-span-2">
        //             <h1 className='text-center font-bold mt-10  lg:text-3xl'>BOOK THIS TOUR</h1>
        //             <div class="bokunWidget" data-src="https://widgets.bokun.io/online-sales/103ed684-7b5c-437e-ba25-4fae951ded34/experience-calendar/694171"></div>
        //             <div className='h-[700px]'>
        //                 <Form />
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div>
            <h1>Gameof thrones</h1>
        </div>
    );
};

export default GameOfThronesTour;