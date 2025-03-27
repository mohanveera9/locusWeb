import React, { useState } from 'react';
import { MdOutlineFileDownload, MdMenu, MdClose } from "react-icons/md";
import Locus from '../assets/locusw.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleDownload = () => {
        window.open("https://drive.google.com/file/d/131gO06F661mnz_zsrQhhp3ztMJuWJvYt/view?usp=drivesdk","_blank");
      };

    return (
        <div className="bg-[#00BF63] px-6 md:px-16 py-3 shadow-md w-full">
            <div className="flex items-center justify-between">
                
                <img src={Locus} alt="Locus" className="h-12 cursor-pointer" />

                <ul className="hidden md:flex gap-16">
                    <li className="text-white cursor-pointer hover:underline font-josefin text-[22px]">Home</li>
                    <li className="text-white cursor-pointer hover:underline font-josefin text-[22px]">About</li>
                    <li className="text-white cursor-pointer hover:underline font-josefin text-[22px]">Contact us</li>
                </ul>

                <div onClick={handleDownload} className="hidden md:flex bg-white rounded-[32px] px-6 py-2 flex-row gap-2 cursor-pointer">
                    <MdOutlineFileDownload size={23} color="#00BF63" />
                    <div className="font-semibold text-[#00BF63] font-josefin">Get APK</div>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <MdClose size={30} color="white" /> : <MdMenu size={30} color="white" />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden flex flex-col items-center bg-[#00BF63] text-white font-josefin py-4 gap-4">
                    <a href="#" className="text-[20px] hover:underline">Home</a>
                    <a href="#" className="text-[20px] hover:underline">About</a>
                    <a href="#" className="text-[20px] hover:underline">Contact us</a>

                    <div onClick={handleDownload} className="bg-white rounded-[32px] px-6 py-2 flex flex-row gap-2 cursor-pointer">
                        <MdOutlineFileDownload size={23} color="#00BF63" />
                        <div className="font-semibold text-[#00BF63] font-josefin">Get APK</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
