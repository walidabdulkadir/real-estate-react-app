import { FiX } from "react-icons/fi";

const navLinks = ["Home", "Service", "Agents", "Contact"];

function MobileMenu({ isOpen, onClose }) {
  return (
    <div className="md:hidden ">
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm rounded-md"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed inset-y-0 right-0 z-40 w-[80vw] max-w-xs bg-[#fef7f2] shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex items-center  p-5">
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
        <nav className="flex flex-col items-center gap-6 mt-15 px-6">
          {navLinks.map((link) => (
            <span
              key={link}
              className="text-lg font-medium text-black cursor-pointer hover:underline"
              onClick={onClose}
            >
              {link}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
