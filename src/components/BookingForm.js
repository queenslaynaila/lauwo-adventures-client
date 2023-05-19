import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingForm = ({ adventure, bookableType }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    country: '',
    travelPeriodStart: '',
    travelPeriodEnd: '',
    noOfTravellers: 0,
    noOfAdults: 0,
    noOfChildren: 0,
    noOfSmallChildren: 0,
    additionalInfo: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) {
      return; // Ignore form submission if already loading
    }
    setLoading(true);
    const booking = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone_number: formData.phoneNumber,
      country: formData.country,
      travel_period:
        formData.travelPeriodStart + ' to ' + formData.travelPeriodEnd,
      no_of_travellers: formData.noOfTravellers,
      no_of_adults: formData.noOfAdults,
      no_of_children: formData.noOfChildren,
      no_of_small_children: formData.noOfSmallChildren,
      additional_info: formData.additionalInfo,
      bookable_type: bookableType,
      bookable_id: adventure.id,
    };
    notifyInfo();
    fetch('https://lauwo-adventures-api.onrender.com/bookings', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(booking),
})
  .then((r) => {
    setLoading(false); // Update loading state

    if (r.ok) {
      toast.dismiss();
      return r.json();
    } else {
      toast.dismiss();
      throw new Error('Failed to submit the form.');
    }
  })
  .then((_data) => {
    notifySuccess();
    setFormData({
      // Reset form fields
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      country: '',
      travelPeriod: '',
      noOfTravellers: 0,
      noOfAdults: 0,
      noOfChildren: 0,
      noOfSmallChildren: 0,
      additionalInfo: '',
      route_duration_id: 0,
    });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  })
  .catch((err) => {
    console.error(err);
    notifyError();
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  });

  };

  const notifyInfo = () =>
    toast.success('Proccessing data....', {
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
  const notifySuccess = () =>
    toast.success(
      'Booking received successfully.Look out for an email from us on payment.',
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

  const notifyError = () =>
    toast.error('Booking failed, Please try again.', {
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
        Book {adventure.name}
      </h5>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex sm:flex-row flex-col items-center justify-center mt-10 gap-10">
          <div className="relative">
            <label
              className="font-poly text-xs absolute -top-4 left-0"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="border-b-2 border-black lg:w-96 ms:w-64 xs:w-44 h-10  font-poly
              focus:outline-none focus:border-yellow-500"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="relative">
            <label
              className="font-poly text-xs absolute -top-4 left-0"
              htmlFor="firstName"
            >
              Last Name
            </label>
            <input
              className="border-b-2 border-black lg:w-96 ms:w-64 xs:w-44 h-10 font-poly
              focus:outline-none focus:border-yellow-500"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col items-center justify-center mt-10 gap-10">
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
          <div className="relative">
            <label
              className="font-poly text-xs absolute -top-4 left-0"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              className="border-b-2 border-black lg:w-96 ms:w-64 xs:w-44 h-10 font-poly
              focus:outline-none focus:border-yellow-500"
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col items-center justify-center mt-10 gap-10">
          <div className="relative">
            <label
              className="font-poly text-xs absolute -top-4 left-0"
              htmlFor="country"
            >
              Country
            </label>
            <input
              className="border-b-2 border-black lg:w-96 ms:w-64 xs:w-44 h-10 font-poly
              focus:outline-none focus:border-yellow-500"
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
          <div className="relative">
            <label
              className="font-poly text-xs absolute -top-8 left-0"
              htmlFor="travelPeriod"
            >
              Travel Period
            </label>
            <div className="flex relative items-center justify-center gap-3">
              <label
                className="font-poly text-xs absolute -top-3 left-0"
                htmlFor="travelPeriod"
              >
                From
              </label>
              <input
                className="border-b-2 border-black lg:w-48 ms:w-32 xs:w-20 h-10 font-poly
              focus:outline-none focus:border-yellow-500"
                type="date"
                name="travelPeriod"
                value={formData.travelPeriodStart}
                onChange={(e) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    travelPeriodStart: e.target.value,
                  }))
                }
                required
              />
              <label
                className="font-poly text-xs absolute -top-4 left-32"
                htmlFor="travelPeriod"
              >
                To
              </label>
              <input
                className="border-b-2 border-black lg:w-48 ms:w-32 xs:w-20 h-10 font-poly
              focus:outline-none focus:border-yellow-500"
                type="date"
                name="travelPeriod"
                value={formData.travelPeriodEnd}
                onChange={(e) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    travelPeriodEnd: e.target.value,
                  }))
                }
                required
              />
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col items-center justify-center mt-10 gap-10">
          <div className="relative">
            <label
              className="font-poly text-xs absolute -top-4 left-0"
              htmlFor="noOfTravellers"
            >
              No. of Travellers
            </label>
            <input
              className="border-b-2 border-black lg:w-96 ms:w-64 xs:w-44 h-10 font-poly
              focus:outline-none focus:border-yellow-500"
              type="number"
              name="noOfTravellers"
              min={0}
              value={formData.noOfTravellers}
              onChange={handleChange}
              required
            />
          </div>
          <div className="relative">
            <label
              className="font-poly text-xs absolute -top-4 left-0"
              htmlFor="noOfAdults"
            >
              No. of Adults
            </label>
            <input
              className="border-b-2 border-black lg:w-96 ms:w-64 xs:w-44 h-10 font-poly
              focus:outline-none focus:border-yellow-500"
              type="number"
              min={0}
              name="noOfAdults"
              value={formData.noOfAdults}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col items-center justify-center mt-10 gap-10">
          <div className="relative">
            <label
              className="font-poly text-xs absolute -top-4 left-0"
              htmlFor="noOfChildren"
            >
              No. of Children
            </label>
            <input
              className="border-b-2 border-black lg:w-96 ms:w-64 xs:w-44 h-10 font-poly
              focus:outline-none focus:border-yellow-500"
              type="number"
              min={0}
              name="noOfChildren"
              value={formData.noOfChildren}
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <label
              className="font-poly text-xs absolute -top-4 left-0"
              htmlFor="noOfSmallChildren"
            >
              No. of Small Children
            </label>
            <input
              className="border-b-2 border-black lg:w-96 ms:w-64 xs:w-44 h-10 font-poly
              focus:outline-none focus:border-yellow-500"
              type="number"
              min={0}
              name="noOfSmallChildren"
              value={formData.noOfSmallChildren}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col items-center justify-center mt-10 gap-10">
          <div className="relative">
            <label
              className="font-poly text-xs absolute -top-4 left-0"
              htmlFor="additionalInfo"
            >
              Additional Info
            </label>
            <textarea
              className="border-b-2 border-black xl:w-[800px] md:w-[550px] ms:ms:w-64 xs:w-44 h-20
               xs:w-44
              font-poly
              focus:outline-none focus:border-yellow-500"
              type="text"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`text-white bg-yellow-400 ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-800'
          } focus:ring-4 focus:outline-none focus:ring-yellow-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
        >
          {loading ? 'Booking...' : 'Book'}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
