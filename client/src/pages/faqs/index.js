import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import FaqCard from '@/components/FaqCard';

const Faqs = ({ faqs }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredFaqs = faqs.filter((faq) => {
    return faq.question.toLowerCase().includes(searchValue.toLowerCase());
  });
  return (
    <div
      className="h-full bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/g-4.jpg')" }}
    >
      <div className="inset bg-black/80">
        <div className="py-44 relative">
          <div className="flex items-center justify-start gap-4 absolute left-4 top-28">
            <hr className="w-40 border border-white" />
            <h1 className="text-white 3xl:text-4xl xl:text-2xl text-xl font-semibold">
              FAQs
            </h1>
            <BiSearch
              className="text-white text-2xl absolute left-96 cursor-pointer transition duration-500 ease-in-out hover:text-yellow-500"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
            <div className="absolute left-[28rem]">
              {isSearchOpen && (
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent border border-white text-white px-4 py-2 rounded-md"
                  onChange={handleSearch}
                />
              )}
            </div>
          </div>
          <div className='w-3/4 mx-auto'>
            {filteredFaqs.map((faq) => (
              <FaqCard key={faq.id} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/frequently_asked_questions');
  const faqs = await res.json();

  return {
    props: {
      faqs,
    },
  };
}
