import { useState, useEffect } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import Link from 'next/link';
import { generateSlug } from '@/utils/generateSlug';

const AdventuresDropDown = ({ setIsOpen }) => {
  const [adventures, setAdventures] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/adventures')
      .then((res) => res.json())
      .then((data) => setAdventures(data));
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      <button
        className="flex flex-row items-center justify-center"
        onClick={() => setIsDropdownOpen((isDropdownOpen) => !isDropdownOpen)}
      >
        Adventures
        {isDropdownOpen ? (
          <AiOutlineCaretUp className="ml-1" />
        ) : (
          <AiOutlineCaretDown className="ml-1" />
        )}
      </button>
      <div
        className={`absolute top-10 bg-white text-black text-center w-52 h-64 flex flex-col items-center justify-center capitalize rounded-sm shadow-lg font-light ${
          isDropdownOpen ? 'block' : 'hidden'
        }`}
      >
        {adventures.map((adventure) => (
          <div key={adventure.id} className="mb-2 py-1">
            <Link href={`/${generateSlug(adventure.name)}`} className="capitalize"
            onClick={() => setIsOpen(false)}
            >
              {adventure.name}
            </Link>
            <hr className="w-full mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdventuresDropDown;
