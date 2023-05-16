import Image from 'next/image';
import safarilocations from '@/data/safarilocations.json';
import Head from 'next/head';
import FaqCard from '@/components/FaqCard';
///import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';
import Link from 'next/link';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import EnquiryPopUp from '@/components/enquirypopup';
import SocialsButtons from '@/components/SocialsButtons';
const SafariPage = ({ faqs }) => {
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
    <>
      <Head>
        <meta
          property="og:title"
          content="Discover Tanzania's Safari Destinations with 
      Lauwo Adventures"
        />
        <meta
          property="og:description"
          content="Embark on a thrilling safari adventure with Lauwo Adventures and explore the breathtaking landscapes of Arusha National Park, Tarangire National Park, Lake Manyara National Park, and Serengeti National Park. Encounter diverse wildlife, witness the Great Migration, and immerse yourself in the rich Maasai culture."
        />
        <meta
          property="og:image"
          content="https://example.com/your-image.jpg"
        />
        <meta property="og:url" content="https://example.com/your-page-url" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Discover Tanzania's Safari Destinations with Lauwo Adventures"
        />
        <meta
          name="twitter:description"
          content="Embark on a thrilling safari adventure with Lauwo Adventures and explore the breathtaking landscapes of Arusha National Park, Tarangire National Park, Lake Manyara National Park, and Serengeti National Park. Encounter diverse wildlife, witness the Great Migration, and immerse yourself in the rich Maasai culture."
        />
        <meta
          name="twitter:image"
          content="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-360x240/09/4a/80/8c.jpg"
        />
        <meta name="twitter:url" content="https://example.com/your-page-url" />

        <meta
          name="keywords"
          content="Tanzania safari, Arusha National Park, Tarangire National Park, Lake Manyara National Park, Serengeti National Park, Great Migration, Wildlife adventure, Ngorongoro Crater, Maasai culture, Safari packages, Game viewing, Birdwatching, Serengeti adventure, Responsible tourism, African safari experience"
        />
        <meta
          name="description"
          content="Discover the breathtaking landscapes of Arusha National Park in Tanzania. Immerse yourself in its diverse ecosystems, from vast grasslands to lush forests and majestic volcanic mountains. Encounter a rich array of wildlife, including giraffes, buffalos, zebras, colobus monkeys, and over 400 bird species. Engage in thrilling activities such as mountain climbing, canoeing, guided nature walks, horseback riding, and game drives. Experience the wonders of Arusha National Park with Lauwo Adventures and create unforgettable safari memories."
        />
        <meta
          name="description"
          content="Experience the wonders of Tarangire National Park in Tanzania. Discover the captivating beauty of its distinct dry and wet seasons. Observe the mesmerizing wildlife gatherings along the Tarangire River during the dry season, with clear sightings of elephants and lions. Embrace the lush greenery and exceptional birdwatching opportunities during the wet season. Enjoy thrilling game drives, immerse yourself in nature, and embark on an unforgettable safari journey in Tarangire National Park with Lauwo Adventures."
        />
        <meta
          name="description"
          content="Uncover the enchanting landscapes of Lake Manyara National Park in Tanzania. Delight in its diverse habitats, from lush forests and picturesque wetlands to vast savannas. Witness the remarkable wildlife, including elephants, giraffes, zebras, hippos, and a myriad of bird species. Be captivated by the elusive tree-climbing lions, a rare sighting in Tanzania. Engage in thrilling game drives, embark on birdwatching excursions, indulge in walking safaris, and immerse yourself in the local Maasai culture. Discover the scenic wonders of Lake Manyara National Park with Lauwo Adventures."
        />
        <meta
          name="description"
          content="Embark on an extraordinary safari adventure in Serengeti National Park, Tanzania. Marvel at the awe-inspiring landscapes and the remarkable diversity of its ecosystem. Witness the legendary Great Migration as millions of wildebeest, zebras, and gazelles traverse the vast plains, accompanied by predators in pursuit. Choose the dry season for optimal game viewing, with animals gathering around rivers and waterholes, or the lush green oasis of the wet season, perfect for witnessing the calving season and exceptional birdlife. Immerse yourself in the cultural heritage of the Maasai communities and create lasting memories in the remarkable Serengeti National Park with Lauwo Adventures."
        />
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
                <div className="text leading-normal text-white">
                  You can browse through our various safari packages{' '}
                  <Link
                    href="/safari-packages"
                    className="text-yellow-500 font-semibold"
                  >
                    here.
                  </Link>
                </div>
              </div>
              <div className="cta clear-left px-5">
                <div className="flex">
                  <Link
                    className="no-underline mr-2 btn btn-outline-primary block sm:inline-block global-transition text-white"
                    href="/planning-a-safari"
                  >
                    <button className="text-white border border-yellow-500 hover:bg-yellow-500 hover:text-white rounded-md px-4 py-2 flex items-center">
                      <span className="mr-2">Plan A Safari </span>
                      <span className="fa fa-arrow-right"></span>
                    </button>
                  </Link>
                  <Link
                    className="no-underline btn btn-outline-primary block sm:inline-block global-transition text-white"
                    href="/planning-form"
                  >
                    <button className="text-white border border-yellow-500 hover:bg-yellow-500 hover:text-white rounded-md px-4 py-2 flex items-center">
                      <span className="mr-2">Plan A Trip</span>
                      <span className="fa fa-arrow-right"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-2 bg-yellow-500 flex items-center justify-between">
          <p className="text-white lg:ml-12">Discover Tanzania with Lauwo .</p>
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
        <div className="  mx-auto ">
          <h1 className="text-2xl font-bold mb-4 text-center py-2 mt-4 capitalize">
            Safari Destinations that You can go to with Lauwo Adventures
          </h1>
          {safarilocations.map((location, index) => (
            <div
              key={index}
              className={`flex flex-wrap justify-center mx-4 lg:mx-16 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="w-full md:w-1/2 p-4">
                <h2 className="text-lg  mb-2 font-semibold">
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
        <div className="py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Discover Our Extraordinary Safari Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md flex flex-col">
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1662003905953-f2aa253c48df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
                    height={500}
                    width={500}
                    alt="Serengeti Adventure"
                    className="w-full h-auto rounded-t-lg"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Dynamic Dou Safari: Serengeti & Ngongoro in 3 days
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Immerse yourself in the captivating beauty of the Serengeti
                    and Ngorongoro Crater in 3 days. Witness the awe-inspiring
                    Great Migration, encounter majestic wildlife, and explore
                    the breathtaking landscapes....
                  </p>
                  <Link
                    href="/our-safari-packages/dynamic-duo-safari-serengeti--ngorongoro-in-3-days"
                    className="text-blue-500 hover:underline"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md flex flex-col">
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1617938544737-cf7b41829226?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    height={500}
                    width={500}
                    alt="Serengeti Adventure"
                    className="w-full h-auto rounded-t-lg"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Wildlife Wonders, A 8 day adventure
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Embark on an 8-day Wildlife Wonders adventure through
                    Serengeti, Ngorongoro, and Arusha. Witness the Great
                    Migration, explore the stunning landscapes, and engage
                    in....
                  </p>
                  <Link
                    href="/our-safari-packages/wildlife-wonders-8-day-tanzanian-safari-expedition"
                    className="text-blue-500 hover:underline"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md flex flex-col">
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1534476478164-b15fec4f091c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    height={500}
                    width={500}
                    alt="Serengeti Adventure"
                    className="w-full h-auto rounded-t-lg"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Serengeti Splendors: 5-Day Wildlife Safari Adventure
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Embark on a 5-day Serengeti Splendors safari adventure,
                    immersing yourself in the captivating wildlife and
                    breathtaking landscapes. Witness the Great Migration and
                    encounter magnificent animals in their natural habitat.
                    Unforgettable....
                  </p>
                  <Link
                    href="/our-safari-packages/serengeti-splendors-5-day-wildlife-safari-adventure"
                    className="text-blue-500 hover:underline"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center mt-6">
              <Link
                href="/safari-packages"
                className="text-blue-500 hover:underline"
              >
                View All Safari Packages
              </Link>
            </div>
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
                {/* //<BiSearch/> */}
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
        <SocialsButtons />
      </div>
    </>
  );
};

export default SafariPage;
export async function getStaticProps() {
  const res = await fetch(
    'https://lauwo-adventures-api.onrender.com/safari_faqs'
  );
  const faqs = await res.json();

  return {
    props: {
      faqs,
    },
  };
}
