import React from 'react'

export default function Packages() {
  return (
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
  )
}
