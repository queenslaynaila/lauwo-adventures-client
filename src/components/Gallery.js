import Image from 'next/image';
const Gallery = () => {
  return (
    <div className="m-4 lg:mt-0 md:mt-10 mt-20" id="gallery">
      <h1 className="text-center lg:text-3xl sm:text-lg font-bold font-poly mb-10">
        OUR GALLERY
      </h1>
      <div className="container  mx-auto">
        <div className="grid-cols-4  lg:space-y-0 grid gap-3 grid-rows-3">
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
  );
};

export default Gallery;
