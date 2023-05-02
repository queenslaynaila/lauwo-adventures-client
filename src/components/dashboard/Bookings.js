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

const   Bookings = () => {
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
      <h1 className="text-2xl font-bold mb-4">Bookings</h1>
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

      <div class="relative shadow-md sm:rounded-lg    "  >
        <table class=" w-full text-sm text-left text-gray-500 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" class="px-6 py-3">
                EMAIL
              </th>
              <th scope="col" class="px-6 py-3">
                <div class="flex items-center">ROLE</div>
              </th>
              
              <th scope="col" class="px-6 py-3">
              <div class="flex items-center">ACTION</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">Silver</td>
               
              <td class="px-6 py-4 ">
                <a
                  href="#"
                  class="font-medium text-blue-600  hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b   ">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  "
              >
                Microsoft Surface Pro
              </th>
              <td class="px-6 py-4">White</td>
               
              <td class="px-6 py-4  ">
                <a
                  href="#"
                  class="font-medium text-blue-600 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr class="bg-white  ">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Magic Mouse 2
              </th>
              <td class="px-6 py-4">Black</td>
              
              <td class="px-6 py-4  ">
                <a
                  href="#"
                  class="font-medium text-blue-600  hover:underline"
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

export default  Bookings;
