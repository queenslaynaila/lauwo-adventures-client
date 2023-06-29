import { useState } from 'react';
import Cookies from "js-cookie";
import { useRouter } from 'next/router';
import { AiOutlineSetting } from 'react-icons/ai';
import { TbBrandBooking } from 'react-icons/tb';
import { FcPlanner } from 'react-icons/fc';
import { IoIosLogOut } from 'react-icons/io';
import {
  BsChevronDown,
  BsChevronUp,
  BsFillPersonFill,
  BsListTask,
} from 'react-icons/bs';

import { RiSafariFill } from 'react-icons/ri';

import { FaBlogger, FaMountain } from 'react-icons/fa';
import Settings from '@/components/dashboard/Settings';
import Blogs from '@/components/dashboard/Blogs';
import Users from '@/components/dashboard/Users';
import GroupClimbs from '@/components/dashboard/GroupClimbs';
import Plannings from '@/components/dashboard/Plannings';
import Bookings from '@/components/dashboard/Bookings';
import Notifications from '@/components/dashboard/Notifications';
import Enquiries from '@/components/dashboard/Enquiries';
import MountainBookings from '@/components/dashboard/MountainBookings';
import SafariBookings from '@/components/dashboard/SafariBookings';
import DaytripBookings from '@/components/dashboard/DaytripBookings';
import CulturalBookings from '@/components/dashboard/CulturalBookings';
import CyclingBookings from '@/components/dashboard/CyclingBookings';
import ViewBlogs from '@/components/dashboard/ViewBlogs';
import FullMoon from '@/components/dashboard/FullMoon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('bookings');
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleDropdownClick = () => setShowDropdown(!showDropdown);
  const notifySuccess = () => {
    toast.success('Signing You Out..', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      style: {
        backgroundColor: '#FFCE3C',
        color: '#000',
      },
    });
  };

  const notifyError = () =>
    toast.error('There was an error signing you out.Try again.', {
      position: 'top-center',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  function handleSignOut() {
    fetch('https://lauwo-adventures-api.onrender.com/admins/sign_out', {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization:Cookies.get('token'),
      },
    })
      .then((response) => {
         console.log(response)
        Cookies.remove('token');
        notifySuccess();
        setTimeout(() => {
          router.push('/admin');
        }, 2500);
      })
      .catch((error) => {
        console.error('There was a problem with the sign out request:', error);
      });
  }

  return (
    <div
      style={{ backgroundImage: `url(/safari-1.webp)` }}
      className="font-poly"
    >
      <div className="grid grid-cols-1  ">
        <ToastContainer />
        <div className="mt-24">
          <div className="flex item-center justify-center flex-row   ">
            <div className="text-gray-100 px-4  w-1/6 ">
              <ul className="my-8 space-y-2 flex flex-col justify-center items-center lg:items-start py-8 lg:py-0">
                <li className="cursor-pointer">
                  <a
                    href="#"
                    onClick={() => handleSectionClick('enquiries')}
                    className={`block py-2 px-4 rounded-lg nav-link hover:bg-gray-100 hover:text-black ${
                      activeSection === 'enquiries'
                        ? 'bg-gray-100 text-gray-900'
                        : ''
                    }`}
                  >
                    <BsListTask className="inline-block mr-1 font-bold" />
                    <span className="hidden lg:inline-block">Enquiries</span>
                  </a>
                </li>
                <li className="cursor-pointer">
                  <a
                    href="#"
                    onClick={() => handleSectionClick('groupclimbs')}
                    className={`block py-2 px-4 rounded-lg nav-link hover:bg-gray-100 hover:text-black ${
                      activeSection === 'groupclimbs'
                        ? 'bg-gray-100 text-gray-900'
                        : ''
                    }`}
                  >
                    <BsListTask className="inline-block mr-1 font-bold" />
                    <span className="hidden lg:inline-block">Group Climbs</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleSectionClick('notifications')}
                    className={`block py-2 px-4 rounded-lg nav-link hover:bg-gray-100 hover:text-black ${
                      activeSection === 'notifications'
                        ? 'bg-gray-100 text-gray-900'
                        : ''
                    }`}
                  >
                    <AiOutlineSetting className="inline-block mr-1 font-bold" />
                    <span className="hidden lg:inline-block">
                      ClimbNotifications
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleSectionClick('fullmoon')}
                    className={`block py-2 px-4 rounded-lg nav-link hover:bg-gray-100 hover:text-black ${
                      activeSection === 'fullmoon'
                        ? 'bg-gray-100 text-gray-900'
                        : ''
                    }`}
                  >
                    <AiOutlineSetting className="inline-block mr-1 font-bold" />
                    <span className="hidden lg:inline-block">
                      FullMoonBookings
                    </span>
                  </a>
                </li>
                <li className="cursor-pointer">
                  <a
                    href="#"
                    onClick={() => handleSectionClick('planning')}
                    className={`block py-2 px-4 rounded-lg nav-link hover:bg-gray-100 hover:text-black ${
                      activeSection === 'planning'
                        ? 'bg-gray-100 text-gray-900'
                        : ''
                    }`}
                  >
                    <FcPlanner className="inline-block mr-1 font-bold" />
                    <span className="hidden lg:inline-block">Planning</span>
                  </a>
                </li>
                <li className="flex-col cursor-pointer">
                  <div
                    className={`flex items-center py-2 px-4 rounded-lg nav-link hover:bg-gray-100 hover:text-black ${
                      activeSection === 'bookings'
                        ? 'bg-gray-100 text-gray-900'
                        : ''
                    }`}
                    onClick={() => handleSectionClick('bookings')}
                  >
                    <TbBrandBooking className="inline-block mr-1 font-bold" />
                    <span className="hidden lg:inline-block">Bookings</span>
                    {showDropdown ? (
                      <BsChevronUp
                        onClick={handleDropdownClick}
                        className="ml-1"
                      />
                    ) : (
                      <BsChevronDown
                        onClick={handleDropdownClick}
                        className="ml-1"
                      />
                    )}
                  </div>
                  {showDropdown && (
                    <ul>
                      <li className="mt-1">
                        <a
                          href="#"
                          onClick={() => handleSectionClick('mountainbookings')}
                          className={`block py-2 px-4 rounded-lg nav-link hover:bg-gray-100 hover:text-black ${
                            activeSection === 'mountainbookings'
                              ? 'bg-gray-100 text-gray-900'
                              : ''
                          }`}
                        >
                          <FaMountain className="inline-block mr-1 font-bold" />

                          <span className="hidden lg:inline-block">
                            Mountain Bookings
                          </span>
                        </a>
                      </li>
                      <li className="mt-1">
                        <a
                          href="#"
                          onClick={() => handleSectionClick('safaribookings')}
                          className={`block py-2 px-4 rounded-lg nav-link hover:bg-gray-100 hover:text-black ${
                            activeSection === 'safaribookings'
                              ? 'bg-gray-100 text-gray-900'
                              : ''
                          }`}
                        >
                          <RiSafariFill className="inline-block mr-1 font-bold" />

                          <span className="hidden lg:inline-block">
                            Safari Bookings
                          </span>
                        </a>
                      </li>
                      <li className="mt-1">
                        <a
                          href="#"
                          onClick={() => handleSectionClick('daytripbookings')}
                          className={`block py-2 px-4 rounded-lg nav-link hover:bg-gray-100 hover:text-black ${
                            activeSection === 'daytripbookings'
                              ? 'bg-gray-100 text-gray-900'
                              : ''
                          }`}
                        >
                          <RiSafariFill className="inline-block mr-1 font-bold" />

                          <span className="hidden lg:inline-block">
                            Day Trips Bookings
                          </span>
                        </a>
                      </li>
                      <li className="mt-1">
                        <a
                          href="#"
                          onClick={() =>
                            handleSectionClick('culturaltoursbookings')
                          }
                          className={`block py-2 px-4 rounded-lg nav-link hover:bg-gray-100 hover:text-black ${
                            activeSection === 'culturaltoursbookings'
                              ? 'bg-gray-100 text-gray-900'
                              : ''
                          }`}
                        >
                          <RiSafariFill className="inline-block mr-1 font-bold" />

                          <span className="hidden lg:inline-block">
                            Cultural Bookings
                          </span>
                        </a>
                      </li>
                      <li className="mt-1">
                        <a
                          href="#"
                          onClick={() => handleSectionClick('cyclingbookings')}
                          className={`block py-2 px-4 rounded-lg nav-link hover:bg-gray-100 hover:text-black ${
                            activeSection === 'cyclingbookings'
                              ? 'bg-gray-100 text-gray-900'
                              : ''
                          }`}
                        >
                          <RiSafariFill className="inline-block mr-1 font-bold" />

                          <span className="hidden lg:inline-block">
                            Cycling Bookings
                          </span>
                        </a>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="flex-col cursor-pointer">
                  <div
                    className={`flex items-center py-2 px-4 rounded-lg nav-link hover:bg-gray-100 hover:text-black ${
                      activeSection === 'blogs'
                        ? 'bg-gray-100 text-gray-900'
                        : ''
                    }`}
                    onClick={() => handleSectionClick('blogs')}
                  >
                    <FaBlogger className="inline-block mr-1 font-bold" />
                    <span className="hidden lg:inline-block">Blogs</span>
                    {showDropdown ? (
                      <BsChevronUp
                        onClick={handleDropdownClick}
                        className="ml-1"
                      />
                    ) : (
                      <BsChevronDown
                        onClick={handleDropdownClick}
                        className="ml-1"
                      />
                    )}
                  </div>
                  {showDropdown && (
                    <ul>
                      <li className="mt-1">
                        <a
                          href="#"
                          onClick={() => handleSectionClick('blogs')}
                          className={`block py-2 px-4 rounded-lg nav-link hover:bg-gray-100 hover:text-black ${
                            activeSection === 'mountains'
                              ? 'bg-gray-100 text-gray-900'
                              : ''
                          }`}
                        >
                          <FaMountain className="inline-block mr-1 font-bold" />

                          <span className="hidden lg:inline-block">
                            New Blog
                          </span>
                        </a>
                      </li>
                      <li className="mt-1">
                        <a
                          href="#"
                          onClick={() => handleSectionClick('viewallblogs')}
                          className={`block py-2 px-4 rounded-lg nav-link hover:bg-gray-100 hover:text-black ${
                            activeSection === 'safaris'
                              ? 'bg-gray-100 text-gray-900'
                              : ''
                          }`}
                        >
                          <RiSafariFill className="inline-block mr-1 font-bold" />

                          <span className="hidden lg:inline-block">
                            View all
                          </span>
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="cursor-pointer">
                  <a
                    href="#"
                    onClick={() => handleSectionClick('users')}
                    className={`block py-2 px-4 rounded-lg nav-link hover:bg-gray-100 hover:text-black ${
                      activeSection === 'users'
                        ? 'bg-gray-100 text-gray-900'
                        : ''
                    }`}
                  >
                    <BsFillPersonFill className="inline-block mr-1 font-bold" />
                    <span className="hidden lg:inline-block">Users</span>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    onClick={() => handleSectionClick('settings')}
                    className={`block py-2 px-4 rounded-lg nav-link hover:bg-gray-100 hover:text-black ${
                      activeSection === 'settings'
                        ? 'bg-gray-100 text-gray-900'
                        : ''
                    }`}
                  >
                    <AiOutlineSetting className="inline-block mr-1 font-bold" />
                    <span className="hidden lg:inline-block">Settings</span>
                  </a>
                </li>
                <li className="cursor-pointer">
                  <a
                    onClick={handleSignOut}
                    className="block py-2 px-4 rounded-lg nav-link hover:bg-gray-100 hover:text-black "
                  >
                    <IoIosLogOut className="inline-block mr-1 font-bold" />
                    <span className="hidden lg:inline-block">SignOut</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-5/6  px-4 flex-1   ">
              {activeSection === 'bookings' && <Bookings />}
              {activeSection === 'enquiries' && <Enquiries />}
              {activeSection === 'planning' && <Plannings />}

              {activeSection === 'users' && <Users />}
              {activeSection === 'settings' && <Settings />}
              {activeSection === 'blogs' && <Blogs />}
              {activeSection === 'mountainbookings' && <MountainBookings />}
              {activeSection === 'safaribookings' && <SafariBookings />}
              {activeSection === 'daytripbookings' && <DaytripBookings />}
              {activeSection === 'culturaltoursbookings' && (
                <CulturalBookings />
              )}
              {activeSection === 'viewallblogs' && <ViewBlogs />}
              {activeSection === 'groupclimbs' && <GroupClimbs />}
              {activeSection === 'notifications' && <Notifications />}
              {activeSection === 'fullmoon' && <FullMoon />}
              {activeSection === 'cyclingbookings' && <CyclingBookings />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
