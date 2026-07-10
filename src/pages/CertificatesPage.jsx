import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  ArrowUpRight,
  Award,
  CalendarDays,
  CheckCircle2,
  FileBadge2,
  Hash
} from "lucide-react";

import { certificatesData } from "../data/certificatesData.js";
import { getAssetPath } from "../utils/getAssetPath.js";

function CertificatesPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const animationContext = gsap.context(() => {
      gsap.from(".certificates-page__header > *", {
        opacity: 0,
        y: 35,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });

      gsap.from(".certificate-card", {
        opacity: 0,
        y: 45,
        duration: 0.75,
        stagger: 0.12,
        delay: 0.25,
        ease: "power3.out"
      });
    }, pageRef);

    return () => {
      animationContext.revert();
    };
  }, []);

  return (
    <main ref={pageRef} className="certificates-page">
      <section className="certificates-page__hero">
        <div className="certificates-page__grid-background" />

        <div className="site-container certificates-page__header">
          <div className="certificates-page__eyebrow">
            <Award size={16} />
            <span>Verified Learning</span>
          </div>

          <h1>
            Certifications and
            <span> professional learning.</span>
          </h1>

          <p>
            A collection of certifications completed as part of my
            cybersecurity, cloud computing and technical learning journey.
          </p>

          <div className="certificates-page__stats">
            <div>
              <strong>{certificatesData.length}</strong>
              <span>Certificates completed</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Technical domains</span>
            </div>

            <div>
              <strong>2026</strong>
              <span>Latest completion year</span>
            </div>
          </div>
        </div>
      </section>

      <section className="certificates-page__content">
        <div className="site-container">
          <div className="certificates-page__section-heading">
            <p>CREDENTIALS</p>
            <h2>Completed certifications</h2>
          </div>

          <div className="certificates-page__list">
            {certificatesData.map((certificate) => (
              <article
                key={certificate.id}
                className="certificate-card"
              >
                <div className="certificate-card__icon">
                  <FileBadge2 size={32} />
                </div>

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
                      <CheckCircle2 size={15} />
                      Verified
                    </span>
                  </div>

                  <p className="certificate-card__description">
                    {certificate.description}
                  </p>

                  <div className="certificate-card__details">
                    <div>
                      <CalendarDays size={16} />

                      <span>
                        <small>Completed</small>
                        {certificate.date}
                      </span>
                    </div>

                    <div>
                      <Hash size={16} />

                      <span>
                        <small>Certificate code</small>
                        {certificate.certificateCode}
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
                    className="certificate-card__button"
                    href={getAssetPath(certificate.file)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Certificate
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default CertificatesPage;