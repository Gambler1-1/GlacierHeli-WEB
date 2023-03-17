import React from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom'

const SingleBlogClient = ({ blog }) => {
    const { title, summary, coverPhoto, images, content, author, createdAt, _id } = blog;
    return (
        <div className="w-full md:w-2/3 px-2 mb-4">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">

                <img
                    className="w-[360px] h-44 object-cover object-center"
                    src={images[0]}
                    alt={coverPhoto}
                />

                <div className="p-6">


                    <h1 className="text-xl max-w-1xl font-bold mb-4">{title}</h1>


                    <div className="flex justify-between text-gray-600 text-sm mb-4">
                        <span>{format(new Date(createdAt), 'MMMM dd, yyyy')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlogClient;





