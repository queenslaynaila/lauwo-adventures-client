import React from 'react';
import SocialsButtons from '@/components/SocialsButtons';

export default function Mountain() {
  return (
    <div className="font-poly">
      <header
        className="h-[50vh] lg:h-[60vh] bg-cover bg-image bg-center bg-no-repeat flex items-center justify-center bg-gray-400 bg-blend-multiply"
        style={{
          backgroundImage: `url(kilimanjaro.webp)`,
        }}
      >
        <div className="relative container p-4 mt-16">
          <div className="py-10 px-5 my-5 text-center">
            <div className="border-t-2 border-b-2 border-white my-3 pb-4 pt-2 md:text-4xl text-white text-4xl font-bold leading-[50px] mx-auto max-w-2xl uppercase">
              OUR MOUNTAIN CLIMBING PRICES
            </div>
          </div>
        </div>
      </header>
      <div
        className="  border-solid border-t-5 border-ad884a"
        style={{ borderTop: '5px solid #ad884a' }}
      ></div>
      <div className="py-5 px-5 my-5 text-center">
        <div className="border-t-2 border-b-2 border-white my-3 pb-4 pt-2 md:text-4xl text-black text-4xl font-bold leading-[50px] mx-auto max-w-2xl uppercase">
          CLIMBING TRIPS
        </div>
        <div className="text leading-normal text-black mx-auto max-w-2xl flex flex-col lg:flex-row md:flex-row justify-between gap-11">
          <p>
            Climb with Lauwo Adventures, a trusted local trekking tour operator.
            We offer hikes on Kilimanjaro and Meru ranging 5 to 9 days.
          </p>
          <p>
            Lauwo Adventures&apos;s team of experts will support you every
            moment of your hike to the summit. We offer the best treks at
            affordable prices and cost. Join hundreds of climbers who climb Mt.
            Kilimanjaro every year guided by our professional local mountain
            expert team. We are a premier Kilimanjaro company specializing in
            Kilimanjaro trips and Tanzania Safaris.
          </p>
        </div>
      </div>
      <div
        className="  border-solid border-t-5 border-ad884a"
        style={{ borderTop: '5px solid #ad884a' }}
      ></div>
      <div className="py-5 px-5 my-5 text-center">
        <div
          className="border-t-2 border-b-2 border-black my-3 pb-4 pt-2  text-black text-2xl font-bold leading-[50px]
         mx-auto max-w-2xl uppercase"
        >
          KILIMANJARO AND MERU STANDARD CLIMB PRICES
        </div>
        <div className="w-full overflow-x-auto">
          <table
            className="min-w-full  "
            style={{ backgroundColor: '#ad884a' }}
          >
            <thead>
              <tr>
                <th className="px-6 py-3 text-left">Route Name</th>
                <th className="px-6 py-3 text-left">Days on the Mountain</th>
                <th className="px-6 py-3 text-left ">Group Size 1-3 persons</th>
                <th className="px-6 py-3 text-left ">Group Size 3-6 persons</th>
                <th className="px-6 py-3 text-left ">
                  Group Size 6-10 persons
                </th>
              </tr>
            </thead>
            <tbody className="text-black">
              <tr>
                <td className="px-6 py-4">Machame Route</td>
                <td className="px-6 py-4">6 Days</td>
                <td className="px-6 py-4">$1850 PP</td>
                <td className="px-6 py-4">$1750 PP</td>
                <td className="px-6 py-4">$1650 PP</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Machame Route</td>
                <td className="px-6 py-4">7 Days</td>
                <td className="px-6 py-4">$1900 PP</td>
                <td className="px-6 py-4">$1850 PP</td>
                <td className="px-6 py-4">$1750 PP</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Lemosho Route</td>
                <td className="px-6 py-4">7 Days</td>
                <td className="px-6 py-4">$1950 PP</td>
                <td className="px-6 py-4">$1850 PP</td>
                <td className="px-6 py-4">$1750 PP</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Lemosho Route</td>
                <td className="px-6 py-4">8 Days</td>
                <td className="px-6 py-4">$2150 PP</td>
                <td className="px-6 py-4">$1950 PP</td>
                <td className="px-6 py-4">$1850 PP</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Northern Circuit</td>
                <td className="px-6 py-4">9 Days</td>
                <td className="px-6 py-4">$2650 PP</td>
                <td className="px-6 py-4">$2550 PP</td>
                <td className="px-6 py-4">$2350 PP</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Shira Londos Route</td>
                <td className="px-6 py-4">7 Days</td>
                <td className="px-6 py-4">$2000 PP</td>
                <td className="px-6 py-4">$1900 PP</td>
                <td className="px-6 py-4">$1800 PP</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Rongai Route</td>
                <td className="px-6 py-4">6 Days</td>
                <td className="px-6 py-4">$1850 PP</td>
                <td className="px-6 py-4">$1750 PP</td>
                <td className="px-6 py-4">$1650 PP</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Rongai Route</td>
                <td className="px-6 py-4">7 Days</td>
                <td className="px-6 py-4">$1950 PP</td>
                <td className="px-6 py-4">$1850 PP</td>
                <td className="px-6 py-4">$1750 PP</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Marangu Route</td>
                <td className="px-6 py-4">9 Days</td>
                <td className="px-6 py-4">$2650 PP</td>
                <td className="px-6 py-4">$2550 PP</td>
                <td className="px-6 py-4">$2350 PP</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Marangu Route</td>
                <td className="px-6 py-4">6 Days</td>
                <td className="px-6 py-4">$1650 PP</td>
                <td className="px-6 py-4">$1550 PP</td>
                <td className="px-6 py-4">$1450 PP</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Meru Climb</td>
                <td className="px-6 py-4">4 Days</td>
                <td className="px-6 py-4">$950 PP</td>
                <td className="px-6 py-4">$850 PP</td>
                <td className="px-6 py-4">$750 PP</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Meru Climb</td>
                <td className="px-6 py-4">3 Days</td>
                <td className="px-6 py-4">$850 PP</td>
                <td className="px-6 py-4">$750 PP</td>
                <td className="px-6 py-4">$650 PP</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="py-5 px-5 my-5 text-center">
        <div
          className="border-t-2 border-b-2 border-black my-3 pb-4 pt-2  text-black text-2xl font-bold leading-[50px]
         mx-auto max-w-2xl uppercase"
        >
          KILIMANJARO AND MERU PREMIUM CLIMB PRICES
        </div>
        <div className="w-full overflow-x-auto">
          <table
            className="min-w-full  "
            style={{ backgroundColor: '#ad884a' }}
          >
            <thead>
              <tr>
                <th className="px-6 py-3 text-left">Route Name</th>
                <th className="px-6 py-3 text-left">Days on the Mountain</th>
                <th className="px-6 py-3 text-left ">Group Size 1-3 persons</th>
                <th className="px-6 py-3 text-left ">Group Size 3-6 persons</th>
                <th className="px-6 py-3 text-left ">
                  Group Size 6-10 persons
                </th>
              </tr>
            </thead>
            <tbody className="text-black">
              <tr>
                <td className="px-6 py-4">Machame Route</td>
                <td className="px-6 py-4">6 Days</td>
                <td className="px-6 py-4">$2700 PP</td>
                <td className="px-6 py-4">$2600 PP</td>
                <td className="px-6 py-4">$2500 PP</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Machame Route</td>
                <td className="px-6 py-4">7 Days</td>
                <td className="px-6 py-4">$3000 PP</td>
                <td className="px-6 py-4">$2870 PP</td>
                <td className="px-6 py-4">$2750 PP</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Lemosho Route</td>
                <td className="px-6 py-4">7 Days</td>
                <td className="px-6 py-4">$3150 PP</td>
                <td className="px-6 py-4">$1850 PP</td>
                <td className="px-6 py-4">$1750 PP</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Lemosho Route</td>
                <td className="px-6 py-4">8 Days</td>
                <td className="px-6 py-4">$3360 PP</td>
                <td className="px-6 py-4">$3240 PP</td>
                <td className="px-6 py-4">$3150 PP</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Northern Circuit</td>
                <td className="px-6 py-4">9 Days</td>
                <td className="px-6 py-4">$3800 PP</td>
                <td className="px-6 py-4">$3650 PP</td>
                <td className="px-6 py-4">$3550 PP</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Shira Londos Route</td>
                <td className="px-6 py-4">7 Days</td>
                <td className="px-6 py-4">$3100 PP</td>
                <td className="px-6 py-4">$3000 PP</td>
                <td className="px-6 py-4">$2850 PP</td>
              </tr>

              <tr>
                <td className="px-6 py-4">Rongai Route</td>
                <td className="px-6 py-4">6 Days</td>
                <td className="px-6 py-4">$3000 PP</td>
                <td className="px-6 py-4">$2900 PP</td>
                <td className="px-6 py-4">$2800 PP</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Rongai Route</td>
                <td className="px-6 py-4">7 Days</td>
                <td className="px-6 py-4">$3100 PP</td>
                <td className="px-6 py-4">$3000 PP</td>
                <td className="px-6 py-4">$2900 PP</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Marangu Route</td>
                <td className="px-6 py-4">6 Days</td>
                <td className="px-6 py-4">$2750 PP</td>
                <td className="px-6 py-4">$2650 PP</td>
                <td className="px-6 py-4">$2500 PP</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Meru Climb</td>
                <td className="px-6 py-4">4 Days</td>
                <td className="px-6 py-4">$1800 PP</td>
                <td className="px-6 py-4">$1650 PP</td>
                <td className="px-6 py-4">$1500 PP</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Meru Climb</td>
                <td className="px-6 py-4">3 Days</td>
                <td className="px-6 py-4">$1650 PP</td>
                <td className="px-6 py-4">$1550 PP</td>
                <td className="px-6 py-4">$1550 PP</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <SocialsButtons />
    </div>
  );
}
