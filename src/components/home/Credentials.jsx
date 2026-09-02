import { ArrowUpRight, FileBadge2 } from "lucide-react";

import Reveal from "../common/Reveal.jsx";
import { certificatesData } from "../../data/certificatesData.js";
import { personalData } from "../../data/personalData.js";
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
            <a
              className="credential-sheet__doc"
              href={getAssetPath(featured.file)}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${featured.title} certificate`}
            >
              <span className="credential-thumb">
                <span className="credential-thumb__badge">
                  COURSE COMPLETION
                </span>
                <span className="credential-thumb__title">
                  {featured.title}
                </span>
                <span className="credential-thumb__body">
                  This is to certify that
                  <strong>{personalData.name}</strong>
                  has successfully completed the course.
                </span>
                <span className="credential-thumb__footer">
                  <span>
                    <small>{featured.issuer}</small>
                    <b>— CERTIFIED —</b>
                  </span>
                  <FileBadge2 size={26} />
                </span>
              </span>
              <span className="credential-thumb__caption">
                Open certificate
              </span>
            </a>

            <div className="credential-sheet__copy">
              <p className="credential-type">Featured Credential</p>

              <h3>{featured.title}</h3>

              <p className="issuer">Issued by {featured.issuer}</p>

              <div className="credential-facts">
                <div>
                  <strong>DATE EARNED</strong>
                  <span>{featured.date}</span>
                </div>

                <div>
                  <strong>CODE</strong>
                  <span>{featured.certificateCode}</span>
                </div>

                <div>
                  <strong>STATUS</strong>
                  <span>Verified</span>
                </div>
              </div>

              <a
                className="text-link credential-view"
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
                <span className="credential-thumb__title">
                  {certificate.title}
                </span>
                <span className="credential-thumb__footer">
                  <span>
                    <small>{certificate.issuer}</small>
                    <b>— CERTIFIED —</b>
                  </span>
                  <FileBadge2 size={22} />
                </span>
              </a>

              <p>
                {String(certificate.id).padStart(2, "0")} /{" "}
                {certificate.category.toUpperCase()}
              </p>

              <h3>{certificate.title}</h3>

              <span>
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