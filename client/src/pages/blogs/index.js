import BlogCard from '@/components/BlogCard';
export default function index({blogs}) {
     
  return (
      <div className='font-poly'>
        <header className="w-full h-64 lg:h-96 bg-[url('/safari-1.jpg')] bg-cover bg-center flex justify-center items-center font-poly">
          <div role="main" class="flex flex-col items-center justify-center">
            <h1 class="text-2xl  font-semibold leading-9 text-center lg:w-1/2 md:w-10/12 w-11/12 ml-4"> Explore Our Latest Travel Stories</h1>
            <p class="text-base leading-normal text-center   mt-4 lg:w-1/2 md:w-10/12 w-11/12">Discover the hidden gems of Tanzania with our expert guides. From the majestic peaks of Kilimanjaro to thrilling safaris and cultural experiences, our blog has it all</p>
          </div>
        </header>
        <main class="lg:relative  lg:-top-40    py-12 md:px-20 sm:px-14 px-6">
          <div class="mt-2 md:flex space-x-6">
                {blogs.map((blog) => (
                  <BlogCard blog={blog} />
            ))}
          </div>
        </main>
     </div>

 

  )
}


export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/blogs');
    const blogs = await res.json();
     console.log(blogs)
    return {
      props: { blogs },
    };
  }
