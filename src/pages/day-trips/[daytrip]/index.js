import Head from 'next/head';
import Popup from 'reactjs-popup';
import BookingForm from '@/components/BookingForm';
import { generateSlug } from '@/utils/generateSlug';
import { useState } from 'react';
import { GiDuration } from 'react-icons/gi';
import { BiTime } from 'react-icons/bi';
import {
  MdOutlineEmojiTransportation,
  MdPerson2,
  MdOutlineHighlight,
} from 'react-icons/md';
import { RiReservedFill } from 'react-icons/ri';
import { FaCheck, FaTimes } from 'react-icons/fa';

export default function Trip({ trip }) {
  const MAX_DESCRIPTION_WORDS = 40;

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const renderDescription = () => {
    if (showFullDescription) {
      return trip.description;
    } else {
      const words = trip.description.split(' ');
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

  const bookableType = 'DayTrip';
  const adventure = {
    name: `${trip.name} day trip`,
    id: trip.id,
  };
  const contentStyle = {
    width: '85%',
    maxHeight: '85%',
    overflow: 'auto',
    margin: 'auto',
    backgroundColor: 'white',
  };

  return (
    <div className="font-poly">
      <Head>
        <title>{trip.name} Trip</title>
        <meta name="description" content={trip.description} />
        <meta property="og:title" content={`${trip.name} Trip`} />
        <meta property="og:description" content={trip.description} />
        <meta property="og:image" content={trip.image_url} />
        <meta
          property="og:url"
          content={`https://your-website.com/daytrips/${generateSlug(
            trip.name
          )}`}
        />
        <meta property="og:type" content="website" />
      </Head>
      <div
        className="relative bg-no-repeat bg-center bg-cover flex justify-center items-center h-3/4"
        style={{ backgroundImage: `url(${trip.image_url})` }}
      >
        <div className="relative container mx-auto p-4 flex mt-8 items-end">
          <div>
            <div className="float-left py-10 px-5 my-5 ">
              <div className="heading mt-16  text-2xl md:text-4xl text-white capitalize">
                {trip.name}
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
                    {trip.description.length > MAX_DESCRIPTION_WORDS && (
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
              <div className="lg:flex md:flex gap-4">
                <h2 className="font-semibold">Highlights</h2>
                <div className="single_tour_inclusions_content flex-grow flex flex-wrap lg:flex-col">
                  {trip.highlight.split(',').map((inclusion) => (
                    <div
                      key={inclusion}
                      className="w-full capitalize p-2 flex items-center"
                    >
                      <MdOutlineHighlight className="mr-1 text-xl" />
                      {inclusion.trim()}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <h2 className="font-semibold">Includes</h2>
                <div className="single_tour_inclusions_content flex-grow flex flex-wrap lg:flex-col">
                  {trip.inclusions.split(',').map((inclusion) => (
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
                  {trip.exclusions.split(',').map((inclusion) => (
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
      {/* <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/g-3.webp)' }}
      >
        <div className="inset bg-black/80">
          <div className="border-l-2 border-black h-1/2 text-white ">
            <h3 className="lg:text-2xl xl:text-3xl 3xl:text-4xl xl font-poly capitalize text-center pt-32 pb-12 z-0">
              {trip.name} trip
            </h3>
            <div
              key={trip.id}
              className="flex relative flex-col md:flex-row mx-16 gap-4"
            >
              <div className="mb-6">
                <Image
                  src={trip.image_url}
                  alt={trip.name}
                  width={600}
                  height={400}
                  className="rounded-lg h-96 object-cover object-center"
                />
              </div>
              <div className="md:w-1/2">
                <p className="mb-4 text-lg font-poly">{trip.description}</p>
                <div className="text-center h-24">
                  <Popup
                    trigger={
                      <button className="bg-yellow-500 text-white px-8 rounded-md py-4 ml-auto mb-16 hover:bg-yellow-700">
                        Book Slot
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
        <div></div>
      </div>
      <div>
        <ul className="font-poly">
          <li className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 mx-16 my-6">
            <div className="lg:ml-6 font-semibold">Price:</div>
            <div className="single_tour_inclusions_content flex-grow flex flex-wrap lg:flex-col">
              <div className="w-full capitalize p-2 flex items-center">
                <FaDollarSign className="mr-1" />
                {trip.price.replace('$', '')}
              </div>
            </div>
          </li>
          <li className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 mx-16 my-6">
            <div className="lg:ml-6 font-semibold">Inclusions:</div>
            <div className="single_tour_inclusions_content flex-grow flex flex-wrap lg:flex-col">
              {trip.inclusions.split(',').map((inclusion) => (
                <div
                  key={inclusion}
                  className="w-full capitalize p-2 flex items-center"
                >
                  <FaCheck className="mr-1" />
                  {inclusion.trim()}
                </div>
              ))}
            </div>
          </li>
          <li className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 mx-16 my-6">
            <div className="font-semibold lg:ml-6">Exclusions:</div>
            <div className="single_tour_inclusions_content flex-grow flex flex-wrap lg:flex-col">
              {trip.exclusions.split(',').map((exclusion) => (
                <div
                  key={exclusion}
                  className="w-full capitalize p-2 flex items-center"
                >
                  <FaTimes className="mr-1" />
                  {exclusion.trim()}
                </div>
              ))}
            </div>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    'https://lauwo-adventures-api.onrender.com/day_trips'
  );
  const trips = await res.json();

  const paths = trips.map((trip) => ({
    params: { daytrip: generateSlug(trip.name) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    'https://lauwo-adventures-api.onrender.com/day_trips'
  );
  const trips = await res.json();

  const trip = trips.find((trip) => generateSlug(trip.name) === params.daytrip);

  return {
    props: {
      trip,
    },
  };
}
