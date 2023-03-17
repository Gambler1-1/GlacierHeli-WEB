import React from 'react'
import { FaStar, FaArrowsAlt, FaUser } from 'react-icons/fa';

const PrivateToursDescription = () => {
    return (
        <div>
            <div>
                <h1 className='text-center text-2xl text-[#002c52] uppercase font-bold'>
                    We Offer Best In Class
                </h1>
                <div className='lg:grid lg:grid-cols-6 my-10'>
                    <div></div>
                    <div className="flex justify-between col-span-4">
                        <div className="flex flex-col items-center">
                            <FaStar className="text-[#50A477] text-[40px] lg:text-[40px] mb-2" />
                            <span className='lg:text-1xl font-bold italic text-1xl'>Maximum Safety</span>
                            <span className='text-center lg:text-[10px] text-[12px]'>Avoid the crowds, and travel in a highly sanitized environment.</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaArrowsAlt className="text-[#50A477] text-[40px] lg:text-[40px] mb-2" />
                            <span className='lg:text-1xl text-1xl italic font-bold'>Unlimited Convenience
                            </span>
                            <span className='text-center lg:text-[10px] text-[12px]'>Skip airport queues, save time and enjoy more comfortable seats.</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaUser className="text-[#50A477] text-[40px] lg:text-[40px] mb-2" />
                            <span className='lg:text-1xl text-1xl italic font-bold'>Personalized Services</span>
                            <span className='text-center lg:text-[10px] text-[12px]'>Define your itineraries, and fly in absolute luxury and privacy.</span>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <h1 className='text-center lg:text-3xl text-[#002c52] uppercase font-bold'>
                Introducing HeliTaxi: It’s As Good As It Sounds!
            </h1>
            <p className='text-center text-[18px] text-justify  my-8'>
                A helicopter transfer can give you an accessibility to remote farms or anywhere that is hard to reach by any other transport and save you a considerable amount of time especially if you are on a tight schedule and can not afford to wait. It comes with an aerial view of amazing places on your way. Glacier Heli now offers a premium helicopter taxi service! Our modern and meticulously maintained Helicopters will take you anywhere you desire while keeping you right on schedule!
            </p>
            <h1 className='lg:text-center lg:text-3xl text-[#002c52] uppercase font-bold'>
                The Benefits of HeliTaxi
            </h1>
            <p className='text-center text-[18px] text-justify  my-8'>
                A helicopter is the ultimate luxurious mode of transport. We are pretty sure that we all wish we had one! We understand that not everyone resides in Reykjavík or has access to an airport to immediately reach their tour destination or otherwise. We answered your prayers by introducing the first HeliTaxi in Iceland! Our extensively trained pilots and crew will pick and drop you off from your remote farms with great comfort and ease. Our private helicopter charters offer a level of flexibility for travel to remote, crowded or otherwise hard-to-reach destinations. HeliTaxi will also land on its designated bases which will serve as both pick and drop off points
            </p>
            <p className='text-center text-[18px] text-justify  my-8'>
                Being the first to introduce this TaxiHeli service in Iceland gives us immense pleasure and hope while bringing us all closer to our vision of bringing people together and helping them commute easily with making beautiful memories. Just send us an email to get a quick quotation and Our HeliTaxi will pick you up from your desired location.
            </p>
            <p className='text-center text-[18px] text-justify  my-8'>
                For landing at farms we need permission from the owner of the property. Please inform us if you have permission while booking with us. HeliTaxi’s private helicopter charter promises to offer you an incredible one-of-a-kind experience bathed in bliss, opulence, merriment and full satisfaction
            </p>            
        </div>
    )
}

export default PrivateToursDescription