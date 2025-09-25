import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <h2 className="section-title">Depoimento</h2>
      <div className="testimonial-card">
        <blockquote className="testimonial-quote">
          <p>
            "O Lucas é uma pessoa extremamente dedicada e focada em seus
            estudos. Sua disciplina e paixão pelo aprendizado são admiráveis e
            inspiradoras para todos ao seu redor. Tenho certeza de que seu
            empenho o levará a grandes conquistas."
          </p>
          <cite>— Marco Zerbinatti</cite>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonial;
