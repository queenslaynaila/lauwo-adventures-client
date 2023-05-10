import React from 'react';
import Image from 'next/image';

export default function index() {
  return (
    <div className="font-poly">
      <div
        className="relative bg-no-repeat bg-center bg-cover flex justify-center items-center"
        style={{ backgroundImage: "url('/lauwotourbus.jpg')" }}
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
                About Lauwo Adventures
              </div>
              <div className="text leading-normal text-white">
                Our team, values, and community projects.
              </div>
            </div>
            <div className="cta clear-left px-5">
              <a
                className="no-underline btn btn-primary block sm:inline-block global-transition text-white"
                href=""
                target=""
              >
                <div className="flex justify-center items-center">
                  <span>Plan a trip with Lauwo today.</span>
                  <span className="fa fa-xs fa-arrow-right ml-4"></span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 bg-yellow-500">
        <p className="text-white lg:ml-12">
          Trusted Tour Company in Tanzania. See our reviews here.
        </p>
      </div>
      <div>
        <h1 className="text-center p-4 text-2xl">Who We Are</h1>
        <p className="  p-2 leading-8  mx-4 lg:mx-16">
          Lauwo Adventures is a passionate team of adventure enthusiasts who
          love everything about Tanzania. As a local company, we have always
          been rooted in this beautiful country and take pride in sharing its
          wonders with our clients. Our history dates back to the mountaineer
          family of &apos;Yohani Kinyala Lauwo&apos;, who was the first African
          guide to climb and conquer the summit of Mount Kilimanjaro in 1889. As
          his grandsons, we are committed to providing excellent and safe tours
          infused with vibrant local cultural experiences to our clients with
          professional and competent guides and porters. While we are proud of
          our rich history, we do not rely solely on it. With more than a
          decade&apos;s experience in the Tanzanian tourism industry, we
          constantly strive to improve and innovate our tours to ensure the best
          possible experience for our clients.
        </p>
        <p className="  p-2 leading-8  mx-4 lg:mx-16">
          With over a decade of experience in the Tanzanian tourism industry, we
          are driven by our passion for adventure and our desire to share the
          wonders of Tanzania with you. Whether you dream of conquering the
          peaks of Kilimanjaro, embarking on thrilling wildlife safaris, or
          immersing yourself in the rich cultural heritage of Tanzania, Lauwo
          Adventures is here to make your journey unforgettable.
        </p>
        <p className="  p-2 leading-8  mx-4 lg:mx-16">
          Contact us today to start planning your extraordinary Tanzanian
          adventure. Let us guide you through the wonders of this magnificent
          land, showcasing its beauty, culture, and warm hospitality like no one
          else can. Together, let's create memories that will last a lifetime
          with Lauwo Adventures..
        </p>
      </div>

      <div>
        <h1 className="text-center p-4 text-2xl">
          Why Choose Lauwo Adventures?
        </h1>
        <p className="p-2 leading-8 mx-4 lg:mx-16">
          As a fully licensed tour operator, we go beyond being a mere travel
          agency that resells packages. We meticulously organize and run our own
          trips, ensuring that every aspect of your adventure is carefully
          planned and executed. This level of control allows us to maintain the
          highest standards of quality, safety, and customer satisfaction.
        </p>
        <div className="p-2 leading-8 mx-4 lg:mx-16">
          When you choose Lauwo Adventures, you benefit from our:
          <ul className="list-disc ml-8">
            <li>Extensive local knowledge and expertise</li>
            <li>Passionate and experienced guides and porters</li>
            <li>Commitment to sustainable and responsible tourism</li>
            <li>Personalized itineraries tailored to your preferences</li>
            <li>Superior comfort and safety standards</li>
            <li>Exceptional customer service from start to finish</li>
          </ul>
        </div>
        <p className="p-2 leading-8 mx-4 lg:mx-16">
          With Lauwo Adventures, you can trust that you are in capable hands,
          and we will go above and beyond to ensure that your adventure in
          Tanzania exceeds your expectations.
        </p>
      </div>

      <div>
        <h1 className="text-center p-4 text-2xl">Responsible Tourism</h1>
        <div className="flex flex-wrap justify-center mx-4 lg:mx-16">
          <div className="w-full md:w-1/2 p-4">
            <Image
              src="/lauwoteam.jpeg"
              alt="Responsible Tourism"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-lg font-medium mb-2">
              Preserving Nature and Empowering Communities
            </h2>
            <p className="mb-4">
              At Lauwo Adventures, we are committed to practicing responsible
              tourism. We believe in preserving the natural environment,
              supporting local communities, and minimizing our ecological
              footprint.
            </p>
            <p className="mb-4">
              Here are some of the ways we promote responsible tourism:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Partnering with local conservation organizations</li>
              <li>Supporting eco-friendly accommodations and transportation</li>
              <li>Respecting wildlife and their habitats</li>
              <li>
                Providing fair wages and employment opportunities to local
                communities
              </li>
              <li>
                Supporting local initiatives and community development projects
              </li>
              <li>Minimizing waste and promoting recycling</li>
            </ul>
            <p>
              By choosing Lauwo Adventures, you contribute to sustainable
              tourism practices and make a positive impact on the environment
              and local communities.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center p-4 text-2xl">
          Empowering Local Communities and Making a Difference
        </h1>
        <div className="flex flex-wrap justify-center mx-4 lg:mx-16">
          <div className="w-full md:w-1/2 p-4">
            <p className="p-2 leading-8">
              Lauwo Adventures is committed to making a positive impact on the
              local communities situated at the foot of Mount Kilimanjaro.
              Through our porter support program, we select and employ porters
              from these communities, offering them scholarships and vocational
              training. By supporting their dreams and goals, we actively
              contribute to combating poverty and uplifting their lives.
            </p>
            <p className="p-2 leading-8">
              We have partnered with the Freedom Foundation Tanzania, a
              non-profit organization dedicated to social development and
              community empowerment. Together, we strive to create sustainable
              opportunities and improve the livelihoods of the local porters.
            </p>
            <p className="p-2 leading-8">
              To learn more about the porter support program and our partnership
              with the Freedom Foundation Tanzania, visit their website:
            </p>
            <a
              href="https://freedomfoundationtz.org/porter-support/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 leading-8 text-blue-500 hover:underline"
            >
              here.
            </a>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <Image
              src="/porter.jpg"
              alt="Community Program"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}