import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmpassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmpassword) {
      notifyPasswordError();
      return; // Exit the function if passwords don't match
    }
    const user = {
      admin: {
        email: formData.email,
        password: formData.password,
      },
    };
    fetch('https://lauwo-adventures-api.onrender.com/admins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then((r) => {
      if (r.ok) {
        r.json().then((_data) => {
          notifySuccess();
          setFormData({
            email: '',
            password: '',
            confirmpassword: '',
          });
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        });
      } else {
        r.json().then((err) => {
          console.error(err);
          notifyError();
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        });
      }
    });
  };

  const notifySuccess = () =>
    toast.success('User created succesfully.', {
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
    toast.error(' User Creation failed, Please try again.', {
      theme: 'colored',
    });
  const notifyPasswordError = () =>
    toast.error('Password and confirm password do not match.', {
      theme: 'colored',
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };

  return (
    <div className="flex flex-col items-center justify-center font-poly h-full p-6 relative">
      <ToastContainer />
      <h5 className="text-2xl mb-4 font-bold font-poly capitalize">
        Create New Admin
      </h5>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="relative">
            <label
              className="font-poly text-xs absolute -top-4 left-0"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border-b-2 border-black lg:w-96 ms:w-64 xs:w-44 h-10 font-poly
        focus:outline-none focus:border-yellow-500"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="relative mt-4">
            <label
              className="font-poly text-xs absolute -top-4 left-0"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border-b-2 border-black lg:w-96 ms:w-64 xs:w-44 h-10 font-poly
        focus:outline-none focus:border-yellow-500"
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              className="absolute top-1 right-1 text-xs focus:outline-none"
              type="button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <div className="relative mt-4">
            <label
              className="font-poly text-xs absolute -top-4 left-0"
              htmlFor="confirmpassword"
            >
              Confirm Password
            </label>
            <input
              className="border-b-2 border-black lg:w-96 ms:w-64 xs:w-44 h-10 font-poly
        focus:outline-none focus:border-yellow-500"
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
              required
            />
            <button
              className="absolute top-1 right-1 text-xs focus:outline-none"
              type="button"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        <button
          className="bg-primary text-black font-poly font-bold text-lg mt-10 px-10 py-2 rounded-lg hover:bg-yellow-600 h:text-white"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default UserForm;
