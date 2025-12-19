import React, { useEffect, useState } from "react";

function Header() {
  const [activeLink, setActiveLink] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add class when scrolled
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active link based on scroll position
      const sections = [
        "hero",
        "about",
        "resume",
        "services",
        "portfolio",
        "contact",
      ];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`header d-flex align-items-center fixed-top ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="index.html" className="logo d-flex align-items-center me-auto">
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="assets/img/logo.webp" alt=""> */}
          <h1 className="sitename">Craftivo</h1>
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="#hero" className={activeLink === "hero" ? "active" : ""}>
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeLink === "about" ? "active" : ""}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className={activeLink === "resume" ? "active" : ""}
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={activeLink === "services" ? "active" : ""}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className={activeLink === "portfolio" ? "active" : ""}
              >
                Portfolio
              </a>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Dropdown</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown" />
              </a>
              <ul>
                <li>
                  <a href="#">Dropdown 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Dropdown</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown" />
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Dropdown 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Dropdown 2</a>
                </li>
                <li>
                  <a href="#">Dropdown 3</a>
                </li>
                <li>
                  <a href="#">Dropdown 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#contact" className={activeLink === 'contact' ? 'active' : ''}>Contact</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list" />
        </nav>
        <a className="btn-getstarted" href="#about">
          Get Started
        </a>
      </div>
    </header>
  );
}

export default Header;
