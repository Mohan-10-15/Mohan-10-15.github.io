import { ArrowUpRight, Download } from "lucide-react";

import Reveal from "../common/Reveal.jsx";
import { personalData } from "../../data/personalData.js";
import { getAssetPath } from "../../utils/getAssetPath.js";

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="site-container resume__layout">
        <Reveal className="resume__paper-wrap">
          <span className="resume__file-tab">Resume File</span>

          <div className="resume__paper">
            <strong>PROFESSIONAL FOLIO</strong>
            <h3>{personalData.name}</h3>
            <p className="role">{personalData.title}</p>

            <div className="resume__paper-section">
              <strong>PROFILE</strong>
              <p>{personalData.introduction}</p>
            </div>

            <div className="resume__paper-section">
              <strong>FOCUS</strong>
              <p>
                Endpoint security · Network monitoring · Cryptography ·
                Security engineering
              </p>
            </div>

            <div className="resume__paper-section">
              <strong>EDUCATION</strong>
              <p>
                B.E. Cyber Security — SRM Valliammai Engineering College
              </p>
            </div>
          </div>
        </Reveal>

        <div className="resume__copy">
          <Reveal>
            <span className="eyebrow">
              <span>
                06 <span>/</span> PROFESSIONAL FOLIO
              </span>
            </span>

            <h3>
              Build for <em>understanding.</em>
            </h3>

            <p>{personalData.careerObjective}</p>
          </Reveal>

          <Reveal>
            <div className="resume__details">
              <div className="resume__detail">
                <strong>THE QUESTION</strong>
                <span>
                  What is the system trying to do, and where could the
                  experience become clearer, safer, or more useful?
                </span>
              </div>

              <div className="resume__detail">
                <strong>THE METHOD</strong>
                <span>
                  Observe the flow, make a focused change, and keep the
                  result simple enough to understand.
                </span>
              </div>

              <div className="resume__detail">
                <strong>THE RESULT</strong>
                <span>
                  Security-aware software that is useful, honest about its
                  purpose, and ready to keep improving.
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal className="resume__actions">
            <a
              className="btn--dark"
              href={getAssetPath(personalData.resumeFile)}
              target="_blank"
              rel="noreferrer"
            >
              Open Resume
              <ArrowUpRight size={16} />
            </a>

            <a
              className="text-link"
              href={getAssetPath(personalData.resumeFile)}
              download="Mohanakrishnan-C-Resume.pdf"
            >
              Download PDF
              <Download size={15} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Resume;