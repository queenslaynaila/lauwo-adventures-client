import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { GrFormClose } from 'react-icons/gr'

const SafariBookingForm = ({ safari }) => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    country: '',
    travelPeriod: '',
    noOfTravellers: '',
    additionalInfo: '',
  })

  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    const booking = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone_number: formData.phoneNumber,
      country: formData.country,
      travel_period: formData.travelPeriod,
      no_of_travellers: formData.noOfTravellers,
      additional_info: formData.additionalInfo,
      route_duration_id: safari.id,
    }
    fetch('http://localhost:3000/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(booking),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((_data) => {
            notifySuccess()
            setFormData({
              firstName: '',
              last_name: '',
              email: '',
              phone_number: '',
              country: '',
              travel_period: '',
              no_of_travellers: '',
              additional_info: '',
              route_duration_id: 0,
            })
          })
        } else {
          r.json().then((err) => {
            setErrors(err.errors)
            notifyError()
          })
        }
      })
  }

  const notifySuccess = () => toast.success('Booking received successfully', {
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
  })

  const notifyError = () => toast.error('Booking failed', {
    theme: 'colored'
  })



  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  return (
    <div className="flex flex-col items-center justify-center font-poly h-full p-6 relative">
      < ToastContainer />
      <h5 className="text-2xl mb-4 font-bold font-poly capitalize">Book {safari.name}</h5>
        <GrFormClose className="text-2xl absolute right-4 top-0"/>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-center mt-10 gap-10">
          <div className='relative'>
            <label className="font-poly text-xs absolute -top-4 left-0" htmlFor="firstName">
              First Name
            </label>
            <input
              className="border-b-2 border-black w-64 h-10  font-poly
              focus:outline-none focus:border-yellow-500"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className='relative'>
            <label className="font-poly text-xs absolute -top-4 left-0" htmlFor="firstName">
              Last Name
            </label>
            <input
              className="border-b-2 border-black w-64 h-10 font-poly
              focus:outline-none focus:border-yellow-500"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 gap-10">
          <div className='relative'>
            <label className="font-poly text-xs absolute -top-4 left-0" htmlFor="email">
              Email
            </label>
            <input
              className="border-b-2 border-black w-64 h-10 font-poly
              focus:outline-none focus:border-yellow-500"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              />
          </div>
          <div className='relative'>
            <label className="font-poly text-xs absolute -top-4 left-0" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              className="border-b-2 border-black w-64 h-10 font-poly
              focus:outline-none focus:border-yellow-500"
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 gap-10">
          <div className='relative'>
            <label className="font-poly text-xs absolute -top-4 left-0" htmlFor="country">
              Country
            </label>
            <input
              className="border-b-2 border-black w-64 h-10 font-poly
              focus:outline-none focus:border-yellow-500"
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
          <div className='relative'>
            <label className="font-poly text-xs absolute -top-4 left-0" htmlFor="travelPeriod">
              Travel Period
            </label>
            <input
              className="border-b-2 border-black w-64 h-10 font-poly
              focus:outline-none focus:border-yellow-500"
              type="text"
              name="travelPeriod"
              value={formData.travelPeriod}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 gap-10">
          <div className='relative'>
            <label className="font-poly text-xs absolute -top-4 left-0" htmlFor="noOfTravellers">
              No. of Travellers
            </label>
            <input
              className="border-b-2 border-black w-64 h-10 font-poly
              focus:outline-none focus:border-yellow-500"
              type="text"
              name="noOfTravellers"
              value={formData.noOfTravellers}
              onChange={handleChange}
              required
            />
          </div>
          <div className='relative'>
            <label className="font-poly text-xs absolute -top-4 left-0" htmlFor="additionalInfo">
              Additional Info
            </label>
            <input
              className="border-b-2 border-black w-64 h-10 font-poly
              focus:outline-none focus:border-yellow-500"
              type="textarea"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              />
          </div>
        </div>
        <button className="bg-primary text-black font-poly font-bold text-lg mt-10 px-10 py-2 rounded-lg hover:bg-yellow-600 h:text-white" type="submit">
          Book
        </button>
      </form>
    </div>
  )
}

export default SafariBookingForm
