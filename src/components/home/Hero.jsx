import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";

import Reveal from "../common/Reveal.jsx";
import { personalData } from "../../data/personalData.js";
import { getAssetPath } from "../../utils/getAssetPath.js";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="site-container">
        <Reveal>
          <p className="hero__kicker">
            {personalData.firstName.toUpperCase()} ·{" "}
            {personalData.shortTitle.toUpperCase()}
          </p>

          <h1 className="hero__title">
            I build systems.
            <br />
            I study how they <em>fail.</em>
          </h1>
        </Reveal>

        <Reveal delay={1}>
          <p className="hero__role-line">
            <em>{personalData.shortTitle}</em> — {personalData.introduction}{" "}
            {personalData.tagline}
          </p>

          <div className="hero__meta-row">
            <span className="hero__location">
              <MapPin size={14} />
              {personalData.location}
            </span>

            <span className="hero__status">
              <span className="dot" aria-hidden="true" />
              {personalData.availability.status}
            </span>
          </div>

          <div className="hero__actions">
            <Link className="text-link" to="/projects">
              View Projects
              <ArrowRight size={15} />
            </Link>

            <a
              className="text-link"
              href={getAssetPath(personalData.resumeFile)}
              target="_blank"
              rel="noreferrer"
            >
              Open Resume
              <ArrowRight size={15} />
            </a>
          </div>
        </Reveal>

        <div className="hero__scroll" aria-hidden="true">
          <span>Scroll</span>
          <i />
        </div>
      </div>
    </section>
  );
}

export default Hero;
