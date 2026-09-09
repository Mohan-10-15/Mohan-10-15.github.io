import Reveal from "../common/Reveal.jsx";
import { personalData } from "../../data/personalData.js";
import { getAssetPath } from "../../utils/getAssetPath.js";

const heroStats = [
  ["4+", "Projects"],
  ["2+", "Certifications"],
  ["5+", "Security Domains"]
];

function About() {
  return (
    <section id="about" className="about">
      <div className="site-container about__layout">
        <Reveal className="about__photo-frame">
          <span className="frame-bg" aria-hidden="true" />
          <div className="about__photo">
            <img
              src={getAssetPath(personalData.profileImage)}
              alt={personalData.name}
              onError={(event) => {
                event.currentTarget.style.display = "none";
                event.currentTarget
                  .closest(".about__photo")
                  ?.querySelector(".about__photo-fallback")
                  ?.classList.add("is-visible");
              }}
            />
            <div className="about__photo-fallback">
              Profile photograph
            </div>
          </div>
          <p className="about__caption">Mohanakrishnan C — Chennai, IN</p>
        </Reveal>

        <div className="about__copy">
          <Reveal>
            <span className="eyebrow">
              <span>
                01 <span>/</span> PROFILE
              </span>
            </span>

            <h2>
              Who I <em>am</em>
            </h2>
          </Reveal>

          <Reveal delay={1}>
            <p>{personalData.introduction}</p>

            {personalData.about.slice(0, 2).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal delay={2}>
            <blockquote>
              &ldquo;The best way to predict the future is to
              study the attacks of the past.&rdquo;
              <cite>— Security Engineering</cite>
            </blockquote>
          </Reveal>

          <Reveal delay={3}>
            <div className="about__stats">
              {heroStats.map(([value, label]) => (
                <article key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;