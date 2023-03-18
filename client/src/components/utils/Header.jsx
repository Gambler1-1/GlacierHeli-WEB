import { React, useState } from "react";
import { Link } from "react-router-dom";
import { faRegular, faBars } from "@fortawesome/free-solid-svg-icons";
import { faSolid, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/images/logo.png"
import {
  faFacebook,
  faInstagram,
  faWhatsapp,

} from "@fortawesome/free-brands-svg-icons";
const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="">
      <div className="container mx-auto py-2 ">
        <header class="text-[#000000] body-font w-full">
          <div class="flex flex-wrap md:flex-row md:items-center">
            <div class="xs:justify-start md:mb-0 basis-1/2 mt-2 pl-2 md:basis-auto">
              <img src={logo} alt="" className="w-[180px] h-[30px]" />
            </div>
            <nav class="hidden md:ml-auto md:mr-auto md:flex flex-wrap items-center text-[18px] justify-end text-center">
              <Link to="/">
                <a class="mr-5 hover:text-[#50A477]">Home</a>
              </Link>
              {/* <Link to="/about">
              <a class="mr-5 hover:text-gray-900">Tours</a>
            </Link> */}
              <Link to="/Tour">
                <a class="mr-5 hover:text-[#50A477]">Tours</a>
              </Link>
              <Link to="/Our-Fleet">
                <a class="mr-5 hover:text-[#50A477]">
                  Our Fleet
                </a>
              </Link>
              <Link to="/privateTours">
                <a class="mr-5 hover:text-[#50A477]">Private Tours</a>
              </Link>

              <Link to="/blogs">
                <a class="mr-5 hover:text-[#50A477]">Blogs</a>
              </Link>
              <Link to="/aboutus">
                <a class="mr-5 hover:text-[#50A477]">About Us</a>
              </Link>

            </nav>
            <div class="hidden md:flex md:items-center md:ml-auto md:mr-4">
              <a href="https://www.facebook.com/" className="text-black text-[18px] hover:text-gray-600 mr-4">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="https://www.instagram.com/" className="text-black text-[18px] hover:text-gray-600 mr-4">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="https://wa.me/" className="text-black text-[18px] hover:text-gray-600">
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </a>
            </div>
            <div
              className="mt-3 pr-2 md:hidden lg:hidden basis-1/2 text-right"
              onClick={handleClick}
            >
              {!nav ? (
                <FontAwesomeIcon
                  icon={faBars}
                  className="w-5 flex-row justify-end"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faXmark}
                  className="w-5 justify-end flex-row"
                />
              )}
            </div>
          </div>

          <ul
            className={
              !nav
                ? "hidden"
                : "absolute  bg-gray-50 w-full  px-8 right-0 top-15 z-[999999]"
            }
          >
            <nav class="">
              <Link to="/" onClick={handleClick}>
                <li class="border-b-2 w-full p-2 mt-4">Home</li>
              </Link>
              <Link to="/Tour" onClick={handleClick}>
                <li class="border-b-2 w-full p-2 mt-4">Tours</li>
              </Link>
              <Link to="/Our-Fleet" onClick={handleClick}>
                <li class="border-b-2 w-full p-2 mt-4">
                  Our Fleet
                </li>
              </Link>
              <Link to="/privateTours" onClick={handleClick}>
                <li class="border-b-2 w-full p-2 mt-4">Private Tours</li>
              </Link>
              <Link to="/blogs" onClick={handleClick}>
                <li class="border-b-2 w-full p-2 mt-4">Blogs</li>
              </Link>
              <Link to="/aboutus" onClick={handleClick}>
                <li class="border-b-2 w-full p-2 mt-4">About Us</li>
              </Link>
            </nav>
            
            <div className="mt-4 md:hidden">
              <a href="https://www.facebook.com/" className="text-black hover:text-gray-600 mr-4">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="https://www.instagram.com/" className="text-black hover:text-gray-600 mr-4">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="https://wa.me/" className="text-black hover:text-gray-600">
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </a>
            </div>
            <br />
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Header;