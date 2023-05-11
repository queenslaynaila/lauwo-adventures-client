import Header from './Header';
import About from './About';
import Blogs from './Blogs';
import Statement from './Statement';
import PopularAdventure from './PopularAdventure';
import InquiryForm from './InquiryForm';
import SocialsButtons from './SocialsButtons';
import FixedBanner from './FixedBanner';
import Head from 'next/head';
const PageLayOut = () => {
  function addHomeJsonLd() {
    return {
      __html: `{
      "@context": "https://schema.org/",
      "@type": "LocalBusiness",
      "name": "Lauwo Adventures",
      "url":"",
      "siteLinks": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://lauwo-adventures-client.vercel.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Kilimanjaro Trekking",
            "item": "https://lauwo-adventures-client.vercel.app/mountain-trekking/mount-kilimanjaro"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Mount Meru Trekking",
            "item": "https://lauwo-adventures-client.vercel.app/mountain-trekking/mount-meru"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Oldonyo Lengai",
            "item": "https://lauwo-adventures-client.vercel.app/mountain-trekking/ol-doinyo-lengai"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "About Us",
            "item": "https://lauwo-adventures-client.vercel.app/about-us"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Contact us ",
            "item": "https://lauwo-adventures-client.vercel.app/#contact"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "name": "Top Tanzanian Safari Locations",
            "item": "https://lauwo-adventures-client.vercel.app/safari-locations"
          },
          {
            "@type": "ListItem",
            "position": 8,
            "name": "Our Safari packages",
            "item": "https://lauwo-adventures-client.vercel.app/safari-packages"
          },
          {
            "@type": "ListItem",
            "position": 9,
            "name": "Day Trips",
            "item": "https://lauwo-adventures-client.vercel.app/day-trips"
          },
          {
            "@type": "ListItem"
            "position": 10,
            "name": "Traveling to Tanzania",
            "item": "https://lauwo-adventures-client.vercel.app/travelconsideration"
          },
          {
            "@type": "ListItem",
            "position": 10,
            "name": "Plan an adventure in Tanzania",
            "item": "https://lauwo-adventures-client.vercel.app/planning-form"
          }
        ]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Moshi",
        "addressLocality": "Arusha",
        "addressRegion": "Tanzania",
        "postalCode": "12345",
        "addressCountry": "Tanzania"
      },
      "openingHours": "Mo-Fr 09:00-18:00",
      "telephone": "+255-123-456-7890",
      "sameAs": [
          "https://www.facebook.com/lauwoadventures",
          "https://www.tripadvisor.com/ Attraction_Review-g317084-d17424491-Reviews-Lauwo_Adventures-Moshi_Kilimanjaro_Region.html",
          "https://www.instagram.com/yourcompany",
          "https://www.linkedin.com/company/lauwo-adventures/"
          
      ],
      "location": {
        "@type": "Place",
        "name": "Tanzania, Moshi Arusha"
      },
      
       
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
    <div>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <meta name="description" content="Discover the wonders of Tanzania with Lauwo Adventures. We offer exceptional safari packages, Mount Kilimanjaro expeditions, cultural tours, and more. Explore the beauty and rich heritage of Tanzania with our experienced guides."/>
        <meta name="keywords" content="lauwo, lauwo adevntures,Tanzania adventure tours,Safari packages in Tanzania,Mount Kilimanjaro expeditions,Cultural tours in Tanzania,Wildlife safaris,Tanzania travel experiences,Local tour operator in Tanzania,African safari adventures,Tanzania vacation packages,Explore Tanzania's natural beauty,HoneyMoonSafaris,Mount Meru expeditions,Mountain Climbng"/>
        <meta name="author" content="Your Name"/>
        <title>Lauwo Adventures | Discover the Wonders of Tanzania</title>

        <meta property="og:title" content="Lauwo Adventures | Discover the Wonders of Tanzania" />
        <meta property="og:description" content="Lauwo Adventures is a trusted tour company offering unforgettable adventures in Tanzania. Explore our safari packages, climb Mount Kilimanjaro, and immerse yourself in the rich cultural heritage of Tanzania." />        
        <meta property="og:image" content="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-360x240/09/4a/80/8c.jpg" />
        <meta property="og:url" content="https://lauwo-adventures-client.vercel.app/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Lauwo Adventures | Discover the Wonders of Tanzania"/>
        <meta name="twitter:description" content="Discover the wonders of Tanzania with Lauwo Adventures. We offer exceptional safari packages, Mount Kilimanjaro expeditions, cultural tours, and more. Explore the beauty and rich heritage of Tanzania with our experienced guides."/>
        <meta name="twitter:image" content="https://www.yourwebsite.com/image.jpg"/>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={addHomeJsonLd()}
            key="product-jsonld"
          />
      </Head>

      <Header />
      <FixedBanner />
      <About />
      <Statement />
      <PopularAdventure />
      <InquiryForm />
      <Blogs />
      <SocialsButtons />
    </div>
  );
};

export default PageLayOut;
