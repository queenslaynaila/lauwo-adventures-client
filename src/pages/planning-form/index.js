import PlanForm from '@/components/PlanForm';
import Head from 'next/head';
export default function planningform() {
  return (
    <div className="font-poly">
       <Head>
        <title>Planning Form</title>
        <meta name="description" content= "customize trip for everyone" />
        <meta property="og:title" content="planning form" />
        <meta property="og:description" content="We will customize a trip for you" />
        <meta name="twitter:title" content="planning form" />
      </Head>
      <header className="w-full h-48 lg:h-96  bg-[url('/safari.jpg')] bg-cover bg-center flex justify-center items-center"></header>
      <div className=" w-full bg-sand">
        <h1 className="text-black p-5  text-center text-lg lg:text-4xl">
          Our Team will customize a trip for you
        </h1>
        <PlanForm />
      </div>
    </div>
  );
}
