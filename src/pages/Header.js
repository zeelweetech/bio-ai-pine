// import React from "react";
// import logo from "../assets/img/logo.png";

// function Header() {
//   return (
//     <header>
//       <div className="top-bar bg-orange-600 text-white px-12 py-2 flex justify-between items-center text-sm">
//         <div className="contact-info flex gap-5">
//           <a href="tel:+4915217208524" className="text-white">
//             WhatsApp +49 1521 7208524
//           </a>
//           <a href="mailto:info@bioalpine.de" className="text-white">
//             info@bioalpine.de
//           </a>
//         </div>
//         <div className="cart flex items-center gap-1">
//           <span>0 items</span>
//         </div>
//       </div>
//       <nav className="main-nav bg-white py-4 border-b border-gray-200">
//         <div className="nav-content max-w-screen-xl mx-auto flex items-center justify-center gap-8 px-5 relative">
//           <a
//             href="/"
//             className="nav-link text-gray-800 text-base font-medium transition-colors duration-300 hover:bg-orange-600 px-1.5 hover:text-white py-1 active:text-orange-600"
//           >
//             Home
//           </a>
//           <a
//             href="/account"
//             className="nav-link text-gray-800 text-base font-medium transition-colors duration-300 hover:bg-orange-600 px-1.5 hover:text-white py-1 active:text-orange-600"
//           >
//             My Account
//           </a>

//           <a href="/" className="logo mx-10">
//             <img src={logo} alt="BioAlpine" className="h-20 w-48" />
//           </a>

//           <a
//             href="/faq"
//             className="nav-link text-gray-800 text-base font-medium transition-colors duration-300 hover:bg-orange-600 px-1.5 hover:text-white py-1 active:text-orange-600"
//           >
//             FAQ's
//           </a>
//           <a
//             href="/contact"
//             className="nav-link text-gray-800 text-base font-medium transition-colors duration-300 hover:bg-orange-600 px-1.5 hover:text-white py-1 active:text-orange-600"
//           >
//             Contact Us
//           </a>

//           <button className="search-btn bg-none border-none text-lg cursor-pointer p-1">
//             🔍
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;

import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import { CiSearch } from "react-icons/ci";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="top-bar bg-orange-600 text-white px-12 py-2 flex justify-between items-center text-sm">
        {/* <div className="contact-info flex gap-5">
          <a href="tel:+4915217208524" className="text-white">
            WhatsApp +49 1521 7208524
          </a>
          <a href="mailto:info@bioalpine.de" className="text-white">
            info@bioalpine.de
          </a>
        </div> */}
        {/* <div className="contact-info flex gap-5 xl:flex-row lg:flex-row md:flex-col max-sm:flex-col sm:flex-col ">
          <a href="tel:+4915217208524" className="text-white">
            WhatsApp +49 1521 7208524
          </a>
          <a href="mailto:info@bioalpine.de" className="text-white">
            info@bioalpine.de
          </a>
        </div> */}
        <div className="contact-info flex gap-1 xl:flex-row lg:flex-row md:flex-col max-sm:flex-col sm:flex-col text-center max-sm:text-center md:text-left">
          <a href="tel:+4915217208524" className="text-white">
            WhatsApp +49 1521 7208524
          </a>
          <a href="mailto:info@bioalpine.de" className="text-white">
            info@bioalpine.de
          </a>
        </div>

        <div className="cart flex items-center gap-1 hidden lg:flex">
          <span>0 items</span>
        </div>
      </div>
      <nav className="main-nav bg-white py-4 border-b border-gray-200">
        <div className="nav-content max-w-screen-xl mx-auto flex items-center justify-center gap-8 px-5 relative">
          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <a
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

            <a href="/" className="logo mx-10">
              <img src={logo} alt="BioAlpine" className="h-20 w-48" />
            </a>

            <a
              href="/faq"
              className="nav-link text-gray-800 text-base font-medium transition-colors duration-300 hover:bg-orange-600 px-1.5 hover:text-white py-1 active:text-orange-600"
            >
              FAQ's
            </a>
            <a
              href="/contact"
              className="nav-link text-gray-800 text-base font-medium transition-colors duration-300 hover:bg-orange-600 px-1.5 hover:text-white py-1 active:text-orange-600"
            >
              Contact Us
            </a>
            <a
              href="/product"
              className="nav-link text-gray-800 text-base font-medium transition-colors duration-300 hover:bg-orange-600 px-1.5 hover:text-white py-1 active:text-orange-600"
            >
              Product
            </a>

            <button className="search-btn bg-none border-none text-lg cursor-pointer hover:text-orange-500 p-1">
              <CiSearch />
            </button>
          </div>
          <a href="/" className="logo mx-10 block text-center lg:hidden">
            <img src={logo} alt="BioAlpine" className="h-16 w-48" />
          </a>
          <button
            onClick={toggleMenu}
            className="lg:hidden text-2xl text-gray-800"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${
            isMenuOpen ? "block" : "hidden"
          } bg-white py-4`}
        >
          <a
            href="/"
            className="block text-gray-800 text-base font-medium py-2 px-5"
          >
            Home
          </a>
          <a
            href="/about"
            className="block text-gray-800 text-base font-medium py-2 px-5"
          >
            About Us
          </a>

          <a
            href="/faq"
            className="block text-gray-800 text-base font-medium py-2 px-5"
          >
            FAQ's
          </a>
          <a
            href="/contact"
            className="block text-gray-800 text-base font-medium py-2 px-5"
          >
            Contact Us
          </a>
          <a
            href="/product"
            className="block text-gray-800 text-base font-medium py-2 px-5"
          >
            Product
          </a>

          <button className="search-btn bg-none border-none text-lg cursor-pointer hover:text-orange-50 p-1 mx-auto block text-center">
            <CiSearch />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
