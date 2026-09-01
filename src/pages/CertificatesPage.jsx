import {
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  FileBadge2,
  Hash,
  Sparkles
} from "lucide-react";

import Reveal from "../components/common/Reveal.jsx";
import { certificatesData } from "../data/certificatesData.js";
import { getAssetPath } from "../utils/getAssetPath.js";

function CertificatesPage() {
  return (
    <main className="secondary-page">
      <header className="page-header">
        <div className="site-container page-header__inner">
          <Reveal>
            <span className="eyebrow">
              <span>
                CREDENTIALS <span>/</span> VERIFIED LEARNING
              </span>
            </span>

            <h1>
              Verified credentials across <em>security &amp; cloud.</em>
            </h1>

            <p className="page-header__tagline">
              Learning milestones recorded through certification
              programmes in cybersecurity and cloud computing.
            </p>
          </Reveal>

          <Reveal delay={1}>
            <div className="page-header__stats">
              <div>
                <strong>{certificatesData.length}</strong>
                <span>Certifications</span>
              </div>

              <div>
                <strong>
                  {
                    new Set(
                      certificatesData.map(
                        (certificate) => certificate.issuer
                      )
                    ).size
                  }
                </strong>
                <span>Issuers</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Verified</span>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="page-body">
        <div className="site-container">
          <Reveal className="page-section-heading">
            <div>
              <p>Verified Credentials</p>
              <h2>Certifications</h2>
            </div>
          </Reveal>

          <div className="certificates-list">
            {certificatesData.map((certificate, index) => (
              <Reveal
                as="article"
                key={certificate.id}
                delay={index > 0 ? 1 : 0}
              >
                <div className="certificate-card">
                  <a
                    className="certificate-card__doc"
                    href={getAssetPath(certificate.file)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${certificate.title} certificate`}
                  >
                    <FileBadge2 size={46} />
                    <p>Certificate · #{certificate.certificateCode}</p>
                    <h2>{certificate.issuer}</h2>
                  </a>

                  <div className="certificate-card__content">
                    <div className="certificate-card__top">
                      <div>
                        <p className="certificate-card__category">
                          {certificate.category}
                        </p>

                        <h2>{certificate.title}</h2>

                        <p className="certificate-card__issuer">
                          Issued by {certificate.issuer}
                        </p>
                      </div>

                      <span className="certificate-card__verified">
                        <BadgeCheck size={14} />
                        Verified
                      </span>
                    </div>

                    <p className="certificate-card__description">
                      {certificate.description}
                    </p>

                    <div className="certificate-card__details">
                      <div>
                        <CalendarDays size={15} />
                        <span>
                          <small>Date earned</small>
                          {certificate.date}
                        </span>
                      </div>

                      <div>
                        <Hash size={15} />
                        <span>
                          <small>Code</small>
                          {certificate.certificateCode}
                        </span>
                      </div>

                      <div>
                        <Sparkles size={15} />
                        <span>
                          <small>Focus</small>
                          {certificate.category}
                        </span>
                      </div>
                    </div>

                    <div className="certificate-card__skills">
                      {certificate.skills.map((skill) => (
                        <span key={`${certificate.id}-${skill}`}>
                          {skill}
                        </span>
                      ))}
                    </div>

                    <a
                      className="btn--dark certificate-card__button"
                      href={getAssetPath(certificate.file)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Credential
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default CertificatesPage;