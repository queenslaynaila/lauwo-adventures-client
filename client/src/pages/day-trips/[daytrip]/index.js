 import { generateSlug } from '@/utils/generateSlug';
import { FaCheck, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import BookingForm from '@/components/BookingForm';
export default function Index({ dayTrip }) {
  const bookableType = 'DayTrip';
  const adventure = {
    name: `${dayTrip.name}  day trip`,
    id: dayTrip.id,
  };
  const contentStyle = {
    width: '85%',
    maxHeight: '85%',
    overflow: 'auto',
    margin: 'auto',
  };

  return (
<div className='poly'>
  <div
    className="bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: 'url(/g-3.jpg)' }}
  >
    <div className="inset bg-black/80">
      <div className="border-l-2 border-black h-1/2 text-white ">
        <h3 className="lg:text-2xl xl:text-3xl 3xl:text-4xl xl font-poly capitalize text-center  pt-32 pb-12 z-0">
          {dayTrip.name} trip
        </h3>
        <div key={dayTrip.id} className="flex relative flex-col md:flex-row mx-16  gap-4">
          <div className='mb-6'>
            <Image
              src={dayTrip.image_url}
              alt={dayTrip.name}
              width={600}
              height={400}
              className="rounded-lg h-96 object-cover object-center "
            />
          </div>
          <div className="md:w-1/2">
            <p className="mb-4 text-lg">{dayTrip.description}</p>
            <div className="text-center h-24">
              <Popup
                trigger={
                  <button className="bg-yellow-500 text-white px-8 rounded-md py-4 ml-auto mb-16 hover:border-black hover:border hover:text-black hover:bg-transparent">
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
                    <BookingForm adventure={adventure} bookableType={bookableType} />
                  </div>
                )}
              </Popup>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <ul>
      <li className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 mx-16 my-6">
        <div className="lg:ml-6 font-semibold">Inclusions:</div>
        <div className="single_tour_inclusions_content flex-grow flex flex-wrap lg:flex-col">
          {dayTrip.inclusions.split(",").map((inclusion) => (
            <div key={inclusion} className="w-full capitalize p-2 flex items-center">
              <FaCheck className="mr-1" />
              {inclusion.trim()}
            </div>
          ))}
        </div>
      </li>
      <li className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 mx-16 my-6">
        <div className="font-semibold lg:ml-6">Exclusions:</div>
        <div className="single_tour_inclusions_content flex-grow flex flex-wrap lg:flex-col">
          {dayTrip.exclusions.split(",").map((exclusion) => (
            <div key={exclusion} className="w-full capitalize p-2 flex items-center">
              <FaTimes className="mr-1" />
              {exclusion.trim()}
            </div>
          ))}
        </div>
      </li>
    </ul>
  </div>
</div>


  );
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/day_trips');
  const dayTrips = await res.json();
  const paths = dayTrips.map((day) => ({
    params: { daytrip: generateSlug(day.name), id: day.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch('http://localhost:3000/day_trips');
  const dayTrips = await res.json();
  const dayTrip = dayTrips.find(
    (day) => generateSlug(day.name) === params.daytrip
  );
  return {
    props: { dayTrip },
  };
}
