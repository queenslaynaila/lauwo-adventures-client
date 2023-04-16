import React, { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import Link from 'next/link';

const GuideDropDown = ({ setIsOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="relative flex flex-col items-center">
      <button
        className="flex flex-row items-center justify-center"
        onClick={() => setIsDropdownOpen((isDropdownOpen) => !isDropdownOpen)}
      >
        Guide
        {isDropdownOpen ? (
          <AiOutlineCaretUp className="ml-1" />
        ) : (
          <AiOutlineCaretDown className="ml-1" />
        )}
      </button>
      <div
        className={`absolute top-10 bg-white text-black text-center w-52 h-36 flex flex-col items-center justify-center capitalize rounded-sm shadow-lg font-light ${
          isDropdownOpen ? 'block' : 'hidden'
        }`}
      >
        <Link
          href="tips"
          onClick={() => {
            setIsDropdownOpen(false);
            setIsOpen(false);
          }}
        >
          tips
        </Link>
        <hr className="w-3/4 my-2" />
        <Link
          href="/faqs"
          onClick={() => {
            setIsDropdownOpen(false);
            setIsOpen(false);
          }}
        >
          faq&apos;s
        </Link>
      </div>
    </div>
  );
};

export default GuideDropDown;
