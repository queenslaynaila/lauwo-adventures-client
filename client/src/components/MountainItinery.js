 

export default function MountainItinery({itinery,index}) {
  console.log(index)
  return (
    
    <div>
    
    <div class={`flex justify-center ${index % 2 === 0 ? "bg-sand" : "bg-light"}`}>
     
      <div className={`w-1/2 m-4 relative ${index % 2 !== 0 ? "order-last" : ""}`}>
        <div class="absolute top-0 left-0   w-16 h-16 text-white text-6xl font-bold">{itinery.day_no}</div>
        <div class="h-full flex items-center justify-center text-black pt-14" >
          <h1 className='text-2xl font-bold'>{itinery.title.toUpperCase()}</h1>
        </div>
      </div>
      <div className={`w-1/2 m-4 ${index % 2 !== 0 ? "" : "order-last"}`}>
      
       
        <p>{itinery.description}</p>
      </div>
    </div>
  </div>
  
  )
}
