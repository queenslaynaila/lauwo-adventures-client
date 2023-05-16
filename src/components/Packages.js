import React from 'react';

export default function Packages({ exclusive, inclusive ,price}) {
  const inclusiveItems = inclusive.split(',');
  const exclusiveItems = exclusive.split(',');

  return (
    <div>
      <div className="bg-white py-4 text-center text-3xl font-bold uppercase mt-2">
        {price} PACKAGE
      </div>
      <div className="lg:flex lg:justify-center mt-6 mx-6">
        <div className="lg:w-1/2 text-lg">
          <h2 className="font-bold mb-2">Price Includes:</h2>
          <ul className="list-disc list-inside ">
            {inclusiveItems.map((item, index) => (
              <li key={index}>{item.trim()}</li>
            ))}
          </ul>
        </div>
        <div className="lg:w-1/2 text-lg mt-4 lg:mt-0">
          <h2 className="font-bold mb-2">Price Excludes:</h2>
          <ul className="list-disc list-inside">
            {exclusiveItems.map((item, index) => (
              <li key={index}>{item.trim()}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
