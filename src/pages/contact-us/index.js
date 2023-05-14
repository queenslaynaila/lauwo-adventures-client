import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const inquiry = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    fetch('https://lauwo-adventures-api.onrender.com/inquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inquiry),
    }).then((r) => {
      if (r.ok) {
        r.json().then((_data) => {
          notifySuccess();
          setFormData({ name: '', email: '', message: '' });
        });
      } else {
        r.json().then((err) => {
          setErrors(err.errors);
          notifyError();
        });
      }
    });
  };
  const notifySuccess = () =>
    toast.success('Inquiry received successfully', {
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
  const error =
    (errors && errors.name && errors.name[0]) ||
    (errors && errors.email && errors.email[0]) ||
    (errors && errors.message && errors.message[0]);

  const notifyError = () => toast.error(error, { theme: 'colored' });

  return (
    <div className="font-poly">
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/background.jpg)' }}
      >
        <div className="inset bg-black/90">
          <div>
            <div className=" p-8 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8   px-4  mt-20">
                {/* Text Section */}
                <div className="text-white">
                  <ToastContainer />

                  <h2 className="text-2xl font-bold mb-4">We&apos;re Here</h2>
                  <p className="mb-4">
                    Whether you&apos;re seeking a collaboration opportunity,
                    seeking clarification on our services, or have any other
                    inquiries, please don&apos;t hesitate to contact us. We
                    value open communication and look forward to hearing from
                    you.
                  </p>
                  <h3 className="text-lg font-bold mb-2">Address</h3>
                  <p>Arusha Tanzania</p>
                  <h3 className="text-lg font-bold mt-4 mb-2">Contact</h3>

                  <p className="mb-2">+255 736 30228 (Cell)</p>
                  <p className="mb-2">+255 712 002228 (Cell)</p>
                  <h3 className="text-lg font-bold mt-4 mb-2">Email</h3>
                  <p>lauwoadventures@gmail.com</p>
                  <p>infolauwoadventures@gmail.com</p>
                </div>

                {/* Contact Form Section */}
                <div className="text-white">
                  <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        className="block mb-2 text-lg font-bold"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        className="w-full px-4 py-2 rounded-lg border   border-yellow-500   "
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        className="block mb-2 text-lg font-bold"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="w-full px-4 py-2 rounded-lg border   border-yellow-500  "
                        type="text"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        className="block mb-2 text-lg font-bold"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        className="w-full text-black px-4 py-2 rounded-lg border border-yellow-500  "
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        required
                      ></textarea>
                    </div>

                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
