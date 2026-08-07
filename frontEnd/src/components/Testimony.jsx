import React from "react";
import HeroImage2 from "../assets/photo/HeroImage2.png";

const stats = [
  { value: "8K+", label: "Houses Available" },
  { value: "6K+", label: "Houses Sold" },
  { value: "2K+", label: "Trusted Agents" },
];

function Testimony() {
  return (
    <section id="about" className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left: Property Image */}
          <div className="flex-1 w-full flex justify-center">
            <img
              src={HeroImage2}
              alt="Beautiful property at dusk"
              className="w-full max-w-[320px] sm:max-w-md lg:max-w-none rounded-3xl object-cover shadow-xl"
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-black text-3xl sm:text-4xl text-gray-900 leading-snug tracking-tight">
              We Help You To Find <br />
              Your Dream Home
            </h2>
            <p className="mt-5 text-sm sm:text-base text-gray-500 leading-relaxed max-w-md mx-auto lg:mx-0">
              From cozy cottages to luxurious estates, our dedicated team guides
              you through every step of the journey, ensuring your dream home
              becomes a reality.
            </p>

            {/* Stats Row */}
            <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-black text-3xl sm:text-4xl text-gray-900">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimony;
