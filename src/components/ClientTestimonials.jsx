{
  /* import React, { useEffect, useState } from "react";
import ClientTestimonial from "./Testimonial";

const testimonials = () => {
  const [clientTestimonials, setClientTestimonials] = useState([]);

  const getClientTestimonials = async () => {
    const res = await fetch(
      "https://win24-assignment.azurewebsites.net/api/testimonials"
    );

    const data = await res.json();
    setClientTestimonials(data);
  };
  useEffect(() => {
    getClientTestimonials();
  }, []);

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-content">
          <h3 className="h4 section-title">
            Clients are
            <br />
            Loving Our App
          </h3>

          {clientTestimonials.map((clientTestimonial) => (
            <ClientTestimonial
              key={clientTestimonial.id}
              item={clientTestimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default testimonials;

*/
}
