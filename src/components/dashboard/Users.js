import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserForm from './UserForm';

const Users = () => {
  const [admins, setAdmins] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const contentStyle = {
    width: '85%',
    maxHeight: '85%',
    overflow: 'auto',
    margin: 'auto',
  };
  useEffect(() => {
    fetch('http://localhost:3000/admins')
      .then((response) => response.json())
      .then((data) => setAdmins(data))
      .catch((error) => console.error(error));
  }, []);

  const data = React.useMemo(() => admins, [admins]);

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
        Header: 'Email',
        accessor: 'email',
      },
    ],
    [selectedRows]
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  const handleDelete = () => {
    Promise.all(
      selectedRows.map((admin) =>
        fetch(`http://localhost:3000/admins/${admin.id}`, {
          method: 'DELETE',
        }).then((response) => {
          if (response.ok) {
            return response.json().then((message) => {
              setAdmins(
                admins.filter(
                  (admin) =>
                    !selectedRows.some(
                      (selectedAdmin) => selectedAdmin.id === admin.id
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
    toast.success('User(s) deleted succesfully', {
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
    toast.error('Failed to delete User(s)', {
      theme: 'colored',
    });

  return (
    <div className="px-4 py-8 w-full">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ToastContainer />
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
              Create Admin
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
              <UserForm />
            </div>
          )}
        </Popup>
      </div>

      {admins.length ? (
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
      ) : (
        <p>No admins on site. Create new one.</p>
      )}
    </div>
  );
};

export default Users;
