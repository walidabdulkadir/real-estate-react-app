import React from "react";
import houses from "./Data.js";
import ResidenceCard from "./ResidenceCard.jsx";

function ResidanceList() {
  return (
    <section id="residences" className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-black text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Our Popular Residences
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-lg mx-auto leading-relaxed">
            Discover handpicked luxury properties from our most sought-after listings
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {houses.map((house, index) => (
            <ResidenceCard key={index} house={house} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResidanceList;
