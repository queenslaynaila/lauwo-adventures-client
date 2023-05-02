import { useEffect,React,useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTrash } from 'react-icons/fa';
export default function ViewBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/blogs')
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => {
        console.error('Error fetching blogs:', error);
        toast.error('Failed to fetch blogs. Please try again.', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      });
  }, []);

  const onDelete = (id) => {
   
    fetch(`http://localhost:3000/blogs/${id}`, {
      method: 'DELETE'
    })
    .then((response) => {
      if (response.ok) {
       
        const updatedList = blogs.filter((blog) => blog.id !== id);
        setBlogs(updatedList);
  
       
        toast.success('Blog post deleted successfully!', {
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
      } else {
      
        toast.error('Failed to delete blog post. Please try again.', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      }
    });
  };
  
  return (
    <div   className=" px-4 py-8">
    <h1  className="text-2xl font-bold mb-4">Your Blogs</h1>
    {blogs.length === 0 && (
      <p className="text-gray-500">You have no blogs yet.</p>
    )}
    {blogs.map((blog) => (
      <div key={blog.id} className="flex items-center mb-4">
        <Image
          width={500}
          height={500}
          src={blog.image_url}
          alt={blog.title}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <Link href={`/blogs/${blog.id}`} className="text-lg font-medium hover:text-yellow-800">
            
              {blog.title}
           
          </Link>
          <p className="text-gray-500 text-sm">{blog.author}</p>
        </div>
        <button
          className="ml-auto text-red-600 hover:text-red-800"
          onClick={() => onDelete(blog.id)}
        >
          <FaTrash/>
        </button>
      </div>
    ))}
  </div>
  )
}
