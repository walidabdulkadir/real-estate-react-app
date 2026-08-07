import React from "react";
import heroImage from "../assets/photo/heroImage.png";
import { FiMapPin, FiHome, FiDollarSign } from "react-icons/fi";

function HeroSection() {
  return (
    <section id="hero" className="w-full bg-[#fef7f2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Hero Content Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-12 pb-6 lg:pt-16 lg:pb-8">
          {/* Left: Text Block */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="font-black text-4xl sm:text-6xl lg:text-7xl leading-tight tracking-tight text-gray-900">
              Find Your <br />
              Dream Home
            </h1>
            <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-gray-500 font-medium max-w-md mx-auto lg:mx-0 leading-relaxed">
              Explore our curated selection of exquisite properties meticulously
              tailored to your unique dream home vision
            </p>
            <button
              id="hero-signup-btn"
              className="mt-7 sm:mt-8 bg-black text-white font-bold text-sm sm:text-base px-7 sm:px-8 py-3 sm:py-3.5 rounded-xl hover:bg-gray-800 active:scale-95 transition-all duration-200 cursor-pointer shadow-lg shadow-black/10"
            >
              Sign Up
            </button>
          </div>

          {/* Right: House Image */}
          <div className="flex-1 flex justify-center lg:justify-end w-full max-w-sm sm:max-w-md lg:max-w-none">
            <img
              src={heroImage}
              alt="Modern dream home"
              className="w-full max-w-[260px] sm:max-w-sm lg:max-w-lg xl:max-w-xl object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Search Bar */}
        <div className="pb-12 sm:pb-14 pt-2">
          <div className="bg-[#e8d5c9] rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shadow-md">
            {/* Location */}
            <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3.5 flex-1 cursor-pointer hover:shadow-sm transition-shadow duration-200">
              <FiMapPin className="text-[#6b4e3d] w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium text-[#6b4e3d]">Location</span>
            </div>
            {/* Type */}
            <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3.5 flex-1 cursor-pointer hover:shadow-sm transition-shadow duration-200">
              <FiHome className="text-[#6b4e3d] w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium text-[#6b4e3d]">Type</span>
            </div>
            {/* Price Range */}
            <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3.5 flex-1 cursor-pointer hover:shadow-sm transition-shadow duration-200">
              <FiDollarSign className="text-[#6b4e3d] w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium text-[#6b4e3d]">Price Range</span>
            </div>
            {/* Sign Up CTA */}
            <button
              id="search-signup-btn"
              className="bg-[#1e0f08] text-white text-sm font-semibold px-6 py-3.5 rounded-xl hover:bg-[#2d1a0e] active:scale-95 transition-all duration-200 cursor-pointer whitespace-nowrap w-full sm:w-auto"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
