import { FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#00BF63] text-white p-6 mt-4">
      <div className="max-w-6xl mx-auto my-8 flex flex-col md:flex-row justify-between items-center md:items-start">
        
        <div className="mb-6 md:mb-0 pr-8">
          <h2 className="text-3xl lg:text-6xl md:text-5xl  font-josefin">Contact us:</h2>
          <div className="flex items-center gap-2 mt-2">
            <MdPhone className="text-2xl " />
            <span className="font-medium lg:text-3xl text-xl">+91- XXXXX-XXXXX</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <MdEmail className="text-2xl" />
            <span className="font-medium lg:text-3xl text-xl">xoxoxoxoxo@gmail.com</span>
          </div>
        </div>

       
        <div >
          <h2 className="text-2xl lg:text-5xl md:text-4xl font-semibold">Stay Connected:</h2>
          <div className="flex items-center gap-2 mt-4 sm:text-xl ">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-2 rounded-md text-black focus:outline-none"
            />
            <button className="bg-white text-black px-4 py-2 rounded-md font-medium">
              Submit
            </button>
          </div>

          
          <div className="flex gap-4 mt-4 text-2xl lg:text-3xl">
            <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            <FaXTwitter className="hover:text-gray-300 cursor-pointer" />
            <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>

      </div>
    </footer>
  );
}