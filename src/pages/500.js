import Link from 'next/link';
const Custom500 = () => {
  return (
    <div className="font-poly">
      <header className="h-screen bg-[#1a1a1a] bg-cover bg-center bg-no-repeat bg-fixed w-full bg-[url('/g-4.jpg')]">
        <div className="bg-black/50 h-screen flex flex-col justify-center items-center">
          <h1 className="text-4xl font-poly font-bold w-8/12 sm:w-6/12 text-white text-center leading-[50px] hover:text-yellow-400">
            Server Error
          </h1>
          <h1 className="text-4xl font-poly font-bold w-8/12 sm:w-6/12  text-center leading-[50px] text-yellow-400">
            Oops! The page you Are looking for had A server error.
          </h1>

          <div className="mt-8">
            <Link href="/">
              <button className="px-4 py-2 bg-white text-black font-bold rounded-md hover:bg-yellow-400">
                Return to homepage
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Custom500;
