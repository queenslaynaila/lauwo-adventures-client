import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsBookHalf } from 'react-icons/bs';
export default function Why() {
  return (
    <section className="font-poly">
      <div className="container mx-auto py-12">
        <div className="mx-50">
          <div className="flex justify-center items-center">
            <div className="border-t border-black w-1/3"></div>
            <div className="text-center">
              <BsBookHalf className="lg:text-5xl sm:text-2xl inline-block mx-2" />
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
              src="/trip.png"
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
              src="/itinerary.png"
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
              src="/advise.png"
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
              src="/guide.png"
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
              src="/authentic.png"
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
              src="/customer.png"
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
