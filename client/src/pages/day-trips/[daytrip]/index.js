import Image from "next/image";
import Popup from "reactjs-popup";
import BookingForm from "@/components/BookingForm";
import { generateSlug } from "@/utils/generateSlug";
import { useRouter } from "next/router";
import { FaCheck, FaTimes,FaDollarSign  } from 'react-icons/fa';

export default function Trip({ trips }) {
  const router = useRouter();
  const path = router.query.daytrip;
  const trip = trips.find((trip) => generateSlug(trip.name) === path);
  console.log(trip)
  const bookableType = 'trip';
  const adventure = {
    name: `${trip.name} day trip`,
    id: trip.id,
  };
  const contentStyle = {
    width: '85%',
    maxHeight: '85%',
    overflow: 'auto',
    margin: 'auto',
  };
  return (
    <>
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/g-3.jpg)' }}
    >
      <div className="inset bg-black/80">
        <div className="border-l-2 border-black h-1/2 text-white ">
          <h3 className="lg:text-2xl xl:text-3xl 3xl:text-4xl xl font-poly capitalize text-center pt-32 pb-12 z-0">
            {trip.name} trip
          </h3>
          <div key={trip.id} className="flex relative flex-col md:flex-row mx-16 gap-4">
            <div className="mb-6">
              <Image
                src={trip.image_url}
                alt={trip.name}
                width={600}
                height={400}
                className="rounded-lg h-96 object-cover object-center"
              />
            </div>
            <div className="md:w-1/2">
              <p className="mb-4 text-lg">{trip.description}</p>
              <div className="text-center h-24">
                <Popup
                  trigger={
                    <button className="bg-yellow-500 text-white px-8 rounded-md py-4 ml-auto mb-16 hover:bg-yellow-700">
                      Book Slot
                    </button>
                  }
                  modal
                  nested
                  closeOnDocumentClick
                  contentStyle={contentStyle}
                >
                  {(close) => (
                    <div className="modal">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <BookingForm adventure={adventure} bookableType={bookableType} />
                    </div>
                  )}
                </Popup>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/day_trips');
  const trips = await res.json();
  return {
    props: {
      trips,
    },
  };
}




