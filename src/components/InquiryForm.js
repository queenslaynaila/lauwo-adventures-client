import { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InquiryForm = () => {
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
    fetch('http://localhost:3000/inquiries', {
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
    <div className="sm:-mt-96 sm:mb-20 lg:mt-24 lg:mb-24 -mt-72" id='contact'>
      <ToastContainer />
      <div className="lg:text-2xl sm:text-sm px-4 ">
        <div className="lg:w-3/4 mx-auto">
          <h1 className="font-poly text-center my-4 font-medium">
            GOT ANY INQUIRY ?
          </h1>
          <p className="text-center text-[0.9em] font-light font-poly mb-4">
            Feel free to contact us any time.We will get back to you as soon as
            we can.
          </p>
          <form
            className="mb-4 mt-10 flex flex-col justify-center items-center"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2 gap-6 my-4 w-3/4">
              <div className="relative z-0 w-full mb-12 group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block py-4 px-0 w-full  lg:text-md text-sm  text-black bg-transparent  border-b-2 border-black appearance-none focus:outline-none"
                  required
                />
                <label
                  htmlFor="name"
                  className="lg:text-2xl sm:text-sm absolute text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 font-medium"
                >
                  Name
                </label>
              </div>
              <div className="relative  w-full sm:mb-24 group ">
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block py-4 px-0 w-full  text-black bg-transparent  border-b-2 lg:text-md sm:text-sm  border-black appearance-none focus:outline-none"
                  required
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute  text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  font-medium lg:text-2xl sm:text-sm "
                >
                  Email
                </label>
              </div>
            </div>
            <div className="relative z-0 w-3/4 mb-10 group">
              <input
                type="textarea"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="block sm:py-10 py-4 px-0 w-full  text-gray-900 bg-transparent  border-b-2 border-black appearance-none lg:text-md sm:text-sm  focus:outline-none "
                required
              />
              <label
                htmlFor="message"
                className="peer-focus:font-medium absolute text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 font-medium lg:text-2xl sm:text-sm "
              >
                Message
              </label>
            </div>
            <button
              className="flex items-center mx-auto bg-yellow-400 font-poly font-medium rounded-lg px-8 py-4 text-center hover:bg-yellow-700"
              type="submit"
            >
              Send
              <span className="ml-2">
                <AiOutlineSend />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
