import Popup from 'reactjs-popup';
import BookingForm from '@/components/BookingForm';
import Head from 'next/head';
import { useState } from 'react';
import { GiDuration } from 'react-icons/gi';
import { BiTime } from 'react-icons/bi';
import { MdOutlineEmojiTransportation, MdPerson2 } from 'react-icons/md';
import { RiReservedFill } from 'react-icons/ri';
import { generateSlug } from '@/utils/generateSlug';
import { FaCheck, FaTimes } from 'react-icons/fa';
function Tour({ tour }) {
  const MAX_DESCRIPTION_WORDS = 40;

  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showFullItinerary, setShowFullItinerary] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const toggleItinerary = () => {
    setShowFullItinerary(!showFullItinerary);
  };

  const renderDescription = () => {
    if (showFullDescription) {
      return tour.description;
    } else {
      const words = tour.description.split(' ');
      const trimmed = words.slice(0, MAX_DESCRIPTION_WORDS).join(' ');
      const remaining = words.length > MAX_DESCRIPTION_WORDS ? '...' : '';
      return (
        <>
          {trimmed}
          {remaining}
        </>
      );
    }
  };
  const renderItinerary = () => {
    if (showFullItinerary) {
      return tour.itinerary;
    } else {
      const words = tour.itinerary.split(' ');
      const trimmed = words.slice(0, MAX_DESCRIPTION_WORDS).join(' ');
      const remaining = words.length > MAX_DESCRIPTION_WORDS ? '...' : '';
      return (
        <>
          {trimmed}
          {remaining}
        </>
      );
    }
  };

  const bookableType = 'CulturalTour';
  const adventure = {
    name: `${tour.name} day trip`,
    id: tour.id,
  };
  const contentStyle = {
    width: '85%',
    maxHeight: '85%',
    overflow: 'auto',
    margin: 'auto',
    backgroundColor: 'white',
  };
  console.log(tour);
  return (
    <div className="font-poly">
      <Head>
        <title>{tour.name} - Cultural Tour</title>
        <meta name="description" content={tour.description} />
        <meta property="og:title" content={tour.name} />
        <meta property="og:description" content={tour.description} />
        <meta property="og:image" content="/culture.jpg" />
        <meta
          property="og:url"
          content={`https://lauwo-adventures-api.onrender.com/cultural_tours/${tour.slug}`}
        />
      </Head>

      <div
        className="relative bg-no-repeat bg-center bg-cover flex justify-center items-center h-3/4"
        style={{ backgroundImage: `url(${tour.image_url})` }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
          }}
        ></div>
        <div className="relative container mx-auto p-4 flex mt-8 items-end">
          <div>
            <div className="float-left py-10 px-5 my-5 ">
              <div className="heading mt-16  text-2xl md:text-4xl text-white capitalize">
                {tour.name}
              </div>
              <div className="heading pt-6 text-xl md:text-2xl text-white">
                Book Now and Enjoy a glimpse of Tanzania&apos;s culture
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative container mx-auto p-4   mt-2 ">
        <div>
          <div className=" px-5 my-5 ">
            <div className="heading text-xl md:text-2xl capitalize font-semibold">
              About This Tour
            </div>
            <div className="heading pt-2 text-lg ">
              <p className="mb-4 flex items-center gap-3 text-lg  mt-4">
                <MdPerson2 className="text-xl" />
                Live Tour Guide
              </p>
              <p className="mb-4 flex items-center gap-3 text-lg  mt-4">
                <GiDuration className="text-xl" />
                Duration 1 Day
              </p>
              <p className="mb-4 flex items-center gap-3 text-lg  mt-4">
                <RiReservedFill className="text-xl" />
                Reserve Now and Pay Later
              </p>
              <p className="mb-4 flex items-center gap-3 text-lg  mt-4">
                <MdOutlineEmojiTransportation className="text-xl" />
                Transportation Included
              </p>
              <p className="mb-4 flex items-center gap-3 text-lg  mt-4">
                <BiTime className="text-xl" />
                Availability : On request
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="px-5 my-5">
            <div className="heading text-xl md:text-2xl capitalize font-semibold">
              Experience
            </div>
            <div className="heading pt-2 text-lg flex flex-col gap-4">
              <div className="heading pt-2 text-lg">
                <div className="lg:flex md:flex gap-4">
                  <h2 className="font-semibold">Description</h2>
                  <p>
                    {renderDescription()}{' '}
                    {tour.description.length > MAX_DESCRIPTION_WORDS && (
                      <button
                        onClick={toggleDescription}
                        className="text-red-500 ml-1 underline"
                      >
                        {showFullDescription ? 'Read Less' : 'Read More'}
                      </button>
                    )}
                  </p>
                </div>
              </div>
              <div className="heading pt-6 text-lg">
                <div className="lg:flex md:flex gap-4">
                  <h2 className="font-semibold">Itinerary</h2>
                  <p>
                    {renderItinerary()}{' '}
                    {tour.itinerary.length > MAX_DESCRIPTION_WORDS && (
                      <button
                        onClick={toggleItinerary}
                        className="text-red-500 ml-1 underline"
                      >
                        {showFullItinerary ? 'Read Less' : 'Read More'}
                      </button>
                    )}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <h2 className="font-semibold">Includes</h2>
                <div className="single_tour_inclusions_content flex-grow flex flex-wrap lg:flex-col">
                  {tour.inclusions.split(',').map((inclusion) => (
                    <div
                      key={inclusion}
                      className="w-full capitalize p-2 flex items-center"
                    >
                      <FaCheck className="mr-1" />
                      {inclusion.trim()}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <h2 className="font-semibold">Excludes</h2>
                <div className="single_tour_inclusions_content flex-grow flex flex-wrap lg:flex-col">
                  {tour.exclusions.split(',').map((inclusion) => (
                    <div
                      key={inclusion}
                      className="w-full capitalize p-2 flex items-center"
                    >
                      <FaTimes className="mr-1" />
                      {inclusion.trim()}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <div>
                <Popup
                  trigger={
                    <button className="bg-black text-white px-8 rounded-md py-4 ml-auto mb-16 hover:border-white hover:border hover:text-yellow-500">
                      {' '}
                      Book Now
                    </button>
                  }
                  modal
                  nested
                  closeOnDocumentClick
                  contentStyle={contentStyle}
                >
                  {(close) => (
                    <div className="modal">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <BookingForm
                        adventure={adventure}
                        bookableType={bookableType}
                      />
                    </div>
                  )}
                </Popup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tour;

export async function getStaticPaths() {
  const res = await fetch(
    'https://lauwo-adventures-api.onrender.com/cultural_tours'
  );
  const culturalTours = await res.json();
  const paths = culturalTours.map((tour) => ({
    params: { culturaltour: generateSlug(tour.name), id: tour.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    'https://lauwo-adventures-api.onrender.com/cultural_tours'
  );
  const culturalTours = await res.json();
  const culturalTour = culturalTours.find(
    (culturalTour) => generateSlug(culturalTour.name) === params.culturaltour
  );
  return {
    props: { tour: culturalTour },
  };
}
