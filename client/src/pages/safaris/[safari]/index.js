import Image from 'next/image';
import { generateSlug } from '@/utils/generateSlug';
import { GiMeal } from 'react-icons/gi';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import BookingForm from '@/components/BookingForm';

const Safari = ({ safari }) => {

  const contentStyle = {  width: '80%', maxHeight: '85%', overflow: 'auto', margin: 'auto'};


  return (
    <div className="bg-primary px-4">
      <div className="border-l-2 border-black h-full">
          <h3 className="lg:text-2xl xl:text-3xl 3xl:text-4xl xl font-poly capitalize text-center text-black py-32">
          {safari.name} experience
          </h3>
        <div className="flex flex-col items-center px-8 sm:-mt-8 -mt-24">
          {safari.safari_itineries.map((itinerary, index) => (
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
                <h3 className="text-xl font-bold mb-2 font-poly capitalize">
                  Day {itinerary.day}: {itinerary.title}
                </h3>
                <div className='flex items-center gap-2'>
                  <div className=" w-1/6 mt-4 mb-4 border border-dashed border-black"></div>
                  <p className='text-sm font-semibold'>Distance: {itinerary.distance} kms</p>
                </div>
                <p className="mb-4 text-sm leading-6">
                  {itinerary.description}
                </p>
                <p className="mb-4 flex items-center gap-3 text-sm  mt-4">
                  <GiMeal className="text-xl" />
                  {itinerary.mealplan}
                </p>
              </div>
              {index !== safari.safari_itineries.length - 1 && (
                <hr className="w-full border border-black absolute -bottom-8" />
              )}
            </div>
          ))}
          <div className="flex  items-center justify-center">
          <Popup
            trigger={
              <button className='bg-black text-white px-8 rounded-md py-4 ml-auto mb-16 hover:border-black hover:border hover:text-black hover:bg-transparent'
              > Book Safari</button>}
            modal
            nested
            closeOnDocumentClick
            contentStyle={contentStyle}
          >
            {
              close => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  < BookingForm adventure={safari} />
                </div>
              )
            }
          </Popup>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Safari;

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/safaris');
  const safaris = await res.json();
  const paths = safaris.map((safari) => ({
    params: { safari: generateSlug(safari.name), id: safari.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch('http://localhost:3000/safaris');
  const safaris = await res.json();
  const safari = safaris.find(
    (safari) => generateSlug(safari.name) === params.safari
  );
  return {
    props: { safari },
  };
}
