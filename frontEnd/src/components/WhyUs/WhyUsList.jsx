import React from "react";
import services from "./Data.js";
import WhyUsCard from "./WhyUsCard.jsx";

function WhyUs() {
  return (
    <>
      <div>
        <h1>Why Choose Us</h1>
        <p>
          Elevating your home buying experience with expertise , integrity,{" "}
          <br />
          ,and unmatched personalized services
        </p>
      </div>
      <div>
        {services.map((service) => (
          <div key={service.id}>
            <WhyUsCard service={service} />
          </div>
        ))}
      </div>
    </>
  );
}

export default WhyUs;
