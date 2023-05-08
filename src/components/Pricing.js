/* eslint-disable react/jsx-key */
import React from 'react';
import { useMemo } from 'react';
import { useTable } from 'react-table';
export default function Pricing() {
  const data = [
    {
      people: '1 to 3 people',
      standardPackage: '$100',
      premiumPackage: '$150',
    },
    {
      people: '3 to 6 people',
      standardPackage: '$200',
      premiumPackage: '$300',
    },
    {
      people: '6 to 9 people',
      standardPackage: '$300',
      premiumPackage: '$450',
    },
  ];

  const columns = useMemo(
    () => [
      { Header: 'Number of People', accessor: 'people' },
      { Header: 'Cost per Person (Standard) USD', accessor: 'standardPackage' },
      { Header: 'Cost per Person (Premium) USD', accessor: 'premiumPackage' },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div>
      <div className="bg-white py-4 text-center text-3xl font-bold uppercase mt-2">
        Pricing
      </div>
      <div className="bg-sand px-8 py-12">
        {' '}
        <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map((headerGroup) => (
              // eslint-disable-next-line react/jsx-key
              <tr {...headerGroup.getHeaderGroupProps()}>
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
                <tr {...row.getRowProps()} className="border-b border-zinc-600">
                  {row.cells.map((cell) => (
                    <td
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
