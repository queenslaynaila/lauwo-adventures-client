import BlogCard from '@/components/BlogCard';
import Head from 'next/head';
import SocialsButtons from '@/components/SocialsButtons';
export default function index({ blogs }) {
  return (
    <div className="font-poly">
      <Head>
        <title>Explore Our Latest Travel Stories - Lauwo Travel Blog</title>
        <meta
          name="description"
          content="Discover the hidden gems of Tanzania with our expert guides. From the majestic peaks of Kilimanjaro to thrilling safaris and cultural experiences, our blog has it all"
        />
        <meta
          property="og:title"
          content="Explore Our Latest Travel Stories - Lauwo Travel Blog"
        />
        <meta
          property="og:description"
          content="Discover the hidden gems of Tanzania with our expert guides. From the majestic peaks of Kilimanjaro to thrilling safaris and cultural experiences, our blog has it all"
        />
        <meta property="og:image" content="/safari-1.jpg" />
        <meta
          name="twitter:title"
          content="Explore Our Latest Travel Stories - Lauwo Travel Blog"
        />
        <meta
          name="twitter:description"
          content="Discover the hidden gems of Tanzania with our expert guides. From the majestic peaks of Kilimanjaro to thrilling safaris and cultural experiences, our blog has it all"
        />
        <meta name="twitter:image" content="/safari-1.jpg" />
      </Head>
      <header className="w-full h-64 lg:h-96 bg-[url('/safari-1.jpg')] bg-cover bg-center flex justify-center items-center font-poly">
        <div role="main" className="flex flex-col items-center justify-center">
          <h1 className="text-2xl  font-semibold leading-9 text-center lg:w-1/2 md:w-10/12 w-11/12 ml-4">
            {' '}
            Explore Our Latest Travel Stories
          </h1>
          <p className="text-base leading-normal text-center   mt-4 lg:w-1/2 md:w-10/12 w-11/12">
            Discover the hidden gems of Tanzania with our expert guides. From
            the majestic peaks of Kilimanjaro to thrilling safaris and cultural
            experiences, our blog has it all
          </p>
        </div>
      </header>
      <main className="lg:relative  lg:-top-40   sm:px-14 px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {blogs.map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
        </div>
      </main>
      <SocialsButtons />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://lauwo-adventures-api.onrender.com/blogs');
  const blogs = await res.json();
  return {
    props: { blogs },
    revalidate: 604800, // Regenerate page every 7 days (1 week)
  };
}
