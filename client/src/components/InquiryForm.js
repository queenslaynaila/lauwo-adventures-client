import { AiOutlineSend}  from 'react-icons/ai';
const InquiryForm = () => {
    return (
      <div>
         <div class="lg:text-2xl sm:text-sm px-4">
            <div class="lg:w-1/2 mx-auto">
                <h1 class="text-center my-4 font-extralight">GOT ANY INQUIRY ?</h1>
                <p class="text-center font-light">Feel free to contact us any time.We will get back to you as soon as we can.</p>
                <form className='mb-4'>
                    <div class="grid grid-cols-2 gap-6 my-4">
                      <div class="relative z-0 w-full mb-6 group">
                          <input type="text" name="name" id="name" class="block py-2.5 px-0 w-full  text-black bg-transparent  border-b-2 border-black appearance-none focus:outline-none " placeholder=" " required />
                          <label for="name" class="  lg:text-2xl sm:text-sm absolute text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 font-bold">Name</label>
                      </div>
                    <div class="relative z-0 w-full mb-6 group">
                          <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full  text-black bg-transparent  border-b-2 border-black appearance-none focus:outline-none" placeholder required />
                          <label for="email" class="peer-focus:font-medium absolute  text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  font-bold">Email</label>
                    </div>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="message" id="message" class="block py-2.5 px-0 w-full  text-gray-900 bg-transparent  border-b-2 border-black appearance-none focus:outline-none " placeholder=" " required />
                        <label for="message" class="peer-focus:font-medium absolute text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 font-bold">Message</label>
                    </div>
                    <button class="flex items-center mx-auto bg-yellow-500 font-medium rounded-lg px-5 py-2.5 text-center font-semibold">
                      Send 
                      <span class="ml-2"><AiOutlineSend/></span>   
                    </button>
                 </form>
              </div>
         </div>
      </div>

    )
  }
  
  export default InquiryForm