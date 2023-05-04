import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';

function BookingsTable() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bookings')
      .then((response) => response.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error(error));
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Name',
        accessor: 'first_name',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Phone Number',
        accessor: 'phone_number',
      },
      {
        Header: 'Country',
        accessor: 'country',
      },
      {
        Header: 'Travel Period',
        accessor: 'travel_period',
      },
      {
        Header: 'No of Travellers',
        accessor: 'no_of_travellers',
      },
      {
        Header: 'Additional Info',
        accessor: 'additional_info',
      },
      {
        Header: 'Adults',
        accessor: 'no_of_adults',
      },
      {
        Header: 'Children',
        accessor: 'no_of_children',
      },
      {
        Header: 'Small Children',
        accessor: 'no_of_small_children',
      },
      {
        Header: 'Tour',
        accessor: 'bookable_type',
      },
      {
        Header: 'Created At',
        accessor: 'created_at',
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data: bookings });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="overflow-x-auto">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th key={column.id} {...column.getHeaderProps()}>
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
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => {
                  return (
                    <td key={cell.id} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BookingsTable;
