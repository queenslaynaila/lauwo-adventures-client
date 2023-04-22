import Link from 'next/link';
export default function Zanzibar() {
  return (
    <div className='font-poly' >
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center relative px-4">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30"
            style={{ backgroundImage: 'url("/g-3.jpg")' }}>
        </div>
        <h1 className="text-5xl md:text-7xl text-white font-bold mb-8 z-0">Coming Soon</h1>
        <p className="text-white text-xl md:text-2xl">
            We&apos;re working hard to bring you the ultimate Zanzibar experience. Stay tuned!
        </p>
        
      </div>
    </div>
  )
}
