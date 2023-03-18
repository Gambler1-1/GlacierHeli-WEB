import React, { useState, useEffect } from 'react';
import SingleBlogClient from '../utils/SingleBlogClient'

const AllBlogs = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    
    useEffect(() => {
        fetch('https://enigmatic-dawn-76188.herokuapp.com/api/v1/allBlogs')
            .then((response) => {
                response.json().then((blogs) => {
                    setBlogPosts(blogs);
                    console.log(blogs)
                });
            });
    }, []);
    return (
        <>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center mx-auto">
                {blogPosts.length > 0 && blogPosts.map(blog => (
                    <div key={blog._id}>
                        <SingleBlogClient blog={blog} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default AllBlogs;