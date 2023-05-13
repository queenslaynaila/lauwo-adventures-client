import React from 'react';
import Link from 'next/link';
import EnquiryPopUp from '@/components/enquirypopup';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import simpleFormat from '@/utils/simpleFormat';
export default function Index({ tips }) {
  const debounce = (fn, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
  };

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue)
  const [currentItem, setCurrentItem] = useState(0);
  const [filteredTips, setFilteredTips] = useState(tips);
  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    debouncedSearch(value); // Call the debounced search function
  };

  const debouncedSearch = debounce((value) => {
    const filtered = tips.filter((tip) =>
      tip.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredTips(filtered);
    setCurrentItem(0); // Reset to the first item when search value changes
  }, 300); // Adjust the delay (in milliseconds) as needed

  const handlePrev = () => {
    setCurrentItem((currentItem - 1 + tips.length) % tips.length);
    console.log(currentItem);
  };

  const handleNext = () => {
    setCurrentItem((currentItem + 1) % tips.length);
    console.log(currentItem);
  };

  const contentStyle = {
    width: '55%',
    maxHeight: '85%',
    overflow: 'auto',
    margin: 'auto',
  };
  return (
    <div>
      <div className="font-poly">
        <div
          className="relative bg-no-repeat bg-center bg-cover flex justify-center items-center"
          style={{ backgroundImage: "url('/mountain2.jpg')" }}
        >
          <div
            className="absolute bg-black/80 inset-0"
            style={{
              background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
            }}
          ></div>
          <div className="relative container mx-auto p-4 flex mt-8 items-end">
            <div>
              <div className="float-left py-10 px-5 my-5 ">
                <div className="heading mb-3 text-2xl md:text-4xl text-white">
                  How to Plan Your Kilimanjaro Hike
                </div>
                <div className="text leading-normal text-white">
                  Planning is crucial for a successful Kilimanjaro hike,
                  ensuring safety, proper acclimatization, and a well-organized
                  expedition.
                </div>
              </div>
              <div className="cta clear-left px-5">
                <div className="flex">
                  <Link
                    className="no-underline mr-2 btn btn-outline-primary block sm:inline-block global-transition text-white"
                    href="/travelconsideration"
                  >
                    <button className="text-white border border-yellow-500 hover:bg-yellow-500 hover:text-white rounded-md px-4 py-2 flex items-center">
                      <span className="mr-2">
                        Tanzania Travel Considerations
                      </span>
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

        <div className="p-5 bg-yellow-500 flex items-center justify-between">
          <p className="text-white lg:ml-12">
            Trusted Tour Company in Tanzania. See our reviews here.
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

        <div>
          <div className="py-16 relative ">
            <div className="flex items-center justify-center gap-4">
              <hr className="sm:w-40 w-10 border border-black" />
              <h1 className="3xl:text-4xl xl:text-2xl text-xl font-semibold">
                Planning Tips
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
            <div className="sm:w-3/4 w-full mx-auto mt-10 px-4">
              {filteredTips.length > 0 ? (
                <>
                  <div className="flex justify-between">
                    <button onClick={handlePrev} disabled={currentItem === 0}>
                      <BsArrowLeftCircleFill
                        className={`text-black text-2xl ${
                          currentItem === 0 ? 'hidden' : 'cursor-pointer'
                        }`}
                      />
                    </button>
                    <h2 className="text-black font-semibold xl:text-2xl text-xl capitalize text-center">
                      {filteredTips[currentItem].title}
                    </h2>
                    <button
                      onClick={handleNext}
                      disabled={currentItem === filteredTips.length - 1}
                    >
                      <BsArrowRightCircleFill
                        className={`text-black text-2xl ${
                          currentItem === filteredTips.length - 1
                            ? 'hidden'
                            : 'cursor-pointer'
                        }`}
                      />
                    </button>
                  </div>
                  <div className="border-t border-b border-white mt-10 pt-5 pb-8">
                    <div className="text- text-sm leading-7">
                      {simpleFormat(filteredTips[currentItem].content)}
                    </div>
                  </div>
                </>
              ) : (
                <h1 className="text-xl font-semibold text-white  flex justify-center items-center">
                  No tips found
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/tips');
  const tips = await res.json();

  return {
    props: {
      tips,
    },
  };
}
