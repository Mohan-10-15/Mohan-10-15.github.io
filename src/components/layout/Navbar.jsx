import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X
} from "lucide-react";

import { personalData } from "../../data/personalData.js";
import { getAssetPath } from "../../utils/getAssetPath.js";

const navItems = [
  { label: "Home", suffix: "01", path: "/" },
  { label: "Projects", suffix: "02", path: "/projects" },
  { label: "Journal", suffix: "03", path: "/blog" },
  { label: "Events", suffix: "04", path: "/events" },
  { label: "Credentials", suffix: "05", path: "/certifications" }
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
    >
      <div className="navbar__inner">
        <Link className="navbar__brand" to="/" aria-label="Go to home">
          <span className="navbar__brand-mark">MC</span>
          <strong>Mohanakrishnan C</strong>
        </Link>

        <nav className="navbar__links" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `navbar__link ${
                  isActive ? "navbar__link--active" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__actions">
          <a
            className="navbar__cta"
            href={personalData.socialLinks.email}
          >
            Contact
          </a>

          <button
            type="button"
            className="navbar__toggle"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="navbar__mobile">
          <button
            type="button"
            className="navbar__mobile-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={21} />
          </button>

          <div className="navbar__mobile-links">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className="navbar__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                <span>{item.label}</span>
                <span>{item.suffix}</span>
              </NavLink>
            ))}
          </div>

          <div className="contact__socials" style={{ marginTop: "34px" }}>
            <a
              href={personalData.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Open GitHub profile"
            >
              <Github size={19} />
            </a>

            <a
              href={personalData.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Open LinkedIn profile"
            >
              <Linkedin size={19} />
            </a>

            <a
              href={personalData.socialLinks.email}
              aria-label="Send email"
            >
              <Mail size={19} />
            </a>

            <a
              href={getAssetPath(personalData.resumeFile)}
              target="_blank"
              rel="noreferrer"
              aria-label="Open resume"
            >
              <ArrowUpRight size={19} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;