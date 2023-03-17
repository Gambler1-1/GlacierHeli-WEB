import React from 'react'

const AboutUsComponent5 = () => {
    return (
        <div className='mt-14'>
            <div className='lg:grid lg:grid-cols-5'>
                <div></div>
                <div className="lg:grid lg:grid-cols-2 gap-4 col-span-3">
                    <div>
                        <h1 className='text-1xl text-[#002c52] font-bold border-b border-[#002c52]'>
                            Excellent value for money
                        </h1>
                        <p className='my-6 text-[14px]'>
                            We can guarantee that you’re receiving a great value for money.<br /> We provide top-of-the-line helicopter tours at incomparable prices,<br /> and we’re dedicated to providing both joyful and high-quality <br />customer experience.
                        </p>
                    </div>
                    <div>
                        <h1 className='text-1xl text-[#002c52] font-bold border-b border-[#002c52]'>
                            Our Core Values
                        </h1>
                        <p className='my-6 text-[14px]'>
                            We value services that are inventive, punctual, efficient, cost-effective, reliable, and of the highest quality.
                        </p>
                        <ul class="list-disc text-[14px] pl-6">
                            <li class="pb-2 list-custom-bullet">100% Transparency</li>
                            <li class="pb-2 list-custom-bullet">No Hidden Charges</li>
                            <li class="pb-2 list-custom-bullet">24x7 Customer Support</li>
                        </ul>

                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default AboutUsComponent5