import React, { useState, useEffect } from 'react';
import SingleBlog from '../utils/SingleBlog'
import { Link } from 'react-router-dom'

const AdminEditBlogs = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    useEffect(() => {
        fetch('https://www.glacierheli.is/api/v1/allBlogs')
            .then((response) => {
                response.json().then((blogs) => {
                    setBlogPosts(blogs);
                });
            });
    }, []);
    return (
        <>
            <div className="flex mt-4">
                <Link to="/panel" className="flex items-center text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center mx-auto">
                {blogPosts.length > 0 && blogPosts.map(blog => (
                    <div key={blog._id}>
                        <SingleBlog blog={blog} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default AdminEditBlogs;