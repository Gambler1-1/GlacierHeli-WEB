import React from 'react';
import Sidebar from './BlogSideBar';
import BlogImage from '../assets/images/blogBackground.jpg'

const BlogPage = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col lg:flex-row">
        <div>
          <img src={BlogImage} className='lg:w-[1400px] lg:h-[500px] rounded-lg' />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;