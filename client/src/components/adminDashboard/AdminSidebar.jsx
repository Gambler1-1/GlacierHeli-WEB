import React, { useState } from 'react';
import { FaBlog, FaSuitcase, FaUsers, FaStar, FaHome, FaCheck, FaTimesCircle } from 'react-icons/fa';

const AdminSidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOrdersDropdownOpen, setIsOrdersDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };
  const handleOrdersMouseEnter = () => {
    setIsOrdersDropdownOpen(true);
  };

  const handleOrdersMouseLeave = () => {
    setIsOrdersDropdownOpen(false);
  };

  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-40 bg-[#222222]">
        <div className="h-16 px-4 flex items-center">
          <FaHome className="inline-block mr-2 text-white" />
          <span className="font-bold text-xl text-white">Dashboard</span>
        </div>
        <div className="flex-grow py-4 px-4">
          <ul className="space-y-4">
            <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                className="block py-2 px-4 text-white"
              >
                <FaBlog className="inline-block mr-2" />
                Blogs
              </a>
              <ul
                className={`absolute top-0 left-full bg-gray-100 rounded-lg shadow-lg mt-2 ${isDropdownOpen ? 'block' : 'hidden'
                  }`}
              >
                <li>
                  <a
                    href="/create-blog"
                    className="block py-2 px-4"
                  >
                    Create Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/admin-blog"
                    className="block py-2 px-4"
                  >
                    Manage Blogs
                  </a>
                </li>
              </ul>
            </li>

            <li
              className="relative"
              onMouseEnter={handleOrdersMouseEnter}
              onMouseLeave={handleOrdersMouseLeave}
            >
              <a
                className="block py-2 px-4 text-white"
              >
                <FaStar className="inline-block mr-2" />
                Orders
              </a>
              <ul
                className={`absolute top-0 left-full bg-gray-100 rounded-lg shadow-lg mt-2 ${isOrdersDropdownOpen ? 'block' : 'hidden'
                  }`}
              >
                <li>
                  <a
                    href="/confirmed-orders"
                    className="block py-2 px-4"
                  >
                    <FaCheck className="inline-block mr-2" />
                    Confirmed Orders
                  </a>
                </li>
                <li>
                  <a
                    href="/failed-orders"
                    className="block py-2 px-4"
                  >
                    <FaTimesCircle className="inline-block mr-2" />
                    Failed Orders
                  </a>
                </li>
              </ul>
            </li>


            <li>

              <a
                href="/about"
                className="block py-2 px-4 text-white"
              >
                <FaSuitcase className="inline-block mr-2" />
                Tours
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block py-2 px-4 text-white"
              >
                <FaUsers className="inline-block mr-2" />
                Users
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-4 text-white"
              >
                <FaStar className="inline-block mr-2" />
                Reviews
              </a>
            </li>

          </ul>
        </div>
      </div>
      <div className="flex-grow bg-gray-200">
        <p></p>
      </div>
    </div>
  );
};

export default AdminSidebar;