import React from 'react';
import Link from 'next/link';
import EnquiryPopUp from '@/components/enquirypopup';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Image from 'next/image';
import safarilocations from '@/data/safarilocations.json';
export default function Index({ routes }) {
  console.log(safarilocations);
  const contentStyle = {
    width: '85%',
    maxHeight: '85%',
    overflow: 'auto',
    margin: 'auto',
  };
  return (
    <div className="font-poly">
      <div
        className="relative bg-no-repeat bg-center bg-cover flex justify-center items-center"
        style={{ backgroundImage: "url('/kilimanjaro.jpg')" }}
      >
        <div
          className="absolute bg-black/80 inset-0"
          style={{
            background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
          }}
        ></div>
        <div className="relative container mx-auto p-4 flex mt-8 items-end">
          <div>
            <div className="float-left py-10 px-5 my-5 ">
              <div className="heading mb-3 text-2xl md:text-4xl text-white">
                Kilimanjaro Routes.
              </div>
              <div className="text leading-normal text-white">
                Read through all kilimanjaro routes and find out which is the
                best for you.
              </div>
            </div>
            <div className="cta clear-left px-5">
              <div className="flex">
                <Link
                  className="no-underline mr-2 btn btn-outline-primary block sm:inline-block global-transition text-white"
                  href="/travelconsideration"
                >
                  <button className="text-white border border-yellow-500 hover:bg-yellow-500 hover:text-white rounded-md px-4 py-2 flex items-center">
                    <span className="mr-2">Plan A Tanzanian Visit </span>
                    <span className="fa fa-arrow-right"></span>
                  </button>
                </Link>
                <Link
                  className="no-underline btn btn-outline-primary block sm:inline-block global-transition text-white"
                  href="/planning-form"
                >
                  <button className="text-white border border-yellow-500 hover:bg-yellow-500 hover:text-white rounded-md px-4 py-2 flex items-center">
                    <span className="mr-2">Plan a Trip</span>
                    <span className="fa fa-arrow-right"></span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 bg-yellow-500 flex items-center justify-between">
        <p className="text-white lg:ml-12">
          Trusted Tour Company in Tanzania. See our reviews here.
        </p>
        <div>
          <Popup
            trigger={
              <button className="text-white border  border-white-500 hover:bg-yellow-800 hover:text-white rounded-md px-4 py-2">
                Enquire Now
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
        <h1 className="text-2xl font-bold mb-4 text-center py-2 mt-4">
          Kilimanjaro routes
        </h1>
        {routes.map((route, index) => (
          <div
            key={index}
            className={`flex flex-wrap justify-center mx-4 lg:mx-16 ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}
          >
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-lg font-medium mb-2 font-semibold">
                {route.route_name}
              </h2>
              <p className="mb-4">{route.description}</p>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <Image
                src={route.image_URL}
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
  );
}
export async function getStaticProps() {
  const res = await fetch(
    'https://lauwo-adventures-api.onrender.com/kilimanjaro_routes'
  );
  const routes = await res.json();

  return {
    props: {
      routes,
    },
  };
}
