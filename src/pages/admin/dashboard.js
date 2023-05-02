import { useState } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { TbBrandBooking } from 'react-icons/tb';
import { FcPlanner } from 'react-icons/fc';
import {
  BsChevronDown,
  BsChevronUp,
  BsFillPersonFill,
  BsListTask,
} from 'react-icons/bs';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { RiSafariFill } from 'react-icons/ri';
import { GiAncientColumns, GiTakeMyMoney } from 'react-icons/gi';
import { FaBlogger, FaMountain } from 'react-icons/fa';
import Settings from '@/components/dashboard/Settings';
import Blogs from '@/components/dashboard/Blogs';
import Users from '@/components/dashboard/Users';
const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('bookings');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleDropdownClick = () => setShowDropdown(!showDropdown);

  return (
    <div style={{ backgroundImage: `url(/safari-1.jpg)` }}>
      <div className="grid grid-cols-1">
        <div className="mt-24">
          <div className="flex item-center justify-center flex-row   ">
            <div className="text-gray-100 px-4  w-12 lg:w-64 ">
              <ul className="my-8 space-y-2 flex flex-col justify-center items-center lg:items-start py-8 lg:py-0">
                <li className="flex-col">
                  <div
                    className={`flex items-center py-2 px-4 rounded-lg nav-link hover:bg-gray-100 hover:text-black ${
                      activeSection === 'tours'
                        ? 'bg-gray-100 text-gray-900'
                        : ''
                    }`}
                    onClick={() => handleSectionClick('tours')}
                  >
                    <TiWeatherPartlySunny className="inline-block mr-1 font-bold" />
                    <span className="hidden lg:inline-block">Tours</span>
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
                          onClick={() => handleSectionClick('mountains')}
                          className={`block py-2 px-4 rounded-lg nav-link hover:bg-gray-100 hover:text-black ${
                            activeSection === 'mountains'
                              ? 'bg-gray-100 text-gray-900'
                              : ''
                          }`}
                        >
                          <FaMountain className="inline-block mr-1 font-bold" />

                          <span className="hidden lg:inline-block">
                            Mountain Trekking
                          </span>
                        </a>
                      </li>
                      <li className="mt-1">
                        <a
                          href="#"
                          onClick={() => handleSectionClick('safaris')}
                          className={`block py-2 px-4 rounded-lg nav-link hover:bg-gray-100 hover:text-black ${
                            activeSection === 'safaris'
                              ? 'bg-gray-100 text-gray-900'
                              : ''
                          }`}
                        >
                          <RiSafariFill className="inline-block mr-1 font-bold" />

                          <span className="hidden lg:inline-block">Safari</span>
                        </a>
                      </li>
                      <li className="mt-1">
                        <a
                          href="#"
                          onClick={() => handleSectionClick('dayTrips')}
                          className={`block py-2 px-4 rounded-lg nav-link hover:bg-gray-100 hover:text-black ${
                            activeSection === 'dayTrips'
                              ? 'bg-gray-100 text-gray-900'
                              : ''
                          }`}
                        >
                          <TiWeatherPartlySunny className="inline-block mr-1 font-bold" />
                          <span className="hidden lg:inline-block">
                            Day Trips
                          </span>
                        </a>
                      </li>
                      <li className="mt-1">
                        <a
                          href="#"
                          onClick={() => handleSectionClick('culturalTours')}
                          className={`block py-2 px-4 rounded-lg nav-link hover:bg-gray-100 hover:text-black ${
                            activeSection === 'culturalTours'
                              ? 'bg-gray-100 text-gray-900'
                              : ''
                          }`}
                        >
                          <GiAncientColumns className="inline-block mr-1 font-bold" />
                          <span className="hidden lg:inline-block">
                            Cultural tours
                          </span>
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="flex-col">
                  <a
                    href="#"
                    onClick={() => handleSectionClick('bookings')}
                    className={`block py-2 px-4 rounded-lg nav-link hover:bg-gray-100 hover:text-black ${
                      activeSection === 'bookings'
                        ? 'bg-gray-100 text-gray-900'
                        : ''
                    }`}
                  >
                    <TbBrandBooking className="inline-block mr-1 font-bold" />
                    <span className="hidden lg:inline-block">Bookings</span>
                  </a>
                </li>
                <li>
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
                <li>
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
                <li>
                  <a
                    href="#"
                    onClick={() => handleSectionClick('promotions')}
                    className={`block py-2 px-4 rounded-lg nav-link hover:bg-gray-100 hover:text-black ${
                      activeSection === 'promotions'
                        ? 'bg-gray-100 text-gray-900'
                        : ''
                    }`}
                  >
                    <GiTakeMyMoney className="inline-block mr-1 font-bold" />
                    <span className="hidden lg:inline-block">Promotions</span>
                  </a>
                </li>
                <li>
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
                    onClick={() => handleSectionClick('blogs')}
                    className={`block py-2 px-4 rounded-lg nav-link hover:bg-gray-100 hover:text-black ${
                      activeSection === 'blogs'
                        ? 'bg-gray-100 text-gray-900'
                        : ''
                    }`}
                  >
                    <FaBlogger className="inline-block mr-1 font-bold" />
                    <span className="hidden lg:inline-block">Blogs</span>
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
              </ul>
            </div>

            <div className="  px-4 flex-1">
              {activeSection === 'bookings' && <p>bookings</p>}
              {activeSection === 'enquiries' && <p>enquiries</p>}
              {activeSection === 'planning' && <p>planning</p>}
              {activeSection === 'promotions' && <p>promotions</p>}
              {activeSection === 'users' && <Users />}
              {activeSection === 'settings' && <Settings />}
              {activeSection === 'tours' && <p>tours</p>}
              {activeSection === 'mountains' && <p>meruss</p>}
              {activeSection === 'safaris' && <p>msafaris</p>}
              {activeSection === 'dayTrips' && <p>daytrips</p>}
              {activeSection === 'culturalTours' && <p>culturalToura</p>}
              {activeSection === 'blogs' && <Blogs />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
