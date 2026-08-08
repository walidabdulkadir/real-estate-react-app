import React from "react";

function AboutCard({ testimonial, isActive }) {
  return (
    <div className="flex flex-col  rounded-md border border-[#f1e4d9] bg-[#e2cebf]">
      <div className="relative w-full overflow-hidden h-52 sm:h-20">
        <img
          src={testimonial.img}
          alt="image"
          className="h-[220] w-full rounded-md object-cover"
        />
      </div>

      <div className="space-y-5 p-6">
        <div className="flex flex-row gap-4 sm:flex-row sm:items-center sm:justify-between ">
          <div className="flex  items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f8ece0] text-sm font-black text-[#b97d44]">
              <img src={testimonial.profile} alt="profile picture" />
            </div>
            <div>
              <h3 className="font-extrabold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="font-semibold text-gray-900">
                {testimonial.location}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 rounded-md bg-[#ffff] px-4 py-2 text-sm font-semibold text-gray-900">
            <img src={testimonial.icon} alt="rating" className="h-4 w-4" />
            <span>5.0</span>
          </div>
        </div>
        <div>
          <p className="text-sm leading-7  sm:text-base">
            {testimonial.comment}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
