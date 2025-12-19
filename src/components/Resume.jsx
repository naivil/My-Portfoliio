import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function Resume() {
  const jobRef = useRef(null);

  useEffect(() => {
    if (jobRef.current) {
      new Typed(jobRef.current, {
        strings: [
          "Senior Creative Director",
          "Product Design Lead",
          "UX Designer",
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
      });
    }
  }, []);

  return (
    <section id="resume" className="resume section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span className="subtitle">Resume</span>
        <h2>Resume</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium totam rem aperiam
        </p>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-5">
          <div className="col-lg-6">
            <div className="experience-section">
              <div
                className="section-header"
                data-aos="fade-right"
                data-aos-delay={200}
              >
                <div className="header-content">
                  <span className="section-badge">Experience</span>
                  <h2>Professional Journey</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="experience-cards">
                <div
                  className="exp-card featured"
                  data-aos="zoom-in"
                  data-aos-delay={300}
                >
                  <div className="card-header">
                    <div className="company-logo">
                      <i className="bi bi-buildings" />
                    </div>
                    <div className="period-badge">Current</div>
                  </div>
                  <div className="card-body">
                    <h3 ref={jobRef} />
                    <p className="company-name">Digital Innovation Labs</p>
                    <span className="duration">2023 - Present</span>
                    <p className="description">
                      Ut enim ad minim veniam quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat duis aute.
                    </p>
                    <div className="skills-tags">
                      <span className="skill-tag">Leadership</span>
                      <span className="skill-tag">Strategy</span>
                      <span className="skill-tag">Innovation</span>
                    </div>
                  </div>
                </div>
                <div
                  className="exp-card"
                  data-aos="zoom-in"
                  data-aos-delay={350}
                >
                  <div className="card-header">
                    <div className="company-logo">
                      <i className="bi bi-laptop" />
                    </div>
                  </div>
                  <div className="card-body">
                    <h3>Product Design Lead</h3>
                    <p className="company-name">TechForward Solutions</p>
                    <span className="duration">2020 - 2023</span>
                    <p className="description">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium totam rem
                      aperiam.
                    </p>
                  </div>
                </div>
                <div
                  className="exp-card"
                  data-aos="zoom-in"
                  data-aos-delay={400}
                >
                  <div className="card-header">
                    <div className="company-logo">
                      <i className="bi bi-palette" />
                    </div>
                  </div>
                  <div className="card-body">
                    <h3>UX Designer</h3>
                    <p className="company-name">Creative Studio Inc</p>
                    <span className="duration">2017 - 2020</span>
                    <p className="description">
                      Excepteur sint occaecat cupidatat non proident sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="education-section">
              <div
                className="section-header"
                data-aos="fade-left"
                data-aos-delay={200}
              >
                <div className="header-content">
                  <span className="section-badge">Education</span>
                  <h2>Academic Background</h2>
                  <p>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae consequatur vel illum.
                  </p>
                </div>
              </div>
              <div
                className="education-timeline"
                data-aos="fade-left"
                data-aos-delay={300}
              >
                <div className="timeline-track">
                  <div className="timeline-item">
                    <div className="timeline-marker">
                      <i className="bi bi-mortarboard-fill" />
                    </div>
                    <div className="timeline-content">
                      <div className="education-meta">
                        <span className="year-range">2015 - 2017</span>
                        <span className="degree-level">Masters</span>
                      </div>
                      <h4>Master of Design Innovation</h4>
                      <p className="institution">Institute of Creative Arts</p>
                      <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod tempor incididunt ut labore.
                      </p>
                      <div className="achievement">
                        <i className="bi bi-award" />
                        <span>Summa Cum Laude</span>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker">
                      <i className="bi bi-book" />
                    </div>
                    <div className="timeline-content">
                      <div className="education-meta">
                        <span className="year-range">2011 - 2015</span>
                        <span className="degree-level">Bachelor</span>
                      </div>
                      <h4>Bachelor of Fine Arts</h4>
                      <p className="institution">Creative Arts University</p>
                      <p className="description">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker">
                      <i className="bi bi-patch-check-fill" />
                    </div>
                    <div className="timeline-content">
                      <div className="education-meta">
                        <span className="year-range">2016 - 2023</span>
                        <span className="degree-level">Certificates</span>
                      </div>
                      <h4>Professional Certifications</h4>
                      <div className="certifications-list">
                        <div className="cert-item">
                          <span className="cert-name">
                            Advanced UX Research
                          </span>
                          <span className="cert-year">2023</span>
                        </div>
                        <div className="cert-item">
                          <span className="cert-name">Design Leadership</span>
                          <span className="cert-year">2022</span>
                        </div>
                        <div className="cert-item">
                          <span className="cert-name">Digital Strategy</span>
                          <span className="cert-year">2021</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
