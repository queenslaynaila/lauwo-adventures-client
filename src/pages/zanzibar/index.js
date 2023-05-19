import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
 
import Popup from 'reactjs-popup';
import { useState } from 'react';
import 'reactjs-popup/dist/index.css';
import zanzibar from '@/data/zanzibar.json';
import SocialsButtons from '@/components/SocialsButtons';
import EnquiryPopUp from '@/components/enquirypopup';
export default function Index() {
  const [isLoading, setLoading] = useState(true);
  const contentStyle = {
    width: '85%',
    maxHeight: '85%',
    overflow: 'auto',
    margin: 'auto',
  };

  return (
    <div className="font-poly">
     
      <div
        className="relative bg-no-repeat bg-center bg-cover flex justify-center items-center h-3/4"
        style={{ backgroundImage: "url('/hut.avif')" }}
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
              <div className="heading mb-3 text-2xl md:text-4xl text-white">
                Zanzibar Island Tanzania
              </div>
              <div className="text leading-normal text-white">
                Enjoy the beauty of Tanzania in Zanzibar.
              </div>
            </div>
            <div className="cta clear-left px-5">
              <div className="flex">
                <Link
                  className="no-underline mr-2 btn btn-outline-primary block sm:inline-block global-transition text-white"
                  href="/travelconsideration"
                >
                  <button className="text-white border border-yellow-500 hover:bg-yellow-500 hover:text-white rounded-md px-4 py-2 flex items-center">
                    <span className="mr-2">Plan A Tanzani Visit </span>
                    <span className="fa fa-arrow-right"></span>
                  </button>
                </Link>
                <Link
                  className="no-underline btn btn-outline-primary block sm:inline-block global-transition text-white"
                  href="/planning-form"
                >
                  <button className="text-white border border-yellow-500 hover:bg-yellow-500 hover:text-white rounded-md px-4 py-2 flex items-center">
                    <span className="mr-2">Tailor a Trip</span>
                    <span className="fa fa-arrow-right"></span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2 bg-yellow-500 flex items-center justify-between">
        <p className="text-white lg:ml-12">Trusted Tour Company in Tanzania.</p>
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
      <div>
        <h2 className="text-center p-4 text-2xl font-bold">About Zanzibar</h2>
        <p className="  p-2 leading-8  mx-4 lg:mx-16">
          Zanzibar, an enchanting archipelago off the coast of Tanzania, is a
          tropical paradise that captivates visitors with its stunning beauty
          and rich cultural heritage. With its white sandy beaches,
          crystal-clear turquoise waters, and swaying palm trees, Zanzibar
          offers a perfect escape for beach lovers and water enthusiasts. The
          archipelago is also home to the historic Stone Town, a UNESCO World
          Heritage Site, where narrow streets wind through ancient buildings,
          bustling markets, and reminders of its vibrant history as a center for
          trade. Zanzibar&apos;s spice plantations infuse the air with aromatic
          scents, and the warm and welcoming locals, influenced by a blend of
          Arab, Persian, Indian, and African cultures, offer a glimpse into the
          island&apos;s unique cultural fusion. Whether indulging in beachside
          relaxation, exploring the historical wonders, or immersing oneself in
          the vibrant atmosphere, Zanzibar promises an unforgettable experience
          for all who visit
        </p>
      </div>
      <div>
        <h2 className="text-center p-4 text-2xl font-bold">Why Zanzibar ?</h2>
        {zanzibar.map((location, index) => (
          <div
            key={index}
            className={`flex flex-wrap justify-center mx-4 lg:mx-16 ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}
          >
            <div className="w-full md:w-1/2 p-4">
              <div className="flex flex-col h-full justify-center">
                <h2 className="text-lg mb-2 font-semibold">{location.title}</h2>
                <p className="mb-4 leading-8">{location.description}</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="flex justify-center items-center h-full">
                <Image
                  src={location.image}
                  alt={location.title}
                  width={500}
                  height={500}
                  className={`rounded-lg w-full h-auto ${
                    isLoading ? 'blur-2xl' : 'blur-0 grayscale-0'
                  }`}
                  onLoadingComplete={() => setLoading(false)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <SocialsButtons />
    </div>
  );
}
