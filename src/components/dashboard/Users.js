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
              selectedUsers.length > 0 ? 'bg-red-500' : 'bg-gray-300'
            } text-white rounded-lg`}
            onClick={handleBulkDelete}
            disabled={selectedUsers.length === 0}
          >
            Delete
          </button>
          <button
            className="bg-blue-500 text-white px-5 py-3   rounded-lg hover:bg-blue-600"
            onClick={handleAddUser}
          >
            Add user
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;