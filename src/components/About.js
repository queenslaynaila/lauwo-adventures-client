import Head from 'next/head';
import Link from 'next/link';
function About() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(/lauwosafari.webp)` }}
      id="about"
    >
      <div className="p-5 -mt-10 md:mt-0 flex items-center justify-center h-full font-poly">
        <div className="bg-primary opacity-85 w-full md:w-10/12 rounded-xl sm:mt-0 mt-16">
          <div className="flex justify-center overflow-x-scroll mt-6 md:overflow-x-hidden">
            <hr className="h-px m-2 w-1/4 md:w-1/3 bg-black border-0 dark:bg-gray-700 " />

            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="3em"
              width="3em"
            >
              <path d="M19.447 5.345A3.27 3.27 0 0016.29 3a3.293 3.293 0 00-3.277 3h-2.025a3.297 3.297 0 00-3.284-3 3.268 3.268 0 00-3.151 2.345l-2.511 8.368A1.027 1.027 0 002 14v1a5.006 5.006 0 005.001 5 5.003 5.003 0 004.576-3h.846a5.003 5.003 0 004.576 3A5.006 5.006 0 0022 14.999V14c0-.098-.015-.194-.042-.287l-2.511-8.368zM7.001 18A3.005 3.005 0 014 15c0-.076.017-.147.022-.222A2.995 2.995 0 017 12a3 3 0 013 3v.009A3.004 3.004 0 017.001 18zm9.998 0A3.004 3.004 0 0114 15.009V15a3 3 0 016-.001A3.005 3.005 0 0116.999 18z" />
            </svg>
            <hr className="h-px m-2 w-1/4 md:w-1/3 bg-black border-0 dark:bg-gray-700" />
          </div>
          <div className="px-8 py-10">
            <h2 className="text-3xl font-poly font-bold text-center">
              Who We Are ?
            </h2>
            <p className="py-5 text-base md:text-sm tracking-wide sm:leading-10 leading-8">
              Lauwo Adventures is a local tour company operating in Kilimanjaro
              originating from the mountaineer family of &apos;Yohani Kinyala
              Lauwo&apos; who was the first African guide to climb and conquer
              the summit of Mount Kilimanjaro 5895M/19341Ft &apos;AMSL&apos; in
              1889 with Hans Mayer, a German geologist. As grandsons, we are
              committed to providing excellent and safe tours infused with
              vibrant local cultural experiences to our clients with
              professional and competent guides and porters.
              <br />
              <br />
              With more than a decade&apos;s experience in the Tanzanian tourism
              industry, we take pride in our unparalleled adventures. Our
              company has a porter support program through which we select and
              employ porters from local communities located at the foot of the
              mountain and provide them with scholarships and vocational
              training. This is to help combat poverty by supporting their
              dreams and goals.
            </p>
            <div className="text-center  ">
              <Link
                href="/about-us"
                className="bg-transparent hover:bg-yellow-500 text-black font-semibold hover:text-white py-2 px-4 border border-yellow-800 hover:border-transparent rounded "
              >
                More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
