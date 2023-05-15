import Head from 'next/head';
import FaqCard from '@/components/FaqCard';
//import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';
import Link from 'next/link';
import DayTripCard from '@/components/DayTripCard';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import EnquiryPopUp from '@/components/enquirypopup';
import SocialsButtons from '@/components/SocialsButtons';
 
export default function Index({ faqs, dayTrips }) {
  console.log('me')
  console.log(faqs)

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
  
console.log(filteredFaqs)
  return (
    <div className="font-poly">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Day Trips in Tanzania | Lauwo Adventures</title>
        <meta
          name="description"
          content="Explore the beauty of Tanzania with exciting day trips offered by Lauwo Adventures. Discover breathtaking landscapes, wildlife, and local culture."
        />
        <meta
          name="keywords"
          content="Marangu to Mandara Hut Day Trip, Kikuletwa Hot Springs Day Trip, Maasai Tours, Arusha National Park Day Trip, day trips, Tanzania, Lauwo Adventures"
        />
        <meta name="author" content="Lauwo Adventures" />
        <meta name="google" content="translate" />
        <meta
          name="google-site-verification"
          content="hKFgedHOB3VpAnDkoVs-Fm7QCpHkhAh6KaHKxbMVra8"
        />
        <Link
          rel="canonical"
          href="https://lauwo-adventures-client.vercel.app/day-trips"
        />
      </Head>
       
       <div
        className="relative bg-no-repeat bg-center bg-cover flex justify-center items-center"
        style={{ backgroundImage: "url('/daylake.jpg')" }}
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
                Discover Tanzania in A Day
              </div>
              <div className="text leading-normal text-white">
                Discover exciting tour locations, get answers to frequently
                asked questions, and learn how to plan for the best day trip
                adventure.
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
                    <span className="mr-2">Plan a Trip</span>
                    <span className="fa fa-arrow-right"></span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2 bg-yellow-500 flex items-center justify-between">
        <p className="text-white lg:ml-12">
          Trusted Tour Company in Tanzania.
        </p>
        <div>
          <Popup
            trigger={
              <button className="text-white border  border-white-500 hover:bg-yellow-800 hover:text-white rounded-md px-4 py-2">
                Enquire
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
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Tanzanian Day Trips
          </h2>
          <p className="mb-4 leading-8">
            Embark on a Tanzanian day trip with Lauwo Adventures and discover
            why Tanzania offers some of the best safaris in Africa. To truly
            appreciate the wonders of this country, you usually need more time,
            but our 1-day safaris provide an opportunity for an unforgettable
            experience. Every day on safari is filled with unique encounters and
            surprises, as nature unveils its beauty. As a leading tour operator,
            we have curated a diverse range of exceptional day trips to cater to
            your preferences. While these trips involve travel time to and from
            the parks, it&apos;s a chance to immerse yourself in the countryside
            and witness the local way of life. Get ready for a fun and
            action-packed adventure, creating lasting memories to cherish.
            Choose Lauwo Adventures for a remarkable day trip that showcases the
            remarkable wildlife and landscapes of Tanzania.
          </p>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center">
        Discover Our Extraordinary Day Trip Packages
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 mx-16 my-6">
        {dayTrips.map((day) => (
          <DayTripCard key={day.id} day={day} />
        ))}
      </div>
      <div >
        <div className="py-16 relative">
          <div className="flex items-center justify-center gap-4">
            <hr className="sm:w-40 w-10 border border-black" />
            <h1 className="3xl:text-4xl xl:text-2xl text-xl font-semibold">
              Frequently Asked Questions
            </h1>
            <div>
           
              {/* <BiSearch/>
              {isSearchOpen && (
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent border-b  px-4
                  focus:outline-none focus:border-primary sm:w-72 w-40"
                  onChange={handleSearch}
                />
              )} */}
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
      <SocialsButtons />
      
     
     
    </div>
  );
}
export async function getStaticProps() {
  const [faqRes, dayRes] = await Promise.all([
    fetch('https://lauwo-adventures-api.onrender.com/day_trip_faqs'),
    fetch('https://lauwo-adventures-api.onrender.com/day_trips'),
  ]);

  const [faqs, dayTrips] = await Promise.all([faqRes.json(), dayRes.json()]);

  return {
    props: {
      faqs,
      dayTrips,
    },
  };
}

