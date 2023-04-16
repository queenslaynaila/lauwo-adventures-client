import Image from 'next/image';
import { blogsData } from '../data/blogData';
import { BsArrowRight } from 'react-icons/bs';
import { truncate } from '@/utils/truncate';

function Blogs() {
  return (
    <div className="m-4 h-screen mt-20 lg:mb-20 md:mb-48 mb-[66em]">
      <div>
        <h1 className="text-center lg:text-3xl sm:text-lg font-bold font-poly mb-10 uppercase">
          {' '}
          recent blogs
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogsData.map((val) => (
          <div className="p-4" key={val.title}>
            <div className="relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[460px] max-w-[800px]">
              <Image
                src={val.image}
                alt="/"
                width={800}
                height={600}
                className="h-48 w-full object-cover rounded-t-lg"
              />
              <div className="p-5 h-48">
                <h2 className="mb-2 sm:text-lg font-bold font-poly tracking-wide text-gray-900 capitalize">
                  {val.title}
                </h2>
                <p className="mb-3 mt-2 text-gray-800 text-xs 2xl:text-base 2xl:leading-10 lg:text-sm lg:leading-7">
                  {truncate(val.description, 100)}
                </p>
                <div className="flex justify-between sm:gap-20 gap-8 absolute bottom-2">
                  <a
                    href="#"
                    className="inline-flex items-center sm:text-sm text-xs font-medium text-center text-gray-600"
                  >
                    Read more
                    <BsArrowRight className="w-5 h-5 py-0.5" />
                  </a>
                  <p className="inline-flex items-center sm:text-sm text-xs text-center text-gray-600">
                    {val.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 grid place-items-center">
        <button className="bg-yellow-400 font-light  font-poly py-4 px-8 mt-3 rounded items-center">
          View All
        </button>
      </div>
    </div>
  );
}

export default Blogs;
