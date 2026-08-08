import React from "react";

function WhyUsCard({ service }) {
  return (
    <div className=" bg-[#e4d5ca] rounded-2xl p-6 sm:p-7 flex flex-col items-start gap-4 ">
      <div className="w-13 h-13 bg-[#ffffff] rounded-md flex items-center justify-center shrink-0 ">
        <img
          src={service.img}
          alt={service.title}
          className="w-6 h-6 object-contain"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-base text-gray-900">{service.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          {service.detail}
        </p>
      </div>
    </div>
  );
}

export default WhyUsCard;
