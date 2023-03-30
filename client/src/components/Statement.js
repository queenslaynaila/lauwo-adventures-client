import React from 'react';
import {BsBookHalf} from 'react-icons/bs'

function Statement() {
  return (
    <>
      <div>
        <div>
          <div className="flex justify-center overflow-x-scroll  mt-6 md:overflow-x-hidden  ">
            <hr className="h-px m-2 w-1/4 md:w-1/3 bg-gray-200 border-0 dark:bg-black-700" />
            <BsBookHalf className="w-8 h-8 md:w-10 md:h-10" />
            <hr className="h-px m-2 w-1/4 md:w-1/3 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Statement;
