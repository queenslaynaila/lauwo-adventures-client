import Image from 'next/image';
import Head from 'next/head';
import FaqCard from '@/components/FaqCard';
//import { BiSearch } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { generateSlug } from '@/utils/generateSlug';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import EnquiryPopUp from '@/components/enquirypopup';
import NotificationForm from '@/components/NotificationForm';
import GroupBookings from '@/components/GroupBookings';
export default function Mountain({ mountain, faqs }) {
  const [groupClimbs, setGroupClimbs] = useState([]);
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

  const contentStyle = {
    width: '85%',
    maxHeight: '85%',
    overflow: 'auto',
    margin: 'auto',
  };
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredFaqs = faqs.filter((faq) => {
    return faq.question.toLowerCase().includes(searchValue.toLowerCase());
  });
  return (
    <div className="font-poly">
      <Head>
        <title>{mountain.mountain_name} - Mountain Trekking</title>
        <meta name="description" content={mountain.overview} />
        <meta
          property="og:title"
          content={`${mountain.mountain_name} - Mountain Trekking`}
        />
        <meta property="og:description" content={mountain.overview} />
        <meta property="og:image" content={mountain.image_url} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://example.com/mountain-trekking/${generateSlug(
            mountain.mountain_name
          )}`}
        />
        <meta
          name="twitter:title"
          content={`${mountain.mountain_name} - Mountain Trekking`}
        />
        <meta name="twitter:description" content={mountain.overview} />
        <meta name="twitter:image" content={mountain.image_url} />
      </Head>
      <div
        className="relative bg-no-repeat bg-center bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${mountain.image_url})` }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
          }}
        ></div>
        <div className="relative container mx-auto p-4 flex mt-8 items-end">
          <div>
            <div className="float-left py-10 px-5 my-5">
              <div className="heading mb-3 text-2xl md:text-4xl text-white">
                {mountain.mountain_name}
              </div>
              <div className="text leading-normal text-white">
                {mountain.description}
              </div>
            </div>
            <div className="cta clear-left px-5">
              <div className="flex">
                <Link
                  className="no-underline mr-2 btn btn-outline-primary block sm:inline-block global-transition text-white"
                  href="/travelconsideration"
                >
                  <button className="text-white border border-yellow-500 hover:bg-yellow-500 hover:text-white rounded-md px-4 py-2 flex items-center">
                    <span className="mr-2">Plan A Tanzanian Visit </span>
                    <span className="fa fa-arrow-right"></span>
                  </button>
                </Link>
                <Link
                  className="no-underline btn btn-outline-primary block sm:inline-block global-transition text-white"
                  href="/planning-form"
                >
                  <button className="text-white border border-yellow-500 hover:bg-yellow-500 hover:text-white rounded-md px-4 py-2 flex items-center">
                    <span className="mr-2">Plan a Climb</span>
                    <span className="fa fa-arrow-right"></span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 bg-yellow-500 flex items-center justify-between">
        <p className="text-white lg:ml-12">
          Discover the richness of Tanzania&apos;s cultural experiences through
          our curated tours.
        </p>
        <div>
          <Popup
            trigger={
              <button className="text-white border  border-white-500 hover:bg-yellow-800 hover:text-white rounded-md px-4 py-2">
                Enquire Now
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
                <EnquiryPopUp />
              </div>
            )}
          </Popup>
        </div>
      </div>

      <div className="p-4 mb-4">
        <div className="p-4 ">
          <h2 className="text-2xl font-bold text-center mb-6">
            Climbing {mountain.mountain_name} with Lauwo Adventures
          </h2>
          <p className="  leading-8">{mountain.overview}</p>
        </div>
        <div className="py-8 px-4">
          <h2 className="text-2xl font-bold text-center mb-6">
            Choosing the Right Route
          </h2>
          <p className="text-lg text-center mb-4">
            We offer a variety of routes to conquer {mountain.mountain_name}
            ,including:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mountain.routes.map((route, index) => (
              <li className="mb-4" key={index}>
                <h3 className="text-lg font-bold">{route.route_name}</h3>
                <p className=" leading-8">{route.highlights}</p>
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-bold text-center mb-6 mt-8 capitalize">
            Best Time to Climb {mountain.mountain_name}
          </h2>
          <p className="text-lg text-center mb-4">
            The climbing conditions on {mountain.mountain_name} vary across
            seasons. Here&apos; s an overview of the peak and off-peak seasons:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
            <li className="mb-4">
              <h3 className="text-lg font-bold">Peak Seasons</h3>
              <p className="  leading-8">{mountain.peak_season}</p>
            </li>
            <li className="mb-4">
              <h3 className="text-lg font-bold">Off-Peak Seasons</h3>
              <p className=" leading-8">{mountain.off_peak_season}</p>
            </li>
          </ul>

          <p className="  mt-4 leading-8">
            It&apos;s important to note that {mountain.mountain_name} can be
            climbed year-round, but the peak and off-peak seasons have different
            advantages and considerations. Our experienced guides can provide
            personalized advice based on your preferences and the specific route
            you choose. Contact us with your preferred climbing dates, and
            we&apos;ll help you plan your {mountain.mountain_name} adventure
            accordingly.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <div className="border-t-2 border-black w-full"></div>
          <div className="mx-4 inline">
            <Image src="/peakfinder.png" alt="nnn" height={50} width={50} />
            <span>ROUTES</span>
          </div>
          <div className="border-t-2 border-black w-full"></div>
        </div>
      </div>

      <div className="flex flex-wrap">
        {mountain.routes.map((route) => (
          <div className="w-full md:w-1/3 p-4" key={route.id}>
            <div className="relative bg-white overflow-hidden shadow-lg group">
              <div>
                <Image
                  src={route.image_URL}
                  alt="Mount Kilimanjaro"
                  width={500}
                  height={333}
                />
              </div>

              <div
                className="absolute bottom-0 bg-yellow-400 text-black p-2 w-full"
                style={{ objectFit: 'cover' }}
              >
                <h2 className="text-lg font-bold text-center">
                  {route.route_name}
                </h2>
              </div>
              <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h2 className="text-lg font-bold text-black mb-4">
                    {route.route_name}
                  </h2>
                  <div>
                    {route.durations.map((duration) => (
                      <Link
                        href={`/mountain-trekking/${generateSlug(
                          mountain.mountain_name
                        )}/${generateSlug(route.route_name)}-${duration}-days`}
                        key={duration}
                      >
                        <button
                          className="w-full mb-2 px-2  py-2 border border-black bg-yellow-400 text-black font-bold hover:bg-black hover:text-yellow-400"
                          key={duration}
                        >
                          {duration} days
                        </button>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 mb-4">
        <div className="p-4 ">
          <h2 className="text-2xl font-bold text-center mb-6">Group Climbs</h2>
          <p className="  leading-8">
            Are you a solo traveler or part of a small group of two? Join one of
            our scheduled group climbs and enjoy a more cost-effective
            adventure. By joining our open group expeditions, you&apos; ll have
            the opportunity to climb alongside like-minded travelers from all
            over the world. Immerse yourself in the company of fellow climbers
            from countries such as the US, UK, Germany, Canada, France, Brazil,
            Netherlands, Russia, and Ukraine.
          </p>
        </div>
        <div className="p-4 mb-4">
          {groupClimbs.length > 0 ? (
            <ul role="list" className="divide-y divide-black divide-opacity-50">
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
                We apologize for the inconvenience, but there are currently no
                scheduled group climbs for {mountain.mountain_name} currently.
                However, we have got you covered! Enter your details below, and
                we&apos;ll make sure to notify you via email as soon as new
                group climbs for {mountain.mountain_name} are added. Don&apos;t
                miss out on the opportunity to join our exciting adventures!
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
                      <NotificationForm mountain={mountain.mountain_name} />
                    </div>
                  )}
                </Popup>
              </div>
            </div>
          )}
        </div>
      </div>

      <div>
        <div className="py-16 relative">
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
