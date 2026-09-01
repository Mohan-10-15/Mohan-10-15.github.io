import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight } from "lucide-react";

import Marquee from "../common/Marquee.jsx";
import RollUpText from "../common/RollUpText.jsx";
import { personalData } from "../../data/personalData.js";
import { getAssetPath } from "../../utils/getAssetPath.js";

const marqueeItems = [
  "Endpoint Security",
  "Network Packet Analysis",
  "Threat Detection",
  "Cryptography",
  "Detection Engineering",
  "Secure Software"
];

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <p className="hero__kicker">
          HELLO, I&apos;M — {personalData.firstName.toUpperCase()}{" "}
          {personalData.name.split(" ").at(-1).toUpperCase()}
        </p>

        <h1 className="hero__title">
          Building secure
          <br />
          digital <em>systems</em>
          <br />
          that matter.
        </h1>

        <div className="hero__role">
          <span className="hero__role-label">I AM A</span>
          <span className="hero__role-value">
            <RollUpText
              items={personalData.roles}
              interval={2600}
              ariaLabel="Roles"
            />
          </span>
        </div>

        <p className="hero__lead">{personalData.tagline}</p>

        <div className="hero__actions">
          <Link className="btn--dark" to="/projects">
            View Projects
            <ArrowRight size={17} />
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
      </div>

      <div className="hero__swatch--frame" />
      <div className="hero__swatch">
        <img
          src={getAssetPath(personalData.profileImage)}
          alt=""
          aria-hidden="true"
        />
      </div>

      <div className="hero__meta">
        <span>{personalData.location}</span>
        <span>B.E. Cyber Security</span>
        <span>{personalData.availability.status}</span>
      </div>

      <div className="stats-strip hero__strip">
        <Marquee speed={45}>
          {marqueeItems.map((item) => (
            <span className="stats-strip__item" key={item}>
              <strong>{item}</strong>
              <span>✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      <button
        type="button"
        className="hero__scroll-cue"
        onClick={() => {
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Scroll to next section"
      >
        <ArrowDown size={16} />
      </button>
    </section>
  );
}

export default Hero;