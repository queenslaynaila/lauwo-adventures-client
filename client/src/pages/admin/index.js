import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    console.log(formData)
    event.preventDefault();
    fetch('http://localhost:3000/admins/sign_in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // handle successful response
        return response.json(); // parse response body as JSON
      })
      .then((data) => {
        console.log(data);
        // navigate to dashboard here
        router.push('/dashboard'); // replace "router" with your router library of choice
      })
      .catch((error) => {
        console.log(error)
      });
  };
  

  return (
    <div
      className="flex flex-col items-center justify-center h-screen font-poly"
      style={{ backgroundImage: 'url(/g-3.jpg)' }}
    >
      <div className="bg-white p-6 lg:mt-20 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <form className="lg:w-96 md:w-64 sm:w-48" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-2 border-black p-2 rounded-lg focus:outline-none focus:border-yellow-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border-2 border-black p-2 rounded-lg focus:outline-none focus:border-yellow-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-400 text-black p-2 rounded-lg hover:bg-yellow-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
