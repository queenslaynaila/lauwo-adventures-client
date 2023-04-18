 
import Image from 'next/image';
import { generateSlug } from '@/utils/generateSlug';
const RouteSection = () => {
  return (
 <div className='font-poly'>
    <div className='bg-sand font-poly'>
      <div className="flex items-center justify-center">
           <Image src="/peakfinder.png" alt='nnn' height={50} width={50} className='mr-2' />
           <h3 className="lg:text-2xl xl:text-3xl 3xl:text-4xl text-xl capitalize text-center text-black py-32 "> Lemosho Route | 8 Days </h3>
      </div>
      <div class="flex flex-col items-center px-8 -mt-24">
        <div class="flex relative flex-col md:flex-row md:items-center mb-28">
          <div class="md:w-1/2">
              <img src="/kilimanjaro.jpg" alt="Route" class="rounded-lg mb-4 h-96 object-cover object-center" />
          </div>
          <div class="md:w-1/2 md:ml-8">
                <p class="mb-4 text-lg leading-6">Lemosho “wine route” is located on the Western side of Mount Kilimanjaro. It is a unique route for its abundance of wild animals on Mount Kilimanjaro during the dry seasons and its clear view of Shira plateau which is the first peak to be formed and currently one of the three faces of Kilimanjaro. It offers a moderately challenging hike with adequate acclimatization period before conquering the summit and is the most favored route to reach the peak with a high summit success rate.</p>
                <div class="text-center h-24">
                  <button class="mt-auto bg-yellow-400 text-black py-2 px-4 md:w-1/5">
                    Book Slot
                  </button>
                </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative">
      <div class="vl absolute  border-l-2 border-black ml-[-3px] left-1/2 " style={{height:"95%",top:"5%"}}>
      </div>
     <div class="flex justify-center bg-sand">
        <div class="w-1/2 m-4 relative">
          <div class="absolute top-0 left-0   flex items-center justify-center w-16 h-16   text-white text-6xl font-bold">01
          </div>
          <div class="h-full flex items-center justify-center text-black rounded-full">
              <h1 className='text-2xl font-bold'>Arrival and Pickup</h1>
          </div>
        </div>
        <div class="w-1/2 m-4">
          <p >We trekn across picturesque moorland meadows, making our way to the Shira 1 Camp where we'll enjoy a delicious dinner and spend the night. Along the way, we'll be treated to breathtaking views of the valleys, cathedral like structures that make up the Shira caldera and plane land of Western Kilimanjaro. As the sun sets, temperatures will drop significantly, making for a much chillier night than the previous one.</p>
        </div>
     </div>
      <div class="flex justify-center" style={{backgroundColor:"#FFF4D2"}}>
        <div class="w-1/2 m-4  ">
          <p>We trek across picturesque moorland meadows, making our way to the Shira 1 Camp where we'll enjoy a delicious dinner and spend the night. Along the way, we'll be treated to breathtaking views of the valleys, cathedral like structures that make up the Shira caldera and plane land of Western Kilimanjaro. As the sun sets, temperatures will drop significantly, making for a much chillier night than the previous one.</p>
        </div>
        <div class="w-1/2 m-4 relative">
          <div class="absolute top-0 left-0   flex items-center justify-center w-16 h-16   text-white text-6xl font-bold  ">01</div>
            <div class="h-full flex items-center justify-center text-black rounded-full">
              <h1 className='text-2xl font-bold'>Arrival and Pickup</h1>
            </div>
        </div>
      </div>
      <div class="flex justify-center bg-sand">
        <div class="w-1/2 m-4 relative">
          <div class="absolute top-0 left-0   flex items-center justify-center w-16 h-16   text-white text-6xl font-bold">01
          </div>
          <div class="h-full flex items-center justify-center text-black rounded-full">
              <h1 className='text-2xl font-bold'>Arrival and Pickup</h1>
          </div>
        </div>
        <div class="w-1/2 m-4">
          <p >We trekn across picturesque moorland meadows, making our way to the Shira 1 Camp where we'll enjoy a delicious dinner and spend the night. Along the way, we'll be treated to breathtaking views of the valleys, cathedral like structures that make up the Shira caldera and plane land of Western Kilimanjaro. As the sun sets, temperatures will drop significantly, making for a much chillier night than the previous one.</p>
        </div>
      </div>
    
    </div>

    <div>
     <div className="bg-white py-8 text-center text-3xl font-bold uppercase mt-4">PACKAGES</div>
      <div className="bg-sand px-8 py-12">
        <table className="w-full mx-auto border-collapse text-black">
            <thead>
                <tr style={{backgroundColor:"#FFF4D2"}}>
                  <th className="bg-background py-4 px-8 font-bold uppercase">Includes</th>
                  <th className="bg-background py-4 px-8 font-bold uppercase">Excludes</th>
                </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4 px-8 text-center table-cell"> <span className="list-disc"></span>Transfer from JRO Airport to the hotel</td>
              <td className="py-4 px-8 text-center table-cell">Flights</td>
            </tr>
            <tr>
              <td className="py-4 px-8 text-center table-cell"> <span className="list-disc"></span>Transfer from JRO Airport to the hotel</td>
              <td className="py-4 px-8 text-center table-cell">Flights</td>
            </tr>
            <tr>
              <td className="py-4 px-8 text-center table-cell"> <span className="list-disc"></span>Transfer from JRO Airport to the hotel</td>
              <td className="py-4 px-8 text-center table-cell">Flights</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
 </div>
  );
};

export default RouteSection;

 