import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/images/game.jpeg';
import image3 from '../assets/images/askja.jpg';
import image2 from '../assets/images/kettle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-solid-svg-icons';


const HomeComponent4 = () => {
    return (
        <div>
            <div className='font-bold uppercase text-[#002c52] text-2xl text-center'>
                Tours from North Iceland
            </div>
            <div className='flex flex-col md:flex-row justify-between '>
                <div className='flex flex-col md:w-1/2 p-2 hover:scale-105 transition duration-500 cursor-pointers'>
                    <Link to='/Helicopter'>

                        <div className='relative hover:scale-105 transition duration-500 mt-6 cursor-pointer'>
                            <div className='absolute top-0 left-0 bg-[#50A477] text-white font-bold text-lg px-2 py-1 rounded-tr-lg'>
                                ★★★★★
                            </div>
                            <img src={image1} alt='example' className='w-full h-80 object-cover rounded-md' />
                            <div className='absolute bottom-0 left-0 w-full py-2 px-2 text-white font-bold'>
                                <p className='text-2xl'>
                                    <p className='lg:text-2xl  text-center mb-2'>
                                        A Thrilling Heli Ride from Modrudalur toward Mount Askja


                                    </p>

                                    <div className='flex justify-between'>
                                        <div className='text-[#F7C033] flex'>
                                            <FontAwesomeIcon icon={faClock} className='lg:h-8 whitespace-normal' />
                                            <div className="lg:text-1xl text-[15px] font-semibold">
                                                <h1>   70 Mins</h1>
                                            </div>
                                        </div>
                                        <div className='bg-[#50A477] font-bold text-lg py-[1px] rounded-tr-lg px-2'>

                                            <div>59,000 ISK</div>
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='flex flex-col md:w-1/2 p-2 hover:scale-105 transition duration-500 cursor-pointers'>
                    <Link to='/StuðlagilCanyon '>

                        <div className='relative hover:scale-105 transition duration-500 mt-6 cursor-pointer'>
                            <div className='absolute top-0 left-0 bg-[#50A477] text-white font-bold text-lg px-2 py-1 rounded-tr-lg'>
                                ★★★★★
                            </div>
                            <img src={image3} alt='example' className='w-full h-80 object-cover rounded-md' />
                            <div className='absolute bottom-0 left-0 w-full py-2 px-2 text-white font-bold'>
                                <p className='text-2xl'>
                                    <p className='lg:text-2xl  text-center mb-2'>
                                        Stuðlagil Canyon Helicopter Tour


                                    </p>

                                    <div className='flex justify-between'>
                                        <div className='text-[#F7C033] flex'>
                                            <FontAwesomeIcon icon={faClock} className='lg:h-8' />
                                            <div className="lg:text-1xl text-[15px] font-semibold">
                                                <h1> 60 Mins</h1>
                                            </div>
                                        </div>
                                        <div className='bg-[#50A477] font-bold text-lg py-[1px] rounded-tr-lg px-2'>

                                            <div>56,999 ISK</div>
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>

                    </Link>
                </div>
                <div className='flex flex-col md:w-1/2 p-2 hover:scale-105 transition duration-500 cursor-pointers'>
                    <Link to='/ModrudalurKettle'>
                        {/* <div className='relative my-10'>
                            <img src={image2} alt='example' className='w-full h-80 object-cover rounded-md' />
                            <div className='absolute bottom-0 w-full text-center bg-[#002c52] text-white text-[12px] font-bold py-2 rounded-b-lg'>
                                <p className='text-white'>27500 ISK</p>

                                Modrudalur Kettle Holes: Helicopter Ride Experience
                            </div>
                        </div> */}

                        <div className='relative hover:scale-105 transition duration-500 mt-6 cursor-pointer'>
                            <div className='absolute top-0 left-0 bg-[#50A477] text-white font-bold text-lg px-2 py-1 rounded-tr-lg'>
                                ★★★★★
                            </div>
                            <img src={image2} alt='example' className='w-full h-80 object-cover rounded-md' />
                            <div className='absolute bottom-0 left-0 w-full py-2 px-2 text-white font-bold'>
                                <p className='text-2xl'>
                                    <p className='lg:text-2xl  text-center mb-2'>
                                    Modrudalur Kettle Holes: Helicopter Ride Experience


                                    </p>

                                    <div className='flex justify-between'>
                                        <div className='text-[#F7C033] flex'>
                                            <FontAwesomeIcon icon={faClock} className='lg:h-8' /><br />
                                            <div className="lg:text-1xl text-[15px] font-semibold">
                                                <h1> 25 Mins</h1>
                                            </div>
                                        </div>
                                        <div className='bg-[#50A477] font-bold text-lg py-[1px] rounded-tr-lg px-2'>

                                            <div>27500 ISK</div>
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeComponent4;



