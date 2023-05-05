import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import BookingForm from '@/components/BookingForm';
import Image from 'next/image';
import {   FaDollarSign } from 'react-icons/fa';
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
            <p className="mb-4 text-lg leading-6">{route.description}</p>
            <div className=" mb-1 flex-grow flex flex-wrap lg:flex-col">
              <div className="w-full capitalize p-2 flex items-center">
                1-3 People:
                <FaDollarSign className="mr-1" />
                {routeDuration.one_three_price} per person
              </div>
              <div className="w-full capitalize p-2 flex items-center">
                3-6 People:
                <FaDollarSign className="mr-1" />
                {routeDuration.three_six_price} per person
              </div>
              <div className="w-full capitalize p-2 flex items-center">
               6-10 People:
                <FaDollarSign className="mr-1" />
                {routeDuration.six_ten_price} per person
              </div>
            </div>
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
