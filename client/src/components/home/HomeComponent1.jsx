import React from 'react';
import image from '../assets/images/home.webp';
import logo from '../assets/images/glacier.png';

const homeComponent1 = () => {
  return (
    <div>
      <div className="video">
        <video className="h-[500px] w-full object-cover" autoPlay loop no-controls muted>
          <source src={require("../assets/videos/covervideo.mp4")} type="video/mp4" />
        </video>
      </div>
      <div class="absolute inset-x-1/4 inset-y-[37%] text-white font-bold text-center">
        <h1 className="lg:text-5xl italic uppercase text-5xl">
        Be flying high with us!
        </h1>
      </div>
    </div>
  );
};

export default homeComponent1;