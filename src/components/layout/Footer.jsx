import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck
} from "lucide-react";

import { personalData } from "../../data/personalData.js";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__glow" />

      <div className="site-container footer__content">
        <div className="footer__primary">
          <div className="footer__brand">
            <span className="footer__brand-icon">
              <ShieldCheck size={24} />
            </span>

            <div>
              <h2>{personalData.name}</h2>
              <p>Cyber Security Engineering Portfolio</p>
            </div>
          </div>

          <p className="footer__description">
            Building practical cybersecurity tools focused on endpoint
            protection, network monitoring and secure data storage.
          </p>

          <div className="footer__location">
            <MapPin size={17} />
            <span>{personalData.location}</span>
          </div>
        </div>

        <div className="footer__links">
          <div className="footer__column">
            <h3>Explore</h3>

            <a href={`${import.meta.env.BASE_URL}`}>Home</a>
            <a href={`${import.meta.env.BASE_URL}projects`}>Projects</a>
            <a href={`${import.meta.env.BASE_URL}blog`}>Technical Blog</a>
            <a href={`${import.meta.env.BASE_URL}events`}>Events</a>
          </div>

          <div className="footer__column">
            <h3>Connect</h3>

            <a
              href={personalData.socialLinks.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} />
              GitHub
              <ArrowUpRight size={14} />
            </a>

            <a
              href={personalData.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} />
              LinkedIn
              <ArrowUpRight size={14} />
            </a>

            <a href={personalData.socialLinks.email}>
              <Mail size={16} />
              Email
            </a>
          </div>
        </div>
      </div>

      <div className="site-container footer__bottom">
        <p>© {currentYear} Mohanakrishnan C. All rights reserved.</p>

        <p>
          Designed and developed with React, Vite and modern web technologies.
        </p>
      </div>
    </footer>
  );
}

export default Footer;