import { BsBookHalf } from 'react-icons/bs';
import { FaGlobeAfrica } from 'react-icons/fa';
import { FaPenFancy } from 'react-icons/fa';

function Statement() {
  return (
    <div className="h-screen bg-white dark:bg-gray-900 md:m-11">
      <div className="w-full px-6 sm:px-12 lg:px-24 xl:px-48">
        <div className=" relative flex justify-center items-center w-full mt-6 md:mt-10  top-0 left-0">
          <hr className="h-px m-2 w-1/4 md:w-1/3 font-bold bg-black border-0 dark:bg-black-700" />
          <BsBookHalf className="w-12 h-12 2xl:w-16 2xl:h-16" />
          <hr className="h-px m-2 w-1/4 md:w-1/3 font-bold bg-black  border-0 dark:bg-gray-700" />
        </div>
        <div className="w-full  2xl:pt-12">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="font-bold font-poly text-5xl md:text-4xl 2xl:text-6xl text-center m-9">
              Our Statements
            </h1>
            <div className=" 2xl:mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2  gap-8">
              <div className="flex flex-col justify-center items-center 2xl:h-[500px] w- bg-white border border-gray-200 rounded-lg shadow-2xl p-6 sm:p-8">
                <div className="flex justify-center items-center mb-6 w-16 h-16 mt-2  rounded-full bg-gray-100 dark:bg-gray-800">
                  <FaGlobeAfrica className="w-8 h-8 md:w-10 md:h-10 text-gray-500 dark:text-gray-400" />
                </div>
                <h1 className="text-3xl 2xl:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  MISSION
                </h1>
                <hr className="border-t-2 font-gray border-gray-700 my-4 w-16" />
                <p className="text-base 2xl:text-xl font-normal text-gray-700 dark:text-gray-400 text-center leading-relaxed">
                  To improve the life of potters and communities around mountain
                  Kilimanjaro through giving scholarships and investing in
                  community development projects.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:h-[500px] w- bg-white border border-gray-200 rounded-lg shadow-2xl p-6 sm:p-8">
                <div className="flex justify-center items-center mb-6 w-16 h-16 rounded-full shadow-xl bg-gray-100 dark:bg-gray-800">
                  <FaPenFancy className="w-8 h-8 md:w-10 md:h-10 text-gray-500 dark:text-gray-400" />
                </div>
                <h1 className="text-3xl 2xl:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  VALUES
                </h1>
                <hr className="border-t-2 font-gray border-gray-700 my-4 w-16" />
                <p className="text-base 2xl:text-xl font-normal text-gray-700 dark:text-gray-400 text-center leading-relaxed">
                  We believe in fair and ethical treatment of our guides,
                  porters and all our crew members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
export default Statement;  