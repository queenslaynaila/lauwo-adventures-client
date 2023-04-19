import { generateSlug } from "@/utils/generateSlug";
import Image from "next/image";
export default function blog({blog}) {
  console.log(blog.image_url)
  return (
 
      <main className="font-poly ">
       <header className="w-full h-64   bg-cover bg-center flex justify-center items-center font-poly" style={{ backgroundImage: `url(${blog.image_url})`}}></header>
        <div class=" mx-4 lg:px-0">
            <h2 class="text-4xl font-semibold leading-tight my-2">
               {blog.title}
            </h2>
        </div>
        <div>
          {blog.content.split("\n").map((paragraph, index) => (
            <p key={index} className="pb-2 mx-4">{paragraph}</p>
          ))}
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