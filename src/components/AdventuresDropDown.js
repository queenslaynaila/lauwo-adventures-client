import { useState, useRef, useEffect } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import Link from 'next/link';
import { generateSlug } from '@/utils/generateSlug';
import adventures from '@/data/adventures.json';

const AdventuresDropDown = ({ setIsOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
  };

  const handleOutsideClick = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isDropdownOpen]);

  return (
    <div
      className="relative flex flex-col items-center uppercase"
    >
      <button className="flex flex-row items-center justify-center uppercase"
        ref={buttonRef}
        onClick={handleToggleDropdown}
      >
        Trekking
        {isDropdownOpen ? (
          <AiOutlineCaretUp className="ml-1" />
        ) : (
          <AiOutlineCaretDown className="ml-1" />
        )}
      </button>
      {isDropdownOpen && (
        <div className="dropdown absolute top-10 bg-white text-black text-center w-52 h-38 flex flex-col items-center justify-center capitalize rounded-sm shadow-lg font-light z-10">
          {adventures.map((adventure) => (
            <div key={adventure.id} className="mb-2 py-1 mt-2"
              ref={dropdownRef}
            >
              <Link
                href={`/mountain-trekking/${generateSlug(adventure.name)}`}
                className="uppercase"
                onClick={() => {
                  setIsOpen(false);
                  setIsDropdownOpen(false);
                }}
              >
                {adventure.name}
              </Link>
              <hr className="w-48 mx-auto" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdventuresDropDown;
