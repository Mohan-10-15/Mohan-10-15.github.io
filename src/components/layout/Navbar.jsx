import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  ShieldCheck,
  X
} from "lucide-react";

import { personalData } from "../../data/personalData.js";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Blog", path: "/blog" },
  { label: "Events", path: "/events" },
  { label: "Certifications", path: "/certifications" }
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

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
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <Link className="navbar__brand" to="/" aria-label="Go to home page">
          <span className="navbar__brand-icon">
            <ShieldCheck size={22} strokeWidth={2.2} />
          </span>

          <span className="navbar__brand-text">
            <strong>Mohanakrishnan</strong>
            <small>Cyber Security</small>
          </span>
        </Link>

        <nav
          className={`navbar__menu ${menuOpen ? "navbar__menu--open" : ""}`}
          aria-label="Main navigation"
        >
          <div className="navbar__mobile-header">
            <span>Navigation</span>

            <button
              type="button"
              className="navbar__close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="navbar__links">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? "navbar__link--active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="navbar__mobile-socials">
            <a
              href={personalData.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Open GitHub profile"
            >
              <Github size={20} />
            </a>

            <a
              href={personalData.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Open LinkedIn profile"
            >
              <Linkedin size={20} />
            </a>

            <a
              href={personalData.socialLinks.email}
              aria-label="Send email"
            >
              <Mail size={20} />
            </a>
          </div>
        </nav>

        <div className="navbar__actions">
          <a
            className="navbar__github"
            href={personalData.socialLinks.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>

          <a className="navbar__contact" href={personalData.socialLinks.email}>
            Contact
          </a>

          <button
            type="button"
            className="navbar__toggle"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            <Menu size={23} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="navbar__overlay"
          onClick={() => setMenuOpen(false)}
          aria-label="Close navigation menu"
        />
      )}
    </header>
  );
}

export default Navbar;