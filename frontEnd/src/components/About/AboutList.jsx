import React, { useState } from "react";
import testimonials from "./Data.js";
import AboutCard from "./AboutCard.jsx";

function AboutList() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="w-full bg-[#fef7f2] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-black text-3xl sm:text-4xl text-gray-900 tracking-tight">
            What People Say
            <br />
            About Dwello
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <AboutCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Dot Navigation */}
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              id={`testimonial-dot-${i}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === i
                  ? "w-8 h-3 bg-gray-900"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutList;
