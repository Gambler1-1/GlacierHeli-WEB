import React from 'react'
import { Link } from 'react-router-dom';
import image1 from '../assets/images/Mountaskja.jpg';
import image2 from '../assets/images/FV.jpeg';
import image3 from '../assets/images/geothermal.jpg';
import image4 from '../assets/images/hengiltour.jpeg';
import rejkavik from '../assets/images/rejkavik.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCalendarAlt, faClock, faDollarSign } from '@fortawesome/free-solid-svg-icons';


const TourComponent3 = () => {
  return (
    <div>
      <div className='flex items-center justify-center'>
        <div className='font-bold uppercase text-[#002c52] text-2xl text-center tracking-wider mr-4'>
          Tours from Reykjavik
        </div>
        {/* <img src={rejkavik} alt='rejkavik' className='w-[90px] h-[90px]' /> */}
      </div>
      <div className='flex flex-col gap-2 md:flex-row md:justify-center'>
        <div className='flex flex-col md:w-1/2' >
          <div className=''>
            <Link to='/Eruption-Escapade'>
              <div className='relative hover:scale-105 transition duration-500 cursor-pointer'>                
                <div className='flex flex-row justify-between'>
                  </div>
                  <div className='absolute top-0 left-0 bg-[#50A477] text-white font-bold text-lg px-2 py-1 rounded-tr-lg'>
                  ★★★★★
                </div>
                <img src={image1} alt='example' className='w-full h-80 object-cover rounded-md' />
                <div className='absolute bottom-0 left-0 w-full py-2 px-2 text-white font-bold'>
                  <p className='shadow bg-black p-4 rounded-lg backdrop-opacity-10 backdrop-invert bg-black/30'>
                    <p className='text-white capitalize text-center text-lg font-bold '>A Flashing Heli Ride; Reykjavik City And Mount Esja
                    </p>

                    <div className='flex justify-between'>
                      <div className='text-[#F7C033] flex '>
                        
                        <FontAwesomeIcon icon={faClock} className='lg:h-6  pr-2' />
                      
                        <div className="lg:text-1xl text-[18px] font-semibold">
                          <h1> 40 Mins</h1>
                        </div>
                      </div>
                      <div className='bg-[#50A477] font-bold text-lg py-[1px] rounded-tr-lg px-2'>

                        <div>29,500 ISK</div>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </Link>
          </div>
          
          <Link to='/Bewildering-Geothermal'>

            <div className='relative hover:scale-105 transition mt-6 duration-500 cursor-pointer'>
              <div className='absolute top-0 left-0 bg-[#50A477] text-white font-bold text-lg px-2 py-1 rounded-tr-lg'>
                ★★★★★
              </div>
              <img src={image3} alt='example' className='w-full h-80 object-cover rounded-md' />
              <div className='absolute bottom-0 left-0 w-full py-2 px-2 text-white font-bold'>
                <p className='shadow bg-black p-4 rounded-lg backdrop-opacity-10 backdrop-invert bg-black/30'>
                  <p className='text-white capitalize text-center text-lg font-bold '>Tales Of Ice And Fire; The ÞÓRISJÖKULL And Hengill Tour
                  </p>

                  <div className='flex justify-between'>
                    <div className='text-[#F7C033] flex'>
                      <FontAwesomeIcon icon={faClock} className='lg:h-6  pr-2' />
                      <div className="lg:text-1xl text-[18px] font-semibold">
                        <h1> 130 Mins </h1>
                      </div>
                    </div>
                    <div className='bg-[#50A477] font-bold text-lg py-[1px] rounded-tr-lg px-2'>

                      <div>109,900 ISK</div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </Link>
        </div>
        <br />
        <div className='flex flex-col md:w-1/2'>
          <Link to='/TalesOfFire'>
            <div className='relative hover:scale-105 transition duration-500 cursor-pointer'>
              <div className='absolute top-0 left-0 bg-[#50A477] text-white font-bold text-lg px-2 py-1 rounded-tr-lg'>
                ★★★★★
              </div>
              <img src={image2} alt='example' className='w-full h-80 object-cover rounded-md' />
              <div className='absolute bottom-0 left-0 w-full py-2 px-2 text-white font-bold'>
                <p className='shadow bg-black p-4 rounded-lg backdrop-opacity-10 backdrop-invert bg-black/30'>
                  <p className='text-white capitalize text-center text-lg font-bold '>Do you have the Guts to visit Fagradalsfjall Volcano

                  </p>

                  <div className='flex justify-between'>
                    <div className='text-[#F7C033] flex'>
                      <FontAwesomeIcon icon={faClock} className='lg:h-6  pr-2' />
                      <div className="lg:text-1xl text-[18px] font-semibold">
                        <h1>40 Mins</h1>
                      </div>
                    </div>
                    <div className='bg-[#50A477] font-bold text-lg py-[1px] rounded-tr-lg px-2'>

                      <div>49,000 ISK</div>
                    </div>
                  </div>
                </p>
              </div>
            </div>

          </Link>
          <Link to='/Dazzling'>

            <div className='relative hover:scale-105 transition duration-500 mt-6 cursor-pointer'>
              <div className='absolute top-0 left-0 bg-[#50A477] text-white font-bold text-lg px-2 py-1 rounded-tr-lg'>
                ★★★★★
              </div>
              <img src={image4} alt='example' className='w-full h-80 object-cover rounded-md' />
              <div className='absolute bottom-0 left-0 w-full py-2 px-2 text-white font-bold'>
                <p className='shadow bg-black p-4 rounded-lg backdrop-opacity-10 backdrop-invert bg-black/30'>
                  <p className='text-white capitalize text-center text-lg font-bold '>
                    The Hengil Valcano : Helicopter tour!


                  </p>

                  <div className='flex justify-between'>
                    <div className='text-[#F7C033] flex'>
                      <FontAwesomeIcon icon={faClock} className='lg:h-6  pr-2' />
                      <div className="lg:text-1xl text-[18px] font-semibold">
                        <h1>60 Mins</h1>
                      </div>
                    </div>
                    <div className='bg-[#50A477] font-bold text-lg py-[1px] rounded-tr-lg px-2'>

                      <div>49,550 ISK</div>
                    </div>
                  </div>
                </p>
              </div>
            </div>

          </Link>
        </div>
      </div>
    </div>
  )
}

export default TourComponent3;