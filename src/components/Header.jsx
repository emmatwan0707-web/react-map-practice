import React from 'react';
import { Link } from 'react-scroll';
import flashlight from '../assets/flashlight.png';

const Header = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

                <div className="flex items-center">
                    <img
                        src={flashlight}
                        alt="flashlight logo"
                        className="w-10 h-10 object-contain rounded-full"
                    />
                </div>

                <ul className="hidden md:flex gap-8 text-sm text-gray-700 font-medium items-center">
                    <li>
                        <Link to="hero" smooth={true} duration={500} offset={-100} className="cursor-pointer hover:text-[#D2DEEB] transition">
                            Mission
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-[#D2DEEB] transition">
                            Initiatives
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500} offset={-60} className="cursor-pointer hover:text-[#D2DEEB] transition">
                            Purpose
                        </Link>
                    </li>

                </ul>
                <p className="text-black/70 hover:text-black cursor-pointer font-black transition-all duration-300 uppercase tracking-tighter text-sm pr-4">
                    Join Us
                </p>


            </div>
        </nav>
    );
};

export default Header;