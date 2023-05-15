import React from 'react';
import Link from 'next/link';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

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
      <div
        className="relative bg-no-repeat bg-center bg-cover flex justify-center items-center"
        style={{ backgroundImage: "url('/tanzania.jpg')" }}
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
                Things to Consider When You Visit Tanzania
              </div>
              <div className="text leading-normal text-white">
                A brief on visa requirements, how to pick an adventure choice,
                health requirements...
              </div>
            </div>
            <div className="cta clear-left px-5">
              <div className="flex">
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
        <p className="text-white lg:ml-12">
          Trusted Tour Company in Tanzania.  
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
      <h1 className="text-2xl text-center p-4">
        Things to Consider When You Visit Tanzania
      </h1>

      <div className="p-4 bg-gray-100">
        <h2 className="text-lg font-bold mb-2">Visa Requirements</h2>
        <p className="text-gray-800 leading-8">
          Most foreign nationals require a visa to enter Tanzania. Previously,
          tourists had two options to obtain a tourist visa: to get a visa upon
          arrival or apply in advance through their nation&apos;s Tanzanian
          consulate, which required sending their passport away in the mail and
          waiting for it to be returned. However, the process has now been
          simplified with the introduction of Electronic Visas for tourists.
        </p>
        <p className="text-gray-800 leading-8">
          Applying for an Electronic Visa is a straightforward step that most
          travelers need to take. The cost of a Tanzanian tourist visa is $50
          USD for most travelers, with the exception of American citizens who
          are required to pay $100 USD. It&apos;s important to note that
          citizens of some countries, such as several neighboring African
          countries, are exempt from a tourist visa and can enter Tanzania free
          of charge.
        </p>
        <p className="text-gray-800 leading-8">
          To check if your country is exempt from a tourist visa, you can refer
          to Tanzania&apos;s official visa exemption list, which can be found{' '}
          <a
            href="https://www.immigration.go.tz/index.php/countries-which-are-not-required-to-apply-for-visa"
            className="text-blue-500 underline"
          >
            here
          </a>
          .Specific countries will require referal visa.To find out if your
          country requires such check{' '}
          <a
            href="https://www.immigration.go.tz/index.php/requirements-for-visa"
            className="text-blue-500 underline"
          >
            here
          </a>{' '}
          .
        </p>
      </div>

      <div className="p-4 bg-gray-200">
        <h2 className="text-lg font-bold mb-2">
          Health Precautions and Vaccinations
        </h2>
        <p className="text-gray-800 leading-8">
          When planning a visit to Tanzania, it is important to take certain
          health precautions to ensure a safe and healthy trip. The CDC and WHO
          recommend several vaccinations for Tanzania, including hepatitis A,
          hepatitis B, typhoid, yellow fever, rabies, meningitis, polio,
          measles, mumps and rubella (MMR), Tdap (tetanus, diphtheria and
          pertussis), chickenpox, shingles, pneumonia, and influenza.
        </p>
        <p className="text-gray-800 leading-8">
          It is essential to consult with your healthcare provider or a travel
          medicine specialist well in advance of your trip to Tanzania to
          confirm which vaccinations are necessary for you. In particular,
          yellow fever vaccination is mandatory and travelers must provide proof
          of vaccination to enter Tanzania, as mandated by local authorities to
          protect the citizens from the spread of this disease.
        </p>
        <p className="text-gray-800 leading-8">
          In addition to vaccinations, it is crucial to protect yourself from
          mosquito-borne illnesses such as malaria, dengue, and chikungunya.
          Make sure to wear mosquito repellent, use bed nets, and take other
          appropriate measures to prevent mosquito bites during your stay in
          Tanzania.
        </p>
        <p className="text-gray-800 leading-8">
          It&apos;s always recommended to stay hydrated, use sunscreen, and
          avoid consuming uncooked or undercooked food to prevent foodborne
          illnesses. It&apos;s also a good idea to carry any necessary
          medications and a first aid kit with you during your trip but we will
          have one for you.
        </p>
      </div>

      <div className="p-4 bg-gray-100">
        <h2 className="text-lg font-bold mb-2">Climate & When To Visit</h2>
        <p className="text-gray-800 leading-8">
          Tanzania has a diverse climate due to its geographical location. It
          generally experiences a tropical climate, with variations across
          different regions. The country has two rainy seasons: from March to
          May, known as the long rains, and from November to December, known as
          the short rains. The dry seasons are from June to October and from
          January to February.
        </p>
        <p className="text-gray-800 leading-8">
          The peak tourist season in Tanzania is during the dry seasons when the
          weather is generally sunny and wildlife sightings are plentiful. This
          period is popular among visitors who are interested in wildlife
          safaris and trekking adventures. However, it&apos; s important to note
          that these seasons also attract more tourists, leading to higher
          prices and potentially crowded attractions.
        </p>
        <p className="text-gray-800 leading-8">
          During the rainy seasons, the landscapes in Tanzania transform with
          lush greenery and fewer tourists. This period can be ideal for
          birdwatching enthusiasts and those looking for a more budget-friendly
          experience. However, it&apos; s important to consider that some roads
          and remote areas may become inaccessible or challenging to navigate
          due to heavy rainfall.
        </p>
        <p className="text-gray-800 leading-8">
          When packing for your trip to Tanzania, it&apos; s recommended to
          bring lightweight and breathable clothing for the hot and humid
          climate. Pack comfortable walking shoes, a wide-brimmed hat, and
          sunglasses to protect yourself from the sun. Additionally, it&apos; s
          advisable to pack a waterproof jacket or poncho during the rainy
          seasons.
        </p>
        <p className="text-gray-800 leading-8">
          If you plan to visit higher-altitude regions like Mount Kilimanjaro or
          the Ngorongoro Conservation Area, it&apos; s important to pack warm
          clothing layers, as temperatures can drop significantly. It&apos; s
          also recommended to pack sturdy hiking boots and thermal layers if you
          plan to embark on trekking adventures.
        </p>
        <p className="text-gray-800 leading-8">
          Keep in mind that weather conditions can vary, so it&apos; s always a
          good idea to check the forecast for the specific regions you plan to
          visit and pack accordingly.
        </p>
      </div>

      <div className="p-4 bg-gray-200">
        <h2 className="text-lg font-bold mb-2">Which Adventure Suits You?</h2>
        <p className="text-gray-800 leading-8">
          At Lauwo Adventures, we offer a wide range of exciting adventures to
          cater to different interests and preferences. Whether you are an avid
          trekker, a wildlife enthusiast, or someone interested in immersing
          yourself in local culture, we have something for everyone.
        </p>
        <p className="text-gray-800 leading-8">
          Trekking: If you love the thrill of conquering new heights and
          exploring breathtaking landscapes, our trekking adventures are perfect
          for you. From climbing Mount Kilimanjaro, the highest peak in Africa,
          to hiking through lush rainforests and discovering hidden waterfalls,
          Tanzania offers an array of trekking options.
        </p>
        <p className="text-gray-800 leading-8">
          Wildlife Safaris: For wildlife enthusiasts, Tanzania is a paradise.
          With our carefully crafted wildlife safari tours, you can witness the
          iconic Big Five (elephant, lion, leopard, buffalo, and rhino) in their
          natural habitats. Explore world-renowned national parks like Serengeti
          and Ngorongoro, and be captivated by the diverse wildlife and stunning
          landscapes.
        </p>
        <p className="text-gray-800 leading-8">
          Cultural Tours: Immerse yourself in the rich cultural heritage of
          Tanzania with our cultural tours. Discover traditional Maasai
          villages, interact with local tribes, and learn about their customs
          and traditions. From vibrant markets to historical sites, these tours
          offer a glimpse into the fascinating tapestry of Tanzanian culture.
        </p>
        <p className="text-gray-800 leading-8">
          Not sure which adventure is right for you? No problem! We understand
          that choosing the perfect trip can be overwhelming. That&apos; s why
          we encourage you to reach out to us with your preferences and budget{' '}
          <a
            href="http://localhost:4000/planning-form"
            className="text-blue-500 underline"
          >
            here
          </a>
          . Our experienced safari guides will be more than happy to provide
          personalized advice and recommendations based on your interests and
          requirements.
        </p>
        <p className="text-gray-800 leading-8">
          Let us help you create an unforgettable journey tailored to your
          dreams and aspirations. Contact us today and embark on an adventure of
          a lifetime with Lauwo Adventures.
        </p>
      </div>

      <div className="p-4 bg-gray-200">
        <h2 className="text-lg font-bold mb-2">Currency and exchange</h2>
        <p className="text-gray-800 leading-8">
          The currency in Tanzania is the Tanzanian shilling, but US dollars are
          widely accepted. It is advisable to exchange some money upon arrival
          in Tanzania, and to carry cash in small denominations.
        </p>
      </div>

      <div className="p-4 bg-gray-100">
        <h2 className="text-lg font-bold mb-2">Language</h2>
        <p className="text-gray-800 leading-8">
          The official language of Tanzania is Swahili, but English is widely
          spoken in tourist areas.
        </p>
      </div>

      <div className="p-4 bg-gray-200">
        <h2 className="text-lg font-bold mb-2">Safety</h2>
        <p className="text-gray-800 leading-8">
          Tanzania is generally a safe country for tourists, but visitors should
          exercise caution and be aware of their surroundings, especially in
          crowded areas and at night. It is advisable to avoid displaying
          valuables and to keep a close eye on personal belongings.
        </p>
      </div>

      <div className="p-4 bg-gray-100">
        <h2 className="text-lg font-bold mb-2">Culture and customs</h2>
        <p className="text-gray-800 leading-8">
          When visiting Tanzania, it&apos;s important to embrace the local
          customs and traditions. Tanzanians value respect, and showing kindness
          and consideration towards others is highly appreciated. Greetings are
          an integral part of Tanzanian culture, so taking the time to greet
          people with a smile and a friendly &quot;Jambo&quot; (hello) or
          &quot;Habari&quot; (how are you) goes a long way in establishing
          positive connections.
        </p>
      </div>

      <div className="p-4 bg-gray-200">
        <h2 className="text-lg font-bold mb-2">Wildlife viewing</h2>
        <p className="text-gray-800 leading-8">
          Tanzania is famous for its wildlife, including the Serengeti National
          Park and the Ngorongoro Conservation Area. Visitors should be aware of
          the risks associated with viewing wild animals and should follow the
          guidance of experienced guides.
        </p>
      </div>
    </div>
  );
}
