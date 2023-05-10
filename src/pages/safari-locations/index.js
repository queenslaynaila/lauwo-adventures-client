import Image from 'next/image';
import safarilocations from '@/data/safarilocations.json';
import Head from 'next/head';
import FaqCard from '@/components/FaqCard';
import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';
const SafariPage = ({ faqs }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredFaqs = faqs.filter((faq) => {
    return faq.question.toLowerCase().includes(searchValue.toLowerCase());
  });
  return (
    <>
      <Head>
        <title>Explore the World of Safaris | lauwo Adventures</title>
        <meta
          name="description"
          content="Discover exciting safari locations, get answers to frequently asked questions, and learn how to plan your dream safari adventure."
        />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:title" content="Explore the World of Safaris" />
        <meta name="twitter:image" content="URL of your Twitter image" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="font-poly">
        <div
          className="relative bg-no-repeat bg-center bg-cover flex justify-center items-center"
          style={{ backgroundImage: "url('/safari.jpg')" }}
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
                  Explore the World of Safaris
                </div>
                <div className="text leading-normal text-white">
                  Discover exciting safari locations, get answers to frequently
                  asked questions, and learn how to plan your dream safari
                  adventure.
                </div>
              </div>
              <div className="cta clear-left px-5">
                <a
                  className="no-underline btn btn-primary block sm:inline-block global-transition text-white"
                  href="/plan-safari"
                  target="_blank"
                >
                  <div className="flex justify-center items-center">
                    <span>Plan your safari adventure today.</span>
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
        <div className="  mx-auto my-8">
          <h1 className="text-2xl font-bold mb-4 text-center py-2">
            Tanzania&apos;s Top Nature Reserves
          </h1>
          {safarilocations.map((location, index) => (
            <div
              key={index}
              className={`flex flex-wrap justify-center mx-4 lg:mx-16 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="w-full md:w-1/2 p-4">
                <h2 className="text-lg font-medium mb-2 font-semibold">
                  {location.title}
                </h2>
                <p className="mb-4">{location.description}</p>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <Image
                  src={location.image}
                  alt="Responsible Tourism"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SafariPage;
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/frequently_asked_questions');
  const faqs = await res.json();

  return {
    props: {
      faqs,
    },
  };
}
