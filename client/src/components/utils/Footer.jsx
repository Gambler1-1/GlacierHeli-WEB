import React from "react";

import image from '../assets/images/auth.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPhone,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
    return (
        <div
           
            className="w-full bg-no-repeat bg-top p-2 bg-cover bg-black"
        >
            <div className="xs:container mx-auto md:px-6 lg:px-20">
                <div className="grid grid-row-1 md:grid-cols-4 md:gap-4 text-center text-white">
                    <div className="lg:col-span-1 col-start text-left ">
                        <p className="mt-8 mb-2 mr-2 text-md sm:mb-3 text-justify lg:w-3/3 leading-relaxed ">
                            <span className="text-3xl">Glacierheli.is<br />
                            </span><br />
                            Glaicerheli.is continues to be the market leader in tourism-based operations, with unmatched customer service, the finest aircraft, the most trained pilots, the greatest safety standards, and unique tours
                        </p>
                    </div>
                    <div className="text-center col-center md:col-span-2 text-left mt-5">
                        <h1 className="text-3xl  ">Authorized Travel Agency</h1>
                        <p className="mt-2">Glacierheli is the project of Shai ehf Licensed by Iceland tourism board</p>

                        <div className="flex justify-center flex-wrap mt-4">
                            <a href="https://www.ferdamalastofa.is/en/licences-legislation/travel-agency/list-of-travel-agencies">
                                <img src={image} alt="" className="w-[200px] h-[200px] mx-4" />
                            </a>
                        </div>
                    </div>
                    <div className=" pb-8 pl-10 mt-5 text-left md:col-span-1 lg:col-span-1">
                        <ul>
                            <h1 className=" text-3xl">Connect with us</h1>
                            <li className="my-7 text-sm">
                                <div className="grid grid-cols-7 gap-4">
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="mr-3 text-lg lg:text-xl"
                                    />
                                    <p className="text-sm">
                                        info@Glacierheli.is
                                    </p>
                                </div>
                            </li>
                            <li className="my-2 text-sm">
                                <div className="grid grid-cols-7 gap-4">
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        className="mr-3 text-lg lg:text-xl"
                                    />
                                    <p className="text-sm col-span-6">+354 7879483</p>
                                </div>
                            </li>
                            <li className="my-7 text-sm">
                                <div className="grid grid-cols-7">
                                    <FontAwesomeIcon
                                        icon={faLocationDot}
                                        className="mr-3 text-lg lg:text-xl col-span-1"
                                    />
                                    <p className="text-left col-span-6 text-sm">
                                        Grensasvegur 7, 108 Reykjavik
                                    </p>
                                </div>
                            </li>
                            <li className="my-7 ">
                                <div class="xs:justify-start md:mb-0 basis-1/2 md:basis-auto py-2">
                                    {/* <img src={image1} alt="" className="w-[150px] h-[160px] border-4 border-black rounded-lg" /> */}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* </div> */}

                <div className="text-center justify-center text-white md:font-bold mt-10 text-xs md:text-lg mb-6">
                    @ Copyright GlacierHeli. All Rights Reserved
                </div>
            </div>
        </div>

    );
};

export default Footer;