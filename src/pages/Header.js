import React from "react";
import logo from "../assets/img/logo.png";

function Header() {
  return (
    // <nav className="flex items-center justify-center  bg-white shadow-md">
    //   <hr /> {/* Left Side */}
    //   <div className="flex items-center space-x-4">
    //     <a
    //       href="/"
    //       className="text-gray-500 hover:text-gray-900 font-medium hover:bg-orange-500 px-1.5 py-1 hover:text-white duration-300"
    //     >
    //       Home
    //     </a>
    //     <a
    //       href="/my-account"
    //       className="text-gray-500 hover:text-gray-900 font-medium hover:bg-orange-500 px-1.5 py-1 hover:text-white duration-300"
    //     >
    //       My Account
    //     </a>
    //   </div>
    //   {/* Logo (No Extra Space) */}
    //   <div className="flex items-center mx-4">
    //     <img
    //       src={logo}
    //       alt="logo"
    //       className="h-20 w-48 hover:scale-105 duration-700 cursor-pointer"
    //     />
    //   </div>
    //   {/* Right Side */}
    //   <div className="flex items-center space-x-4">
    //     <a
    //       href="/faq"
    //       className="text-gray-500 hover:text-gray-900 font-medium hover:bg-orange-500 px-1.5 py-1 hover:text-white duration-300"
    //     >
    //       FAQ's
    //     </a>
    //     <a
    //       href="/contact"
    //       className="text-gray-500 hover:text-gray-900 font-medium hover:bg-orange-500 px-1.5 py-1 hover:text-white duration-300"
    //     >
    //       Contact Us
    //     </a>
    //     <button className="text-gray-500 hover:text-orange-500">
    //       <svg
    //         className="h-5 w-5"
    //         fill="none"
    //         stroke="currentColor"
    //         strokeWidth="2"
    //         viewBox="0 0 24 24"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
    //         />
    //       </svg>
    //     </button>
    //   </div>
    // </nav>
    // <header>
    //   <div className="top-bar bg-orange-600 text-white px-12 py-2 flex justify-between items-center text-sm">
    //     <div className="contact-info flex gap-5">
    //       <a href="tel:+4915217208524" className="text-white">
    //         WhatsApp +49 1521 7208524
    //       </a>
    //       <a href="mailto:info@bioalpine.de" className="text-white">
    //         info@bioalpine.de
    //       </a>
    //     </div>
    //     <div className="cart flex items-center gap-1">
    //       <span>0 items</span>
    //     </div>
    //   </div>
    //   <nav className="main-nav bg-white py-4 border-b border-gray-200">
    //     <div className="nav-content max-w-screen-xl mx-auto flex items-center justify-center gap-8 px-5 relative">
    //       <a
    //         href="/"
    //         className="nav-link text-gray-800 text-base font-medium transition-colors duration-300 hover:bg-orange-600 px-1.5 hover:text-white py-1 active:text-orange-600"
    //       >
    //         Home
    //       </a>
    //       <a
    //         href="/account"
    //         className="nav-link text-gray-800 text-base font-medium transition-colors duration-300 hover:bg-orange-600 px-1.5 hover:text-white py-1 active:text-orange-600"
    //       >
    //         My Account
    //       </a>

    //       <a href="/" className="logo mx-10">
    //         <img src={logo} alt="BioAlpine" className="h-20 w-48" />
    //       </a>

    //       <a
    //         href="/faq"
    //         className="nav-link text-gray-800 text-base font-medium transition-colors duration-300 hover:bg-orange-600 px-1.5 hover:text-white py-1 active:text-orange-600"
    //       >
    //         FAQ's
    //       </a>
    //       <a
    //         href="/contact"
    //         className="nav-link text-gray-800 text-base font-medium transition-colors duration-300 hover:bg-orange-600 px-1.5 hover:text-white py-1 active:text-orange-600"
    //       >
    //         Contact Us
    //       </a>

    //       <button className="search-btn bg-none border-none text-lg cursor-pointer p-1">
    //         🔍
    //       </button>
    //     </div>
    //   </nav>
    // </header>
    <header>
      <div className="top-bar bg-orange-600 text-white px-12 py-2 flex justify-between items-center text-sm">
        <div className="contact-info flex gap-5">
          <a href="tel:+4915217208524" className="text-white">
            WhatsApp +49 1521 7208524
          </a>
          <a href="mailto:info@bioalpine.de" className="text-white">
            info@bioalpine.de
          </a>
        </div>
        <div className="cart flex items-center gap-1">
          <span>0 items</span>
        </div>
      </div>
      <nav className="main-nav bg-white py-4 border-b border-gray-200">
        <div className="nav-content max-w-screen-xl mx-auto flex items-center justify-center gap-8 px-5 relative">
          <a
            href="/"
            className="nav-link text-gray-800 text-base font-medium transition-colors duration-300 hover:bg-orange-600 px-1.5 hover:text-white py-1 active:text-orange-600"
          >
            Home
          </a>
          <a
            href="/account"
            className="nav-link text-gray-800 text-base font-medium transition-colors duration-300 hover:bg-orange-600 px-1.5 hover:text-white py-1 active:text-orange-600"
          >
            My Account
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

          <button className="search-btn bg-none border-none text-lg cursor-pointer p-1">
            🔍
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
