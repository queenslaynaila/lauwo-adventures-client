import { generateSlug } from "@/utils/generateSlug";

export default function blog({blog}) {
  console.log(blog)
  return (
    <div>
      single blog
    </div>
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