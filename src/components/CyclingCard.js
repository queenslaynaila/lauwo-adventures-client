import Link from 'next/link';
import { generateSlug } from '@/utils/generateSlug';
import Image from 'next/image';

function CyclingCard({ tour }) {
  console.log(tour);
  return (
    <div>
      <Link href={`/cycling-tours/${generateSlug(tour.name)}  `}>
        <div className="relative card overflow-hidden rounded-lg shadow-md hover:shadow-lg transform transition-transform hover:-translate-y-1 cursor-pointer h-80">
          <Image
            src={tour.imageUrl}
            className="card__image w-full h-full object-cover"
            height={500}
            width={500}
            alt={tour.name}
          />

          <div className="absolute inset-0 flex  items-center justify-center  text-left">
            <div className="text-white p-4">
              <h3 className="text-2xl font-bold mt-4 capitalize">
                {tour.name}
              </h3>
              {/* <div className="absolute bottom-0 left-0 px-2 bg-yellow-300">
                <div className="text-lg font-medium text-black">From $130</div>
              </div> */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CyclingCard;
