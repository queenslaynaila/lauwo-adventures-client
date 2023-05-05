import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BannerForm = () => {
  const [formData, setFormData] = useState({
    category: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const banner = {
      data_category: formData.category,
      message: formData.message,
    };
    fetch('http://localhost:3000/banners', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(banner),
    }).then((r) => {
      if (r.ok) {
        r.json().then((_data) => {
          notifySuccess();
          setFormData({
            category: '',
            message: '',
          });
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        });
      } else {
        r.json().then((err) => {
          console.error(err);
          notifyError();
          setFormData({
            category: '',
            message: '',
          });
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        });
      }
    });
  };

  const notifySuccess = () =>
    toast.success('Banner created succesfully.', {
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
    toast.error('Banner Creation failed, Please try again.', {
      theme: 'colored',
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div className="flex flex-col items-center justify-center font-poly h-full p-6 relative">
      <ToastContainer />
      <h5 className="text-2xl mb-4 font-bold font-poly capitalize">
        Create Banner
      </h5>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex sm:flex-row flex-col items-center justify-center mt-10 gap-10">
          <div className="relative">
            <label
              className="font-poly text-xs absolute -top-4 left-0"
              htmlFor="category"
            >
              Category
            </label>
            <input
              className="border-b-2 border-black lg:w-96 ms:w-64 xs:w-44 h-10 font-poly
              focus:outline-none focus:border-yellow-500"
              placeholder="either informative, warning, promotion"
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="flex  flex-col  mt-10  ">
          <div className="relative">
            <label
              className="font-poly text-xs absolute -top-4 left-0"
              htmlFor="message"
            >
              Message
            </label>
            <input
              className="border-b-2 border-black lg:w-96 ms:w-64 xs:w-44 h-10 font-poly
              focus:outline-none focus:border-yellow-500"
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
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

export default BannerForm;
