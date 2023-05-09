import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import BookingForm from '@/components/BookingForm';
import Image from 'next/image';
import Link from 'next/link';
export default function RouteCard({ route, duration, routeDuration }) {
  const bookableType = 'RouteDuration';

  const adventure = {
    name: `${route.route_name} ${duration} day climb`,
    id: routeDuration.id,
  };
  const contentStyle = {
    width: '85%',
    maxHeight: '85%',
    overflow: 'auto',
    margin: 'auto',
  };

  return (
    <div className="bg-sand font-poly">
      <div className="flex items-center justify-center">
        <Image
          src="/peakfinder.png"
          alt="nnn"
          height={50}
          width={50}
          className="mr-2"
        />
        <h3 className="lg:text-2xl xl:text-3xl 3xl:text-4xl text-xl capitalize text-center text-black py-32 ">
          {route.route_name} | {duration} Days{' '}
        </h3>
      </div>
      <div className="flex flex-col items-center px-8 -mt-24">
        <div className="flex relative flex-col md:flex-row md:items-center mb-28">
          <div className="md:w-1/2">
            <Image
              src={route.image_URL}
              alt="Route"
              className="rounded-lg mb-4 h-96 object-cover object-center"
              height={500}
              width={500}
            />
          </div>
          <div className="md:w-1/2 md:ml-8">
            <p className="mb-4 text-lg leading-6">{route.description} Find prices  
              <Link href="#pricing" className="text-blue-500 ml-1 hover:underline">
                here.
              </Link>
            </p>

            <div className="text-center h-24">
              <Popup
                trigger={
                  <button className="bg-black text-white px-8 rounded-md py-4 ml-auto mb-16 hover:border-black hover:border hover:text-black hover:bg-transparent">
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
  );
}
