import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import SocialsButtons from '@/components/SocialsButtons';
import EnquiryPopUp from '@/components/enquirypopup';
export default function index() {
  const contentStyle = {
    width: '85%',
    maxHeight: '85%',
    overflow: 'auto',
    margin: 'auto',
  };

  return (
    <div className="font-poly">
      <Head>
        <title>About Us | Lauwo Adventures</title>
        <meta
          name="description"
          content="Lauwo Adventures is a local tour company operating in Kilimanjaro originating from the mountaineer family of 'Yohani Kinyala Lauwo' who was the first African guide to climb and conquer the summit of Mount Kilimanjaro."
        />
        <meta
          name="keywords"
          content="Lauwo Adventures, tour company, Kilimanjaro, mountaineer, Yohani Kinyala Lauwo, porters, local communities, vocational training, Tanzania tourism industry,Mount meru, Tanzanian safaris, visit tanzania, freedom foundation tanzania, wildgem adventures"
        />
        <meta name="author" content="Lauwo Adventures" />
        <meta name="google" content="translate" />
        <Link rel="canonical" href="https://www.yourwebsite.com/about-us" />
      </Head>
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
        <div>
          <h1 className="text-center p-4 text-2xl font-bold">Who We Are</h1>
          <p className="  p-2 leading-8  mx-4 lg:mx-16">
            Lauwo Adventures is a passionate team of adventure enthusiasts who
            love everything about Tanzania. As a local company, we have always
            been rooted in this beautiful country and take pride in sharing its
            wonders with our clients. Our history dates back to the mountaineer
            family of &apos;Yohani Kinyala Lauwo&apos;, who was the first
            African guide to climb and conquer the summit of Mount Kilimanjaro
            in 1889. As his grandsons, we are committed to providing excellent
            and safe tours infused with vibrant local cultural experiences to
            our clients with professional and competent guides and porters.
            While we are proud of our rich history, we do not rely solely on it.
            With more than a decade&apos;s experience in the Tanzanian tourism
            industry, we constantly strive to improve and innovate our tours to
            ensure the best possible experience for our clients.
          </p>
        </div>

        <div className="py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-center text-2xl font-bold mb-4">What We Do</h1>
            <div className="flex flex-wrap items-center justify-center">
              <div className="w-full md:w-1/2 p-4">
                <div className="relative">
                  <Image
                    src="/climbers.jpg"
                    alt="Satisfied Mountain Climber"
                    width={300}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                   <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 rounded-lg">
    <p className="text-center text-white text-xl font-bold">
      Mountain climbers
    </p>
  </div>
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  Mountain Climbing
                </h2>
                <p className="mb-4 leading-8">
                  We specialize in mountain climbing expeditions in Tanzania,
                  offering unforgettable experiences on various mountains,
                  including Kilimanjaro, Meru, and Oldonyo Lengai. Our
                  experienced guides and support team ensure your safety and
                  provide expert guidance throughout your climb.
                </p>
              </div>
              <div className="w-full md:w-1/2 p-4 ">
              <div className="relative">
  <Image
    src="/background.jpg"
    alt="Satisfied Safari Goers"
    width={300}
    height={300}
    className="w-full h-auto rounded-lg"
  />
  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 rounded-lg">
    <p className="text-center text-white text-xl font-bold">
      Elephants captured in a safari
    </p>
  </div>
</div>

                <h2 className="text-xl font-semibold mb-2">Safaris</h2>
                <p className="mb-4 leading-8">
                  Embark on thrilling wildlife safaris across Tanzania&apos;s
                  iconic national parks, including Arusha, Serengeti, and
                  Tarangire. Experience close encounters with diverse wildlife,
                  witness breathtaking landscapes, and immerse yourself in the
                  wonders of the African wilderness.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-center p-4 text-2xl  font-bold">
            Why Choose Lauwo Adventures?
          </h1>
          <p className="p-2 leading-8 mx-4 lg:mx-16">
            As a fully licensed tour operator, we go beyond being a mere travel
            agency that resells packages. We meticulously organize and run our
            own trips, ensuring that every aspect of your adventure is carefully
            planned and executed. This level of control allows us to maintain
            the highest standards of quality, safety, and customer satisfaction.
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
          <h1 className="text-center p-4 text-2xl  font-bold">
            Our Mountain Crew
          </h1>
          <p className="p-2 leading-8 mx-4 lg:mx-16">
            Our mountain crew comprises of experienced guides, porters, and
            cooks who are specialized in mountain trekking. Our guides are
            certified and well-trained experts in mountain trekking, and they
            have years of experience in leading successful expeditions.
          </p>
          <p className="p-2 leading-8 mx-4 lg:mx-16">
            Our team of porters is trained to handle all the logistics required
            during mountain treks, such as carrying equipment and supplies. Our
            cooks are skilled in preparing delicious meals even in the most
            remote locations, ensuring that our clients have a comfortable and
            enjoyable experience during their climb.
          </p>
          <p className="p-2 leading-8 mx-4 lg:mx-16">
            We take the safety of our clients seriously, and that&apos;s why we
            have an evacuation process set up in case of emergencies during
            climbs. In the event of sickness or any other emergency, we evacuate
            our clients via helicopter to ensure they receive prompt medical
            attention.
          </p>
          <p className="p-2 leading-8 mx-4 lg:mx-16">
            At Lauwo Adventures, we value our crew&apos;s expertise and their
            dedication to ensuring that our clients have a memorable and safe
            trekking experience.Best Believe you are in good hands with lauwo.
          </p>
        </div>

        <div>
          <h1 className="text-center p-4 text-2xl font-bold">
            Our Beliefs: Responsible Tourism
          </h1>
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
                <li>
                  Supporting eco-friendly accommodations and transportation
                </li>
                <li>Respecting wildlife and their habitats</li>
                <li>
                  Providing fair wages and employment opportunities to local
                  communities
                </li>
                <li>
                  Supporting local initiatives and community development
                  projects
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
          <h1 className="text-center p-4 text-2xl font-bold">
            Our Projects:Porter Support Programme
          </h1>
          <div className="flex flex-wrap justify-center mx-4 lg:mx-16">
            <div className="w-full md:w-1/2 p-4">
              <p className="p-2 leading-8">
                Lauwo Adventures is committed to making a positive impact on the
                local communities situated at the foot of Mount Kilimanjaro.
                Through our porter support program, we select and employ porters
                from these communities, offering them scholarships and
                vocational training. By supporting their dreams and goals, we
                actively contribute to combating poverty and uplifting their
                lives.
              </p>
              <p className="p-2 leading-8">
                We have partnered with the Freedom Foundation Tanzania, a
                non-profit organization dedicated to social development and
                community empowerment. Together, we strive to create sustainable
                opportunities and improve the livelihoods of the local porters.
              </p>
              <p className="p-2 leading-8">
                To learn more about the porter support program and our
                partnership with the Freedom Foundation Tanzania, visit their
                website:
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
        <div className="pb-2">
          <h1 className="text-center p-4 text-2xl  font-bold">Contact Us</h1>
          <p className="p-2 leading-8 mx-4 lg:mx-16">
            We would love to hear from you! Feel free to contact us through any
            of the following channels:
          </p>
          <div className="p-2 leading-8 mx-4 lg:mx-16">
            <ul className="list-disc ml-8">
              <li>Telephone: +255 712 002228, +255 736 30228</li>
              <li>Email: lauwoadventures@gmail.com</li>
            </ul>
          </div>
          <p className="p-2 leading-8 mx-4 lg:mx-16">
            Connect with us on social media platforms for the latest updates and
            special offers:
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://twitter.com/lauwoadventures"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Twitter
            </a>
            <a
              href="https://www.facebook.com/lauwoadventures"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://www.tripadvisor.com/lauwoadventures"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              TripAdvisor
            </a>
          </div>
        </div>
      </div>
      <SocialsButtons />
    </div>
  );
}
