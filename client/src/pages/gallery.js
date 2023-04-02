import Image from "next/image"
const Gallery = () =>{
 return (
<div className="m-4">
   <h1 className="text-center my-4 lg:text-4xl sm:text-lg font-bold">OUR GALLERY</h1>
   <div class="container  mx-auto">
     <div className="grid-cols-4  lg:space-y-0 grid gap-3 grid-rows-3">
         <div class="w-full col-span-2 row-span-2 rounded">
            <Image src="/g-8.jpg" alt="image" width={500} height={500} className="min-w-full min-h-full object-cover"/>
         </div>
         <div class="w-full">
            <Image src="/g-5.jpg" alt="image"  width={500} height={500} className="min-w-full min-h-full object-cover"/>
         </div>
         <div class="w-full ">
            <Image  src="/g-3.jpg" alt="image"  width={500} height={500} className="min-w-full min-h-full object-cover"/>
         </div>
         <div class="w-full col-span-2 row-span-3 rounded">
            <Image src="/g-1.jpg" alt="image"  width={500} height={500} className="min-w-full min-h-full object-cover"/>
         </div>
         <div class="w-full">
            <Image src="/g-2.jpg" alt="image"  width={500} height={500} className="min-w-full min-h-full object-cover"/>
         </div>
         <div class="w-full">
            <Image src="/g-7.jpg" alt="image"  width={500} height={500} className="min-w-full min-h-full object-cover"/>
         </div>
         <div class="w-full">
            <Image src="/g-6.jpg" alt="image"  width={500} height={500} className="min-w-full min-h-full object-cover"/>
         </div>
         <div class="w-full">
            <Image src="/g-4.jpg" alt="image"  width={500} height={500} className="min-w-full min-h-full object-cover"/>
         </div>
     </div>
   </div>
</div>
    
        
        
     
   

 )
}

export default Gallery