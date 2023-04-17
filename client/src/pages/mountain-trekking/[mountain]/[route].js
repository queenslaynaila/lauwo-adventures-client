import React from 'react';
import Image from 'next/image';
const RouteSection = () => {
  return (
 <>
    <div className='bg-sand font-poly'>
        <div className="flex items-center justify-center">
          <Image src="/peakfinder.png" alt='nnn' height={50} width={50} className='mr-2' />
          <h3 className="lg:text-2xl xl:text-3xl 3xl:text-4xl text-xl capitalize text-center text-black py-32 ">
            Lemosho Route | 8 Days 
          </h3>
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
   <div >
       <div class="flex items-center justify-center p-8">
         <Image src="/peakfinder.png" alt='nnn' height={50} width={50} className='mr-2' />
          <h3 class="text-xl capitalize text-center text-black">ITINERY</h3>
        </div>
        <p>nnnnnnnnnn</p>
   </div>
   <div>
   <div>
   <div className="bg-white py-8 text-center text-3xl font-bold uppercase mt-4">PACKAGES</div>
  <div>
  
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
        <td className="py-4 px-8 text-center table-cell">Return Transfer from accommodation to the airport</td>
        <td className="py-4 px-8 text-center table-cell">Tips for guide and porters</td>
      </tr>
      <tr>
        <td className="py-4 px-8 text-center table-cell">Transfer to the Kilimanjaro gate</td>
        <td className="py-4 px-8 text-center table-cell">Personal items (e.g. laundry, toiletries)</td>
      </tr>
      <tr>
        <td className="py-4 px-8 text-center table-cell">All National Park fees (rescue fees)</td>
        <td className="py-4 px-8 text-center table-cell">Visa fees</td>
      </tr>
    </tbody>
  </table>
</div>

</div>
   </div>
 


</div>


 </>
  
  
  );
};

export default RouteSection;
