import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { formatISO9075 } from 'date-fns';
import { UserContext } from '../utils/UserContext';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';


const AdminBlogPage = () => {
    const { id } = useParams();
    const [blogInfo, setBlogInfo] = useState(null)
    const { userInfo } = useContext(UserContext)

    useEffect(() => {
        fetch(`https://www.glacieheli.is/api/v1/allBlogs/${id}`)
            .then(response => {
                response.json().then(blogInfo => {
                    setBlogInfo(blogInfo);
                    console.log(blogInfo);
                })
            })
    }, []);
    if (!blogInfo) return '';

    const { title, summary, images, coverPhoto, content, author, createdAt } = blogInfo;

    return (
        <div>
            <div className="bg-image bg-cover bg-center h-[550px] sm:h-[400px] md:h-[550px] uppercase" style={{ backgroundImage: `url(${images[0]})` }}>
            </div>
            <div class="p-10">
                <div class="text-2xl">
                    <p className="text-lg mb-4 text-center">Created By {author} at: {formatISO9075(new Date(createdAt))}</p>
                    <Link className='edit-btn' to={`/edit/${blogInfo._id}`}>
                        <div className='edit-btn mx-auto flex justify-center bg-black text-white p-4 my-4 w-1/5'>
                            <FontAwesomeIcon icon={faEdit} className='mr-2' />
                            <button>Edit this blog</button>
                        </div>
                    </Link>
                    <h1 className='lg:text-4xl text-[15px] text-center mb-6 font-bold uppercase'>
                        {title}
                    </h1>
                    {/* <div className='text-[15px] lg:text-2xl'>
            {content}
        </div> */}
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                </div>
            </div>
        </div>
    )
}

export default AdminBlogPage;