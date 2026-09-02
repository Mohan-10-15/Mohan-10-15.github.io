import { ArrowUpRight } from "lucide-react";

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
            <a
              className="credential-sheet__doc"
              href={getAssetPath(featured.file)}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${featured.title} certificate`}
            >
              <span className="credential-thumb">
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