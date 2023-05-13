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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Discover the wonders of Tanzania with Lauwo Adventures. We offer exceptional safari packages, Mount Kilimanjaro expeditions, cultural tours, and more. Explore the beauty and rich heritage of Tanzania with our experienced guides."
        />
        <meta
          name="keywords"
          content="lauwo, lauwo adevntures,Tanzania adventure tours,Safari packages in Tanzania,Mount Kilimanjaro expeditions,Cultural tours in Tanzania,Wildlife safaris,Tanzania travel experiences,Local tour operator in Tanzania,African safari adventures,Tanzania vacation packages,Explore Tanzania's natural beauty,HoneyMoonSafaris,Mount Meru expeditions,Mountain Climbng"
        />
        <meta name="author" content="Your Name" />
        <title>Lauwo Adventures | Discover the Wonders of Tanzania</title>

        <meta
          property="og:title"
          content="Lauwo Adventures | Discover the Wonders of Tanzania"
        />
        <meta
          property="og:description"
          content="Lauwo Adventures is a trusted tour company offering unforgettable adventures in Tanzania. Explore our safari packages, climb Mount Kilimanjaro, and immerse yourself in the rich cultural heritage of Tanzania."
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
          content="Lauwo Adventures | Discover the Wonders of Tanzania"
        />
        <meta
          name="twitter:description"
          content="Discover the wonders of Tanzania with Lauwo Adventures. We offer exceptional safari packages, Mount Kilimanjaro expeditions, cultural tours, and more. Explore the beauty and rich heritage of Tanzania with our experienced guides."
        />
        <meta
          name="twitter:image"
          content="https://www.yourwebsite.com/image.jpg"
        />
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
