import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import BannerForm from './BannerForm';
const Promotions = () => {
  const [banners, setBanners] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const contentStyle = {
    width: '85%',
    maxHeight: '85%',
    overflow: 'auto',
    margin: 'auto',
  };
  useEffect(() => {
    fetch('http://localhost:3000/banners')
      .then((response) => response.json())
      .then((data) => setBanners(data))
      .catch((error) => console.error(error));
  }, []);

  const data = React.useMemo(() => banners, [banners]);

  const columns = React.useMemo(
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
      {
        Header: 'Data Category',
        accessor: 'data_category',
      },
      {
        Header: 'Message',
        accessor: 'message',
      },
    ],
    [selectedRows]
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  const handleDelete = () => {
    Promise.all(
      selectedRows.map((banner) =>
        fetch(`http://localhost:3000/banners/${banner.id}`, {
          method: 'DELETE',
        })
      )
    )
      .then(() => {
        setBanners(
          banners.filter(
            (banner) =>
              !selectedRows.some(
                (selectedBanner) => selectedBanner.id === banner.id
              )
          )
        );
        setSelectedRows([]);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="px-4 py-8 w-full">
      <h1 className="text-2xl font-bold mb-4">Promotions</h1>
      <p className="mb-4">
      This section is for all major promotions and important information that you would like your users to know. We recommend having only one banner at a time to avoid cluttering the homepage. Please remember to delete expired promotions to keep the site up to date and relevant.
      </p>

      <div className="sm:mt-2">
        <button
          className={`px-5 py-3 mr-2 mb-2 ${
            selectedRows.length > 0 ? 'bg-red-500' : 'bg-yellow-400'
          } text-white rounded-lg`}
          disabled={selectedRows.length === 0}
          onClick={handleDelete}
        >
          Delete
        </button>
        <Popup
          trigger={
            <button className="px-5 py-3 mr-2 mb-2 bg-yellow-400 text-white rounded-lg">
              Create Banner
            </button>
          }
          modal
          nested
          closeOnDocumentClick
          contentStyle={contentStyle}
        >
          {(close) => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <BannerForm />
            </div>
          )}
        </Popup>
      </div>

      <div className='overflow-x-auto'>
        <table
          {...getTableProps()}
          className="w-full  shadow-md sm:rounded-lg text-left   "
        >
          <thead className="bg-gray-50">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map((column) => (
                  <th
                    className="px-3 py-3"
                    key={column.id}
                    {...column.getHeaderProps()}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="divide-y divide-white">
            {rows.map((row) => {
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
        </div>
    </div>
  );
};

export default Promotions;
