import { FiArrowRight } from 'react-icons/fi';
export default function BlogCard({blog}) {
  return (
    <div key={blog.id} className="my-8">
    <img src={blog.image_url} alt="" className='object-cover'/>
    <div>
      <h1 className="mt-3 text-gray-800 text-2xl font-bold my-2">{blog.title}</h1>
      <p className="text-gray-700 mb-2">{blog.content.split(" ").slice(0, 40).join(" ") + "..."}</p>
      <div className="flex justify-between mt-4">
        <span className="font-thin text-sm">{blog.date}</span>
        <button className="flex items-center bg-yellow-500  rounded  py-2 px-2 font-bold" type="button">
          Read more <FiArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  </div>
  )
}
