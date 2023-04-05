import { AiOutlineSend}  from 'react-icons/ai';
const InquiryForm = () => {
    return (
      <div className='mt-12 lg:mt-24 h-screen'>
         <div className="lg:text-2xl sm:text-sm px-4 ">
            <div className="lg:w-3/4 mx-auto">
                <h1 className="font-poly text-center my-4 font-medium">GOT ANY INQUIRY ?</h1>
                <p className="text-center text-[0.9em] font-light font-poly mb-4">Feel free to contact us any time.We will get back to you as soon as we can.</p>
                <form className='mb-4 mt-10 flex flex-col justify-center items-center'>
                    <div className="grid grid-cols-2 gap-6 my-4 w-3/4">
                      <div className="relative z-0 w-full mb-12 group">
                          <input type="text" name="name" id="name" className="block py-4 px-0 w-full  lg:text-md text-sm  text-black bg-transparent  border-b-2 border-black appearance-none focus:outline-none" required />
                          <label htmlFor="name" className="lg:text-2xl sm:text-sm absolute text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 font-medium">Name</label>
                      </div>
                    <div className="relative  w-full mb-24 group ">
                          <input type="text" name="floating_last_name" id="floating_last_name" className="block py-4 px-0 w-full  text-black bg-transparent  border-b-2 lg:text-md sm:text-sm  border-black appearance-none focus:outline-none" required />
                          <label htmlFor="email" className="peer-focus:font-medium absolute  text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  font-medium lg:text-2xl sm:text-sm ">Email</label>
                    </div>
                    </div>
                    <div className="relative z-0 w-3/4 mb-10 group">
                        <input type="textarea" name="message" id="message" className="block py-10 px-0 w-full  text-gray-900 bg-transparent  border-b-2 border-black appearance-none lg:text-md sm:text-sm  focus:outline-none "  required />
                        <label htmlFor="message" className="peer-focus:font-medium absolute text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 font-medium lg:text-2xl sm:text-sm ">Message</label>
                    </div>
                    <button className="flex items-center mx-auto bg-yellow-400 font-poly font-medium rounded-lg px-8 py-4 text-center hover:bg-yellow-700">
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