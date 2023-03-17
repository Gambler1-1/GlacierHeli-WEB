import React from 'react'
import AllBlogs from './AllBlogs'
import BlogPage from './BlogPageComponent1'
import BlogPageComponent2 from './BlogPageComponent2'
const Blogs = () => {
    return (
        <div>
            <BlogPage />
            <BlogPageComponent2 />
            <div className='mt-4 grid grid-cols-10'>
                <div></div>
                <div className='col-span-8'>
                    <AllBlogs />
                </div>
                <div></div>
            </div>

        </div>
    )
}

export default Blogs