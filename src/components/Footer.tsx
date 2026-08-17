import React from "react";

const Footer: React.FC = () => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">

      {/* =========================
          FOOTER TOP
      ========================= */}
      <div className="footer-top">

        {/* BRAND */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            NEXORA<span>BIO</span>
          </a>

          <p>
            Engineering biology through computation, molecular science,
            and intelligent discovery.
          </p>
        </div>


        {/* LINKS */}
        <div className="footer-links">

          {/* EXPLORE */}
          <div className="footer-column">
            <span className="footer-heading">
              EXPLORE
            </span>

            <a href="#innovation">
              Innovation
              <span aria-hidden="true">↗</span>
            </a>

            <a href="#technology">
              Technology
              <span aria-hidden="true">↗</span>
            </a>

            <a href="#capabilities">
              Capabilities
              <span aria-hidden="true">↗</span>
            </a>

            <a href="#impact">
              Impact
              <span aria-hidden="true">↗</span>
            </a>
          </div>


          {/* CONNECT */}
          <div className="footer-column">
            <span className="footer-heading">
              CONNECT
            </span>

            <a href="mailto:hello@nexorabio.com">
              Contact
              <span aria-hidden="true">↗</span>
            </a>

            <a href="#technology">
              Research
              <span aria-hidden="true">↗</span>
            </a>

            <a href="#capabilities">
              Careers
              <span aria-hidden="true">↗</span>
            </a>
          </div>

        </div>
      </div>


      {/* =========================
          FOOTER LINE
      ========================= */}
      <div className="footer-line" />


      {/* =========================
          FOOTER BOTTOM
      ========================= */}
      <div className="footer-bottom">

        <div className="footer-meta">
          <span>
            © 2026 NEXORA BIO
          </span>

          <span>
            BIOLOGICAL INTELLIGENCE · 2026
          </span>
        </div>


        {/* BACK TO TOP */}
        <button
          type="button"
          className="back-to-top"
          onClick={handleBackToTop}
          aria-label="Back to top"
        >
          BACK TO TOP
          <span aria-hidden="true">↑</span>
        </button>

      </div>

    </footer>
  );
};

export default Footer;