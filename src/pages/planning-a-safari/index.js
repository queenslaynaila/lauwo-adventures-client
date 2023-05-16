import Image from 'next/image';
import Head from 'next/head';
import FaqCard from '@/components/FaqCard';
//import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';
import Link from 'next/link';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import EnquiryPopUp from '@/components/enquirypopup';
import SocialsButtons from '@/components/SocialsButtons';
const SafariPage = ({ faqs }) => {
  const contentStyle = {
    width: '85%',
    maxHeight: '85%',
    overflow: 'auto',
    margin: 'auto',
  };
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredFaqs = faqs.filter((faq) => {
    return faq.question.toLowerCase().includes(searchValue.toLowerCase());
  });
  return (
    <>
      <Head>
        <title>Plan Your Dream Safari Adventure | Lauwo Adventures</title>
        <meta
          name="description"
          content="Discover exciting safari destinations, find answers to commonly asked questions, and gain valuable insights to help you plan your dream safari adventure."
        />
        <meta
          name="keywords"
          content="safari, Tanzania safari, African wildlife, safari planning, safari destinations,Safari destinations,Wildlife exploration,Best time to go on a safari,Safari itineraries,Safari lodges and accommodations,Safari activities and experiences,Safari budgeting and costs,Safari packing list,Safari transportation options,Safari guides and tour operators,Safari safety tips,Safari photography tips,Safari conservation and responsible tourism,Safari visas and travel documents,Safari trip insurance"
        />
        <meta
          property="og:title"
          content="Plan Your Dream Safari Adventure | Lauwo Adventures"
        />
        <meta
          property="og:description"
          content="Discover exciting safari destinations, find answers to commonly asked questions, and gain valuable insights to help you plan your dream safari adventure."
        />
        <meta
          property="og:image"
          content="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-360x240/09/4a/80/8c.jpg"
        />
        <meta
          property="og:url"
          content="https://lauwo-adventures-client.vercel.app/planning-a-safari"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Lauwo Adventures" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Plan Your Dream Safari Adventure | Lauwo Adventures"
        />
        <meta
          name="twitter:description"
          content="Discover exciting safari destinations, find answers to commonly asked questions, and gain valuable insights to help you plan your dream safari adventure."
        />
        <meta
          name="twitter:image"
          content="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-360x240/09/4a/80/8c.jpg"
        />
      </Head>

      <div className="font-poly">
        <div
          className="relative bg-no-repeat bg-center bg-cover flex justify-center items-center"
          style={{ backgroundImage: "url('/safari.jpg')" }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
            }}
          ></div>
          <div className="relative container mx-auto p-4 flex mt-8 items-end">
            <div>
              <div className="float-left py-10 px-5 my-5">
                <div className="heading mb-3 text-2xl md:text-4xl text-white">
                  Get Information on How to Plan for A Safari
                </div>
                <div className="text leading-normal text-white">
                  <div className="text leading-normal text-white">
                    Discover exciting safari destinations, find answers to
                    commonly asked questions, and gain valuable insights to help
                    you plan your dream safari adventure.
                  </div>
                </div>
                <div className="text leading-normal text-white">
                  You can browse through our various safari locations{' '}
                  <Link
                    href="/safari-locations"
                    className="text-yellow-500 font-semibold"
                  >
                    here.
                  </Link>
                </div>
              </div>
              <div className="cta clear-left px-5">
                <div className="flex">
                  <Link
                    className="no-underline mr-2 btn btn-outline-primary block sm:inline-block global-transition text-white"
                    href="/travelconsideration"
                  >
                    <button className="text-white border border-yellow-500 hover:bg-yellow-500 hover:text-white rounded-md px-4 py-2 flex items-center">
                      <span className="mr-2">Plan A Safari </span>
                      <span className="fa fa-arrow-right"></span>
                    </button>
                  </Link>
                  <Link
                    className="no-underline btn btn-outline-primary block sm:inline-block global-transition text-white"
                    href="/planning-form"
                  >
                    <button className="text-white border border-yellow-500 hover:bg-yellow-500 hover:text-white rounded-md px-4 py-2 flex items-center">
                      <span className="mr-2">Plan A Trip</span>
                      <span className="fa fa-arrow-right"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-2 bg-yellow-500 flex items-center justify-between">
          <p className="text-white lg:ml-12">
            Discover the richness of Tanzania
          </p>
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
        <div className="  mx-auto  lg:mx-16">
          <h1 className="text-center p-4 text-2xl font-bold capitalize">
            Planning an African Safari
          </h1>
          <div className="py-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Step 1: Where To Go and What To See
            </h2>
            <p className="  p-2 leading-8 ">
              Like any other vacation, one of the most important parts of
              planning is deciding where to go. Africa is a vast continent with
              diverse wildlife and safari experiences. To help you pick the
              perfect safari country, consider the following factors:
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                1. Wildlife Exploration
              </h3>
              <p className=" mb-4">
                Determine the specific wildlife you wish to see. Each country
                offers unique opportunities. Here are some examples:
              </p>
              <ul className="list-disc list-inside  mb-4">
                <li>
                  Great Wildebeest Migration: Witness this incredible event in
                  Kenya and Tanzania from July to October.
                </li>
                <li>
                  African Elephants: South Africa and Botswana are known for
                  their large herds of elephants throughout the year.
                </li>
                <li>
                  Big Five: East Africa and most countries in Southern Africa
                  are abundant in the iconic Big Five animals (lion, leopard,
                  elephant, buffalo, and rhino).
                </li>
                <li>
                  Gorilla Trekking: If you&apos;re interested in encountering
                  mountain gorillas, head to Uganda, Rwanda, or the Congo in
                  Central Africa.
                </li>
                <li>
                  Chimpanzees: Uganda is also an excellent destination for
                  chimpanzee sightings.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                2. Tanzania: A Safari Paradise
              </h3>
              <p className="  mb-4">
                Tanzania is renowned for its exceptional safari experiences and
                diverse wildlife. Here&apos;s why Tanzania stands out:
              </p>
              <ul className="list-disc list-inside   mb-4">
                <li>
                  <strong>The Serengeti:</strong> This vast national park is
                  home to the Great Wildebeest Migration, one of the most
                  spectacular wildlife events on the planet.
                </li>
                <li>
                  <strong>Mount Kilimanjaro:</strong> Tanzania offers the
                  opportunity to combine a safari with a thrilling climb up
                  Africa&apos;s highest peak.
                </li>
                <li>
                  <strong>Ngorongoro Crater:</strong> This UNESCO World Heritage
                  Site hosts an incredible concentration of wildlife, including
                  the Big Five.
                </li>
                <li>
                  <strong>Selous Game Reserve:</strong> One of the largest
                  reserves in Africa, it provides an off-the-beaten-path safari
                  experience with diverse ecosystems.
                </li>
                <li>
                  <strong>Zanzibar:</strong> After an exhilarating safari, relax
                  on the beautiful beaches of Zanzibar and explore its rich
                  history and vibrant culture.
                </li>
              </ul>
              <p>
                Tanzania&apos;s commitment to wildlife conservation, its
                stunning landscapes, and the authentic cultural interactions
                make it a top choice for safari enthusiasts.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              How Early to Book Your Trip?
            </h2>
            <p className="  mb-4">
              The ideal booking time for your safari trip can vary depending on
              various factors. Here are some guidelines to consider:
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                1. Individual or Couple Travelers
              </h3>
              <p className="  mb-4">
                If you are traveling solo or as a couple, and your dates and
                lodge/camp preferences are flexible, you typically don&apos;t
                need to book a year in advance. One month or a few weeks
                lead-time is usually sufficient. However, if you have specific
                locations, lodges, or dates in mind that are non-negotiable,
                it&apos;s advisable to book as early as possible to secure your
                preferred choices.
              </p>
              <p>
                Keep in mind that booking too early also carries the risk of
                uncertainties, as unforeseen circumstances can arise within a
                long booking period. Assess your priorities and the level of
                flexibility you require to make an informed decision.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">2. Group Travelers</h3>
              <p className="  mb-4">
                If you are traveling as a group and require multiple rooms, it
                is wise to book as early as possible. Safari lodges/camps have
                limited capacity, and popular accommodations tend to fill up
                quickly, especially during peak seasons. Booking well in advance
                ensures you secure the desired number of rooms for your group.
              </p>
              <p>
                The size of the lodge or camp also plays a role in determining
                how far in advance you should book. Luxury safari camps, for
                example, have a smaller capacity and may require earlier
                bookings.
              </p>
            </div>

            <div>
              <p>
                Ultimately, the more time you have to prepare, the better you
                can manage your expectations and make necessary arrangements.
                Consider your specific requirements, preferred accommodations,
                and the popularity of your chosen destination to determine the
                ideal booking time for your safari trip.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Step 3: When to Go</h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                Consider the Season
              </h3>
              <p className=" placeholder:mb-4">
                Another vital detail in planning is determining when you intend
                to visit Africa and the corresponding season. This will impact
                factors such as crowds, prices, and availability of safari
                accommodations and activities. Here are some points to consider:
              </p>
              <ul className="list-disc list-inside  ">
                <li>
                  Familiarize yourself with low, mid, and high seasons in your
                  chosen country.
                </li>
                <li>
                  Peak seasons tend to be more crowded and expensive, with
                  higher chances of fully-booked safaris.
                </li>
                <li>
                  During the low season, you may find cheaper prices, fewer
                  tourists, and better chances of booking desired accommodations
                  with minimal lead time.
                </li>
                <li>
                  Consider the animals you want to see and the activities you
                  want to do, as certain seasons may offer better opportunities
                  for specific wildlife sightings or events.
                </li>
                <li>
                  Game viewing is generally good all-year-round, but it can be
                  particularly rewarding during drier and hotter seasons.
                </li>
                <li>
                  Birding enthusiasts may prefer wetter months when nesting,
                  breeding, and migration occur.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                Other Factors to Consider
              </h3>
              <p className="  mb-4">
                Apart from the season, there are other factors to consider when
                planning your safari. Take into account the following:
              </p>
              <ul className="list-disc list-inside">
                <li>
                  Activities you wish to experience and the purpose of your
                  travel.
                </li>
                <li>
                  Special considerations for honeymoon or romantic getaways,
                  such as romantic dinners or hot air balloon rides.
                </li>
                <li>
                  If traveling with kids or elderlies, adapt the itinerary to
                  their needs and preferences.
                </li>
                <li>
                  Availability of walking safaris or beach trips depending on
                  the destination.
                </li>
                <li>
                  Determine the ideal safari duration based on your interests
                  and available time.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                Best Times to Go for a Safari in Tanzania
              </h3>
              <p className="  mb-4">
                Tanzania is known for its incredible wildlife and offers great
                safari experiences throughout the year. Here are the best times
                to go for a safari in Tanzania:
              </p>
              <ul className="list-disc list-inside  ">
                <li>
                  For the Great Wildebeest Migration, the best time is from July
                  to October when millions of wildebeests cross the Mara River.
                </li>
                <li>
                  The dry season, from June to October, offers excellent game
                  viewing opportunities as animals gather around water sources.
                </li>
                <li>
                  From December to March, you can witness the calving season in
                  the southern Serengeti, with plenty of predators and newborn
                  wildlife.
                </li>
                <li>
                  For birdwatching, the wet season from November to April is
                  ideal when migratory birds are present, and landscapes are
                  lush and green.
                </li>
              </ul>
              <p className="  mt-4">
                Keep in mind that specific wildlife sightings and weather
                patterns can vary, so it&apos;s advisable to consult with local
                experts or tour operators for the most up-to-date information.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Step 4: Set Your Budget
              </h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">
                  Setting Your Safari Budget
                </h3>
                <p className="  mb-4">
                  Setting a budget for your safari is an essential step to
                  ensure you make the most of your African experience while
                  staying within your financial means. Consider the following
                  factors when determining your safari budget:
                </p>
                <ul className="list-disc list-inside ">
                  <li>
                    Decide how much you are willing to spend specifically for
                    the safari portion of your trip.
                  </li>
                  <li>
                    Take into account flight costs, which are usually not
                    included in safari packages.
                  </li>
                  <li>
                    Research flight fares based on your place of departure and
                    travel dates to get an idea of potential costs.
                  </li>
                  <li>
                    Typical safari durations range around 7 days and can be
                    all-inclusive for meals and accommodations (except the last
                    day).
                  </li>
                  <li>
                    Prices vary depending on the season, with low season rates
                    starting from around $120 USD per day and high season rates
                    reaching $1000+ USD per day.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">
                  Sample Safari Cost in Tanzania
                </h3>
                <p className=" mb-4">
                  To give you an idea of safari costs in Tanzania, here&apos;s a
                  sample 7-day safari package for 2 people during peak season,
                  including meals, accommodations, park fees, VAT, private
                  four-wheel vehicle, professional guide, and driver:
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Budget safari: $2791 per person</li>
                  <li>Midrange safari: $3149 per person</li>
                  <li>Luxury safari: $3584 per person</li>
                </ul>
                <p className=" mt-4">
                  Keep in mind that these prices are estimates and can vary
                  depending on the specific safari package you choose.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">
                  Extra Safari Costs
                </h3>
                <p className=" mb-4">
                  Apart from the accommodation costs, the extra costs are as
                  follows, VAT included.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    Park entry fee. The park entry fee (also known as
                    conservation fee): Serengeti ($82.6) per person per day (24
                    hours), Tarangire/ Arusha/Manyara - $59 per person per day
                    etc
                  </li>
                  <li>
                    Concession fee. This is paid when a person spends a night in
                    the lodge/permanent tented camp located within the park.
                    Serengeti ($70.8 per person per day)
                  </li>
                  <li>
                    Camp fee, this is paid when a person spends a night in a
                    camp site located with the park Serengeti, Tarangire ($35.4)
                    per person per night
                  </li>
                </ul>
                <p className=" mt-4">
                  There are other fees/charges applicable in the areas such as
                  Mountain Climbing, Wildlife Management Areas, etc.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    The fee for children is between $17.7 - 23.6 per child per
                    day The age of the child is taken as 5 years - 16 years.
                    Less than 5 years, no charges in the park. More than 16
                    years, adult. The lodges have each their own definitions of
                    a child, but a 4 year child will pay for accommodation in
                    all accommodations. A two year child will be accommodated
                    free of charge in all accommodations.For budget camping
                    safaris children will not be considered, the babies are too
                    young to sleep in simple camping tents
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">
                  Other Expenses to Consider
                </h3>
                <p className=" file: mb-4">
                  In addition to the safari package cost, there are other
                  expenses you should factor into your budget. These may
                  include:
                </p>
                <ul className="list-disc list-inside  ">
                  <li>
                    Tips for guides, transfer drivers/taxis, and hotel staff.
                  </li>
                  <li>
                    Additional expenses for drinks (alcoholic drinks may not be
                    included), visas, medical insurance, travel insurance,
                    vaccinations, and souvenirs.
                  </li>
                </ul>
                <p className="  mt-4">
                  Based on your budget, you can choose from a range of options,
                  including budget, mid-range, and luxury safari trips. Remember
                  that your budget will impact the type of accommodations, level
                  of service, and overall quality of the tour. While all tour
                  operators offer access to the same destinations and wildlife,
                  the level of comfort and additional amenities may vary.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Step 5: What to Pack on a Safari
              </h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">
                  Essential Items to Pack
                </h3>
                <p className="  mb-4">
                  Packing the right items for your safari adventure is crucial
                  to ensure comfort and preparedness. Here are some essential
                  items to pack:
                </p>
                <ul className="list-disc list-inside  ">
                  <li>Lightweight and breathable clothing in neutral colors</li>
                  <li>
                    Long-sleeved shirts and pants for sun protection and to ward
                    off mosquitoes
                  </li>
                  <li>Comfortable walking shoes or hiking boots</li>
                  <li>A hat or cap for sun protection</li>
                  <li>A lightweight waterproof jacket or poncho</li>
                  <li>A swimsuit (if your itinerary includes swimming)</li>
                  <li>Sunglasses and sunscreen with a high SPF</li>
                  <li>A reusable water bottle</li>
                  <li>A small backpack or daypack for carrying essentials</li>
                  <li>Binoculars for wildlife viewing</li>
                  <li>
                    A camera or smartphone for capturing memorable moments
                  </li>
                  <li>Power adapters and chargers for electronic devices</li>
                  <li>Insect repellent and mosquito nets</li>
                  <li>Personal medications and a basic first aid kit</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">
                  Additional Considerations
                </h3>
                <p className="  mb-4">
                  In addition to the essentials, here are some additional items
                  to consider packing for your safari:
                </p>
                <ul className="list-disc list-inside ">
                  <li>
                    Adapters for camera lenses and tripod (if you&apos;re a
                    photography enthusiast)
                  </li>
                  <li>Lightweight and quick-drying towels</li>
                  <li>
                    Extra batteries or a power bank for your electronic devices
                  </li>
                  <li>Comfortable and moisture-wicking socks</li>
                  <li>A wide-brimmed hat for added sun protection</li>
                  <li>A bandana or scarf for dust protection</li>
                  <li>
                    A journal or notebook for recording your safari experiences
                  </li>
                  <li>
                    Ziplock bags to keep your belongings organized and protected
                  </li>
                  <li>Travel-sized toiletries and personal care items</li>
                  <li>
                    A money belt or neck pouch for keeping valuables secure
                  </li>
                </ul>
                <p className=" mt-4">
                  Remember to pack light and consider any weight or size
                  restrictions imposed by airlines . Check the specific
                  requirements of your destination and consult with us for any
                  additional recommendations.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Why Safari with Lauwo Adventures?
              </h2>

              <p className=" mb-4">
                Planning a safari is a once-in-a-lifetime experience, and at
                Lauwo Adventures, we are dedicated to making it extraordinary.
                Here&apos;s why you should choose us:
              </p>

              <ul className="list-disc list-inside   mb-4">
                <li>
                  We offer custom itineraries based on your specifications,
                  ensuring that every detail of your safari is tailored to your
                  preferences and travel style.
                </li>
                <li>
                  Our experienced safari consultants will work closely with you
                  to understand your expectations and design the perfect dream
                  tour that matches your individual needs.
                </li>
                <li>
                  We have a team of knowledgeable and passionate local guides
                  who will provide you with an authentic and immersive safari
                  experience, sharing their expertise and love for the wildlife
                  and culture of Tanzania.
                </li>
                <li>
                  As a responsible travel company, we prioritize sustainable and
                  ethical practices. We support local communities, promote
                  conservation efforts, and strive to minimize the environmental
                  impact of our tours.
                </li>
                <li>
                  We understand that planning a safari can be overwhelming, but
                  we are here to assist you every step of the way. Our dedicated
                  team is ready to answer your questions, provide expert advice,
                  and ensure that your safari exceeds your expectations.
                </li>
              </ul>

              <p className="  mb-4">
                To make sure you have a memorable and exciting adventure,
                contact us today and let us help you plan the safari of a
                lifetime!
              </p>

              <div className="text-center">
                <Link
                  href="/planning-form"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Plan Your Safari Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Safari Locations To JumpStart You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md flex flex-col">
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1627394678482-833a3d8d10f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80"
                    height={500}
                    width={500}
                    alt="Arusha National Park"
                    className="w-full h-auto rounded-t-lg"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Arusha National Park
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Discover the mesmerizing beauty and wildlife treasures of
                    Arusha National Park, a true gem of Tanzania&apos;s natural
                    wonders...
                  </p>
                  <Link
                    href="/safari-locations"
                    className="text-blue-500 hover:underline"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md flex flex-col">
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1669745355012-54137cc7b011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    height={500}
                    width={500}
                    alt="Tarangire National Park"
                    className="w-full h-auto rounded-t-lg"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Tarangire National Park
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Embark on an extraordinary journey through Tarangire
                    National Park, where breathtaking landscapes and iconic
                    baobab trees create a captivating safari experience..
                  </p>
                  <Link
                    href="/safari-locations"
                    className="text-blue-500 hover:underline"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md flex flex-col">
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1534476478164-b15fec4f091c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    height={500}
                    width={500}
                    alt="Serengeti Adventure"
                    className="w-full h-auto rounded-t-lg"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Serengeti National park
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Embark on an unforgettable adventure in the vast wilderness
                    of Serengeti National Park, where the iconic Great Migration
                    and abundant wildlife offer a safari experience like no
                    other...
                  </p>
                  <Link
                    href="/safari-locations"
                    className="text-blue-500 hover:underline"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center mt-6">
              <Link
                href="/safari-packages"
                className="text-blue-500 hover:underline"
              >
                View All Safari Locations
              </Link>
            </div>
          </div>
        </div>
        <div className="py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Popular Safari Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md flex flex-col">
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1662003905953-f2aa253c48df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
                    height={500}
                    width={500}
                    alt="Serengeti Adventure"
                    className="w-full h-auto rounded-t-lg"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Dynamic Dou Safari: Serengeti & Ngongoro in 3 days
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Immerse yourself in the captivating beauty of the Serengeti
                    and Ngorongoro Crater in 3 days. Witness the awe-inspiring
                    Great Migration, encounter majestic wildlife, and explore
                    the breathtaking landscapes....
                  </p>
                  <Link
                    href="/our-safari-packages/dynamic-duo-safari-serengeti--ngorongoro-in-3-days"
                    className="text-blue-500 hover:underline"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md flex flex-col">
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1617938544737-cf7b41829226?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    height={500}
                    width={500}
                    alt="Serengeti Adventure"
                    className="w-full h-auto rounded-t-lg"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Wildlife Wonders, A 8 day adventure
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Embark on an 8-day Wildlife Wonders adventure through
                    Serengeti, Ngorongoro, and Arusha. Witness the Great
                    Migration, explore the stunning landscapes, and engage
                    in....
                  </p>
                  <Link
                    href="/our-safari-packages/wildlife-wonders-8-day-tanzanian-safari-expedition"
                    className="text-blue-500 hover:underline"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md flex flex-col">
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1534476478164-b15fec4f091c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    height={500}
                    width={500}
                    alt="Serengeti Adventure"
                    className="w-full h-auto rounded-t-lg"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Serengeti Splendors: 5-Day Wildlife Safari Adventure
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Embark on a 5-day Serengeti Splendors safari adventure,
                    immersing yourself in the captivating wildlife and
                    breathtaking landscapes. Witness the Great Migration and
                    encounter magnificent animals in their natural habitat.
                    Unforgettable....
                  </p>
                  <Link
                    href="/our-safari-packages/serengeti-splendors-5-day-wildlife-safari-adventure"
                    className="text-blue-500 hover:underline"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center mt-6">
              <Link
                href="/safari-packages"
                className="text-blue-500 hover:underline"
              >
                View All Safari Packages
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className="py-16 relative">
            <div className="flex items-center justify-center gap-4">
              <hr className="sm:w-40 w-10 border border-black" />
              <h1 className="3xl:text-4xl xl:text-2xl text-xl font-semibold">
                Frequently Asked Questions
              </h1>
              <div>
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  className="text-2xl cursor-pointer transition duration-500 ease-in-out hover:text-yellow-500"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <path d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" />
                </svg>
                {/* <BiSearch/> */}
                {isSearchOpen && (
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent border-b  px-4
            focus:outline-none focus:border-primary sm:w-72 w-40
          "
                    onChange={handleSearch}
                  />
                )}
              </div>
            </div>
            <div className="w-3/4 mx-auto mt-10">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => (
                  <FaqCard
                    key={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))
              ) : (
                <div className="text-white text-center">
                  <h1 className="text-2xl font-semibold">No FAQs found</h1>
                </div>
              )}
            </div>
          </div>
        </div>
        <SocialsButtons />
      </div>
    </>
  );
};

export default SafariPage;
export async function getStaticProps() {
  const res = await fetch(
    'https://lauwo-adventures-api.onrender.com/safari_faqs'
  );
  const faqs = await res.json();

  return {
    props: {
      faqs,
    },
  };
}
