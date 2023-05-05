import Link from 'next/link';
import { generateSlug } from '@/utils/generateSlug';
import Image from 'next/image';
export default function DayTripCard({ day }) {
  return (
    <div>
      <Link href={`/day-trips/${generateSlug(day.name)}`}>
        <div className="relative card overflow-hidden rounded-lg shadow-md hover:shadow-lg transform transition-transform hover:-translate-y-1 cursor-pointer h-80">
          <Image
            src={day.image_url}
            className="card__image w-full h-full object-cover"
            height={500}
            width={500}
            alt={day.name}
          />
          <div className="absolute inset-0 flex items-center justify-center text-left">
            <div className="text-white p-4">
              <h3 className="text-2xl font-bold mt-4">{day.name}</h3>
              <div className="absolute bottom-0 left-0 px-2 bg-yellow-300">
                <div className="text-lg font-medium text-black">From {day.price}</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
