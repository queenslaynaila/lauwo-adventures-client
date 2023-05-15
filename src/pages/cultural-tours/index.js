import CulturalTourCard from '@/components/CulturalTourCard';
import SocialsButtons from '@/components/SocialsButtons';
import Link from 'next/link';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import EnquiryPopUp from '@/components/enquirypopup';
function Tours({ tours }) {
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
        style={{ backgroundImage: "url('/maasai.jpg')" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
          }}
        ></div>
        <div className="relative container mx-auto p-4 mt-8">
          <div className="py-10 px-5 my-5 text-white">
            <div className="mb-3 text-2xl md:text-4xl">
              Experience the Rich Cultural Heritage of Tanzania
            </div>
            <div className="leading-normal">
              Discover the richness of Tanzania&apos;s cultural experiences
              through our curated tours.
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
      <div className="p-5 bg-yellow-500 flex items-center justify-between">
        <p className="text-white lg:ml-12">
          Discover the richness of Tanzania&apos;s cultural experiences through
          our curated tours.
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

      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Who Should Embark on Cultural Tours ?{' '}
          </h2>
          <p className="mb-4 leading-8">
            {' '}
            Cultural tours are meant for curious travelers who seek authentic
            and immersive experiences. These tours are ideal for individuals who
            have a keen interest in exploring different cultures, traditions,
            and ways of life. If you have a passion for learning about the
            customs, rituals, and artistic expressions of local communities,
            cultural tours are perfect for you. Whether you are a solo traveler,
            a family, or a group of friends, cultural tours provide a unique
            opportunity to engage with indigenous cultures, interact with local
            communities, and gain a deeper appreciation for the diversity of our
            world. Embark on a cultural tour and broaden your horizons through
            meaningful cultural exchanges and memorable encounters.Our cultural
            tours focus on the vibrant Maasai culture. Engage with Maasai
            tribes, visit their villages, and witness daily activities. Gain
            insights into their beliefs and traditions.
          </p>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center">Our Packages </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 mx-16 my-6">
        {tours.map((tour) => (
          <div key={tour.id}>
            <CulturalTourCard tour={tour} />
          </div>
        ))}
      </div>

      <SocialsButtons />
    </div>
  );
}

export default Tours;

export async function getStaticProps() {
  const res = await fetch(
    'https://lauwo-adventures-api.onrender.com/cultural_tours'
  );
  const tours = await res.json();
  return {
    props: { tours },
  };
}
