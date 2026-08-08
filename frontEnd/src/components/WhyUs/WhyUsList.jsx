import React from "react";
import services from "./Data.js";
import WhyUsCard from "./WhyUsCard.jsx";

function WhyUsList() {
  return (
    <section
      id="why-us"
      className="w-full bg-[#ffffff] py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-black text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Why Choose Us
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500 max-w-lg mx-auto leading-relaxed">
            Elevating your home buying experience with expertise, integrity, and
            unmatched personalized services
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((service) => (
            <WhyUsCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUsList;
