import React from "react";
import Form from "../utils/Form1";
import bgimage from "../assets/images/aboutbgimage.jpeg"

const AboutUsComponent7 = () => {
  return (
    <div className="bg-image bg-cover bg-center h-[650px] uppercase" style={{ backgroundImage: `url(${bgimage})` }}>
      <div className="lg:grid lg:grid-cols-6">
        <div></div>
        <div className="pt-10 col-span-2 text-white">
          <div
            className="text-black truncate text-white text-[20px] xl:text-[20px] fill-white  text-center align-top leading-none font-semibold pt-3">
            Contact Info<br />
          </div>
          <div className="text-center">
            <h1 className="text-1xl font-semibold mt-10">Address</h1>
            <p className="lg:text-1xl">Grensasvegur 7, 108 Reykjavik, Iceland

            </p>
          </div>
          <div className="text-center">
            <h1 className="lg:text-1xl text-1xl font-semibold mt-10">Email Us
            </h1>
            <p className="lg:text-1xl text-1xl">info@glacierheli.is
            </p>
          </div>
          <div className="text-center">
            <h1 className="lg:text-1xl text-1xl font-semibold mt-10">Call Us
            </h1>
            <p className="lg:text-1xl text-1xl">+3545373065
            </p>
          </div>
        </div>
        <div className="col-span-2" id="appointment">
          <Form />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AboutUsComponent7;