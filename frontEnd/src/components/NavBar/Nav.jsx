import logo from "../../assets/icons/logo.png";
import { useState } from "react";
import { FiUser, FiSearch, FiX, FiMenu } from "react-icons/fi";
import MobileMenu from "./MobileMenu";

const navLinks = ["Home", "Service", "Agents", "Contact"];

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#fef7f2] sticky top-0 z-50 border-b border-[#f0e8e2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Realta logo" className="h-8 w-auto" />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li
              key={link}
              className="text-sm font-medium text-gray-700 cursor-pointer hover:text-black transition-colors duration-200 relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* Right Side Icons + Button */}
        <div className="flex items-center gap-4">
          <FiSearch
            className="h-5 w-5 cursor-pointer text-gray-600 hover:text-black transition-colors duration-200 hidden md:block"
            aria-label="Search"
          />
          <FiUser
            className="h-5 w-5 cursor-pointer text-gray-600 hover:text-black transition-colors duration-200 hidden md:block"
            aria-label="Profile"
          />
          <button
            id="nav-signup-btn"
            className="hidden md:block bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
          >
            Sign Up
          </button>
          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
}

export default Nav;
