import Image from 'next/image';

import { truncate } from '@/utils/truncate';
import { generateSlug } from '@/utils/generateSlug';
import Link from 'next/link';
import useSWR from 'swr';

import { FaSpinner, FaExclamationCircle } from 'react-icons/fa';
function Blogs() {
  const url = 'https://lauwo-adventures-api.onrender.com/latest_blogs';
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const {
    data: blogs,
    error,
    isLoading,
  } = useSWR(url, fetcher, {
    fallback: true,
    revalidateOnMount: true,
    refreshInterval: 7 * 24 * 60 * 60 * 1000,
  });

  if (error)
    return (
      <div className="text-center mb-2 ">
        <div>
          <FaExclamationCircle className="inline w-10 h-10 mr-2 text-red-500 fill-yellow-400 font-poly" />
          <span>
            Oops! Something went wrong while fetching the blogs. Please try
            again later.
          </span>
        </div>
      </div>
    );
  if (isLoading || !blogs) {
    return (
      <div className="text-center mb-2">
        <div role="status">
          <FaSpinner className="inline w-10 h-10 mr-2 text-gray-200 animate-spin  fill-yellow-400" />
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className=" font-poly p-4 ">
      <div>
        <div className="mx-50">
          <div className="flex justify-center items-center">
            <div className="border-t border-black w-1/3"></div>
            <div className="text-center mx-2">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="3em"
                width="3em"
              >
                <path d="M20 13h-4c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2H4l-2 5v2c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-2M6 20c-.89 0-1.34-1.08-.71-1.71.63-.63 1.71-.18 1.71.71 0 .55-.45 1-1 1m4 0c-.89 0-1.34-1.08-.71-1.71.63-.63 1.71-.18 1.71.71 0 .55-.45 1-1 1m4 0c-.89 0-1.34-1.08-.71-1.71.63-.63 1.71-.18 1.71.71 0 .55-.45 1-1 1m4 0c-.89 0-1.34-1.08-.71-1.71.63-.63 1.71-.18 1.71.71 0 .55-.45 1-1 1m0-10V3H6v7H3v2h18v-2M8 5h8v1H8m0 1h6v1H8" />
              </svg>
            </div>
            <div className="border-t border-black w-1/3"></div>
          </div>
        </div>
        <h1 className="font-bold text-center my-4 text-lg lg:text-3xl">
          Travel Tips With Lauwo
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div className="p-4" key={blog.id}>
            <div className="relative bg-white border border-gray-200 rounded-lg shadow">
              <Image
                src={blog.image_url}
                alt="/"
                width={800}
                height={600}
                className="h-48 w-full object-cover rounded-t-lg"
              />
              <div className="p-5">
                <h2 className="mb-2 sm:text-lg font-bold font-poly tracking-wide text-gray-900 capitalize">
                  {blog.title}
                </h2>
                <p className="mb-3 mt-2 text-gray-800 text-xs 2xl:text-base 2xl:leading-10 lg:text-sm lg:leading-7">
                  {truncate(blog.content, 100)}
                </p>
                <div className="flex justify-between sm:gap-20 gap-4">
                  <a
                    href={`/blogs/${generateSlug(blog.title)}`}
                    className="inline-flex items-center sm:text-sm text-xs font-medium text-center text-gray-600"
                  >
                    Read more
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1em"
                      width="1em"
                    >
                      <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" grid place-items-center">
        <Link href="/blogs">
          <button className="bg-yellow-400 font-light  font-poly py-3 px-8  rounded items-center hover:bg-yellow-600">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Blogs;
