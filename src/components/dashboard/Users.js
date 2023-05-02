import React, { useState } from 'react';

const usersData = [
  {
    id: 1,
    username: 'john_doe',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'admin',
  },
  {
    id: 2,
    username: 'jane_doe',
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    role: 'user',
  },
  {
    id: 3,
    username: 'bob_smith',
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    role: 'user',
  },
];

const Users = () => {
  const [search, setSearch] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [users, setUsers] = useState(usersData);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleCheckboxChange = (event, user) => {
    if (event.target.checked) {
      setSelectedUsers((prevSelectedUsers) => [...prevSelectedUsers, user]);
    } else {
      setSelectedUsers((prevSelectedUsers) =>
        prevSelectedUsers.filter((selectedUser) => selectedUser.id !== user.id)
      );
    }
  };

  const handleBulkDelete = () => {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => !selectedUsers.includes(user))
    );
    setSelectedUsers([]);
  };

  const handleAddUser = () => {
    // TODO: Add new user
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-4 py-8 w-full ">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="mt-2 grid grid-cols-1 lg:grid-cols-2">
        <div class="flex items-center mb-2">
          <input
            type="text"
            class="border p-2 rounded-md w-full sm:w-56"
            placeholder="Search..."
            value={search}
            onChange={handleSearch}
          />
        </div>

        <div className="sm:mt-2">
          <button
            className={`px-5 py-3 mr-2 mb-2 ${
              selectedUsers.length > 0 ? 'bg-red-500' : 'bg-yellow-400'
            } text-white rounded-lg`}
            onClick={handleBulkDelete}
            disabled={selectedUsers.length === 0}
          >
            Delete
          </button>
          <button
            className="bg-yellow-400 text-white px-5 py-3   rounded-lg hover:bg-yellow-600"
            onClick={handleAddUser}
          >
            Add user
          </button>
        </div>
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                <div class="flex items-center">Color</div>
              </th>
              <th scope="col" class="px-6 py-3">
                <div class="flex items-center">Category</div>
              </th>
              <th scope="col" class="px-6 py-3">
                <div class="flex items-center">Price</div>
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Laptop PC</td>
              <td class="px-6 py-4">$1999</td>
              <td class="px-6 py-4 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
              <td class="px-6 py-4">$99</td>
              <td class="px-6 py-4 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
