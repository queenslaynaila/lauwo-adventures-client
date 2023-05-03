import { useState, useMemo, useEffect } from 'react';

import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  usePagination,
} from 'react-table';

export default function Enquiries() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(' http://localhost:3000/inquiries')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const columns = useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Message', accessor: 'message' },
      { Header: 'Created', accessor: 'created_at' },
    ],
    []
  );

  // Define table instance with search, sort, and pagination functionalities
  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 }, // Set initial page index and page size
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,  
    
    
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    
  } = tableInstance;

  // State for search input
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="px-4 py-8 w-full ">
      <input
        type="text"
        className="border p-2 rounded-md w-2/5 "
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search by name, email or message"
      />
      <table
        {...getTableProps()}
        className="w-full  shadow-md sm:rounded-lg text-left  mt-4 "
      >
        <thead className="bg-gray-50">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  key={column.id}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={`px-3 py-3 ${
                    column.isSorted
                      ? column.isSortedDesc
                        ? 'desc'
                        : 'asc'
                      : ''
                  }`}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="divide-y divide-white">
          {page
            .filter((row) => {
              const { name, email, message } = row.values;
              const searchRegex = new RegExp(searchValue, 'i');
              return (
                searchRegex.test(name) ||
                searchRegex.test(email) ||
                searchRegex.test(message)
              );
            })
            .map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={row.id}>
                  {row.cells.map((cell) => (
                    <td className="p-3 " key={cell.id} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="inline-flex  mt-2">
        <button
          className="bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-bold py-2 px-4  "
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Prev
        </button>
        <button
          className="bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-bold py-2 px-4 "
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}
