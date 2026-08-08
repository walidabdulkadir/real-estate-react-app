import React from "react";
import { FiHeadphones, FiMessageSquare, FiMail } from "react-icons/fi";

function ContactSection() {
  return (
    <section id="contact" className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className=" px-6 sm:px-10 lg:px-16 py-14 sm:py-16 text-center">
          <h2 className="font-black text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Do You Have Any Questions? <br />
            Get Help From Us
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
            <div className="flex items-center gap-2.5 text-sm text-gray-600 font-medium">
              <FiHeadphones className="w-5 h-5 text-gray-500" />
              <span>Chat live with our support team</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-gray-600 font-medium">
              <FiMessageSquare className="w-5 h-5 text-gray-500" />
              <span>Browse our FAQ</span>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            <input
              id="contact-email-input"
              type="email"
              placeholder="Enter your email address......"
              className="flex-1 w-full bg-[#e4d5ca] border border-gray-200 rounded-md px-5 py-3.5 text-sm text-black outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200 placeholder:text-black"
            />

            <button
              id="contact-submit-btn"
              className="w-full sm:w-auto bg-black text-white font-semibold text-sm px-7 py-3.5 rounded-md  cursor-pointer whitespace-nowrap"
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
