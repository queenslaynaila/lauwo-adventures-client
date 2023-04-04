import Image from 'next/image';
import { blogsData } from '../data/blogData';

function Blogs() {
  return (
    <div className="m-4">
      <div>
        <h1 className="font-bold text-center text-4xl mt-5">RECENT BLOGS</h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogsData.map((val, index) => (
          <div className="p-4" key={val.title}>
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[460px] max-w-[800px]">
              <Image
                src={val.image}
                alt="/"
                width={800}
                height={600}
                className="h-48 w-full object-cover rounded-t-lg"
              />
              <div className="p-5 h-48">
                <h2 className="px-4 mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  {val.title}
                </h2>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-24 overflow-hidden">
                  {val.description}
                </p>
                <div className="flex justify-between mt-3">
                  <a
                    href="#"
                    className="inline-flex items-center px-1 py-2  text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <div className="">
                    <p>{val.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 grid place-items-center">
        <button className="bg-yellow-500 font-bold py-2 px-4 mt-3 rounded items-center">
          View All
        </button>
      </div>
    </div>
  );
}

export default Blogs;
