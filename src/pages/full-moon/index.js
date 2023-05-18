import React from 'react';
import Link from 'next/link';
import EnquiryPopUp from '@/components/enquirypopup';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import SocialsButtons from '@/components/SocialsButtons';
export default function Index() {
  const contentStyle = {
    width: '55%',
    maxHeight: '85%',
    overflow: 'auto',
    margin: 'auto',
  };
  return (
    <div>
      <div className="font-poly">
        <div
          className="relative bg-no-repeat bg-center bg-cover flex justify-center items-center"
          style={{ backgroundImage: "url('/mountain2.webp')" }}
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
                  Kilimanjaro Full Moon Climb.
                </div>
                <div className="text leading-normal text-white">
                  Ascending Kilimanjaro during a full moon offers a mystical,
                  breathtaking, and unforgettable experience as the moonlight
                  illuminates the majestic landscape, creating a surreal and
                  ethereal atmosphere
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

        <div className="p-2 bg-yellow-500 flex items-center justify-between">
          <p className="text-white lg:ml-12">
            Trusted Tour Company in Tanzania. See our reviews here.
          </p>
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
        <div className="flex flex-col md:flex-row justify-center ">
          <div className=" md:w-8/12  md:order-1">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                Why Are Full Moon Climbs Popular?
              </h2>
              <div className=" p-4">
                <p className="text-lg mb-4">
                  Full moon climbs are popular for several reasons:
                </p>

                <ul className="list-disc list-inside leading-8">
                  <li className="mb-2">
                    Unique Experience: Climbing a mountain or a hill during a
                    full moon offers a distinct and memorable experience...
                  </li>
                  <li className="mb-2">
                    Scenic Beauty: Full moon climbs provide breathtaking views
                    of the surroundings...
                  </li>
                  <li className="mb-2">
                    Enhanced Visibility: The brightness of the full moon
                    enhances visibility during nighttime climbs...
                  </li>
                  <li className="mb-2">
                    Sense of Adventure: Full moon climbs add an element of
                    adventure and thrill to the experience...
                  </li>
                  <li className="mb-2">
                    Social and Cultural Significance: Full moon climbs often
                    have cultural and spiritual significance in various
                    societies...
                  </li>
                  <li className="mb-2">
                    Limited Availability: Full moon climbs are only possible on
                    specific nights when the moon is at its fullest...
                  </li>
                  <li className="mb-2">
                    Mental and Emotional Impact: Many people find that spending
                    time in nature and undertaking challenging activities like
                    climbing can have positive effects on mental and emotional
                    well-being...
                  </li>
                </ul>
              </div>
              <h2 className="text-2xl font-bold mb-4">Full Moon Dates</h2>

              <p className="text-lg mb-4">
                The dates below indicate the full moon itself. Your climb will
                be arranged around these dates, so you will summit one day
                before or after. This is because it can get a little busy on the
                full moon date. The effect and experience of the full moon
                remain the same one day either side.
              </p>

              <ul className="list-disc list-inside">
                <li className="mb-2">5 January</li>
                <li className="mb-2">5 February</li>
                <li className="mb-2">7 March</li>
                <li className="mb-2">5 April</li>
                <li className="mb-2">5 May</li>
                <li className="mb-2">3 June</li>
                <li className="mb-2">3 July</li>
                <li className="mb-2">30 August</li>
                <li className="mb-2">29 September</li>
                <li className="mb-2">28 October</li>
                <li className="mb-2">27 November</li>
                <li className="mb-2">26 December</li>
              </ul>
            </div>
          </div>
          <div className=" md:w-4/12 md:order-2 mt-8 md:mt-0">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Related Pages</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/kilimanjaro-routes" className="text-blue-500">
                    Kilimanjaro Routes
                  </Link>
                </li>
                <li>
                  <Link href="/planing" className="text-blue-500">
                    Climb Planning
                  </Link>
                </li>
                <li>
                  <Link href="/hiking-prices" className="text-blue-500">
                    Hiking Prices
                  </Link>
                </li>
                <li>
                  <Link href="/full-moon" className="text-blue-500">
                    Full Moon Climb
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <SocialsButtons />
    </div>
  );
}
