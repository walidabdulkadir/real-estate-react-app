import React, { useState } from "react";
import testimonials from "./Data.js";
import AboutCard from "./AboutCard.jsx";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
function AboutList() {
  return (
    <section id="about" className="w-full bg-[#fdf5ee] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
            What People Say About Dwello
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AboutCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <FiChevronLeft
            type="button"
            className="inline-flex h-12 w-12  p-2 items-center justify-center rounded-full border border-gray-300 bg-black text-white"
            aria-label="Previous testimonial"
          ></FiChevronLeft>
          <FiChevronRight
            type="button"
            className="inline-flex h-12 w-12 p-2 items-center justify-center rounded-full border border-gray-300 bg-black text-white "
            aria-label="Next testimonial"
          ></FiChevronRight>
        </div>
      </div>
    </section>
  );
}

export default AboutList;
