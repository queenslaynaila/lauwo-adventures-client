import PlanForm from '@/components/PlanForm';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Head from 'next/head';
import EnquiryPopUp from '@/components/enquirypopup';
import Link from 'next/link';
export default function planningform() {
  const contentStyle = {
    width: '85%',
    maxHeight: '85%',
    overflow: 'auto',
    margin: 'auto',
  };
  return (
    <div className="font-poly">
      <Head>
        <title>Planning Form</title>
        <meta name="description" content="customize trip for everyone" />
        <meta property="og:title" content="planning form" />
        <meta
          property="og:description"
          content="We will customize a trip for you"
        />
        <meta name="twitter:title" content="planning form" />
      </Head>
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
            <div className="float-left py-10 px-5 my-5 ">
              <div className="heading mb-3 text-2xl md:text-4xl text-white">
                Tailor Your Tanzania Adventure
              </div>
              <div className="text leading-normal text-white">
                Tell us about your budget , time prefernces , likes and dislikes
                and we will customize a free travel prposal for you.
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
      <div className=" w-full ">
        <h1 className="text-black p-5  text-center text-lg lg:text-4xl">
          Our Team will customize a trip for you
        </h1>
        <PlanForm />
      </div>
    </div>
  );
}
