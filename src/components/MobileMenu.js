import { IoCloseSharp } from 'react-icons/io5';
import Link from 'next/link';
import AdventuresDropDown from './AdventuresDropDown';
import SafariDropDown from './SafariDropDown';
import GroupDropDown from './GroupDropDown';
import TourDropDown from './TourDropDown';
const MobileMenu = ({ isOpen, toggle }) => {
  return (
    isOpen && (
      <ul className="flex-col flex items-center fixed inset-0 left-1/4 bg-white gap-12 justify-center p-8 tablet:hidden text-black font-poly">
        <div className="absolute right-6 top-6 scale-150">
          <IoCloseSharp onClick={toggle} />
        </div>
        <li>
          <AdventuresDropDown />
        </li>
        <li>
          <Link href="/planing">Plan Your Climb</Link>
        </li>
        <li>
          <GroupDropDown />
        </li>
        <li>
          <SafariDropDown />
        </li>
        <li>
          <TourDropDown />
        </li>
        <li>
          <Link href="/about-us" onClick={toggle}>
            About
          </Link>
        </li>
        <li>
          <Link href="/reviews">Reviews</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link href="/blogs" onClick={toggle}>
            Blog
          </Link>
        </li>
      </ul>
    )
  );
};

export default MobileMenu;
