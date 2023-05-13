import { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

const FixedBanner = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      const response = await fetch('https://lauwo-adventures-api.onrender.com/banners');
      const data = await response.json();
      setBanners(data);
    };

    fetchBanners();
  }, []);

  const handleCloseBanner = () => {
    setBanners([]);
  };

  return (
    <>
      {banners.length > 0 &&
        banners.map((banner) => (
          <div
            key={banner.id}
            className="absolute lg:top-[18%]  top-[10%] right-0 left-0  flex flex-col   w-full"
          >
            <div className="bg-yellow-400 text-white p-4 flex justify-between items-center">
              <p className="text-lg">{banner.message}</p>
              <button
                onClick={handleCloseBanner}
                className="text-white text-2xl"
              >
                <IoClose />
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default FixedBanner;
