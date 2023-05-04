import { useState } from 'react';
import { adventures } from '@/data/planningData';
import { months } from '@/data/planningData';
import { Budget } from '@/data/planningData';
import { useRouter } from 'next/router';

export default function PlanForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    adventure: '',
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    country_of_residence: '',
    tour_duration_in_days: '',
    budget: '',
    when_to_travel: '',
    how_many_travelers: '',
    no_of_adults: '',
    no_of_children: '',
    no_of_small_children: '',
    extra_info: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch('http://127.0.0.1:3000/planningforms', {
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const { status, errors } = await res.json();
    if (status === 'error') {
      console.log(errors);
    } else {
      router.push('/planning-form/success');
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="bg-white rounded-lg  w-4/5  p-10 mx-auto mb-8   flex items-center justify-center">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="adventure"
              className="mb-2 text-sm font-medium text-gray-900"
            >
              Adventure
            </label>
            <select
              id="adventures"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              name="adventure"
              value={formData.adventure}
              onChange={handleInputChange}
            >
              <option value="">Choose an adventure</option>
              {adventures.map((adventure, index) => {
                return (
                  <option key={index} value={adventure}>
                    {' '}
                    {adventure}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="mb-2 text-sm font-medium text-gray-900 "
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                placeholder="John"
                required
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="mb-2 text-sm font-medium text-gray-900"
              >
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 "
                placeholder="Doe"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-3">
            <div>
              <label
                htmlFor="country"
                className="mb-2 text-sm font-medium text-gray-900"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                placeholder="Kenya"
                name="country_of_residence"
                value={formData.country_of_residence}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="mb-2 text-sm font-medium text-gray-900"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                placeholder="+255 123-456-789"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 "
                placeholder="john.doe@company.com"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-3">
            <div>
              <label
                htmlFor="tour"
                className="mb-2 text-sm font-medium text-gray-900"
              >
                Tour Duration in Days
              </label>
              <select
                id="adventures"
                className="bg-white border border-gray-300 text-gray-900     after:text-sm rounded-lg w-full p-2.5"
                name="tour_duration_in_days"
                value={formData.tour_duration_in_days}
                onChange={handleInputChange}
              >
                <option value="">Select a number</option>
                <option value="dont-know">Dont know/Not Sure</option>
                <option value="10 days plus">10 plus days</option>
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="budget"
                className="mb-2 text-sm font-medium text-gray-900"
              >
                Budget
              </label>
              <select
                id="adventures"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                value={formData.budget}
                name="budget"
                onChange={handleInputChange}
              >
                <option value="">Tell us About Your budget</option>
                {Budget.map((adventure, index) => {
                  return (
                    <option key={index} value={adventure}>
                      {' '}
                      {adventure}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label
                htmlFor="monthtravel"
                className="mb-2 text-sm font-medium text-gray-900"
              >
                When To Travel
              </label>
              <select
                id="adventures"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                name="when_to_travel"
                value={formData.when_to_travel}
                onChange={handleInputChange}
              >
                <option value="">Select a month</option>
                {months.map((adventure, index) => {
                  return (
                    <option key={index} value={adventure}>
                      {' '}
                      {adventure}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="grid gap-6 mb-6 md:grid-cols-4">
            <div>
              <label
                htmlFor="nooftravellers"
                className="mb-2 text-sm font-medium text-gray-900 "
              >
                No of Travellers
              </label>
              <input
                type="number"
                id="nooftravellers"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                required
                name="how_many_travelers"
                value={formData.how_many_travelers}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="adults"
                className="mb-2 text-sm font-medium text-gray-900"
              >
                No of Adults
              </label>
              <input
                type="number"
                id="adults"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                required
                name="no_of_adults"
                value={formData.no_of_adults}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="noofchildren"
                className="mb-2 text-sm font-medium text-gray-900"
              >
                No of Children(6-15 years)
              </label>
              <input
                type="number"
                id="noofchildren"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                name="no_of_children"
                value={formData.no_of_children}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="noofchildren"
                className="mb-2 text-sm font-medium text-gray-900"
              >
                No of Children(0-5 years)
              </label>
              <input
                type="number"
                id="noofchildren"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                name="no_of_small_children"
                value={formData.no_of_small_children}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="extra_info"
              className="mb-2 text-sm font-medium text-gray-900"
            >
              Any Additional info
            </label>
            <textarea
              id="extra_info"
              rows="4"
              className="p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 "
              placeholder="Let us know more about your wishes htmlFor the trip or questions or any concerns you have ..."
              name="extra_info"
              value={formData.extra_info}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-yellow-400  hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
