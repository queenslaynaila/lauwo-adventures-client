import React, { useState } from 'react';
import Link from 'next/link';
import EnquiryPopUp from '@/components/enquirypopup';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Index() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    fetch('http://localhost:3000/inquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((_data) => {
          setName('');
          setEmail('');
          setMessage('');
        });
      } else {
        r.json().then((err) => {
          setErrors(err.errors);
        });
      }
    });
  };

  const contentStyle = {
    width: '55%',
    maxHeight: '85%',
    overflow: 'auto',
    margin: 'auto',
  };
  return (
    <div className="font-poly">
      <div
        className="relative bg-no-repeat bg-center bg-cover flex justify-center items-center"
        style={{ backgroundImage: 'url(/kilimanjarosunrise.jpg)' }}
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
                Join A Kilimanjaro Group Climb
              </div>
              <div className="text leading-normal text-white">
                Learn more about group tours what they are all about and embark
                on a group adventure with us.
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
      <div className="flex flex-col md:flex-row justify-center ">
        <div className=" md:w-8/12  md:order-1">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">
              Why Kilimanjaro Group Climbs ?
            </h2>
            <p className="leading-8">
              Climbing Mount Kilimanjaro is a challenging endeavor, especially
              for beginners. Thats why, whenever the opportunity arises, it is
              highly recommended to embark on this journey with others. Joining
              a group climb not only offers cost-saving benefits compared to a
              solo expedition but also provides the invaluable camaraderie and
              support of fellow climbers.
            </p>
            <p className="leading-8">
              Lauwo Adventures offers an excellent option for group climbs,
              which is highly recommended for a rewarding experience.
              Alternatively, you can explore the available group climbs on our
              website and secure your spot. In the event that the scheduled
              group climbs do not align with your preferred dates, we have a
              convenient solution. Simply provide us with your details through
              the form here, and Lauwo will promptly notify you as soon as a
              group climb that meets your specifications becomes available.
            </p>

            <div>
              <form onSubmit={handleSubmit} className=" w-full shadow-lg p-5 ">
                <h2 className="text-xl font-bold mb-4 p-2">
                  Reserve a Group Climb
                </h2>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-1 px-4 py-2 border border-yellow-500 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    No of People:
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-1 px-4 py-2 border border-yellow-500 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Arrival Date:
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 px-4 py-2 border border-yellow-500 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 px-4 py-2 border border-yellow-500 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    More Information:
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1 px-4 py-2 border border-yellow-500 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                >
                  Submit
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 mt-4 p-2">
                Advantages of Group Climbs
              </h2>
              <ul className="list-disc ml-8 leading-8">
                <li>High record of sucess rates</li>
                <li>
                  You get to meet new people and perharps eve make lifelong
                  friends
                </li>
                <li>Cheap.The bigger the no of people, the lesser the cost</li>
                <li>We always have a balanced guide client ration</li>
              </ul>
              <h2 className="text-2xl font-bold mb-4 mt-4 p-2">
                Disadvantages of Group Climbs
              </h2>
              <p className="leading-8">
                While group tours do give out a feeling of carmaradie, one may
                sometmes feel they are not getting eough private time.It also
                gets a little awkward (but it shall pass) if you are a solo
                traveller amongs a group of friends
              </p>
            </div>
          </div>
        </div>
        <div className=" md:w-4/12 md:order-2 mt-8 md:mt-0">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4">Related Pages</h3>
            <ul className="space-y-4">
              <li>
                <a href="/kilimanjaro-routes" className="text-blue-500">
                  Kilimanjaro Routes
                </a>
              </li>
              <li>
                <a href="/planing" className="text-blue-500">
                  Climb Planning
                </a>
              </li>
              <li>
                <a href="/hiking-prices" className="text-blue-500">
                  Hiking Prices
                </a>
              </li>
              <li>
                <a href="/full-moon" className="text-blue-500">
                  Full Moon Climb
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
