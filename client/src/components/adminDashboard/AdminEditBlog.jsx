import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Navigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

// define the toolbar options
const toolbarOptions = [
  [{ header: [1, 2, 3, false] }],
  ['bold', 'italic', 'underline', 'strike'],
  ['link', 'image'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  ['clean'],
];

const AdminEditBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch('https://www.glacierheli.is/api/v1/allBlogs/' + id)
      .then(response => {
        response.json().then(blogInfo => {
          setTitle(blogInfo.title);
          setContent(blogInfo.content);
          setAuthor(blogInfo.author);
        })
      })
  }, [])
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean']
    ],
    clipboard: {
      matchVisual: false,
    }
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet',
    'link', 'image'
  ];


  async function updateBlog(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set('title',title);
    data.set('author',author);
    data.set('content',content);
  }
  if (redirect) {
    return <Navigate to={'/Admin-blogs'} />
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
      <h2 className="text-2xl font-bold my-4 text-center">Edit this Blog</h2>

      <form onSubmit={updateBlog}>
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
          <ReactQuill theme="snow" value={content} onChange={setContent} modules={modules} />
        </div>

        <div className="mb-4">
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
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-black w-full mt-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update Blog
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminEditBlog