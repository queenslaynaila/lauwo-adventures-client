import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function GroupBookings({ id }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) {
      return; // Ignore form submission if already loading
    }

    const formData = {
      name,
      email,
      message,
      group_climbs_id: id,
    };
    notifyInfo()
    setLoading(true);
    fetch('https://lauwo-adventures-api.onrender.com/group_climb_bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        toast.dismiss()
        r.json().then((_data) => {
          notifySuccess();
          setName('');
          setEmail('');
          setMessage('');
        });
      } else {
        toast.dismiss()
        r.json().then((err) => {
          setErrors(err.errors);
          notifyError();
        });
      }
      setLoading(false);
    });
  };
  const notifyInfo = () =>
    toast.success(
      'Proccessing data....',
      {
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
      }
    );
  
  const notifySuccess = () =>
    toast.success(
      'Group Reservation received successfully.Expect an email from us with the specifics.',
      {
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
      }
    );

  const error =
    (errors && errors.name && errors.name[0]) ||
    (errors && errors.email && errors.email[0]) ||
    (errors && errors.message && errors.message[0]);

  const notifyError = () => toast.error(error, { theme: 'colored' });
  return (
    <div className="p-4 font-poly">
      <ToastContainer />
      <h2 className="text-xl font-bold mb-4 text-center">Group Tour Form</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 px-4 py-2 border border-yellow-500 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 px-4 py-2 border border-yellow-500 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-1 px-4 py-2 border border-yellow-500 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm"
          ></textarea>
        </div>
        <button
             type="submit"
  disabled={loading}
  className={`text-white bg-yellow-400 ${
    loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-800'
  } focus:ring-4 focus:outline-none focus:ring-yellow-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
>
  {loading ? 'Submitting...' : 'Submit'}
          </button>
      </form>
    </div>
  );
}
