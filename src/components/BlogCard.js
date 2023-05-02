import { FiArrowRight } from 'react-icons/fi';
import { generateSlug } from '@/utils/generateSlug';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
export default function BlogCard({ blog }) {
  return (
    <div key={blog.id} className="my-8 bg-white shadow  rounded-lg max-w-sm ">
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.content.split(' ').slice(0, 40).join(' ')} />
        <meta name="og:title" content={blog.title} />
        <meta name="og:description" content={blog.content.split(' ').slice(0, 40).join(' ')} />
        <meta name="og:image" content={blog.image_url} />
       
      </Head>
      <Image src={blog.image_url} alt={blog.title} className="object-cover" height={500} width={500} />
      <div className=" p-4 ">
        <h1 className="mb-2 text-gray-800 text-2xl font-bold ">{blog.title}</h1>
        <p className="text-gray-700 mb-2">
          {blog.content.split(' ').slice(0, 40).join(' ') + '...'}
        </p>
        <div className="flex justify-between mt-4">
          <span className="font-thin text-sm">{blog.date}</span>
          <Link
            href={`/blogs/${generateSlug(blog.title)}`}
            passHref={true}
            legacyBehavior={true}
          >
            <a
              className="flex items-center bg-yellow-400 rounded py-2 px-2 font-bold 
  hover:bg-yellow-700 hover:text-white"
            >
              <span>Read more</span>
              <FiArrowRight className="ml-2" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
