import React from 'react';
import Sidebar from './BlogSideBar';
import BlogImage from '../assets/images/blogBackground.jpeg';

const BlogPage = () => {
  return (
    <div className="relative container mx-auto py-8">
      <div className="flex flex-col lg:flex-row">
        <div className="relative">
          <img src={BlogImage} className='lg:w-[1400px] lg:h-[500px] rounded-lg' />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold">
            <h1 className="lg:text-4xl font-bold uppercase mb-4">Blogs about Iceland</h1>
            <p className="hidden lg:block text-lg">Learn about the nature and culture of Iceland. Find travel information and everything you need to know about the island.</p>
            <form className="">
              <div className='lg:grid lg:grid-cols-2 border border-2 mt-2'>
                <div>
                  <input
                    type="text"
                    placeholder="Search blogs, destinations, attractions or anything you have in mind..."
                    className="w-full p-2 border focus:outline-none focus:border-blue-500"

                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#50A477] text-white py-2 hover:bg-blue-600 transition-all duration-300"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;  