import React from 'react'
import logo from '../assets/images/helicopter.jpg'
import logo2 from '../assets/images/city.jpg'
import first from '../assets/images/1.jpeg'
import second from '../assets/images/2.jpeg'
import third from '../assets/images/3.jpeg'
import fourth from '../assets/images/4.jpeg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const SocialMediaComponent = () => {
    return (
        <div className="bg-white ">
            {/* <div className="text-black text-center">
                <h1 className='text-1xl text-[#002c52]'>
                    Blog & News
                </h1>
                <h1 className="lg:font-bold lg:text-3xl sm:font-light sm:mx-4 sm:text-xs">
                    Latest News
                </h1>


                <div className="mt-4 lg:w-2/4 mx-auto text-center text-[14px]">
                    <p>
                        Latest updates about Icelandic Tourism , culture , regions and surroundings. 
                    </p>   
                </div>



            </div> */}
            <div className='bg-[#50A477] py-8'>
                <h1 className='text-2xl font-bold text-[#002c52] italic text-center'>
                    Blog & News
                </h1>
                <h1 className="lg:font-bold text-white lg:text-3xl text-center sm:font-light sm:mx-4 sm:text-xs">
                    Latest News
                </h1>
                <div className='text-center font-bold text-[16px] pt-4 px-8 text-white'>
                    Latest updates about Icelandic Tourism , culture , regions and surroundings.


                </div>


            </div>
            <div className="mt-10 px-10">
                <Slider {...settings}>
                    <div>
                        <img src={logo} className="w-full h-[250px] p-1 rounded-xl" />
                    </div>
                    <div>
                        <img src={logo2} className="w-full h-[250px] p-1 rounded-xl" />
                    </div>
                    <div>
                        <img src={first} className="w-full h-[250px] p-1 rounded-xl" />
                    </div>
                    <div>
                        <img src={second} className="w-full h-[250px] p-1 rounded-xl" />
                    </div>
                    <div>
                        <img src={third} className="w-full h-[250px] p-1 rounded-xl" />
                    </div>
                    <div>
                        <img src={fourth} className="w-full h-[250px] p-1 rounded-xl" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default SocialMediaComponent