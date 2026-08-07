import { FiX } from "react-icons/fi";

const navLinks = ["Home", "Service", "Agents", "Contact"];

function MobileMenu({ isOpen, onClose }) {
  return (
    <div className="md:hidden">
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      {/* Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-[80vw] max-w-xs bg-[#fef7f2] shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex items-center justify-end p-5">
          <button
            id="mobile-menu-close"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-black hover:bg-gray-200 transition-colors duration-200"
            onClick={onClose}
            aria-label="Close mobile menu"
            type="button"
          >
            <FiX size={20} />
          </button>
        </div>
        <nav className="flex flex-col items-center gap-6 mt-8 px-6">
          {navLinks.map((link) => (
            <span
              key={link}
              className="text-lg font-medium text-black cursor-pointer hover:underline underline-offset-4 transition-all duration-200"
              onClick={onClose}
            >
              {link}
            </span>
          ))}
          <button
            id="mobile-signup-btn"
            className="mt-4 w-full bg-black text-white text-sm font-semibold py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
          >
            Sign Up
          </button>
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
