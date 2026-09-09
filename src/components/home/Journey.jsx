import Reveal from "../common/Reveal.jsx";
import { personalData } from "../../data/personalData.js";

function Journey() {
  const current = personalData.education[0];
  const foundations = personalData.education.slice(1);

  return (
    <section id="journey" className="journey">
      <div className="site-container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span>
              04 <span>/</span> ACADEMIC RECORD
            </span>
          </span>

          <h2>
            Learning <em>journey</em>
          </h2>

          <p className="section-head__note">
            A record of the foundations and focused study shaping my work
            in cybersecurity.
          </p>
        </Reveal>

        {current && (
          <Reveal className="journey__current">
            <span className="journey__current-date">
              {current.status.toUpperCase()} — PRESENT
            </span>

            <div className="journey__current-copy">
              <h3>
                {current.degree} in {current.specialization}
              </h3>
              <p>{current.institution}</p>
              <p>{current.description}</p>
            </div>

            <span className="journey__status">PURSUING</span>
          </Reveal>
        )}

        <p className="journey__section-label">Academic Foundations</p>

        <div className="journey__foundations">
          {foundations.map((item) => (
            <Reveal
              as="article"
              key={`${item.institution}-${item.degree}`}
              className="journey__school"
            >
              <span className="journey__school-year">
                {item.specialization}
              </span>

              <div>
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
              </div>

              <span className="journey__school-score">
                {item.score}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal className="journey__direction">
          <strong>CURRENT DIRECTION</strong>
          <p>
            {personalData.careerObjective}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Journey;