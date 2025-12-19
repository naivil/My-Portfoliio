import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function About() {
  const roleRef = useRef(null);

  useEffect(() => {
    if (roleRef.current) {
      new Typed(roleRef.current, {
        strings: [
          "Full Stack Developer",
          "UI/UX Designer",
          "Creative Technologist",
        ],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true,
      });
    }
  }, []);

  return (
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span className="subtitle">About Me</span>
        <h2>About Me</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium totam rem aperiam
        </p>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-5">
          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={150}>
            <div className="profile-card">
              <div className="profile-header">
                <div className="profile-avatar">
                  <img
                    src="assets/img/profile/profile-square-3.webp"
                    className="img-fluid"
                    alt
                  />
                  <div className="status-indicator" />
                </div>
                <h3>Jordan Mitchell</h3>
                <span className="role" ref={roleRef} />
                <div className="rating">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-half" />
                  <span>4.8</span>
                </div>
              </div>
              <div className="profile-stats">
                <div className="stat-item">
                  <h4>156</h4>
                  <p>Projects</p>
                </div>
                <div className="stat-item">
                  <h4>8+</h4>
                  <p>Years</p>
                </div>
                <div className="stat-item">
                  <h4>42</h4>
                  <p>Awards</p>
                </div>
              </div>
              <div className="profile-actions">
                <a href="#" className="btn-primary">
                  <i className="bi bi-download" /> Download CV
                </a>
                <a href="#" className="btn-secondary">
                  <i className="bi bi-envelope" /> Contact
                </a>
              </div>
              <div className="social-connect">
                <a href="#">
                  <i className="bi bi-linkedin" />
                </a>
                <a href="#">
                  <i className="bi bi-github" />
                </a>
                <a href="#">
                  <i className="bi bi-twitter" />
                </a>
                <a href="#">
                  <i className="bi bi-instagram" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8" data-aos="fade-left" data-aos-delay={200}>
            <div className="content-wrapper">
              <div className="bio-section">
                <div className="section-tag">About Me</div>
                <h2>Transforming Ideas into Digital Reality</h2>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi.
                </p>
                <p>
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae sint
                  et molestiae non recusandae.
                </p>
              </div>
              <div className="details-grid">
                <div
                  className="detail-item"
                  data-aos="fade-up"
                  data-aos-delay={250}
                >
                  <i className="bi bi-briefcase" />
                  <div className="detail-content">
                    <span>Experience</span>
                    <strong>8+ Years</strong>
                  </div>
                </div>
                <div
                  className="detail-item"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <i className="bi bi-mortarboard" />
                  <div className="detail-content">
                    <span>Degree</span>
                    <strong>Master of Science</strong>
                  </div>
                </div>
                <div
                  className="detail-item"
                  data-aos="fade-up"
                  data-aos-delay={350}
                >
                  <i className="bi bi-geo-alt" />
                  <div className="detail-content">
                    <span>Based In</span>
                    <strong>Portland, OR</strong>
                  </div>
                </div>
                <div
                  className="detail-item"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <i className="bi bi-envelope" />
                  <div className="detail-content">
                    <span>Email</span>
                    <strong>contact@example.com</strong>
                  </div>
                </div>
                <div
                  className="detail-item"
                  data-aos="fade-up"
                  data-aos-delay={150}
                >
                  <i className="bi bi-phone" />
                  <div className="detail-content">
                    <span>Phone</span>
                    <strong>+1 (555) 234-5678</strong>
                  </div>
                </div>
                <div
                  className="detail-item"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <i className="bi bi-calendar-check" />
                  <div className="detail-content">
                    <span>Availability</span>
                    <strong>Open to Work</strong>
                  </div>
                </div>
              </div>
              <div
                className="skills-showcase"
                data-aos="fade-up"
                data-aos-delay={250}
              >
                <div className="section-tag">Core Skills</div>
                <h3>Technical Proficiency</h3>
                <div className="skills-list skills-animation">
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">React &amp; Next.js</span>
                      <span className="skill-percent">95%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={95}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "95%" }}
                      />
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">Node.js &amp; Express</span>
                      <span className="skill-percent">90%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "90%" }}
                      />
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">UI/UX &amp; Figma</span>
                      <span className="skill-percent">88%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={88}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "88%" }}
                      />
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">
                        MongoDB &amp; PostgreSQL
                      </span>
                      <span className="skill-percent">85%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={85}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "85%" }}
                      />
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">Docker &amp; AWS</span>
                      <span className="skill-percent">80%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "80%" }}
                      />
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

export default About;
