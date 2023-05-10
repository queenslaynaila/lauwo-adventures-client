import React from 'react';
import Head from 'next/head';
import FaqCard from '@/components/FaqCard';
import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DayTripCard from '@/components/DayTripCard';

export default function Index({faqs, dayTrips}) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredFaqs = faqs.filter((faq) => {
    return faq.question.toLowerCase().includes(searchValue.toLowerCase());
  });
  return (
    <div className='font-poly'>
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
                  asked questions, and learn how to plan for the best day trip adventure.
                </div>
              </div>
              <div className="cta clear-left px-5">
                <a
                  className="no-underline btn btn-primary block sm:inline-block global-transition text-white"
                  href="/plan-safari"
                  target="_blank"
                >
                  <div className="flex justify-center items-center">
                    <span>Plan your adventure today.</span>
                    <span className="fa fa-xs fa-arrow-right ml-4"></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 bg-yellow-500">
          <p className="text-white lg:ml-12">
            Trusted Tour Company in Tanzania. See our reviews here.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 mx-16 my-6">
        {dayTrips.map((day) => (
          <DayTripCard key={day.id} day={day} />
        ))}
      </div>
        <div>
          <div className="py-16 relative">
            <div className="flex items-center justify-center gap-4">
              <hr className="sm:w-40 w-10 border border-black" />
              <h1 className="3xl:text-4xl xl:text-2xl text-xl font-semibold">
                Frequently Asked Questions
              </h1>
              <div>
                <BiSearch
                  className="text-2xl cursor-pointer transition duration-500 ease-in-out hover:text-yellow-500"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                />
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
export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/safari_faqs');
  const faqs = await res.json();
  const day = await fetch('http://localhost:3000/day_trips');
  const dayTrips = await day.json();
  return {
    props: {
      faqs, dayTrips
    },
  };
}
