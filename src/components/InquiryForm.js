import React, { useState } from 'react';
import Link from 'next/link';

const testimonials = [
  {
    quote:
      'I can honestly say that my decision to book our Kilimanjaro climb through Lauwo Adventures was 100% the BEST thing I have ever done!The whole experience was amazing and the professionalism of Henry Lauwo and his team was second to none Henry, who owns the company ‘Lauwo Adventures’, along with his brother Abraham are true professionals and it is clear that they absolutely love their jobs!We booked a 7 day hike With Henry and from the word go the experience was amazing. We were well looked after by Henry and the 12 porters that accompanied us on the trip, who fed and watered us extremely well. All of the equipment that they used including the tents were in great condition.Nothing was too much of an ask from any of team, all of whom were extremely friendly and kind.Unfortunately my husband suffered from altitude sickness and had to be evacuated from the mountain just before we summitted. Henry using his 20+ years experience made the excruciatingly painful, but correct call to get him off the mountain and with his team expertly stretchered Stu off to hospital in the middle of the night, overcoming the rough terrain and the long descent that lay ahead of them.Meanwhile Leo, Henry’s second in command looked after me impeccably and got me to the peak of Kilimanjaro in record time and back down to see my husband within a day, which was my decision.The accommodation that Henry booked for us either side of our climb was excellent at Lindrin Lodge and all of the transfers were excellently organised.On the Sunday after our climb Henry took us off to see one of the projects that he and his charity were working on in the village that he grew up in.Henry donates a proportion of his profits every year to the charity and it was fantastic and heart warming to see how passionate him and his brother were about making a difference to their communities lives and where our money can really help to make this happen!I can wholeheartedly recommend Henry and his company for any tours excursions or climbs in and around Kilimanjaro.You will not be disappointed!',
    author: 'Kate B',
    title: 'The Best Experience of My Life',
    rating: 5,
  },
  {
    quote:
      'We hiked the Mount Kilimanjaro last week in 6 days via the Machame Route with Lauwo Adventures. Henry and Abraham are great guides! The team (porters & stomach engineer) are very friendly. Big up for our fantastic Richard!!Everything was great and the view on top..... It was once in a lifetime experience as I even proposed to my wife on top =) We strongly recommend Lauwo Adventures!!',
    author: 'Felipe & Florence',
    title: 'Kilimanjaro Proposals',
    rating: 5,
  },
  {
    quote:
      'Abraham (Ibby) and Henry and their dream team at Lauwo couldn’t have done more for our group when we trekked and climbed Kili with them recently. It felt like one big family. They are so experienced and professional and make make every day a fun and challenging experience. The night we summited I felt 100% secure in their hands, they motivated us all the way up and checked on our health, as well as supported us the whole way down. The food over 7 days was awesome too which I didn’t expect, and the whole experience made me want to go back and do this again with Lauwo!! It was hard to put into words all the little extras they did, you won’t regret booking with this company.',
    author: 'Natalie Johstone',
    title: 'Machame Route Review',
    rating: 5,
  },
  {
    quote:
      'Trekking this majestic mountain with Lauwo adventures was one of the greatest experiences of my life. Abraham and Henry are absolutly professional guides with brilliant sense of humor and amazing team of porters who allowed us to fullfil our dream, so its hard to express how thankful we are. On top of their professionalism, they also support local community and help less fortunate ones, which just stress how wonderful people they are. It was an honor to climb with you brothers. Asante sana once again.Peter',
    author: 'Peter',
    title: 'Kilimanjaro Climb',
    rating: 5,
  },

  {
    quote:
      'Abraham (Ibby) and Henry and their dream team at Lauwo couldn’t have done more for our group when we trekked and climbed Kili with them recently. It felt like one big family. They are so experienced and professional and make make every day a fun and challenging experience. The night we summited I felt 100% secure in their hands, they motivated us all the way up and checked on our health, as well as supported us the whole way down. The food over 7 days was awesome too which I didn’t expect, and the whole experience made me want to go back and do this again with Lauwo!! It was hard to put into words all the little extras they did, you won’t regret booking with this company.',
    author: 'Natalie Johnstone',
    title: 'Machame Route Kilimanjaro Trek',
    rating: 5,
  },
];

const tripAdvisorRating = 4.8;
const tripAdvisorReviewsCount = 300;

const InquiryForm = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="testimonial-section font-poly pb-8">
      <h2 className="text-center text-3xl font-bold mb-4">
        What Our Travellers Say About Us
      </h2>
      <div className="flex items-center justify-center">
        <div className="testimonial-box bg-gray-200 p-4 mx-8">
          <p className="testimonial-quote leading-8 italic mb-4 ">
            {testimonials[activeIndex].quote}
          </p>
          <div className="testimonial-author p-8">
            {/* Rating stars */}
            <span className="testimonial-rating">
              {Array.from(
                { length: testimonials[activeIndex].rating },
                (_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 fill-current text-yellow-500 inline-block"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12.937l4.238 2.452-1.019-4.704L16 7.938l-4.701-.407L10 3l-1.299 4.531L4 7.938l2.781 2.747L5.763 15.39 10 13.937z"
                      clipRule="evenodd"
                    />
                  </svg>
                )
              )}
            </span>
            <br />
            <span className="testimonial-name">
              {testimonials[activeIndex].author}
            </span>
            <br />
            <span className="testimonial-title ">
              {testimonials[activeIndex].title}
            </span>
          </div>

          <Link
            href="https://www.tripadvisor.com/Attraction_Review-g317084-d17424491-Reviews-Lauwo_Adventures-Moshi_Kilimanjaro_Region.html"
            className="  bg-yellow-500 text-white py-2 px-4 rounded-md "
            target="_blank"
            rel="noopener noreferrer"
          >
            View More (TripAdvisor)
          </Link>
        </div>
      </div>
      {/* Testimonial controls */}
      <p className="text-gray-500 mt-2">
        These reviews are from <strong>TripAdvisor</strong>
      </p>
      <p className="text-gray-500">
        We have a TripAdvisor rating of {tripAdvisorRating.toFixed(1)} based on{' '}
        {tripAdvisorReviewsCount} reviews
      </p>
      <div className="testimonial-controls flex justify-center mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-2 ${
              index === activeIndex ? 'bg-gray-600' : 'bg-yellow-500'
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default InquiryForm;
