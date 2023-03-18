import { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Editor from "../utils/Editor";


const BlogForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [blogImages, setBlogImages] = useState(null);

    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('author', author);
        formData.append('title', title);
        formData.append('content', content);
        // formData.append('image', image);

        for (let i = 0; i < blogImages.length; i++) {
            formData.append("blogImages", blogImages[i]);
          }
        const response = await axios.post('https://www.glacierheli.is/api/v1/blogs', formData);
        console.log(response);
        if (response.status === 200) {
            setRedirect(true);
        }
    };

    const handleContentChange = (value) => {
        setContent(value);
        const imgTags = document.getElementsByTagName('img');
        for (let i = 0; i < imgTags.length; i++) {
            const img = imgTags[i];
            if (!img.getAttribute('src').startsWith('http')) {
                const formData = new FormData();
                formData.append('image', img.getAttribute('src'));
                axios.post('http://localhost:4000/api/v1/images', formData)
                    .then(response => {
                        const imageUrl = response.data.url;
                        img.setAttribute('src', imageUrl);
                        setContent(document.getElementsByClassName('ql-editor')[0].innerHTML);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    };

    if (redirect) {
        return <Navigate to={'/admin-blog'} />
    }
    return (
        <div className="max-w-lg mx-auto">
            <div className="flex mt-4">
                <Link to="/panel" className="flex items-center text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </Link>
            </div>
            <h2 className="text-2xl font-bold my-4 text-center">Write your Blog</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                        Author
                    </label>
                    <input
                        type="text"
                        name="author"
                        id="author"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={author}
                        onChange={(event) => setAuthor(event.target.value)}
                    />
                </div>


                <div className="mb-4">
                    <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
                        Content
                    </label>
                    <Editor value={content} onChange={setContent} />
                </div>

                {/* <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
                        Cover Image
                    </label>
                    <input
                        type="file"
                        name="image"
                        id="image"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={(event) => setImage(event.target.files[0])}
                    />

                </div> */}
                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
                        Blog Images
                    </label>
                  
                    <input type="file" name='blogImages' id='blogImages' accept="image/*" multiple onChange={(event) => setBlogImages(event.target.files)}/>

                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-black w-full mt-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BlogForm;