import CulturalTourCard from '../../components/CulturalTourCard';
import Head from 'next/head';
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
  function addCulturalJsonLd() {
    return {
      __html: `{
      "@context": "https://schema.org/",
      "@type": ["TouristAttraction","Cultural Tours"],
      "name": "Cultural Tours in Tanzania",
      "description": "Experience authentic cultural tours in Tanzania with Lauwo Adventures. Engage with the vibrant Maasai, Chaga, and Hadzabe tribes and explore their traditions.",
      "touristType": {
        "@type": "Audience",
        "audienceType" : "Memorial Tourism",
        "geographicArea": [{
          "@type": "AdministrativeArea",
          "name": "Tanzania"
        },{
          "@type": "AdministrativeArea",
          "name": "Tanzania"
        }]
      },
      "location": {
        "@type": "Place",
        "name": "Tanzania, Moshi Arusha"
      },
      "provider": {
        "@type": "Organization",
        "name": "Lauwo Adventures",
        "url": "https://lauwo-adventures-client.vercel.app/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://lauwo-adventures-client.vercel.app/_next/image?url=%2Flogo.png&w=64&q=75",
          "width": 50,
          "height": 50,
          "caption": "Lauwo Adventures"
        }
      },
      "sameAs":"https://en.wikipedia.org/wiki/Cultural_tourism",
      "itemListElement": [
        {
          "@type": "TouristAttraction",
          "name": "Marangu Cultural Tour",
          "description": "Description of Cultural Tour 1",
          "url": "https://www.example.com/cultural-tour-1"
        },
        {
          "@type": "TouristAttraction",
          "name": "Maasai Cultural Tour",
          "description": "Description of Cultural Tour 2",
          "url": "https://lauwo-adventures-client.vercel.app/day-trips/maasai"
        }
      ],
      "offers": {
        "@type": "Offer",
        "name": "Trip proposed by  lauwo adventures for tourists booking a safari and cultural tours.",
        "description": "A 20 percent discount is offered.",
        "price": "500",
        "priceCurrency": "USD",
        "availabilityEnds": "2023-10-31",
        "url": "https://mytripco.com/trip/12345",
        "eligibleRegion": {
          "@type": "Country",
          "name": "USA"
        },
        "offeredBy": {
          "@type": "Organization",
          "name": "lauwo adventures",
          "url": "https://lauwo-adventures-client.vercel.app/"
        }
      }
    }
  `,
    };
  }

  return (
    <div className="font-poly">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Experience authentic cultural tours in Tanzania, Moshi Arusha with Lauwo Adventures. Engage with the vibrant Maasai, Chaga, and Hadzabe tribes, explore their traditions, and gain insights into local communities. Combine your cultural tour with a thrilling Kilimanjaro climbing adventure."
        />
        <title>
          Cultural Tours in Tanzania | Authentic Experiences | Lauwo Adventures
        </title>
        <meta
          name="keywords"
          content="cultural tours, authentic experiences, Tanzania, Moshi Arusha, Maasai, Chaga, Hadzabe, Kilimanjaro climbing,Tanzania safaris, Lauwo Adventures"
        />
        <meta name="author" content="Lauwo Adventures" />
        <meta name="google" content="translate" />
        <meta
          name="google-site-verification"
          content="hKFgedHOB3VpAnDkoVs-Fm7QCpHkhAh6KaHKxbMVra8"
        />
        <Link
          rel="canonical"
          href="https://www.yourwebsite.com/cultural-tours"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addCulturalJsonLd()}
        />
      </Head>

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

      <div class="py-8">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold mb-4 text-center">
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
      <h2 class="text-2xl font-bold mb-4 text-center">Our Packages </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 mx-16 my-6">
        {tours.map((tour) => (
          <div key={tour.id}>
            <CulturalTourCard tour={tour} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tours;

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/cultural_tours');
  const tours = await res.json();
  return {
    props: { tours },
  };
}
