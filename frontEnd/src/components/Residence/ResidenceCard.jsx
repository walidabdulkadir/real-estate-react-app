import React from "react";

function ResidenceCard({ house }) {
  return (
    <div className="bg-[#e4d5ca] rounded-2xl overflow-hidden shadow-sm  cursor-pointer group border border-gray-100">
      {/* Property Image */}
      <div className="relative overflow-hidden h-52 sm:h-56">
        <img
          src={house.image}
          alt={house.location}
          className="w-full h-full object-cover "
        />
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex flex-col gap-3">
        {/* Location */}
        <div className="flex items-center gap-2">
          <img
            src={house.icon}
            alt="location icon"
            className="w-5 h-5  object-contain "
          />
          <span className="text-lg font-bold   truncate">{house.location}</span>
        </div>

        {/* Room & Size Info */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5 ">
            <img
              src={house.room}
              alt="rooms icon"
              className="w-5 h-5  object-contain bg-white rounded-sm"
            />
            <span className="text-xs text-gray-500 font-medium">
              {house.amountRooms}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <img
              src={house.size}
              alt="size icon"
              className="w-5 h-5  object-contain bg-white rounded-sm"
            />
            <span className="text-xs text-gray-500 font-medium">
              {house.sizeLength}
            </span>
          </div>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-3 ">
          <button className="bg-black text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-gray-800 active:scale-95 transition-all duration-200 cursor-pointer shrink-0">
            View Details
          </button>
          <span className="font-black text-lg sm:text-xl text-gray-900">
            {house.money}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ResidenceCard;
