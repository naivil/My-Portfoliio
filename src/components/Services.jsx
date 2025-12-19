import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function Services() {
  const serviceRef = useRef(null);

  useEffect(() => {
    if (serviceRef.current) {
      new Typed(serviceRef.current, {
        strings: [
          "Brand Identity",
          "UI/UX Design",
          "Development",
          "Mobile Apps",
          "Digital Marketing",
          "SEO Services",
        ],
        typeSpeed: 90,
        backSpeed: 50,
        loop: true,
      });
    }
  }, []);

  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span className="subtitle">Services</span>
        <h2>Services</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium totam rem aperiam
        </p>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4">
          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <div className="service-item">
              <div className="icon-wrapper">
                <i className="bi bi-palette" />
              </div>
              <h4 ref={serviceRef} />
              <p>
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus vivamus magna.
              </p>
              <a href="service-details.html" className="read-more">
                <span>Explore</span>
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <div className="service-item featured">
              <div className="featured-tag">Featured</div>
              <div className="icon-wrapper">
                <i className="bi bi-layout-text-window-reverse" />
              </div>
              <h4>UI/UX Design</h4>
              <p>
                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                dui donec rutrum.
              </p>
              <a href="service-details.html" className="read-more">
                <span>Explore</span>
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay={300}
          >
            <div className="service-item">
              <div className="icon-wrapper">
                <i className="bi bi-code-slash" />
              </div>
              <h4>Development</h4>
              <p>
                Praesent sapien massa convallis a pellentesque nec egestas non
                nisi cras ornare arcu.
              </p>
              <a href="service-details.html" className="read-more">
                <span>Explore</span>
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay={400}
          >
            <div className="service-item">
              <div className="icon-wrapper">
                <i className="bi bi-phone" />
              </div>
              <h4>Mobile Apps</h4>
              <p>
                Vivamus suscipit tortor eget felis porttitor volutpat quisque
                velit nisi pretium ut lacinia.
              </p>
              <a href="service-details.html" className="read-more">
                <span>Explore</span>
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <div className="service-item">
              <div className="icon-wrapper">
                <i className="bi bi-megaphone" />
              </div>
              <h4>Digital Marketing</h4>
              <p>
                Nulla porttitor accumsan tincidunt curabitur aliquet quam id dui
                posuere blandit mauris.
              </p>
              <a href="service-details.html" className="read-more">
                <span>Explore</span>
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <div className="service-item">
              <div className="icon-wrapper">
                <i className="bi bi-search" />
              </div>
              <h4>SEO Services</h4>
              <p>
                Pellentesque in ipsum id orci porta dapibus donec sollicitudin
                molestie malesuada proin.
              </p>
              <a href="service-details.html" className="read-more">
                <span>Explore</span>
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay={300}
          >
            <div className="service-item">
              <div className="icon-wrapper">
                <i className="bi bi-graph-up-arrow" />
              </div>
              <h4>Analytics</h4>
              <p>
                Sed porttitor lectus nibh curabitur arcu erat accumsan id
                imperdiet et porttitor at sem.
              </p>
              <a href="service-details.html" className="read-more">
                <span>Explore</span>
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay={400}
          >
            <div className="service-item">
              <div className="icon-wrapper">
                <i className="bi bi-shield-check" />
              </div>
              <h4>Security</h4>
              <p>
                Vivamus magna justo lacinia eget consectetur sed convallis at
                tellus mauris blandit aliquet.
              </p>
              <a href="service-details.html" className="read-more">
                <span>Explore</span>
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12" data-aos="fade-up" data-aos-delay={200}>
            <div className="cta-box">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <h3>Transform Your Vision Into Reality</h3>
                  <p>
                    Partner with us to bring your ideas to life with innovative
                    solutions tailored to your needs
                  </p>
                </div>
                <div className="col-lg-4 text-lg-end text-center">
                  <a href="service-details.html" className="cta-btn">
                    Start Your Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
