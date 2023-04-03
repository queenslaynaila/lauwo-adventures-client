import Image from 'next/image';

function Blogs() {
  return (
    <div className='m-4'>
      <div>
        <h1 className="font-bold text-center  text-4xl mt-5"> RECENT BLOGS</h1>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8 mt-4">
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image
            src={`/b-1.jpg`}
            alt="Picture of the author"
            width={900}
            height={900}
          />
          <div className="p-5">
            <h2 className=" px-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              We Travel Not To Escape Life
              But  For Life Not To Escape.
            </h2>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="flex justify-between">
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                 
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <div className="">
                <p>20th February 2023</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image
            src={`/b-2.jpg`}
            alt="Picture of the author"
            width={900}
            height={900}
          />
          <div className="p-5">
            <h2 className=" px-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Road Map To Mountain Climbing. 
            </h2>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="flex justify-between">
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <div className="">
                <p>3rd January 2023</p>
              </div>
            </div>
          </div>
        </div>


        <div className="bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 object-contain">
          <Image
            src={`/b-6.jpg`}
            alt="Picture of the compass"
            width={900}
            height={900}
          />
          <div className="p-5">
            <h2 className=" px-4  mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              I Haven't Been  EveryWhere 
             
              But It's On My List.
            </h2>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="flex justify-between ">
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                 
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <div className="">
                <p>12th December 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className= 'mt-8  grid  place-items-center'>
      <button class="bg-yellow-500 font-bold py-2 px-4 mt-3 rounded items-center">View All</button>
      </div>
    </div>
  );
}

export default Blogs;
