import React from "react";
import heroImage from "../assets/photo/heroImage.png";
import { FiMapPin, FiHome, FiDollarSign } from "react-icons/fi";
import { PiCoin } from "react-icons/pi";

function HeroSection() {
  return (
    <section className=" ml-3 lg:flex justify-center items-center lg:mt-100 md:ml-30">
      <div className=" absolute md:flex">
        <div className="sm:mt-10 md:mt-7 lg:mt-5">
          <h1 className="font-extrabold text-6xl  ">
            Find Your <br /> Dream Home
          </h1>
          <p className="mt-7 text-lg font-medium">
            Explore our curated selection of exquisite properties meticulously{" "}
            <br />
            tailored to your unique dream home vision
          </p>
          <button
            type="button"
            className="bg-black w-45  text-white text-lg font-bold cursor-pointer p-3 m-7 rounded-md"
          >
            sign up
          </button>
        </div>
        <div className=" ">
          <img src={heroImage} alt="" className="lg:mt-0" />
        </div>
        <div className="flex justify-center items-center md:absolute bottom-0 left-50 top-155">
          <div className="grid grid-cols-2  w-87 h-auto mr-3 mb-15 rounded-2xl border-none bg-[#ddc7bb] sm:grid-cols-2 sm:w-100 md:grid-cols-4 md:w-auto md:h-30 ">
            <div className="flex justify-center items-center gap-9 w-35 bg-white rounded-md py-1 px-2 m-5 text-[#5b473c] font-medium ">
              Location
              <FiMapPin size={20} />
            </div>
            <div className="flex justify-center items-center gap-18 w-35 bg-white rounded-md py-1 px-2 m-5 text-[#5b473c] font-medium ">
              Type
              <FiHome size={20} />
            </div>
            <div className="flex justify-center items-center gap-4.5 w-35 bg-white rounded-md py-1 px-2 m-5 text-[#5b473c] font-medium ">
              Price Range
              <FiDollarSign size={20} />
            </div>
            <button className="flex justify-center items-center gap-9 w-35  rounded-md py-2 px-2 m-5 text-[white] bg-[#2b1b12] font-medium ">
              sign up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
