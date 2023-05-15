import Header from './Header';
import About from './About';
import Blogs from './Blogs';
import PopularAdventure from './PopularAdventure';
import InquiryForm from './InquiryForm';
import SocialsButtons from './SocialsButtons';
import FixedBanner from './FixedBanner';
import Head from 'next/head';
import Why from './Why';
import TourGroups from './TourGroups';
const PageLayOut = () => {
  return (
    <div>
      <Head>
        <title>
          Lauwo Adventures | Mountain Climbing, Safaris, Camping, Cultural Tours
        </title>
        <meta
          name="description"
          content="Lauwo Adventures offers unforgettable mountain climbing experiences on Mt. Kilimanjaro, Mt. Meru, Usambara Mountains, and Oldonyo Lengai. Explore Tanzania with our diverse range of safaris, camping tours, cultural tours, and day trips."
        />

        <meta
          property="og:title"
          content="Lauwo Adventures | Mountain Climbing, Safaris,  Safaris, Cultural Tours, HoneyMoon Safaris,Day Trips"
        />
        <meta
          property="og:description"
          content="Lauwo Adventures offers unforgettable mountain climbing experiences on Mt. Kilimanjaro, Mt. Meru, Usambara Mountains, and Oldonyo Lengai. Explore Tanzania with our diverse range of safaris, camping tours, cultural tours, and day trips.We have safaris from as short as 2 days to as long as 10 days."
        />
        <meta
          property="og:image"
          content="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-360x240/09/4a/80/8c.jpg"
        />
        <meta
          property="og:url"
          content="https://lauwo-adventures-client.vercel.app/"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Lauwo Adventures | Mountain Climbing, Safaris, Camping, Cultural Tours"
        />
        <meta
          name="twitter:description"
          content="Lauwo Adventures offers unforgettable mountain climbing experiences on Mt. Kilimanjaro, Mt. Meru, Usambara Mountains, and Oldonyo Lengai. Explore Tanzania with our diverse range of safaris, camping tours, cultural tours, and day trips."
        />
        <meta
          name="twitter:image"
          content="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-360x240/09/4a/80/8c.jpg"
        />

        <meta
          name="keywords"
          content="Lauwo Adventures, mountain climbing, safaris, camping tours, cultural tours, Tanzania, Mt. Kilimanjaro, Mt. Meru, Usambara Mountains, Oldonyo Lengai"
        />
        <meta name="author" content=" Lauwo adventures" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />
      <FixedBanner />
      <About />

      <Why />
      <PopularAdventure />
      <TourGroups />
      <InquiryForm />
      <Blogs />
      <SocialsButtons />
    </div>
  );
};

export default PageLayOut;
