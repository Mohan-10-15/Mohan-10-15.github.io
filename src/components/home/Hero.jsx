import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Reveal from "../common/Reveal.jsx";
import { personalData } from "../../data/personalData.js";
import { getAssetPath } from "../../utils/getAssetPath.js";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="site-container">
        <Reveal>
          <p className="hero__kicker">
            HELLO, I&apos;M — {personalData.firstName.toUpperCase()}{" "}
            {personalData.name.split(" ").at(-1).toUpperCase()}
          </p>

          <h1 className="hero__title">
            Building secure digital <em>systems</em> that matter.
          </h1>
        </Reveal>

        <Reveal delay={1}>
          <p className="hero__role-line">
            I am a {personalData.shortTitle.toLowerCase()}.
          </p>

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
      </div>
    </section>
  );
}

export default Hero;