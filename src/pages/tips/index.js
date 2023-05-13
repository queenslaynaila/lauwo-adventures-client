import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import simpleFormat from '@/utils/simpleFormat';

const Tips = ({ tips }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [currentItem, setCurrentItem] = useState(0);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handlePrev = () => {
    setCurrentItem((currentItem - 1 + tips.length) % tips.length);
  };

  const handleNext = () => {
    setCurrentItem((currentItem + 1) % tips.length);
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
          <div className="flex  items-center justify-start gap-4 absolute left-4 top-28">
            <hr className="sm:w-40 w-10 border border-white" />
            <h1 className="text-white 3xl:text-4xl xl:text-2xl text-xl font-semibold">
              Tips
            </h1>
            <BiSearch
              className="text-white text-2xl absolute sm:left-96 left-32 cursor-pointer transition duration-500 ease-in-out hover:text-yellow-500"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
            <div className="absolute sm:left-[28rem] left-[10rem]">
              {isSearchOpen && (
                <input
                  type="text"
                  placeholder="Search"
                  value={searchValue}
                  className="bg-transparent border-b border-white text-white px-4
                    focus:outline-none focus:border-primary sm:w-72 w-44 sm:mt-0"
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
                      className={`text-white text-2xl ${
                        currentItem === 0 ? 'hidden' : 'cursor-pointer'
                      }`}
                    />
                  </button>
                  <h2 className="text-white font-semibold xl:text-2xl text-xl capitalize text-center">
                    {filteredTips[currentItem].title}
                  </h2>
                  <button
                    onClick={handleNext}
                    disabled={currentItem === filteredTips.length - 1}
                  >
                    <BsArrowRightCircleFill
                      className={`text-white text-2xl ${
                        currentItem === filteredTips.length - 1
                          ? 'hidden'
                          : 'cursor-pointer'
                      }`}
                    />
                  </button>
                </div>
                <div className="border-t border-b border-white mt-10 pt-5 pb-8">
                  <div className="text-white text-sm leading-7">
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
  );
};

export default Tips;
export async function getServerSideProps() {
  const res = await fetch('https://lauwo-adventures-api.onrender.com/tips');
  const tips = await res.json();

  return {
    props: {
      tips,
    },
  };
}
