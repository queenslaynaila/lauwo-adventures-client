
import { GiBinoculars } from 'react-icons/gi';

function About() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(/lauwosafari.jpg)` }} id="about">
        <div className="p-5 z-30 -mt-10 md:mt-0 flex items-center justify-center h-full">
          <div className="bg-yellow-800 opacity-90 w-full md:w-10/12 rounded-xl sm:mt-0 mt-16">
            <div className="flex justify-center overflow-x-scroll  mt-6 md:overflow-x-hidden  ">
              <hr className="h-px m-2 w-1/4 md:w-1/3 bg-gray-200 border-0 dark:bg-gray-700" />
               <GiBinoculars  className='w-8 h-8 md:w-10 md:h-10 text-white'/>
              <hr className="h-px m-2 w-1/4 md:w-1/3 bg-gray-200 border-0 dark:bg-gray-700" />
            </div>
            <div className="px-8 py-10">
              <h2 className="text-3xl text-white font-poly font-bold text-center">About Us</h2>
              <p className="text-white py-5 text-base md:text-sm tracking-wide sm:leading-10 leading-8">
                Lauwo Adventures is a local tour company operating in Kilimanjaro originating from the mountaineer family of &apos;Yohani Kinyala Lauwo&apos; who was the first African guide to climb and conquer the summit of Mount Kilimanjaro 5895M/19341Ft &apos;AMSL&apos; in 1889 with Hans Mayer, a German geologist. As grandsons, we are committed to providing excellent and safe tours infused with vibrant local cultural experiences to our clients with professional and competent guides and porters.
                <br />
                <br />
                With more than a decade&apos;s experience in the Tanzanian tourism industry, we take pride in our unparalleled services. Our company has a porter support program through which we select and employ porters from local communities located at the foot of the mountain and provide them with scholarships and vocational training. This is to help combat poverty by supporting their dreams and goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
