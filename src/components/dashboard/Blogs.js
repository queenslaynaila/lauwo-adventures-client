import React, { useState } from 'react';

export default function Blogs() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleImageURLChange = (event) => {
    setImageURL(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
  };

  return (
    <div className=" px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            id="title"
            type="text"
            className="w-full border border-white p-2 rounded-lg"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 font-bold mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            className="w-full border border-white p-2 rounded-lg"
            value={content}
            onChange={handleContentChange}
          />
          <p className="text-gray-500 text-sm mt-1">
            Separate new paragraphs by a newline character.
          </p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="imageURL"
            className="block text-gray-700 font-bold mb-2"
          >
            Image URL
          </label>
          <input
            id="imageURL"
            type="text"
            className="w-full border border-white p-2 rounded-lg"
            value={imageURL}
            onChange={handleImageURLChange}
          />
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
