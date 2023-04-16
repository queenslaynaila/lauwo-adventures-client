import Image from "next/image";
import { generateSlug } from "@/utils/generateSlug";

const Safari = ({safari}) => {
  return (
    <div className="flex flex-col items-center">
      {safari.safari_itineries.map((itinerary, index) => (
        <div
          key={itinerary.id}
          className={`flex flex-col md:flex-row ${
            index % 2 === 0 ? "" : "md:flex-row-reverse"
          } md:items-center mb-12`}
        >
          <div className="md:w-1/2 md:mr-8">
            <Image
              src={itinerary.image_url}
              alt={itinerary.title}
              width={600}
              height={400}
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-2">{itinerary.title}</h3>
            <p className="mb-4">{itinerary.description}</p>
            <p className="mb-4">{itinerary.mealplan}</p>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Safari;


export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/safaris');
  const safaris = await res.json();
  const paths = safaris.map((safari) => ({
    params: { safari: generateSlug(safari.name) ,id: safari.id},
  }));
  return { paths, fallback: false };

}

export async function getStaticProps({ params}) {
  const res = await fetch('http://localhost:3000/safaris');
  const safaris = await res.json();
  const safari = safaris.find((safari) => generateSlug(safari.name) === params.safari);
  return {
    props: { safari },
  };
}
