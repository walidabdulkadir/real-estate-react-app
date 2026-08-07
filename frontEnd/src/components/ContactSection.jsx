import React from "react";
import { FiHeadphones, FiMessageSquare } from "react-icons/fi";

function ContactSection() {
  return (
    <section id="contact" className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-[#fef7f2] rounded-3xl px-6 sm:px-10 lg:px-16 py-14 sm:py-16 text-center">
          <h2 className="font-black text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Do You Have Any Questions?
            <br />
            Get Help From Us
          </h2>

          {/* Help Options */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
            <div className="flex items-center gap-2.5 text-sm text-gray-600 font-medium">
              <FiHeadphones className="w-5 h-5 text-gray-500" />
              <span>Chat with our support team</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-gray-600 font-medium">
              <FiMessageSquare className="w-5 h-5 text-gray-500" />
              <span>Browse our FAQ</span>
            </div>
          </div>

          {/* Email input row */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            <input
              id="contact-email-input"
              type="email"
              placeholder="Enter your email address"
              className="flex-1 w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200 placeholder:text-gray-400"
            />
            <button
              id="contact-submit-btn"
              className="w-full sm:w-auto bg-black text-white font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-gray-800 active:scale-95 transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
