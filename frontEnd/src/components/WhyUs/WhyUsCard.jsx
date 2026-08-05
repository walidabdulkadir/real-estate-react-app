import React from "react";

function WhyUsCard({ service }) {
  return (
    <section>
      <div>
        <div>
          <img src={service.img} alt="" />
        </div>
        <div>
          <h2>{service.title}</h2>
          <p>{service.detail}</p>
        </div>
      </div>
    </section>
  );
}

export default WhyUsCard;
