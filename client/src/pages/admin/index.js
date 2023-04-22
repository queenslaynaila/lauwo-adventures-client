import Image from 'next/image';

export default function LoginPage() {
  return (
    <div
    className="flex flex-col items-center justify-center h-screen font-poly"
    style={{ backgroundImage: 'url(/g-3.jpg)' }}
  >
    <div className="bg-white p-6 lg:mt-20 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form className='lg:w-96 md:w-64 sm:w-48' >
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
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
            className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
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
