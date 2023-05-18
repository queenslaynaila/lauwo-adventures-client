import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Why() {
  return (
    <section className="font-poly">
      <div className="container mx-auto py-12">
        <div className="mx-50">
          <div className="flex justify-center items-center">
            <div className="border-t border-black w-1/3"></div>
            <div className="text-center mx-2">
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="3em"
                width="3em"
              >
                <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 000 2.5v11a.5.5 0 00.707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 00.78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0016 13.5v-11a.5.5 0 00-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
              </svg>
            </div>
            <div className="border-t border-black w-1/3"></div>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center mb-8 pt-2">
          Why Book with Lauwo Adventures?
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          <div className="flex flex-col items-center">
            <Image
              src="/trip.webp"
              alt="Tailor Made Tours"
              className="w-20 h-20 mb-4  bg-yellow-500  p-2 "
              height={80}
              width={80}
            />

            <p className="text-center">
              Tailor Made Tours
              <br />
              Experience the joy of a personalized trip designed just for you.
              To customize your own adventure{' '}
              <Link
                href="/planning-form"
                className="text-yellow-500 font-semibold"
              >
                click here
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/itinerary.webp"
              alt="Custom Itineraries"
              className="w-20 h-20 mb-4 bg-yellow-500 p-2"
              height={80}
              width={80}
            />
            <p className="text-center">
              Custom Itineraries
              <br />
              Create your own unique adventure with a customized itinerary.Just
              enter your details{' '}
              <Link
                href="/planning-form"
                className="text-yellow-500 font-semibold mx-1"
              >
                here
              </Link>
              and our tour experts will get right back to you.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/advise.webp"
              alt="24/7 Expert Advice"
              className="w-20 h-20 mb-4 bg-yellow-500 p-2"
              height={80}
              width={80}
            />
            <p className="text-center">
              24/7 Expert Advice
              <br />
              Get reliable guidance and support from our travel experts.For a
              more personalise advise enter your details{' '}
              <Link
                href="/planning-form"
                className="text-yellow-500 font-semibold mx-1"
              >
                here
              </Link>{' '}
              and our tour expert will contact. .
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/guide.webp"
              alt="Experienced Guides"
              className="w-20 h-20 mb-4 bg-yellow-500 p-2 "
              height={80}
              width={80}
            />
            <p className="text-center">
              Experienced Guides
              <br />
              Explore Tanzania with knowledgeable and experienced guides.Check
              out the Lauwo team{' '}
              <Link
                href="/planning-form"
                className="text-yellow-500 font-semibold mx-1"
              >
                here.
              </Link>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/authentic.webp"
              alt="Authentic Experiences"
              className="w-20 h-20 mb-4  bg-yellow-500 p-2"
              height={80}
              width={80}
            />
            <p className="text-center">
              Authentic Experiences
              <br />
              Immerse yourself in the true essence of Tanzania&apos;s culture
              and nature.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/customer.webp"
              alt="Customer Satisfaction"
              className="w-20 h-20 mb-4  bg-yellow-500 p-2"
              height={80}
              width={80}
            />
            <p className="text-center">
              Customer Satisfaction
              <br />
              We prioritize your satisfaction and strive to exceed your
              expectations.You can checkout what our customers are saying about
              us{' '}
              <Link
                href="/planning-form"
                className="text-yellow-500 font-semibold mx-1"
              >
                here
              </Link>
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/about-us"
            className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
