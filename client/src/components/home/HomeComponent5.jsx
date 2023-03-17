import React, { useState, useEffect } from 'react';
import testimonialsData from '../utils/JSON/testimonials.json';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Rating from 'react-rating-stars-component';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        setTestimonials(testimonialsData.testimonials);
    }, []);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 4,
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

    return (
        <div className="container mx-auto my-6">
            <div className="text-black text-center">
                <h1 className='text-2xl text-[#002c52]'>
                    Feedback
                </h1>
                <h1 className="lg:font-bold lg:text-4xl sm:font-light sm:mx-4 mb-4 sm:text-xs">
                    What clients say about us
                </h1>

            </div>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="px-6 flex mt-4 justify-center">
                        <div className="w-full max-w-xs mx-auto">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <div className="flex justify-between items-center">
                                    <Rating
                                        value={testimonial.rating}
                                        edit={false}
                                        size={24}
                                        activeColor="#002c52"
                                    />
                                    <p className="text-gray-700 font-bold text-[12px]">{testimonial.name}</p>
                                </div>
                                <p className="text-gray-600 font-medium mb-4">{testimonial.quote}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonials;