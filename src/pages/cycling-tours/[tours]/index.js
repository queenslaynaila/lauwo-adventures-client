import Image from 'next/image';
import Head from 'next/head';
import { generateSlug } from '@/utils/generateSlug';
import { GiMeal } from 'react-icons/gi';
import { FaHotel } from 'react-icons/fa';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import BookingForm from '@/components/BookingForm';

const Safari = ({ tour }) => {
  console.log(tour);
  const bookableType = 'CyclingTour';
  const contentStyle = {
    width: '85%',
    maxHeight: '85%',
    overflow: 'auto',
    margin: 'auto',
  };

  return (
    <>
      <Head>
        <title>{tour.name} Experience Lauwo Adventures</title>
        <meta name="description" content={tour.description} />
        <meta
          property="og:title"
          content={`${tour.name} Experience | Lauwo Adventures`}
        />
        <meta property="og:description" content={tour.description} />
        <meta property="og:image" content={tour.imageUrl} />
        {/* <meta
          property="og:url"
          content={`https://example.com/safari/${safari.slug}`}
        /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${tour.name} Experience |  Lauwo Adventures`}
        />
        <meta name="twitter:description" content={tour.description} />
        <meta name="twitter:image" content={tour.imageUrl} />
      </Head>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/lauwosafari.webp)' }}
      >
        <div className="inset bg-black/80">
          <div className="border-l-2 border-black h-full text-white">
            <h3 className="lg:text-2xl xl:text-3xl 3xl:text-4xl xl font-poly capitalize text-center py-32">
              {tour.name} Cycling Tour
            </h3>
            <div className="flex flex-col items-center px-8 sm:-mt-8 -mt-24">
              {tour.cycling_itineraries.map((itinerary, index) => (
                <div
                  key={itinerary.id}
                  className={`flex relative flex-col md:flex-row ${
                    index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  } md:items-center mb-28`}
                >
                  <div
                    className={`md:w-1/2
            ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}
            `}
                  >
                    <Image
                      src={itinerary.image_url}
                      alt={itinerary.title}
                      width={600}
                      height={400}
                      className="rounded-lg  h-96 object-cover object-center"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-bold mb-2 mt-4 text-primary font-poly capitalize">
                      Day {itinerary.day}: {itinerary.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className=" w-1/6 mt-6 mb-6 border border-dashed border-white"></div>
                      <p className="text-sm font-semibold">
                        Distance: {itinerary.distance} kms
                      </p>
                    </div>
                    <p className="mb-4 text-sm leading-6">
                      {itinerary.description}
                    </p>
                    {itinerary.accommodation ? (
                      <p className="mb-4 flex items-center gap-3 text-sm  mt-4">
                        <FaHotel className="text-xl" />
                       Accommodation: {itinerary.accommodation}
                      </p>
                    ) : null}

                    <p className="mb-4 flex items-center gap-3 text-sm  mt-4">
                      <GiMeal className="text-xl" />
                      Mealplan:{itinerary.meal_plan}
                    </p>
                  </div>
                  {index !== tour.cycling_itineraries.length - 1 && (
                    <hr className="w-full border border-primary absolute -bottom-8" />
                  )}
                </div>
              ))}

              <div className="flex  items-center justify-center">
                <Popup
                  trigger={
                    <button className="bg-black text-white px-8 rounded-md py-4 ml-auto mb-16 hover:border-white hover:border hover:text-white hover:bg-transparent">
                      {' '}
                      Book Tour
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
                        adventure={tour}
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
    </>
  );
};

export default Safari;

export async function getStaticPaths() {
  const res = await fetch('https://lauwo-adventures-api.onrender.com/cycling_tours');
  const tours = await res.json();
  const paths = tours.map((tour) => ({
    params: { tours: generateSlug(tour.name), id: tour.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch('https://lauwo-adventures-api.onrender.com/cycling_tours');
  const tours = await res.json();
  const foundTour = tours.find(
    (tourItem) => generateSlug(tourItem.name) === params.tours
  );
  return {
    props: { tour: foundTour },
  };
}
