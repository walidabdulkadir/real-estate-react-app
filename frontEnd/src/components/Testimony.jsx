import React from "react";
import HeroImage2 from "../assets/photo/HeroImage2.png";

function Testimony() {
  return (
    <section className="absolute top-290 w-full h-150 bg-white flex-col items-center justify-center md:flex md:flex-row ">
      <div className="w-50%">
        <img src={HeroImage2} alt="hero" className="p-3" />
      </div>
      <div className="w-50%">
        <div className="p-5 tracking-wide">
          <h1 className="font-extrabold text-3xl">
            We Help You To Find <br />
            Your Dream Home{" "}
          </h1>
          <p className="text-sm">
            From cozy cottages to luxurious estates, our dedicated team guides
            you through every step of the journey, ensuring your dream home
            becomes a reality.
          </p>
          <div className="grid grid-cols-3">
            <div>
              <p className="font-bold text-3xl">8K+</p>
              <p>Houses Available</p>
            </div>
            <div>
              {" "}
              <p className="font-bold text-3xl">6K+</p>
              <p>Houses Sold</p>
            </div>
            <div>
              {" "}
              <p className="font-bold text-3xl">2K+</p>
              <p>Trusted Agents</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimony;
