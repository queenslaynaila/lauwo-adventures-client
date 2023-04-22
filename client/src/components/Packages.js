import React from 'react';

export default function Packages({ packages }) {
  const {
    standard_inclusive,
    standard_exclusive,
    premium_inclusive,
    premium_exclusive,
  } = packages;

  const standardInclusiveItems = standard_inclusive
    ? standard_inclusive.split(',')
    : [];
  const standardExclusiveItems = standard_exclusive
    ? standard_exclusive.split(',')
    : [];
  const premiumInclusiveItems = premium_inclusive
    ? premium_inclusive.split(',')
    : [];
  const premiumExclusiveItems = premium_exclusive
    ? premium_exclusive.split(',')
    : [];

  const standardInclusiveLength = standardInclusiveItems.length;
  const standardExclusiveLength = standardExclusiveItems.length;
  const premiumInclusiveLength = premiumInclusiveItems.length;
  const premiumExclusiveLength = premiumExclusiveItems.length;

  const maxRows = Math.max(
    standardInclusiveLength,
    standardExclusiveLength,
    premiumInclusiveLength,
    premiumExclusiveLength
  );

  const standardTableRows = [];
  const premiumTableRows = [];

  for (let i = 0; i < maxRows; i++) {
    let standardInclusiveItem = '';
    let standardExclusiveItem = '';
    let premiumInclusiveItem = '';
    let premiumExclusiveItem = '';

    if (i < standardInclusiveLength) {
      standardInclusiveItem = standardInclusiveItems[i].trim();
    }

    if (i < standardExclusiveLength) {
      standardExclusiveItem = standardExclusiveItems[i].trim();
    }

    if (i < premiumInclusiveLength) {
      premiumInclusiveItem = premiumInclusiveItems[i].trim();
    }

    if (i < premiumExclusiveLength) {
      premiumExclusiveItem = premiumExclusiveItems[i].trim();
    }

    standardTableRows.push(
      <tr key={i}>
        <td className="py-4 px-4 text-center table-cell capitalize">
          {standardInclusiveItem}
        </td>
        <td className="py-4 px-4 text-center table-cell capitalize">
          {standardExclusiveItem}
        </td>
      </tr>
    );

    premiumTableRows.push(
      <tr key={i}>
        <td className="py-4 px-4 text-center table-cell capitalize">
          {premiumInclusiveItem}
        </td>
        <td className="py-4 px-4 text-center table-cell capitalize">
          {premiumExclusiveItem}
        </td>
      </tr>
    );
  }

  return (
    <div>
      <div className="bg-white py-4 text-center text-3xl font-bold uppercase mt-2">
        PACKAGES
      </div>
      <div className="bg-sand px-8 py-12">
        <div className="py-2 text-center text-2xl font-bold uppercase ">
          STANDARD
        </div>
        <table className="w-full mx-auto border-collapse text-black">
          <thead>
            <tr style={{ backgroundColor: '#FFF4D2' }}>
              <th className="bg-background py-4 px-8 font-bold uppercase">
                Inclusive
              </th>
              <th className="bg-background py-4 px-8 font-bold uppercase">
                Exclusive
              </th>
            </tr>
          </thead>
          <tbody>{standardTableRows}</tbody>
        </table>
        <div className="py-2 text-center text-2xl font-bold uppercase ">
          PREMIUM
        </div>
        <table className="w-full mx-auto border-collapse text-black">
          <thead>
            <tr style={{ backgroundColor: '#FFF4D2' }}>
              <th className="bg-background py-4 px-8 font-bold uppercase">
                Inclusive
              </th>
              <th className="bg-background py-4 px-8 font-bold uppercase">
                Exclusive
              </th>
            </tr>
          </thead>
          <tbody>{premiumTableRows}</tbody>
        </table>
      </div>
    </div>
  );
}
