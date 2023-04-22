import {
  GiMeal,
  GiHiking,
  GiMountainClimbing,
  GiGrassMushroom,
  GiPathDistance,
} from 'react-icons/gi';
import { FaBed } from 'react-icons/fa';

export default function MountainItinery({ itinery, index }) {
  return (
    <div>
      <div
        className={`flex justify-center ${
          index % 2 === 0 ? 'bg-sand' : 'bg-light'
        }`}
      >
        <div
          className={`w-1/2 m-4 relative ${
            index % 2 !== 0 ? 'order-last' : ''
          }`}
        >
          <div className="absolute top-0 left-0   w-16 h-16 text-white text-6xl font-bold">
            {itinery.day_no}
          </div>
          <div className="h-full flex items-center justify-center text-black pt-14">
            <h1 className="text-2xl font-bold">
              {itinery.title.toUpperCase()}
            </h1>
          </div>
        </div>
        <div className={`w-1/2 m-4 ${index % 2 !== 0 ? '' : 'order-last'}`}>
          <p>{itinery.description}</p>

          {itinery.hiking_time && (
            <p className="mb-4 flex items-center gap-3 text-sm  mt-4">
              <GiHiking className="text-xl" />
              Hiking time: {itinery.hiking_time}
            </p>
          )}
          {itinery.max_altitude && (
            <p className="mb-4 flex items-center gap-3 text-sm  mt-4">
              <GiMountainClimbing className="text-xl" />
              Max Altitude: {itinery.max_altitude}
            </p>
          )}

          {itinery.vegatation && (
            <p className="mb-4 flex items-center gap-3 text-sm  mt-4">
              <GiGrassMushroom className="text-xl" />
              Vegatation: {itinery.vegatation}
            </p>
          )}

          {itinery.meals && (
            <p className="mb-4 flex items-center gap-3 text-sm  mt-4">
              <GiMeal className="text-xl" />
              Meals: {itinery.meals}
            </p>
          )}
          {itinery.hut && (
            <p className="mb-4 flex items-center gap-3 text-sm  mt-4">
              <FaBed className="text-xl" />
              Accomodation: {itinery.accomodation}
            </p>
          )}

          {itinery.distance && (
            <p className="mb-4 flex items-center gap-3 text-sm  mt-4">
              <GiPathDistance className="text-xl" />
              Distance: {itinery.distance}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
