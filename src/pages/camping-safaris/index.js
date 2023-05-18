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
        <title>Camping Safaris | lauwo Adventures</title>
        <meta
          name="keywords"
          content="Tanzania camping safaris, budget safaris, camping safari experience, African wilderness, wildlife adventure, camping in Tanzania, camping gear, safari planning tips, custom camping safari, Lauwo Adventures"
        />
        <meta
          name="description"
          content="Welcome to Lauwo Adventures, your gateway to unforgettable camping safaris in Tanzania. Immerse yourself in the raw beauty of Tanzania's wildlife and landscapes with our exceptional budget camping safaris. Experience the thrill of being close to nature, surrounded by the sounds of the African wilderness. Our camping safaris provide all the necessary gear and freshly cooked food, ensuring a stress-free and memorable adventure. Pack light, follow safety rules, respect the environment, and be prepared for basic facilities. Customize your camping safari with Lauwo Adventures for a personalized and authentic experience in Tanzania's breathtaking wilderness."
        />

        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Welcome To Lauwo Adventures: Your Gateway To Unforgettable Camping Safaris In Tanzania"
        />
        <meta
          property="og:description"
          content="Immerse yourself in the raw beauty of Tanzania's wildlife and landscapes with our exceptional camping safaris. Experience the thrill of being close to nature, as you listen to the distant roars of lions and the laughter of hyenas while nestled in your comfortable tent. With Lauwo Adventures, we take care of every detail, ensuring a stress-free and unforgettable adventure for you."
        />
        <meta
          property="og:image"
          content="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-360x240/09/4a/80/8c.jpg"
        />
        <meta
          property="og:url"
          content="https://lauwo-adventures-client.vercel.app/camping-safaris"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Lauwo Adventures" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Welcome To Lauwo Adventures: Your Gateway To Unforgettable Camping Safaris In Tanzania"
        />
        <meta
          name="twitter:description"
          content="Immerse yourself in the raw beauty of Tanzania's wildlife and landscapes with our exceptional camping safaris. Experience the thrill of being close to nature, as you listen to the distant roars of lions and the laughter of hyenas while nestled in your comfortable tent."
        />
        <meta
          name="twitter:image"
          content="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-360x240/09/4a/80/8c.jpg"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="font-poly">
        <div
          className="relative bg-no-repeat bg-center bg-cover flex justify-center items-center"
          style={{ backgroundImage: "url('/safari.webp')" }}
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
                  Camping Safaris
                </div>
                <div className="text leading-normal text-white">
                  Camping safari is a great way to experience the African
                  wilderness while keeping costs low
                </div>
                <div className="text leading-normal text-white">
                  You can browse through our other safari packages{' '}
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
                      <span className="mr-2">Tailor Your Safari</span>
                      <span className="fa fa-arrow-right"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-2 bg-yellow-500 flex items-center justify-between">
          <p className="text-white lg:ml-12">Discover Tanzania with Lauwo.</p>
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
        <div className="  mx-auto  lg:mx-16">
          <h1 className="text-center p-4 text-2xl font-bold capitalize">
            Welcome to Lauwo Adventures: Your Gateway to Unforgettable Camping
            Safaris in Tanzania
          </h1>
          <div className="py-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Budget Safari:Camping
            </h2>
            <p className="  p-2 leading-8 ">
              Immerse yourself in the raw beauty of Tanzania&apos;s wildlife and
              landscapes with our exceptional camping safaris. Experience the
              thrill of being close to nature, as you listen to the distant
              roars of lions and the laughter of hyenas while nestled in your
              comfortable tent. With Luawo adventures, we take care of every
              detail, ensuring a stress-free and unforgettable adventure for
              you.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Camping Safari Experience
            </h2>
            <p className="  p-2 leading-8 ">
              Right in the heart of the African wilderness; sitting around a
              campfire and sleeping amidst the sounds and roars of night
              predators comes with a special feeling of adventure. We provide
              all camping gear (except sleeping bags) during your safari and
              serve freshly cooked food that is prepared by our experienced
              safari cooks. Our cook and driver do all the camp set up for you
              and you only participate in that if you are after an active
              adventure.
            </p>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Camping Safari Planning Tips
              </h2>

              <ul className="list-disc list-inside  mb-4">
                <li>
                  Pack appropriately: Since you will be camping, it&apos;s
                  important to pack light and bring only essential items. Make
                  sure to pack warm clothing, a sleeping bag, a flashlight,
                  insect repellent, and sunscreen.
                </li>
                <li>
                  Follow safety rules: Always listen to your safari guide and
                  follow all safety rules. This includes staying inside your
                  tent at night, not wandering off alone, and keeping a safe
                  distance from any wild animals.
                </li>
                <li>
                  Respect the environment: Remember that you are a guest in the
                  animals&apos; natural habitat. Respect their space and do not
                  disturb them. Also, make sure to properly dispose of your
                  trash and avoid littering.
                </li>
                <li>
                  Be prepared for basic facilities: Campsites will have basic
                  washroom facilities, but they may not be the most comfortable
                  or luxurious. Be prepared to share these facilities with
                  others and bring your own toiletries and toilet paper.
                </li>
                <li>
                  Embrace the experience: Basic camping safaris offer a unique
                  and authentic experience that cannot be found in a hotel.
                  Embrace the adventure and enjoy the beautiful landscapes and
                  wildlife around you.
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Customise A Campping Safari With Lauwo
              </h2>
              <p>To customise you a personalised camping safari.We need</p>

              <ul className="list-disc list-inside  mb-4">
                <li>
                  When you wish to do a camping safari in Tanzania.If you are
                  unsure, dont worry just let us know about your schedule and
                  lauwo will advise you on the best time to visit.
                </li>
                <li>
                  How many days you wish to spend on safarif you are unsure,
                  dont worry just let us know about your schedule and lauwo will
                  advise you on the best time to visit.
                </li>
                <li>
                  How many persons are traveling with youf you are unsure, dont
                  worry just let us know about your schedule and lauwo will
                  advise you on the best time to visit.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className="py-8 relative">
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
