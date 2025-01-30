
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#003B4A] text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Newsletter Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl mb-4">Sign up for success!</h2>
          <p className="text-[#B8B8B8] mb-6 max-w-lg mx-auto">
            Sign up for "subscriber-only" discounts, free samples, and constant
            communication to help you take full control of your health!
          </p>
          <div className="flex gap-2 max-w-lg mx-auto mb-8">
            <input
              type="email"
              placeholder="Enamel"
              className="flex-1 py-3 px-5 bg-[#ffffff1A] text-white border-none rounded-md placeholder-[#B8B8B8]"
            />
            <button className="py-3 px-8 bg-[#8FE5FF] text-[#003B4A] rounded-md font-bold hover:bg-[#6CD9FF] transition-colors">
              Subscribe
            </button>
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <h3 className="mb-4">Follow us</h3>
            <div className="flex gap-4 justify-center">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-[#FF6B00] text-white rounded-md hover:bg-[#FF8533] transition-colors"
              >
                f
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-[#FF6B00] text-white rounded-md hover:bg-[#FF8533] transition-colors"
              >
                𝕏
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-[#FF6B00] text-white rounded-md hover:bg-[#FF8533] transition-colors"
              >
                i
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-[#FF6B00] text-white rounded-md hover:bg-[#FF8533] transition-colors"
              >
                p
              </a>
            </div>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-12 border-t border-[#ffffff1A]">
          <div className="col-span-2">
            <h3 className="text-white text-xl mb-5">We ♥ Bio</h3>
            <p className="text-[#B8B8B8] text-sm leading-relaxed">
              We offer only the very best so that you have full control over
              your health. Organic whey proteins of the highest quality from the
              heart of the German Alps...
            </p>
          </div>
          <div>
            <h3 className="text-white text-xl mb-5">BioAlpine®</h3>
            <ul>
              <li>
                <a href="#" className="text-[#B8B8B8] hover:text-white text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B8B8B8] hover:text-white text-sm">
                  Quality
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B8B8B8] hover:text-white text-sm">
                  Taste
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B8B8B8] hover:text-white text-sm">
                  Health
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B8B8B8] hover:text-white text-sm">
                  Recipes
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B8B8B8] hover:text-white text-sm">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xl mb-5">Latest News</h3>
            <ul>
              <li>
                <a href="#" className="text-[#B8B8B8] hover:text-white text-sm">
                  Exhibitions Fairs
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B8B8B8] hover:text-white text-sm">
                  Gym
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B8B8B8] hover:text-white text-sm">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B8B8B8] hover:text-white text-sm">
                  Athletes/Influencers
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B8B8B8] hover:text-white text-sm">
                  Nutritionists
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xl mb-5">Customer service</h3>
            <ul>
              <li>
                <a href="#" className="text-[#B8B8B8] hover:text-white text-sm">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B8B8B8] hover:text-white text-sm">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B8B8B8] hover:text-white text-sm">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B8B8B8] hover:text-white text-sm">
                  Free Samples
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B8B8B8] hover:text-white text-sm">
                  Our Nutritionists
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xl mb-5">Become our partner</h3>
            <ul>
              <li>
                <a href="#" className="text-[#B8B8B8] hover:text-white text-sm">
                  Gyms Retailers
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B8B8B8] hover:text-white text-sm">
                  Distributors
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B8B8B8] hover:text-white text-sm">
                  Vending Machine Operators
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-4 border-t border-[#ffffff1A] text-sm text-[#B8B8B8]">
          <p>2025 © Musclestädt Sporternährung GmbH - All Rights Reserved.</p>
          <div className="flex gap-5 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white">
              Imprint
            </a>
            <a href="#" className="hover:text-white">
              TERMS
            </a>
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Withdrawal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
