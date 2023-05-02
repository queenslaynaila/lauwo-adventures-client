import Image from 'next/image';
import Head from 'next/head';
 import { BsArrowRight } from 'react-icons/bs';
import { truncate } from '@/utils/truncate';
import { generateSlug } from '@/utils/generateSlug';
import Link from 'next/link';
import useSWR from 'swr';
function Blogs() {
  const url = 'http://localhost:3000/latest_blogs'
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data: blogs, error } = useSWR(url, fetcher, {
    fallback: true,
    revalidateOnMount: true,
  });

  if (error) return <div className='m-4 font-poly font-semibold'>Something went wrong</div>;
  if (!blogs) return <div className='m-4 font-poly font-semibold'>Loading...</div>;

  return (
    <div className="m-4 font-poly">
       <Head>
        <title>Recent Blogs - Lauwo Tours</title>
        <meta
          name="description"
          content="Check out our latest blog posts for tips, news, and insights on a variety of tours and safaris."
        />
        <meta property="og:title" content="Recent Blogs - Lauwo Tours" />
        <meta
          property="og:description"
          content="Check out our latest blog posts for tips, news, and insights on a variety of tours, safaris and mountain climbing."
        />     
      </Head>
      <div>
        <h1 className="text-center text-lg mt-4 lg:mt-8 lg:text-3xl font-bold uppercase">
          recent blogs
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div className="p-4" key={blog.id}>
            <div
              className="relative bg-white border border-gray-200 rounded-lg shadow">
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
                    <BsArrowRight className="text-sm  py-0.5" />
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
