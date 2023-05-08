import Image from 'next/image';
const Gallery = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/background.jpg)' }}
    >
      <div className="inset bg-black/90">
        <h1 className="text-center lg:text-3xl sm:text-lg font-bold font-poly mb-10 text-white pt-32">
          OUR GALLERY
        </h1>
        <div className="container  mx-auto">
          <div className="grid-cols-4  lg:space-y-0 grid gap-3 grid-rows-3 pb-10">
            <div className="w-full col-span-2 row-span-2 rounded">
              <Image
                src="/kilimanjaropeak.jpg"
                alt="image"
                width={500}
                height={500}
                className="min-w-full min-h-full object-cover"
              />
            </div>
            <div className="w-full">
              <Image
                src="/lauwo1.JPG"
                alt="image"
                width={500}
                height={500}
                className="min-w-full min-h-full object-cover"
              />
            </div>
            <div className="w-full ">
              <Image
                src="/mountainte.jpg"
                alt="image"
                width={500}
                height={500}
                className="min-w-full min-h-full object-cover"
              />
            </div>
            <div className="w-full col-span-2 row-span-2 rounded">
              <Image
                src="/trekkingbreakfast.JPG"
                alt="image"
                width={500}
                height={500}
                className="min-w-full min-h-full object-cover"
              />
            </div>
            <div className="w-full">
              <Image
                src="/lauwohike.jpeg"
                alt="image"
                width={500}
                height={500}
                className="min-w-full min-h-full object-cover"
              />
            </div>
            <div className="w-full ">
              <Image
                src="/lauwoteam.jpeg"
                alt="image"
                width={500}
                height={500}
                className="min-w-full min-h-full object-cover"
              />
            </div>
            <div className="w-full col-span-2 row-span-2 rounded">
              <Image
                src="/kilimanjarosunset.jpg"
                alt="image"
                width={500}
                height={500}
                className="min-w-full min-h-full object-cover"
              />
            </div>
            <div className="w-full">
              <Image
                src="/lemoshoclimb.jpg"
                alt="image"
                width={500}
                height={500}
                className="min-w-full min-h-full object-cover"
              />
            </div>
            <div className="w-full ">
              <Image
                src="/hikers.jpeg"
                alt="image"
                width={500}
                height={500}
                className="min-w-full min-h-full object-cover"
              />
            </div>
            <div className="w-full col-span-2 row-span-2 rounded">
              <Image
                src="/lauwotourbus.jpg"
                alt="image"
                width={500}
                height={500}
                className="min-w-full min-h-full object-cover"
              />
            </div>
            <div className="w-full">
              <Image
                src="/lauwoclimbers.jpg"
                alt="image"
                width={500}
                height={500}
                className="min-w-full min-h-full object-cover"
              />
            </div>
            <div className="w-full ">
              <Image
                src="/kilimanjarofullmoon.jpg"
                alt="image"
                width={500}
                height={500}
                className="min-w-full min-h-full object-cover"
              />
            </div>
            <div className="w-full col-span-2 row-span-2 rounded">
              <Image
                src="/womenkilimanjaro.jpg"
                alt="image"
                width={500}
                height={500}
                className="min-w-full min-h-full object-cover"
              />
            </div>
            <div className="w-full">
              <Image
                src="/fullmoonclimb.jpg"
                alt="image"
                width={500}
                height={500}
                className="min-w-full min-h-full object-cover"
              />
            </div>
            <div className="w-full ">
              <Image
                src="/uhurupeak.jpg"
                alt="image"
                width={500}
                height={500}
                className="min-w-full min-h-full object-cover"
              />
            </div>
            <div className="w-full col-span-2 row-span-2 rounded">
              <Image
                src="/g-8.jpg"
                alt="image"
                width={500}
                height={500}
                className="min-w-full min-h-full object-cover"
              />
            </div>
            <div className="w-full">
              <Image
                src="/g-5.jpg"
                alt="image"
                width={500}
                height={500}
                className="min-w-full min-h-full object-cover"
              />
            </div>
            <div className="w-full ">
              <Image
                src="/g-3.jpg"
                alt="image"
                width={500}
                height={500}
                className="min-w-full min-h-full object-cover"
              />
            </div>
            <div className="w-full col-span-2 row-span-3 rounded">
              <Image
                src="/g-1.jpg"
                alt="image"
                width={500}
                height={500}
                className="min-w-full min-h-full object-cover"
              />
            </div>
            <div className="w-full">
              <Image
                src="/g-2.jpg"
                alt="image"
                width={500}
                height={500}
                className="min-w-full min-h-full object-cover"
              />
            </div>
            <div className="w-full">
              <Image
                src="/g-7.jpg"
                alt="image"
                width={500}
                height={500}
                className="min-w-full min-h-full object-cover"
              />
            </div>
            <div className="w-full">
              <Image
                src="/g-6.jpg"
                alt="image"
                width={500}
                height={500}
                className="min-w-full min-h-full object-cover"
              />
            </div>
            <div className="w-full">
              <Image
                src="/g-4.jpg"
                alt="image"
                width={500}
                height={500}
                className="min-w-full min-h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
