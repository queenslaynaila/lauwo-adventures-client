import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
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
        <div className="container mx-auto px-4 h-full ">
        <div className="flex content-center items-center justify-center h-full ">
          <div className="w-full lg:w-4/12 px-4 ">
            <div className="relative flex flex-col lg:mt-24  bg-yellow-500 min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6 ">
                <div className="text-center mb-3">
                  <h6 className="text-black text-lg font-bold">
                    Sign in  
                  </h6>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                
                <form onSubmit={handleSubmit}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                     name="email"
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Enter Email"
                      value={formData.email}
                       onChange={handleChange}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                       value={formData.password}
              onChange={handleChange}
                    name="password"
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Enter your Password"
                    />
                  </div>
                   
                  <div className="text-center mt-6">
                    <button
                      className="bg-yellow-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-white"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link href="/auth/register" legacyBehavior>
                  <a href="#pablo" className="text-white">
                    <small>Create new account</small>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}
