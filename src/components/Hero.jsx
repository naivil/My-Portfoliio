import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function Hero() {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings: ["Designer", "Developer", "Freelancer", "Photographer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
      });
    }
    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <img src="assets/img/profile/profile-bg-5.webp" alt data-aos="fade-in" />
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2>Hi, I'm Alex Morgan</h2>
            <p>
              I'm a <span className="typed" ref={typedRef} />
              <span className="typed-cursor" aria-hidden="true" />
            </p>
            <div className="social-links">
              <a href="#">
                <i className="bi bi-twitter-x" />
              </a>
              <a href="#">
                <i className="bi bi-facebook" />
              </a>
              <a href="#">
                <i className="bi bi-instagram" />
              </a>
              <a href="#">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
