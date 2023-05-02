import React from 'react';
import { useState } from 'react';

export default function Settings() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle email update
  };

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle password update
  };
  return (
    <div>
      <div className="py-4 ">
        <h1 className="text-2xl font-bold">Account Settings</h1>
        <div className="border-t border-white mt-4">
          <form onSubmit={handleEmailSubmit}>
            <h2 className="text-lg font-bold mb-2">Email</h2>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Current email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-white p-2 rounded-lg"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="new-email"
                className="block text-gray-700 font-bold mb-2"
              >
                New email
              </label>
              <input
                id="new-email"
                type="email"
                className="w-full border border-white p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
              >
                Update email
              </button>
            </div>
          </form>
        </div>

        <div className="border-t border-white mt-4">
          <form onSubmit={handlePasswordSubmit}>
            <h2 className="text-lg font-bold mb-2">Password</h2>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-black-500 font-bold mb-2"
              >
                Current password
              </label>
              <input
                id="password"
                type="password"
                className="w-full border border-white p-2 rounded-lg"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="new-password"
                className="block text-gray-700 font-bold mb-2"
              >
                New password
              </label>
              <input
                id="new-password"
                type="password"
                className="w-full border border-white p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirm-password"
                className="block text-gray-700 font-bold mb-2"
              >
                Confirm new password
              </label>
              <input
                id="new-password"
                type="password"
                className="w-full border border-white p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
              >
                Update password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
