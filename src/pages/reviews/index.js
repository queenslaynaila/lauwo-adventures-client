import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Link from 'next/link';
import SocialsButtons from '@/components/SocialsButtons';
import ReviewModal from '@/components/ReviewModal';
const contentStyle = {
  width: '85%',
  maxHeight: '85%',
  overflow: 'auto',
  margin: 'auto',
};
console.log(contentStyle);
const reviews = [
  {
    tagline: 'Experience of a lifetime with Lauwo Adventures',
    name: 'Natalie Johnstone',
    content:
      'Abraham (Ibby) and Henry and their dream team at Lauwo couldn’t have done more for our group when we trekked and climbed Kili with them recently. It felt like one big family. They are so experienced and professional and make make every day a fun and challenging experience. The night we summited I felt 100% secure in their hands, they motivated us all the way up and checked on our health, as well as supported us the whole way down. The food over 7 days was awesome too which I didn’t expect, and the whole experience made me want to go back and do this again with Lauwo!! It was hard to put into words all the little extras they did, you won’t regret booking with this company.',
    rating: 5,
  },
  {
    tagline: 'Amazing unforgetable experience with lauwo adventures',
    name: 'Peter Y',
    content:
      'Trekking this majestic mountain with Lauwo adventures was one of the greatest experiences of my life. Abraham and Henry are absolutly professional guides with brilliant sense of humor and amazing team of porters who allowed us to fullfil our dream, so it"s hard to express how thankful we are. On top of their professionalism, they also support local community and help less fortunate ones, which just stress how wonderful people they are. It was an honor to climb with you brothers. Asante sana once again.',
    rating: 4,
  },
  {
    tagline: 'The Best Experience of my life',
    name: 'Kate B',
    content:
      'I can honestly say that my decision to book our Kilimanjaro climb through Lauwo Adventures was 100% the BEST thing I have ever done!The whole experience was amazing and the professionalism of Henry Lauwo and his team was second to none!Henry, who owns the company ‘Lauwo Adventures’, along with his brother Abraham are true professionals and it is clear that they absolutely love their jobs!We booked a 7 day hike With Henry and from the word go the experience was amazing. We were well looked after by Henry and the 12 porters that accompanied us on the trip, who fed and watered us extremely well. All of the equipment that they used including the tents were in great condition Nothing was too much of an ask from any of team, all of whom were extremely friendly and kind.Unfortunately my husband suffered from altitude sickness and had to be evacuated from the mountain just before we summitted. Henry using his 20+ years experience made the excruciatingly painful, but correct call to get him off the mountain and with his team expertly stretchered Stu off to hospital in the middle of the night, overcoming the rough terrain and the long descent that lay ahead of them.Meanwhile Leo, Henry’s second in command looked after me impeccably and got me to the peak of Kilimanjaro in record time and back down to see my husband within a day, which was my decisionThe accommodation that Henry booked for us either side of our climb was excellent at Lindrin Lodge and all of the transfers were excellently organised.On the Sunday after our climb Henry took us off to see one of the projects that he and his charity were working on in the village that he grew up in Henry donates a proportion of his profits every year to the charity and it was fantastic and heart warming to see how passionate him and his brother were about making a difference to their communities lives and where our money can really help to make this happen I can wholeheartedly recommend Henry and his company for any tours excursions or climbs in and around Kilimanjaro.You will not be disappointed!',
    rating: 5,
  },
];
const ReviewCard = ({ tagline, name, content, rating }) => {
  const MAX_WORDS = 20;
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  console.log(togglePopup);
  const truncatedContent = content.split(' ').slice(0, MAX_WORDS).join(' ');
  const isContentTruncated = content.split(' ').length > MAX_WORDS;

  return (
    <div className="review-card border border-gray-100 rounded p-6 font-poly ">
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 15.858l5.958 3.069-1.141-6.647L20 7.715l-6.638-.963L10 0 6.638 6.752 0 7.715l6.183 5.565L4.042 18.928 10 15.858z"
              clipRule="evenodd"
            />
          </svg>
        ))}
      </div>
      <h2 className="text-lg font-bold mb-4 text-white">{tagline}</h2>
      <div>
        <p className="text-white mb-4 ">{truncatedContent}...</p>
        {isContentTruncated ? (
          <Popup
            contentStyle={contentStyle}
            trigger={
              <button className="text-white  bg-yellow-500 hover:bg-yellow-800 hover:text-white rounded-md px-4 py-2">
                Read More
              </button>
            }
            modal
            closeOnDocumentClick
          >
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <ReviewModal
                  tagline={tagline}
                  name={name}
                  content={content}
                  rating={rating}
                />
              </div>
            )}
          </Popup>
        ) : null}
      </div>
      <p className="text-white pt-2">Reviewed by {name}</p>
    </div>
  );
};

const Gallery = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/background.webp)' }}
    >
      <div className="inset bg-black/50">
        <h1 className="text-center lg:text-3xl sm:text-lg font-bold font-poly mb-10 text-white pt-28">
          Reviews of Lauwo Adventures
        </h1>
        <div className="container mx-auto px-4  pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                tagline={review.tagline}
                name={review.name}
                content={review.content}
                rating={review.rating}
              />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link
              href="https://www.tripadvisor.com/Attraction_Review-g317084-d17424491-Reviews-Lauwo_Adventures-Moshi_Kilimanjaro_Region.html"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-white px-6 py-3 rounded font-medium font-poly"
            >
              View All Reviews on TripAdvisor
            </Link>
          </div>
        </div>
      </div>
      <SocialsButtons />
    </div>
  );
};

export default Gallery;
