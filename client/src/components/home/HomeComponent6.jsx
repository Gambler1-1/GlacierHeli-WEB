import React from "react";
import tripadvisor from '../assets/images/tripadvisor.png'
import viator from '../assets/images/viator.png'
import expedia from '../assets/images/expedia.png'
import getyourguide from '../assets/images/getyourguide.png'
import travellerchoice from '../assets/images/travellerchoice.png'

const HomeComponent7 = () => {
    return (
        <div className=" text-center mt-10">
            <h1 className="text-3xl font-bold uppercase text-[#002c52]">Trusted by</h1>
            <div className="grid  pb-10 px-10 lg:grid-cols-5 md:grid-cols-2  md:justify-items-center ">
                <img src={travellerchoice} alt="" className=" mt-4 w-[180px] h-[200px] text-center " />
                <a href='https://www.viator.com/tours/Reykjavik/The-Eruption-Escapade-Tour-of-Volcanic-Eruption-in-Geldingadal/d905-352607P9'>
                    <img src={viator} alt="" className=" w-[280px] sm:pt-12 md:pt-12 text-center " />
                </a>
                <img src={expedia} alt="" className="w-[200px] sm:pt-9 md:pt-9 text-center " />
                <a href="https://www.tripadvisor.com/Attraction_Review-g189970-d24084346-Reviews-Glacier_Heli_Iceland-Reykjavik_Capital_Region.html">
                    <img src={tripadvisor} alt="" className="w-[230px] text-center sm:pt-6 md:pt-6" />
                </a>

                <a href="https://www.getyourguide.com/reykjavik-l30/from-reykjavik-fagradalsfjall-volcano-helicopter-flight-t418541/">
                    <img src={getyourguide} alt="" className="h-[170px] text-center sm:pt-9 lg:pt-9" />
                </a>
            </div>
        </div>
    );
};

export default HomeComponent7;