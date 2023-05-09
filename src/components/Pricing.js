import React, { useMemo } from 'react';
import { useTable } from 'react-table';

export default function Pricing({ routeDuration }) {
  const data = useMemo(
    () => [
      {
        people: '1 to 3 people',
        standardPackage: `$${routeDuration.one_three_price}`,
        premiumPackage: `$${routeDuration.one_three_price_premium}`,
      },
      {
        people: '3 to 6 people',
        standardPackage: `$${routeDuration.three_six_price}`,
        premiumPackage: `$${routeDuration.three_six_price_premium}`,
      },
      {
        people: '6 to 9 people',
        standardPackage: `$${routeDuration.six_ten_price}`,
        premiumPackage: `$${routeDuration.six_ten_price_premium}`,
      },
    ],
    [routeDuration]
  );

  const columns = useMemo(
    () => [
      { Header: 'Number of People', accessor: 'people' },
      { Header: 'Cost per Person (Standard) USD', accessor: 'standardPackage' },
      { Header: 'Cost per Person (Premium) USD', accessor: 'premiumPackage' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div>
      <div className="bg-white py-4 text-center text-3xl font-bold uppercase mt-2" id='pricing'>
        Pricing
      </div>
      <div className="bg-sand px-8 py-12">
        <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map((column) => (
                  <th
                    key={column}
                    {...column.getHeaderProps()}
                    className="p-2 text-left"
                    style={{ backgroundColor: '#FFF4D2' }}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr key={row.id}
                  {...row.getRowProps()}
                  className="border-b border-zinc-600"
                >
                  {row.cells.map((cell) => (
                    <td key={cell.id}
                      {...cell.getCellProps()}
                      className="py-2 px-4 whitespace-nowrap"
                    >
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
