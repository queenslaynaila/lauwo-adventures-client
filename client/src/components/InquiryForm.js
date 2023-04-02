import { AiOutlineSend}  from 'react-icons/ai';
const InquiryForm = () => {
    return (
      <div className='my-12'>
         <div className="lg:text-2xl sm:text-sm px-4 font-poly ">
            <div className="lg:w-1/2 mx-auto">
                <h1 className="text-center my-4 font-extralight">GOT ANY INQUIRY ?</h1>
                <p className="text-center font-light">Feel free to contact us any time.We will get back to you as soon as we can.</p>
                <form className='mb-4'>
                    <div className="grid grid-cols-2 gap-6 my-4">
                      <div className="relative z-0 w-full mb-6 group">
                          <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full  lg:text-2xl sm:text-sm  text-black bg-transparent  border-b-2 border-black appearance-none focus:outline-none " required />
                          <label htmlFor="name" className="lg:text-2xl sm:text-sm absolute text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 font-bold">Name</label>
                      </div>
                    <div className="relative z-0 w-full mb-6 group">
                          <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full  text-black bg-transparent  border-b-2 lg:text-2xl sm:text-sm  border-black appearance-none focus:outline-none" required />
                          <label htmlFor="email" className="peer-focus:font-medium absolute  text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  font-bold lg:text-2xl sm:text-sm ">Email</label>
                    </div>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="message" id="message" className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent  border-b-2 border-black appearance-none lg:text-2xl sm:text-sm  focus:outline-none "  required />
                        <label htmlFor="message" className="peer-focus:font-medium absolute text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 font-bold lg:text-2xl sm:text-sm ">Message</label>
                    </div>
                    <button className="flex items-center mx-auto bg-yellow-500 font-medium rounded-lg px-5 py-2.5 text-center font-semibold hover:bg-yellow-700">
                      Send 
                      <span className="ml-2"><AiOutlineSend /></span>   
                    </button>
                    
                 </form>
              </div>
         </div>
      </div>

    )
  }
  
  export default InquiryForm