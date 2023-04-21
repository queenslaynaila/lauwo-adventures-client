import { generateSlug } from "@/utils/generateSlug";
import { FiArrowRight } from 'react-icons/fi';
import { BsFillPersonFill} from 'react-icons/bs';
import {AiFillClockCircle} from 'react-icons/ai';
import Link from "next/link";
import Image from "next/image";
export default function blog({blog}) {
 
  return (
 
      <main className="font-poly ">
       <header className="w-full h-64   bg-cover bg-center flex justify-center items-center font-poly" style={{ backgroundImage: `url(${blog.image_url})`}}></header>
        <div class=" mx-4 lg:px-0">
            <h2 class="text-4xl font-semibold leading-tight my-2">
               {blog.title}
            </h2>
        </div>
        <div>
        <div class="flex items-center pb-2 mx-6">
           <AiFillClockCircle  />
            <p>{blog.created_at}</p>
        </div>
        <div class="flex items-center pb-2 mx-6">
          <BsFillPersonFill  />
          <p>{blog.author}</p>
        </div>

        {blog.content.split('\n').map((paragraph, index) => (
            <p key={index} className="pb-2 mx-6">{paragraph.replace('/n', '')}</p>
         ))}
          <div className="flex item-center justify-center py-4 ">
             <Link  href='/blogs' passHref={true} legacyBehavior={true}>
                <a className="flex items-center bg-yellow-400 rounded py-2 px-2 font-bold 
                hover:bg-yellow-700 hover:text-white">
                  <span>Read more</span>
                  <FiArrowRight className="ml-2" />
                </a>
            </Link>
         </div>
       </div>
      </main> 
 
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/blogs');
  const blogs = await res.json();
  const paths = blogs.map((blog) => ({
    params: { blog: generateSlug(blog.title), id: blog.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch('http://localhost:3000/blogs');
  const blogs = await res.json();
  const blog = blogs.find(
    (blog) => generateSlug(blog.title) === params.blog
  );
  return {
    props: { blog },
  };
}

 