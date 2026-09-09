import Reveal from "../common/Reveal.jsx";
import { skillsData } from "../../data/skillsData.js";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="site-container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span>
              02 <span>/</span> CAPABILITIES
            </span>
          </span>

          <h2>
            Technology <em>stack</em>
          </h2>

          <p className="section-head__note">
            A practical foundation across cybersecurity, engineering and
            continuous technical learning — built through projects and
            research.
          </p>
        </Reveal>

        <div className="stack-list">
          {skillsData.map((group, index) => (
            <Reveal
              as="article"
              key={group.number}
              className="stack-record-row"
              delay={index > 0 ? 1 : 0}
            >
              <span className="stack-record-number">
                {group.number}
              </span>

              <div className="stack-record-copy">
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>

              <div className="stack-record-tools">
                {group.tools.map((tool, toolIndex) => (
                  <span key={tool}>
                    {tool}
                    {toolIndex < group.tools.length - 1 && (
                      <span className="slash">/</span>
                    )}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;