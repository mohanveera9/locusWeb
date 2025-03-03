import { FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail, MdPhone , MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-500 to-green-700 text-white p-8 mt-6 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between  md:items-start items-start md:text-left">
        
        {/* Contact Section */}
        <div className="mb-6 md:mb-0 md:w-1/2">
          <h2 className="text-2xl lg:text-3xl font-bold font-josefin">Contact Us</h2>
          <div className="flex items-center  md:justify-start gap-3 mt-3">
            <MdPhone className="text-2xl text-white" />
            <span className="font-normal lg:text-xl text-sm">+91- 9502774125</span>
          </div>
          <div className="flex items-center  md:justify-start gap-3 mt-2">
            <MdEmail className="text-2xl text-white" />
            <span className="font-normal lg:text-xl text-sm">locusofficial21@gmail.com</span>
          </div>
          <div className="flex items-center  md:justify-start gap-3 mt-2">
            <MdLocationOn className="text-2xl text-white" />
            <span className="font-normal lg:text-xl text-sm">Nuzvid, Eluru dist, 521202</span>
          </div>
        </div>

        {/* Stay Connected Section */}
        <div className="md:w-1/2">
          <h2 className="text-2xl lg:text-3xl font-bold">Stay Connected</h2>
          <div className="flex flex-col sm:flex-row items-center gap-2 mt-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-3 py-2 rounded-md text-black w-full sm:w-auto focus:outline-none border border-gray-300"
            />
            <button className="bg-black text-white px-4 py-2 rounded-md font-medium transition-all">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex  md:justify-start gap-6 mt-5 text-2xl">
            <FaInstagram className="hover:text-pink-900 cursor-pointer transition-all transform hover:scale-110" />
            <FaFacebookF className="hover:text-blue-900 cursor-pointer transition-all transform hover:scale-110" />
            <FaXTwitter className="hover:text-black cursor-pointer transition-all transform hover:scale-110" />
            <FaLinkedinIn className="hover:text-blue-900 cursor-pointer transition-all transform hover:scale-110" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-200 mt-8 border-t border-gray-400 pt-4">
        &copy; {new Date().getFullYear()} Locus. All Rights Reserved.
      </div>
    </footer>
  );
}