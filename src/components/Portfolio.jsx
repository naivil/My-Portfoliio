import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function Portfolio() {
  const projectRef = useRef(null);

  useEffect(() => {
    if (projectRef.current) {
      new Typed(projectRef.current, {
        strings: [
          "Creative Design",
          "Digital Experience",
          "Brand Strategy",
          "Development",
          "Marketing",
          "Analytics",
        ],
        typeSpeed: 85,
        backSpeed: 50,
        loop: true,
      });
    }
  }, []);

  return (
    <section id="portfolio" className="portfolio section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span className="subtitle">Portfolio</span>
        <h2>Portfolio</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium totam rem aperiam
        </p>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <ul
            className="portfolio-filters isotope-filters"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <li data-filter="*" className="filter-active">
              All Work
            </li>
            <li data-filter=".filter-creative">Creative</li>
            <li data-filter=".filter-digital">Digital</li>
            <li data-filter=".filter-strategy">Strategy</li>
            <li data-filter=".filter-development">Development</li>
          </ul>
          <div
            className="row gy-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-creative">
              <div className="portfolio-card">
                <div className="portfolio-image-container">
                  <img
                    src="assets/img/portfolio/portfolio-1.webp"
                    alt="Creative Project"
                    className="img-fluid"
                    loading="lazy"
                  />
                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <span className="project-category" ref={projectRef} />
                      <h4>Visual Identity System</h4>
                    </div>
                    <div className="portfolio-actions">
                      <a
                        href="assets/img/portfolio/portfolio-1.webp"
                        className="glightbox portfolio-link"
                      >
                        <i className="bi bi-plus-lg" />
                      </a>
                      <a href="#" className="portfolio-details">
                        <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-meta">
                  <div className="project-tags">
                    <span className="tag">Branding</span>
                    <span className="tag">Identity</span>
                  </div>
                  <div className="project-year">2024</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-digital">
              <div className="portfolio-card">
                <div className="portfolio-image-container">
                  <img
                    src="assets/img/portfolio/portfolio-2.webp"
                    alt="Digital Project"
                    className="img-fluid"
                    loading="lazy"
                  />
                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <span className="project-category">
                        Digital Experience
                      </span>
                      <h4>Interactive Web Platform</h4>
                    </div>
                    <div className="portfolio-actions">
                      <a
                        href="assets/img/portfolio/portfolio-2.webp"
                        className="glightbox portfolio-link"
                      >
                        <i className="bi bi-plus-lg" />
                      </a>
                      <a href="#" className="portfolio-details">
                        <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-meta">
                  <div className="project-tags">
                    <span className="tag">Web Design</span>
                    <span className="tag">Development</span>
                  </div>
                  <div className="project-year">2024</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-strategy">
              <div className="portfolio-card">
                <div className="portfolio-image-container">
                  <img
                    src="assets/img/portfolio/portfolio-3.webp"
                    alt="Strategy Project"
                    className="img-fluid"
                    loading="lazy"
                  />
                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <span className="project-category">Brand Strategy</span>
                      <h4>Market Positioning</h4>
                    </div>
                    <div className="portfolio-actions">
                      <a
                        href="assets/img/portfolio/portfolio-3.webp"
                        className="glightbox portfolio-link"
                      >
                        <i className="bi bi-plus-lg" />
                      </a>
                      <a href="#" className="portfolio-details">
                        <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-meta">
                  <div className="project-tags">
                    <span className="tag">Strategy</span>
                    <span className="tag">Consulting</span>
                  </div>
                  <div className="project-year">2023</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-development">
              <div className="portfolio-card">
                <div className="portfolio-image-container">
                  <img
                    src="assets/img/portfolio/portfolio-4.webp"
                    alt="Development Project"
                    className="img-fluid"
                    loading="lazy"
                  />
                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <span className="project-category">Full Stack</span>
                      <h4>Custom Application</h4>
                    </div>
                    <div className="portfolio-actions">
                      <a
                        href="assets/img/portfolio/portfolio-4.webp"
                        className="glightbox portfolio-link"
                      >
                        <i className="bi bi-plus-lg" />
                      </a>
                      <a href="#" className="portfolio-details">
                        <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-meta">
                  <div className="project-tags">
                    <span className="tag">React</span>
                    <span className="tag">Node.js</span>
                  </div>
                  <div className="project-year">2024</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-creative">
              <div className="portfolio-card">
                <div className="portfolio-image-container">
                  <img
                    src="assets/img/portfolio/portfolio-5.webp"
                    alt="Creative Project"
                    className="img-fluid"
                    loading="lazy"
                  />
                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <span className="project-category">Art Direction</span>
                      <h4>Campaign Design</h4>
                    </div>
                    <div className="portfolio-actions">
                      <a
                        href="assets/img/portfolio/portfolio-5.webp"
                        className="glightbox portfolio-link"
                      >
                        <i className="bi bi-plus-lg" />
                      </a>
                      <a href="#" className="portfolio-details">
                        <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-meta">
                  <div className="project-tags">
                    <span className="tag">Creative</span>
                    <span className="tag">Campaign</span>
                  </div>
                  <div className="project-year">2024</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-digital">
              <div className="portfolio-card">
                <div className="portfolio-image-container">
                  <img
                    src="assets/img/portfolio/portfolio-6.webp"
                    alt="Digital Project"
                    className="img-fluid"
                    loading="lazy"
                  />
                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <span className="project-category">Digital Product</span>
                      <h4>Mobile Experience</h4>
                    </div>
                    <div className="portfolio-actions">
                      <a
                        href="assets/img/portfolio/portfolio-6.webp"
                        className="glightbox portfolio-link"
                      >
                        <i className="bi bi-plus-lg" />
                      </a>
                      <a href="#" className="portfolio-details">
                        <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-meta">
                  <div className="project-tags">
                    <span className="tag">Mobile</span>
                    <span className="tag">UI/UX</span>
                  </div>
                  <div className="project-year">2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="portfolio-bottom"
          data-aos="fade-up"
          data-aos-delay={400}
        >
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3>Like what you see?</h3>
              <p>
                Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor
                eget felis porttitor volutpat.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="#contact" className="btn btn-accent">
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
