import { useState, useMemo, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  usePagination,
} from 'react-table';

export default function GroupClimbs() {
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch(' https://lauwo-adventures-api.onrender.com/full_moon_reservations')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
        Cell: ({ row }) => (
          <input
            type="checkbox"
            checked={selectedRows.some(
              (banner) => banner.id === row.original.id
            )}
            onChange={(e) => {
              const checked = e.target.checked;
              setSelectedRows((selectedRows) => {
                if (checked) {
                  return [...selectedRows, row.original];
                } else {
                  return selectedRows.filter(
                    (banner) => banner.id !== row.original.id
                  );
                }
              });
            }}
          />
        ),
      },
      { Header: 'Name', accessor: 'name' },
      { Header: 'No of People', accessor: 'noofpeople' },
      { Header: 'Arrival Date', accessor: 'arrivaldate' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Extra Info', accessor: 'extrainfo' }
      
    ],
    [selectedRows]
  );

  // Define table instance with search and pagination functionalities
  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
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

  const handleDelete = () => {
    Promise.all(
      selectedRows.map((enquiry) =>
        fetch(
          `https://lauwo-adventures-api.onrender.com/full_moon_reservations/${enquiry.id}`,
          {
            method: 'DELETE',
          }
        ).then((response) => {
          if (response.ok) {
            return response.json().then(() => {
              setData(
                data.filter(
                  (enquiry) =>
                    !selectedRows.some(
                      (selectedAdmin) => selectedAdmin.id === enquiry.id
                    )
                )
              );
              setSelectedRows([]);
              notifySuccess();
            });
          } else {
            setSelectedRows([]);
            notifyError();
          }
        })
      )
    ).catch((error) => console.error(error));
  };

  const notifySuccess = () =>
    toast.success('Booking(s) deleted succesfully', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      style: {
        backgroundColor: '#FFCE3C',
        color: '#000',
      },
    });

  const notifyError = () =>
    toast.error('Failed to delete Booking(s)', {
      theme: 'colored',
    });

  return (
    <div className="px-4 py-8 w-full ">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4">Kilimanjaro Full Moon Climbs</h1>

      <input
        type="text"
        className="border p-2 rounded-md w-2/5 "
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search by name, email or message"
      />
      <p className="text-sm mt-2">
        The following users have expressed interest in going for a full moon climb with lauwo.Follow up with them.{' '}
      </p>
      <div className="overflow-x-auto">
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
                      <td
                        className="p-3 "
                        key={cell.id}
                        {...cell.getCellProps()}
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
        <button
          className={`px-4 py-2  ${
            selectedRows.length > 0 ? 'bg-red-500' : 'bg-yellow-300'
          } text-gray-800 `}
          disabled={selectedRows.length === 0}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
