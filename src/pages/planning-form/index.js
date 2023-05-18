import PlanForm from '@/components/PlanForm';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Head from 'next/head';
import EnquiryPopUp from '@/components/enquirypopup';
import Link from 'next/link';
export default function planningform() {
  const contentStyle = {
    width: '85%',
    maxHeight: '85%',
    overflow: 'auto',
    margin: 'auto',
  };
  return (
    <div className="font-poly">
      <Head>
        <title>Planning Form</title>
        <meta name="description" content="customize trip for everyone" />
        <meta property="og:title" content="planning form" />
        <meta
          property="og:description"
          content="We will customize a trip for you"
        />
        <meta name="twitter:title" content="planning form" />
      </Head>
      <div
        className="h-[50vh] lg:h-[60vh] bg-cover bg-image bg-center bg-no-repeat flex items-center justify-center bg-gray-400 bg-blend-multiply"
        style={{ backgroundImage: "url('/safari.jpg')" }}
      >
        <div className="relative container p-4 mt-16">
          <div className="py-10 px-5 my-5 text-center">
            <div className="  my-3 pb-4 pt-2 md:text-2xl text-white text-lg font-bold leading-[50px] mx-auto max-w-xl uppercase">
              TAILOR YOUR TANZANIAN ADVENTURE
            </div>
            <div className="text leading-normal text-white mx-auto max-w-xl">
              FROM GROUP CLIMBS, CULTURAL TOURS, DAY TRIPS AND SAFARIS
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 text-center">
        <h2 className="font-bold text-xl p-2 pb-4">
          Your Tanzanian-adventure starts here..
        </h2>
        <h2 className="font-bold text-xl p-2 pb-4">
          Experience a journey that is tailored just for you!.
        </h2>
        <p className="leading-8">
          At Lauwo Adventures, we specialize in creating personalized and
          unforgettable experiences with a personal touch. With your own
          dedicated adventure specialist, we work closely with you to tailor
          your dream trip. Combining your preferences and desires with our
          extensive knowledge of the destination, we design the perfect
          itinerary for everyone. As experts solely focused on Tanzania and
          based locally, we know all the hidden gems and must-visit places.
          Whether you seek an adventurous safari or climb, we make it possible.{' '}
        </p>
      </div>

      <div
        className="  bg-cover bg-image bg-center bg-no-repeat  p-10   "
        style={{ backgroundImage: "url('/lauwosafari.webp')" }}
      >
        <PlanForm />
      </div>
    </div>
  );
}
