import { generateSlug } from '@/utils/generateSlug';
import Head from 'next/head';
import { FiArrowRight } from 'react-icons/fi';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillClockCircle } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Blog({ blogs }) {
  const router = useRouter();
  const path = router.query.blog;
  const blogPost = blogs.find(
    (blogPost) => generateSlug(blogPost.title) === path
  );

  const { image_url, title, author, created_at, content } = blogPost;

  return (

    <>
       <Head>
        <title>{blogPost.title}</title>
        <meta name="description" content={content} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={content} />
        <meta property="og:type" content="article" />
      </Head>
      <main className="font-poly ">
      <header
        className="w-full h-64   bg-cover bg-center flex justify-center items-center font-poly"
        style={{ backgroundImage: `url(${image_url})` }}
      ></header>
      <div className=" mx-4 lg:px-0">
        <h2 className="text-4xl font-semibold leading-tight my-2">{title}</h2>
      </div>
      <div>
        <div className="flex items-center pb-2 mx-6">
          <AiFillClockCircle />
          <p>{created_at}</p>
        </div>
        <div className="flex items-center pb-2 mx-6">
          <BsFillPersonFill />
          <p>{author}</p>
        </div>

        {content.split('\n').map((paragraph, index) => (
          <p key={index} className="pb-2 mx-6">
            {paragraph.replace('/n', '')}
          </p>
        ))}
        <div className="flex item-center justify-center py-4 ">
          <Link href="/blogs" passHref={true} legacyBehavior={true}>
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
    </main>
     
    </>
    
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/blogs');
  const blogs = await res.json();

  return {
    props: {
      blogs,
    },
  };
}
