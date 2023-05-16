import Image from 'next/image';
import React from 'react';
import FaqCard from '@/components/FaqCard';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { generateSlug } from '@/utils/generateSlug';
import { generateSlug2 } from '@/utils/generateSlug2';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import NotificationForm from '@/components/NotificationForm';
import GroupBookings from '@/components/GroupBookings';
import 'reactjs-popup/dist/index.css';
import { truncate } from '@/utils/truncate';
import simpleFormat from '@/utils/simpleFormat';
const menuTabs = ['Itinerary', 'Pricing', 'Inclusive', 'Exclusive', 'Book'];
console.log(menuTabs);
import SocialsButtons from '@/components/SocialsButtons';
export default function Mountain({ mountain, faqs }) {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredPackage = mountain.route_durations.filter((route) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const lowerCaseTitle = route.title.toLowerCase();
    const durationDays = route.duration_days.toString();

    return (
      lowerCaseTitle.includes(lowerCaseQuery) ||
      durationDays.includes(lowerCaseQuery)
    );
  });

  const contentStyle = {
    width: '85%',
    maxHeight: '85%',
    overflow: 'auto',
    margin: 'auto',
  };
  const [groupClimbs, setGroupClimbs] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchGroupClimbs = async () => {
      try {
        const formattedMountainName = mountain.mountain_name.replace(
          'Mount ',
          ''
        );
        console.log(formattedMountainName);
        const response = await fetch(
          `https://lauwo-adventures-api.onrender.com/group_climbs/mountain_name/${formattedMountainName}`
        );
        if (response.ok) {
          const data = await response.json();
          setGroupClimbs(data);
        } else {
          console.error('Failed to fetch group climbs data');
          setGroupClimbs([]);
        }
      } catch (error) {
        console.error('Failed to fetch group climbs data', error);
        setGroupClimbs([]);
      }
    };

    fetchGroupClimbs();
  }, [mountain]);
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const filteredFaqs = faqs.filter((faq) => {
    return faq.question.toLowerCase().includes(searchValue.toLowerCase());
  });
  console.log(mountain.routes);
  return (
    <div className="font-poly">
      <header
        className="h-[50vh] lg:h-[60vh] bg-cover bg-image bg-center bg-no-repeat flex items-center justify-center bg-gray-400 bg-blend-multiply"
        style={{
          backgroundImage: `url(${mountain.image_url})`,
        }}
      >
        <div className="relative container p-4 mt-16">
          <div className="py-10 px-5 my-5 text-center">
            <div className="border-t-2 border-b-2 border-white my-3 pb-4 pt-2 md:text-4xl text-white text-4xl font-bold leading-[50px] mx-auto max-w-2xl uppercase">
              {mountain.mountain_name}
            </div>
            <div className="text leading-normal text-white mx-auto max-w-2xl">
              PRIVATE TREKS AND GROUP CLIMBS
            </div>
          </div>
        </div>
      </header>
      <div
        className="  border-solid border-t-5 border-ad884a"
        style={{ borderTop: '5px solid #ad884a' }}
      ></div>
      <div className="py-5 px-5 my-5 text-center">
        <div className="border-t-2 border-b-2 border-white my-3 pb-4 pt-2 md:text-4xl text-black text-4xl font-bold leading-[50px] mx-auto max-w-2xl uppercase">
          {mountain.mountain_name} CLIMBING TRIPS
        </div>
        <div className="text leading-normal text-black mx-auto max-w-2xl flex flex-col lg:flex-row md:flex-row justify-between gap-11">
          <p>
            Climb {mountain.mountain_name} with Lauwo Adventures, a trusted
            local trekking tour operator. We offer hikes on the
            Kilimanjaro,Meru,Usambara and oldonyo ranging from 5 to 9 days.
          </p>
          <p>
            Lauwo Adventures&apos;s team of experts will support you every
            moment of your hike to the summit. We offer the best treks at
            affordable prices and cost. Join hundreds of climbers who climb Mt.
            Kilimanjaro every year guided by our professional local mountain
            expert team. We are a premier Kilimanjaro company specializing in
            mountain climbing with a focus on Kiimnajaro and Tanzania Safaris.
          </p>
        </div>
      </div>
      <div
        className="  border-solid border-t-5 border-ad884a"
        style={{ borderTop: '5px solid #ad884a' }}
      ></div>
      <div className="py-5 px-5 my-5 text-center">
        <div
          className="border-t-2 border-b-2 border-black my-3 pb-4 pt-2  text-black text-2xl font-bold leading-[50px]
         mx-auto max-w-2xl uppercase"
        >
          START WITH OUR RECCOMENDED ITINERIES
        </div>
      </div>

      <div>
        <div>
          <ul className="pb-4 flex flex-wrap text-sm font-medium text-center gap-2 justify-center items-center text-gray-500   ">
            <li className="mr-2">
              <button
                className={`inline-block p-4 rounded-lg ${
                  activeTab === 'overview'
                    ? 'bg-yellow-700 text-white'
                    : 'hover:text-black hover:bg-gray-50 bg-yellow-500 text-white'
                }`}
                onClick={() => handleTabChange('overview')}
              >
                Overview
              </button>
            </li>
            {mountain.route_durations.length > 0 ? (
              <li className="mr-2">
                <button
                  className={`inline-block p-4 rounded-lg ${
                    activeTab === 'all'
                      ? 'bg-yellow-700 text-white'
                      : 'hover:text-black hover:bg-gray-50 bg-yellow-500 text-white'
                  }`}
                  onClick={() => handleTabChange('all')}
                >
                  All packages
                </button>
              </li>
            ) : null}

            {mountain.itinery ? (
              <li className="mr-2">
                <button
                  className={`inline-block p-4 rounded-lg ${
                    activeTab === 'itinery'
                      ? 'bg-yellow-700 text-white'
                      : 'hover:text-black hover:bg-gray-50 bg-yellow-500 text-white'
                  }`}
                  onClick={() => handleTabChange('itinery')}
                >
                  Itinery
                </button>
              </li>
            ) : null}
            {mountain.routes.map((route) => (
              <li className="mr-2 " key={route.id}>
                <button
                  // href={`#${route.route_name}`}
                  className={`inline-block p-4 rounded-lg ${
                    activeTab === route.id
                      ? 'bg-yellow-700 text-white active'
                      : 'hover:text-black hover:bg-gray-50  bg-yellow-500 text-white'
                  }`}
                  onClick={() => handleTabChange(route.id)}
                >
                  {route.route_name}
                </button>
              </li>
            ))}
            <li className="mr-2">
              <button
                className={`inline-block p-4 rounded-lg ${
                  activeTab === 'groups'
                    ? 'bg-yellow-700 text-white'
                    : 'hover:text-black hover:bg-gray-50 bg-yellow-500 text-white'
                }`}
                onClick={() => handleTabChange('groups')}
              >
                Group Climbs
              </button>
            </li>
            <li className="mr-2">
              <button
                className={`inline-block p-4 rounded-lg ${
                  activeTab === 'faqs'
                    ? 'bg-yellow-700 text-white'
                    : 'hover:text-black hover:bg-gray-50 bg-yellow-500 text-white'
                }`}
                onClick={() => handleTabChange('faqs')}
              >
                FAQS
              </button>
            </li>
          </ul>

          <div>
            {mountain.routes.map((route) => (
              <div
                id={route.id}
                className={`tab-content ${
                  activeTab === route.id ? '' : 'hidden'
                }`}
                key={route.id}
              >
                <h1 className="text-center p-4 text-2xl font-bold capitalize">
                  Overview
                </h1>
                <p className="p-2 leading-8 mx-4 lg:mx-16">
                  {route.description}. At Lauwo, we offer{' '}
                  {route.durations.map((duration) => (
                    <React.Fragment key={duration}>
                      {duration} day package{duration > 1 && 's'} for{' '}
                      {route.route_name}
                    </React.Fragment>
                  ))}
                </p>
                <h1 className="text-center p-4 text-2xl font-bold capitalize">
                  Plan Your Climb on The {route.route_name}
                </h1>
                <p className="  p-2 leading-8  mx-4 lg:mx-16">
                  Difficulty:{route.difficulty}
                </p>
                <p className="  p-2 leading-8  mx-4 lg:mx-16">
                  Height:{route.height}
                </p>
                <p className="  p-2 leading-8  mx-4 lg:mx-16">
                  Trail Conditions:{route.trail_conditions}
                </p>
                <h1 className="text-center p-4 text-2xl font-bold">
                  Suitability
                </h1>
                <p className="  p-2 leading-8  mx-4 lg:mx-16">
                  {simpleFormat(route.highlights)}
                </p>
                <h1 className="text-center p-4 text-2xl font-bold capitalize">
                  A breakdown of {route.route_name} Prices
                </h1>

                <h1 className="text-center p-4 text-2xl font-bold capitalize">
                  {route.route_name} Packages
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                  {route.durations.map((duration) => (
                    <Link
                      href={`/mountain-trekking/${generateSlug(
                        mountain.mountain_name
                      )}/${generateSlug(route.route_name)}-${duration}-days`}
                      key={duration}
                    >
                      <div className="p-4">
                        <div className="relative bg-white border border-gray-200 rounded-lg shadow">
                          <Image
                            src={route.image_URL}
                            alt="/"
                            width={800}
                            height={600}
                            className="h-64 w-full object-cover rounded-t-lg"
                          />
                          <div className="p-5 hover:bg-yellow-500">
                            <h2 className="mb-2 sm:text-lg font-bold font-poly tracking-wide text-gray-900 capitalize">
                              {route.route_name} {duration} Day Climb
                            </h2>
                            <p className="leading-8">Price from:</p>
                            <p className="leading-8">
                              {' '}
                              {truncate(route.highlights, 100)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            id={'overview'}
            className={`tab-content ${
              activeTab === 'overview' ? '' : 'hidden'
            }`}
          >
            <div>
              <h1 className="text-center p-4 text-2xl font-bold">Overview</h1>
              <p className="  p-2 leading-8  mx-4 lg:mx-16">
                {mountain.overview}
              </p>
              <h1 className="text-center p-4 text-2xl font-bold">
                Peak Season{' '}
              </h1>
              <p className="  p-2 leading-8  mx-4 lg:mx-16">
                {mountain.peak_season}
              </p>
              <h1 className="text-center p-4 text-2xl font-bold">
                Off Peak Season{' '}
              </h1>
              <p className="  p-2 leading-8  mx-4 lg:mx-16">
                {mountain.off_peak_season}
              </p>
            </div>
          </div>
          <div
            id={'itinery'}
            className={`tab-content ${activeTab === 'itinery' ? '' : 'hidden'}`}
          >
            <div>
              <h1 className="text-center p-4 text-2xl font-bold">Itinery</h1>
              <p className="  p-2 leading-8  mx-4 lg:mx-16">
                {mountain.itinery}
              </p>
            </div>
          </div>
          <div
            id={'groups'}
            className={`tab-content ${activeTab === 'groups' ? '' : 'hidden'}`}
          >
            <div className="p-4 mb-4">
              <div>
                <h2 className="text-2xl font-bold text-center mb-6">
                  Group Climbs
                </h2>
                <p className="  leading-8">
                  Are you a solo traveler or part of a small group of two? Join
                  one of our scheduled group climbs and enjoy a more
                  cost-effective adventure. By joining our open group
                  expeditions, you&apos; ll have the opportunity to climb
                  alongside like-minded travelers from all over the world.
                  Immerse yourself in the company of fellow climbers from
                  countries such as the US, UK, Germany, Canada, France, Brazil,
                  Netherlands, Russia, and Ukraine.
                </p>
              </div>
              <div className="p-4 mb-4">
                {groupClimbs.length > 0 ? (
                  <ul
                    role="list"
                    className="divide-y divide-black divide-opacity-50"
                  >
                    {groupClimbs.map((groupClimb) => (
                      <li
                        className="flex justify-between gap-x-6 py-6"
                        key={groupClimb.id}
                      >
                        <div className="flex gap-x-4">
                          <div className="flex-none h-14 w-14 rounded-full bg-yellow-500 flex items-center justify-center">
                            <p className="text-white text-sm font-bold">
                              {groupClimb.day}
                              <br />
                              {groupClimb.month}
                            </p>
                          </div>
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">
                              {groupClimb.title}
                            </p>
                            <p className="mt-1 text-xs leading-5 text-gray-500">
                              {groupClimb.tag}
                            </p>
                          </div>
                        </div>
                        <div>
                          <Popup
                            trigger={
                              <button className="bg-yellow-500 text-white rounded-md px-4 py-2">
                                Join Group
                              </button>
                            }
                            modal
                            nested
                            closeOnDocumentClick
                            contentStyle={contentStyle}
                          >
                            {(close) => (
                              <div className="modal">
                                <button className="close " onClick={close}>
                                  &times;
                                </button>
                                <GroupBookings id={groupClimb.id} />
                              </div>
                            )}
                          </Popup>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-center">
                    <p className="leading-8 mb-2 text-lg">
                      We apologize for the inconvenience, but there are
                      currently no scheduled group climbs for{' '}
                      {mountain.mountain_name} currently. However, we have got
                      you covered! Enter your details below, and we&apos;ll make
                      sure to notify you via email as soon as new group climbs
                      for {mountain.mountain_name} are added. Don&apos;t miss
                      out on the opportunity to join our exciting adventures!
                    </p>
                    <div>
                      <Popup
                        trigger={
                          <button className="bg-yellow-500 text-white rounded-md px-4 py-2">
                            Join Notification List
                          </button>
                        }
                        modal
                        nested
                        closeOnDocumentClick
                        contentStyle={contentStyle}
                      >
                        {(close) => (
                          <div className="modal">
                            <button className="close " onClick={close}>
                              &times;
                            </button>
                            <NotificationForm
                              mountain={mountain.mountain_name}
                            />
                          </div>
                        )}
                      </Popup>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            id={'all'}
            className={`tab-content ${activeTab === 'all' ? '' : 'hidden'}`}
          >
            <div>
              <div className="py-2 relative">
                <div className="flex items-center justify-center gap-4">
                  <hr className="sm:w-40 w-10 border border-black" />
                  <h1 className="3xl:text-2xl xl:text-xl text-lg font-semibold p-4">
                    ALL ROUTE PACKAGES
                  </h1>
                </div>
                <div>
                  <form className="mx-6">
                    <label
                      for="default-search"
                      class="mb-2 text-sm font-medium text-gray-900 sr-only "
                    >
                      Search
                    </label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          class="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg        "
                        placeholder="Search by route name or route duration in numerics."
                        required
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </form>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mx-6">
                  {filteredPackage.map((route, index) => (
                    <Link
                      href={`/mountain-trekking/${generateSlug(
                        mountain.mountain_name
                      )}/${generateSlug2(route.title)}`}
                      key={index}
                    >
                      <div className="p-4">
                        <div className="relative bg-white border border-gray-200 rounded-lg shadow">
                          <Image
                            src={route.image_url}
                            alt={route.title}
                            width={800}
                            height={600}
                            className="h-64 w-full object-cover rounded-t-lg"
                          />
                          <div className="p-5 hover:bg-yellow-500">
                            <h2 className="mb-2 sm:text-lg font-bold font-poly tracking-wide text-gray-900 capitalize">
                              {route.title}
                            </h2>
                            <p className="leading-8">
                              Price From: USD{' '}
                              <span className="font-semibold">
                                {route.one_three_price}
                              </span>
                            </p>
                            <p className="leading-8">
                              {' '}
                              {truncate(route.description, 100)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            id={'faqs'}
            className={`tab-content ${activeTab === 'faqs' ? '' : 'hidden'}`}
          >
            <div>
              <div className="py-2 relative">
                <div className="flex items-center justify-center gap-4">
                  <hr className="sm:w-40 w-10 border border-black" />
                  <h1 className="3xl:text-4xl xl:text-2xl text-xl font-semibold">
                    Frequently Asked Questions
                  </h1>
                  <div>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      className="text-2xl cursor-pointer transition duration-500 ease-in-out hover:text-yellow-500"
                      onClick={() => setIsSearchOpen(!isSearchOpen)}
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" />
                    </svg>

                    {isSearchOpen && (
                      <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent border-b  px-4
            focus:outline-none focus:border-primary sm:w-72 w-40
          "
                        onChange={handleSearch}
                      />
                    )}
                  </div>
                </div>

                <div className="w-3/4 mx-auto mt-10">
                  {filteredFaqs.length > 0 ? (
                    filteredFaqs.map((faq) => (
                      <FaqCard
                        key={faq.id}
                        question={faq.question}
                        answer={faq.answer}
                      />
                    ))
                  ) : (
                    <div className="text-white text-center">
                      <h1 className="text-2xl font-semibold">No FAQs found</h1>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SocialsButtons />
    </div>
  );
}
export async function getStaticPaths() {
  const res = await fetch(
    'https://lauwo-adventures-api.onrender.com/mountains'
  );
  const mountains = await res.json();
  const paths = mountains.map((mountain) => ({
    params: { mountain: generateSlug(mountain.mountain_name), id: mountain.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    'https://lauwo-adventures-api.onrender.com/mountains'
  );
  const mountains = await res.json();
  const mountain = mountains.find(
    (mountain) => generateSlug(mountain.mountain_name) === params.mountain
  );
  const res2 = await fetch(
    'https://lauwo-adventures-api.onrender.com/frequently_asked_questions'
  );
  const faqs = await res2.json();
  return {
    props: {
      mountain,
      faqs,
    },
  };
}
