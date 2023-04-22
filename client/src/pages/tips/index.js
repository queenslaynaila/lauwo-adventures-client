import { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import  { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import simpleFormat from '@/utils/simpleFormat';


const Tips = ({tips}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [currentItem, setCurrentItem] = useState(0);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handlePrev = () => {
    setCurrentItem(currentItem - 1);
  };

  const handleNext = () => {
    setCurrentItem(currentItem + 1);
  };

  const filteredTips = tips.filter((tip) => {
    return tip.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div
    className="h-full bg-no-repeat bg-cover bg-center"
    style={{ backgroundImage: "url('/g-6.jpg')" }}
    >
      <div className="inset bg-black/95">
        <div className="py-44 relative">
          <div className="flex items-center justify-start gap-4 absolute left-4 top-28">
            <hr className="w-40 border border-white" />
            <h1 className="text-white 3xl:text-4xl xl:text-2xl text-xl font-semibold">
              Tips
            </h1>
            <BiSearch className="text-white text-2xl absolute left-96 cursor-pointer transition duration-500 ease-in-out hover:text-yellow-500"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
            <div className="absolute left-[28rem]">
              {isSearchOpen && (
                <input
                  type="text"
                  placeholder="Search"
                  value={searchValue}
                  className="bg-transparent border-b border-white text-white px-4
                    focus:outline-none focus:border-primary"
                  onChange={handleSearch}
                />
              )}
            </div>
          </div>
          <div className="w-3/4 mx-auto mt-10">
          {filteredTips.length > 0 ? (
            <>
              <div className="flex justify-between">
                <BsArrowLeftCircleFill
                  className={`text-2xl ${
                    currentItem === 0 ? "text-gray-500" : "text-white cursor-pointer hover:text-yellow-500"
                  }`}
                  onClick={handlePrev}
                />
                <BsArrowRightCircleFill
                  className={`text-2xl ${
                    currentItem === filteredTips.length - 1 ? "text-gray-500" : "text-white cursor-pointer hover:text-yellow-500"
                  }`}
                  onClick={handleNext}
                />
              </div>
              <div className="border-t border-b border-white mt-10 pt-5 pb-8">
                <h2 className="text-white font-semibold text-2xl mb-5 capitalize text-center">
                  {filteredTips[currentItem].title}
                </h2>
                <div
                  className="text-white text-sm leading-7"
                >
                  {simpleFormat(filteredTips[currentItem].content)}
                </div>
              </div>
            </>
          ) : (
            <p className="text-white">No tips found.</p>
          )}
        </div>
        </div>
      </div>
  </div>
  );
};

export default Tips;
export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/tips');
  const tips = await res.json();

  return {
    props: {
      tips,
    },
  };
}
