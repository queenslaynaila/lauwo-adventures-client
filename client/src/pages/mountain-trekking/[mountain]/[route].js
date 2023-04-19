 
import Image from 'next/image';
import { generateSlug } from '@/utils/generateSlug';
import RouteCard from '@/components/RouteCard';
const RouteSection = ({RouteData}) => {
  return (
 <div className='font-poly'>
    <RouteCard RouteData={RouteData}/>

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
 

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/mountains');
  const mountains = await res.json();

  const allPaths = mountains.flatMap((mountain) =>
    mountain.routes.flatMap((route) =>
      route.durations.map((duration) => ({
        params: {
          mountain: generateSlug(mountain.mountain_name),  
          route: generateSlug(route.route_name) + `-${duration}-days`,
        },
      }))
    )
  );
  
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  const { mountain, route } = params;
  const words = route.split('-');
  const routeName = words.slice(0, -2).join(' ');
  const duration = words.slice(-2, -1)[0];
  
  console.log(routeName); // 'machame route'
  console.log(duration); // '6'
  const res = await fetch('http://localhost:3000/mountains');
  const mountains = await res.json();

  
  // Find the mountain with the matching slug
  const mountainData = mountains.find(
    (mtn) => generateSlug(mtn.mountain_name) === mountain
  );
//Find the route 
  const RouteData = mountainData.routes.find(
    (route) =>  route.route_name.toLowerCase() === routeName
  );

  console.log(RouteData)
  return {
    props: {RouteData},
  }}