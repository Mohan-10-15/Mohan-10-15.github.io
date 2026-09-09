import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import { personalData } from "../../data/personalData.js";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <h2>Mohanakrishnan C</h2>
          <p>Cyber Security Engineering Student</p>

          <p className="footer__description">
            Building practical cybersecurity tools focused on endpoint
            protection, network monitoring and secure data storage.
          </p>

          <p className="footer__location">
            <MapPin size={15} />
            {personalData.location}
          </p>
        </div>

        <div className="footer__col">
          <h3>Navigate</h3>

          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Journal</Link>
          <Link to="/events">Events</Link>
          <Link to="/certifications">Credentials</Link>
        </div>

        <div className="footer__col">
          <h3>Connect</h3>

          <a
            href={personalData.socialLinks.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href={personalData.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href={personalData.socialLinks.email}>
            <Mail size={14} />
            Email
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {currentYear} Mohanakrishnan C. All rights reserved.</p>

        <p>Built with React &amp; Vite</p>
      </div>
    </footer>
  );
}

export default Footer;