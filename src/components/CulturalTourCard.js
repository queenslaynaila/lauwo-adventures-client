import Link from 'next/link';
import { generateSlug } from '@/utils/generateSlug';
import Image from 'next/image';

function CulturalTourCard({ tour }) {
  return (
    <div className="sm:mt-10 md:mt-5 max-w-lg">
      <Link href={`/cultural-tours/${generateSlug(tour.name)}`}>
        <div className="rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              {tour.name.toUpperCase()}
            </div>
            <Image
              src="/culturalcard.jpg"
              height={600}
              width={1000}
              alt={tour.name}
              className="rounded-xl h-full"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CulturalTourCard;
