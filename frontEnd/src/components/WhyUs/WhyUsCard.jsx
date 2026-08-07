import React from "react";

function WhyUsCard({ service }) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 flex flex-col items-start gap-4 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-default group border border-gray-50">
      {/* Icon Container */}
      <div className="w-12 h-12 bg-[#fef7f2] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#f0e8e2] transition-colors duration-300">
        <img src={service.img} alt={service.title} className="w-6 h-6 object-contain" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-base text-gray-900">{service.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{service.detail}</p>
      </div>
    </div>
  );
}

export default WhyUsCard;
