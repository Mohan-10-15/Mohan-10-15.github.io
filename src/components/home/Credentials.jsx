import {
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  Hash,
} from "lucide-react";

import Reveal from "../common/Reveal.jsx";
import { certificatesData } from "../../data/certificatesData.js";
import { getAssetPath } from "../../utils/getAssetPath.js";

function Credentials() {
  const featured = certificatesData[0];
  const supporting = certificatesData.slice(1);

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

        {featured && (
          <Reveal className="credential-sheet">
            <div className="credential-sheet__preview">
              <a
                className="credential-thumb"
                href={getAssetPath(featured.file)}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${featured.title} certificate`}
              >
                <iframe
                  className="credential-thumb__pdf"
                  src={getAssetPath(featured.file)}
                  title={`${featured.title} certificate preview`}
                  loading="lazy"
                />
                <span className="credential-thumb__overlay" />
                <span className="credential-thumb__caption">
                  Open certificate PDF
                </span>
              </a>
            </div>

            <div className="credential-sheet__copy">
              <span className="credential-type">
                <BadgeCheck size={14} />
                Featured Credential
              </span>

              <h3>{featured.title}</h3>

              <p className="issuer">Issued by {featured.issuer}</p>

              <div className="credential-facts">
                <div>
                  <CalendarDays size={15} />
                  <span>
                    <strong>DATE EARNED</strong>
                    {featured.date}
                  </span>
                </div>

                <div>
                  <Hash size={15} />
                  <span>
                    <strong>CREDENTIAL CODE</strong>
                    {featured.certificateCode}
                  </span>
                </div>

                <div>
                  <BadgeCheck size={15} />
                  <span>
                    <strong>STATUS</strong>
                    Verified
                  </span>
                </div>
              </div>

              {featured.skills.length > 0 && (
                <div className="credential-skills">
                  {featured.skills.map((skill) => (
                    <span key={`${featured.id}-${skill}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              <a
                className="btn btn--dark credential-view"
                href={getAssetPath(featured.file)}
                target="_blank"
                rel="noreferrer"
              >
                View Credential
                <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
        )}

        {supporting.length > 0 && (
          <div className="supporting-credentials">
            {supporting.map((certificate) => (
              <Reveal
                as="article"
                key={certificate.id}
                className="supporting-credential"
              >
                <a
                  className="credential-thumb credential-thumb--small"
                  href={getAssetPath(certificate.file)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${certificate.title} certificate`}
                >
                  <iframe
                    className="credential-thumb__pdf"
                    src={getAssetPath(certificate.file)}
                    title={`${certificate.title} certificate preview`}
                    loading="lazy"
                  />
                  <span className="credential-thumb__overlay" />
                  <span className="credential-thumb__caption">
                    Open certificate PDF
                  </span>
                </a>

                <p className="supporting-credential__tag">
                  {String(certificate.id).padStart(2, "0")} /{" "}
                  {certificate.category.toUpperCase()}
                </p>

                <h3>{certificate.title}</h3>

                <span className="supporting-credential__meta">
                  {certificate.issuer} · {certificate.date}
                </span>

                <a
                  className="supporting-credential__link"
                  href={getAssetPath(certificate.file)}
                  target="_blank"
                  rel="noreferrer"
                >
                  VIEW CERTIFICATE
                  <ArrowUpRight size={14} />
                </a>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Credentials;
