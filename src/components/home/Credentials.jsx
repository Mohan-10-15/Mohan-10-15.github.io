import { ArrowUpRight, BadgeCheck } from "lucide-react";

import Reveal from "../common/Reveal.jsx";
import { certificatesData } from "../../data/certificatesData.js";
import { getAssetPath } from "../../utils/getAssetPath.js";

function Credentials() {
  return (
    <section id="credentials" className="credentials">
      <div className="site-container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span>
              05 <span>/</span> VERIFIED CREDENTIALS
            </span>
          </span>

          <h2>
            Credentials &amp; <em>learning</em>
          </h2>

          <p className="section-head__note">
            Selected learning milestones recorded across cybersecurity
            and cloud computing.
          </p>
        </Reveal>

        <div className="certificate-list">
          {certificatesData.map((certificate, index) => (
            <Reveal
              as="article"
              key={certificate.id}
              delay={index > 0 ? 1 : 0}
              className="credential-row"
            >
              <div className="credential-row__index">
                {String(certificate.id).padStart(2, "0")}
              </div>

              <div className="credential-row__main">
                <span className="credential-row__category">
                  {certificate.category}
                </span>

                <h3>{certificate.title}</h3>

                <div className="credential-row__meta">
                  <span>{certificate.issuer}</span>
                  <span>{certificate.date}</span>
                  <span className="credential-row__code">
                    CODE {certificate.certificateCode}
                  </span>
                  <span className="credential-row__verified">
                    <BadgeCheck size={13} />
                    Verified
                  </span>
                </div>
              </div>

              <a
                className="credential-row__link"
                href={getAssetPath(certificate.file)}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${certificate.title} certificate`}
              >
                View
                <ArrowUpRight size={15} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Credentials;
