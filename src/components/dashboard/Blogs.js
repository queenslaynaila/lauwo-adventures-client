import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Blogs() {
  const [post, setPost] = useState({
    title: '',
    content: '',
    image_url: '',
    author: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const notifySuccess = () => {
    toast.success('New Blog successfully created..!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      style: {
        backgroundColor: '#FFCE3C',
        color: '#000',
      },
    });
    setPost({
      title: '',
      content: '',
      image_url: '',
      author: '',
    });
  };

  const notifyError = () =>
    toast.error('Failed. Try again...', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://lauwo-adventures-api.onrender.com/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify(post),
    }).then((r) => {
      if (r.ok) {
        r.json().then((_data) => {
          notifySuccess();
        });
      } else {
        r.json().then(() => {
          notifyError();
        });
      }
    });
  };

  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">New Blog Post</h1>

      <form onSubmit={handleSubmit}>
        <ToastContainer />
        <div className="mb-4">
          <label htmlFor="title" className="block font-bold mb-2">
            Title
          </label>
          <input
            name="title"
            id="title"
            type="text"
            className="w-full border border-white p-2 rounded-lg text-black"
            value={post.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block   font-bold mb-2">
            Author
          </label>
          <input
            name="author"
            id="author"
            type="text"
            className="w-full border border-white p-2 rounded-lg"
            value={post.author}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block  font-bold mb-2">
            Content
          </label>
          <textarea
            name="content"
            id="content"
            className="w-full border border-white p-2 rounded-lg"
            value={post.content}
            onChange={handleInputChange}
            placeholder="This is my first paragraph./n This is my second paragraph.n/This is my third paragraph"
          />
          <p className="  text-sm mt-1">
            Separate new paragraphs by a newline character=&gt; /n
          </p>
        </div>
        <div className="mb-4">
          <label htmlFor="image_url" className="block  font-bold mb-2">
            Image URL
          </label>
          <input
            name="image_url"
            id="imageURL"
            type="text"
            className="w-full border border-white p-2 rounded-lg"
            value={post.image_url}
            onChange={handleInputChange}
          />
          <p className="text-sm mt-1">The link to the image you want to use.</p>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
