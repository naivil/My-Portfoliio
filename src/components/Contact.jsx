import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    if (contactRef.current) {
      new Typed(contactRef.current, {
        strings: ["Get In Touch", "Let's Connect", "Say Hello", "Work With Me"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
      });
    }
  }, []);

  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span className="subtitle">Contact</span>
        <h2 ref={contactRef} />
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium totam rem aperiam
        </p>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="info-item">
              <div className="icon-wrapper">
                <i className="bi bi-geo-alt" />
              </div>
              <div>
                <h3>Address</h3>
                <p>2847 Oak Street, San Francisco, CA 94102</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon-wrapper">
                <i className="bi bi-telephone" />
              </div>
              <div>
                <h3>Call Me</h3>
                <p>+1 (555) 234-5678</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon-wrapper">
                <i className="bi bi-envelope" />
              </div>
              <div>
                <h3>Email Me</h3>
                <p>alex@example.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <form
              action="forms/contact.php"
              method="post"
              className="php-email-form"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={6}
                    placeholder="Message"
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
