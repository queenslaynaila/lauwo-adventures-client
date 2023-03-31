import React from 'react';
import { BsBookHalf } from 'react-icons/bs';
import { FaGlobeAfrica } from 'react-icons/fa';
import { FaPenFancy } from 'react-icons/fa';

function Statement() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 md:m-11">
      <div className="w-full px-6 sm:px-12 lg:px-24 xl:px-48">
        <div className="flex justify-center items-center w-full mt-6 md:mt-10 fixed top-0 left-0 z-10">
          <hr className="h-px m-2 w-1/4 md:w-1/3 font-bold bg-black border-0 dark:bg-black-700" />
          <BsBookHalf className="w-12 h-12 md:w-16 md:h-16" />
          <hr className="h-px m-2 w-1/4 md:w-1/3 font-bold bg-black  border-0 dark:bg-gray-700" />
        </div>



        <div className="w-full  pt-28">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="font-bold font-poly text-5xl md:text-6xl text-center m-9">
              Our Statements
            </h1>

            <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col justify-center items-center sm:h-[700px]  bg-white border border-gray-200 rounded-lg shadow-2xl p-6 sm:p-10">
                <div className="flex justify-center items-center mb-6 w-16 h-16  rounded-full bg-gray-100 dark:bg-gray-800">
                  <FaGlobeAfrica className="w-8 h-8 md:w-10 md:h-10 text-gray-500 dark:text-gray-400" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  MISSION
                </h1>
                <hr className="border-t-2 font-gray border-gray-700 my-4 w-16" />
                <p className="text-lg md:text-3xl font-normal text-gray-700 dark:text-gray-400 text-center leading-relaxed">
                  To improve the life of potters and communities around mountain
                  Kilimanjaro through giving scholarships and investing in
                  community development projects.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow-2xl p-6 sm:p-10">
                <div className="flex justify-center items-center mb-6 w-16 h-16 rounded-full shadow-xl bg-gray-100 dark:bg-gray-800">
                  <FaPenFancy className="w-8 h-8 md:w-10 md:h-10 text-gray-500 dark:text-gray-400" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  VALUES
                </h1>
                <hr className="border-t-2 font-gray border-gray-700 my-4 w-16" />
                <p className="text-lg md:text-3xl font-normal text-gray-700 dark:text-gray-400 text-center leading-relaxed">
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
