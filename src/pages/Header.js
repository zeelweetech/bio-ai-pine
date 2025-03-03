import React, { useState } from "react";
import logo from "../assets/img/logo.png";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            {/* <div className="top-bar text-white px-12 py-2 flex justify-center items-center text-sm">
                <div className="contact-info flex gap-1 xl:flex-row lg:flex-row md:flex-col max-sm:flex-col sm:flex-col text-center max-sm:text-center md:text-left">
                    <a href="tel:+4915217208524" className="text-black">
                        WhatsApp +49 1521 7208524
                    </a>
                    <a href="mailto:info@bioalpine.de" className="text-black">
                        info@bioalpine.de
                    </a>
                </div>
            </div> */}
            <nav className="bg-gray-50">
                <div className="nav-content h-30 flex item-center flex justify-center px-5 relative">
                    <div className="hidden lg:flex items-center gap-2 flex justyfy-center items-center">
                        <a href="/" className="logo mx-10">
                            <img src={logo} alt="BioAlpine" className="h-40 w-60" />
                        </a>
                        {/* <a
                            href="/"
                            className="nav-link text-gray-800 text-base font-medium transition-colors duration-300 hover:bg-orange-600 px-1.5 hover:text-white py-1 active:text-orange-600"
                        >
                            Home
                        </a>
                        <a
                            href="/about"
                            className="nav-link text-gray-800 text-base font-medium transition-colors duration-300 hover:bg-orange-600 px-1.5 hover:text-white py-1 active:text-orange-600"
                        >
                            About us
                        </a>
                        <a
                            href="/faq"
                            className="nav-link text-gray-800 text-base font-medium duration-300 hover:text-black font-semibold px-1.5 py-1 hover:underline hover:decoration-red-500 hover:decoration-2 hover:underline-offset-4"
                        >
                            FAQ's
                        </a>
                        <a
                            href="/contact"
                            className="nav-link text-gray-800 text-base font-medium duration-300 hover:text-black font-semibold px-1.5 py-1 hover:underline hover:decoration-red-500 hover:decoration-2 hover:underline-offset-4"
                        >
                            Contact Us
                        </a>
                        <a
                            href="/product"
                            className="nav-link text-gray-800 text-base font-medium transition-colors duration-300 hover:bg-orange-600 px-1.5 hover:text-white py-1 active:text-orange-600"
                        >
                            Product
                        </a> */}
                    </div>
                    <div className="flex justyfy-around items-center">
                        <a href="/" className="logo mx-10  lg:hidden">
                            <img src={logo} alt="BioAlpine" className="h-20 w-48" />
                        </a>
                        {/* <button
                            onClick={toggleMenu}
                            className="lg:hidden text-2xl flex-col text-gray-800"
                        >
                            ☰
                        </button> */}
                    </div>
                </div>

                <div
                    className={`lg:hidden ${isMenuOpen ? "block" : "hidden"
                        } bg-white py-4`}
                >
                    <div></div>
                    {/* <a
                        href="/"
                        className="block text-gray-500 text-base font-medium duration-300 hover:text-black font-semibold py-2 text-start ml-10"
                    >
                        Home
                    </a>
                    <a
                        href="/about"
                        className="block text-gray-500 text-base font-medium duration-300 hover:text-black font-semibold py-2 text-start ml-10"
                    >
                        About Us
                    </a>
                    <a
                        href="/faq"
                        className="block text-gray-500 text-base font-medium duration-300 hover:text-black font-semibold py-2 text-start ml-10"
                    >
                        FAQ's
                    </a>
                    <a
                        href="/contact"
                        className="block text-gray-500 text-base font-medium duration-300 hover:text-black font-semibold py-2 text-start ml-10"
                    >
                        Contact Us
                    </a>
                    <a
                        href="/product"
                        className="block text-gray-800 text-base font-medium py-2 px-5"
                    >
                        Product
                    </a> */}
                </div >
            </nav >
        </header >
    );
}

export default Header;
