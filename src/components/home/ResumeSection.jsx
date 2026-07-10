import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Download,
  FileText,
  GraduationCap,
  ShieldCheck
} from "lucide-react";

import { personalData } from "../../data/personalData.js";
import { getAssetPath } from "../../utils/getAssetPath.js";

gsap.registerPlugin(ScrollTrigger);

function ResumeSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const animationContext = gsap.context(() => {
      gsap.from(".resume-section__animate", {
        opacity: 0,
        y: 45,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true
        }
      });
    }, sectionRef);

    return () => {
      animationContext.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="resume"
      className="resume-section"
    >
      <div className="site-container resume-section__container">
        <div className="resume-section__content">
          <div className="resume-section__eyebrow resume-section__animate">
            <FileText size={16} />
            <span>Professional Resume</span>
          </div>

          <h2 className="resume-section__animate">
            A concise overview of my
            <span> education and technical work.</span>
          </h2>

          <p className="resume-section__description resume-section__animate">
            View my resume for a summary of my education, cybersecurity
            projects, technical skills, certifications and professional
            interests.
          </p>

          <div className="resume-section__highlights resume-section__animate">
            <div>
              <ShieldCheck size={20} />

              <span>
                <small>Specialisation</small>
                Cyber Security Engineering
              </span>
            </div>

            <div>
              <GraduationCap size={20} />

              <span>
                <small>Education</small>
                B.E. Cyber Security
              </span>
            </div>

            <div>
              <FileText size={20} />

              <span>
                <small>Format</small>
                ATS-Friendly PDF
              </span>
            </div>
          </div>

          <div className="resume-section__actions resume-section__animate">
            <a
              className="resume-section__button resume-section__button--primary"
              href={getAssetPath(personalData.resumeFile)}
              target="_blank"
              rel="noreferrer"
            >
              <FileText size={18} />
              View Resume
              <ArrowUpRight size={17} />
            </a>

            <a
              className="resume-section__button resume-section__button--secondary"
              href={getAssetPath(personalData.resumeFile)}
              download="Mohanakrishnan-C-Resume.pdf"
            >
              <Download size={18} />
              Download PDF
            </a>
          </div>
        </div>

        <div className="resume-section__preview resume-section__animate">
          <div className="resume-section__window">
            <div className="resume-section__window-header">
              <div>
                <span />
                <span />
                <span />
              </div>

              <p>mohanakrishnan-resume.pdf</p>
            </div>

            <div className="resume-section__document">
              <div className="resume-section__document-top">
                <div className="resume-section__document-avatar">
                  MC
                </div>

                <div>
                  <h3>{personalData.name}</h3>
                  <p>{personalData.title}</p>
                </div>
              </div>

              <div className="resume-section__document-line resume-section__document-line--large" />
              <div className="resume-section__document-line" />
              <div className="resume-section__document-line resume-section__document-line--short" />

              <div className="resume-section__document-heading">
                Technical Skills
              </div>

              <div className="resume-section__document-tags">
                <span>Python</span>
                <span>Cybersecurity</span>
                <span>Networking</span>
                <span>Encryption</span>
              </div>

              <div className="resume-section__document-heading">
                Projects
              </div>

              <div className="resume-section__document-project">
                <strong>ThreatGuard EDR</strong>
                <span>Endpoint security and threat monitoring</span>
              </div>

              <div className="resume-section__document-project">
                <strong>Network Packet Analyzer</strong>
                <span>Traffic analysis and threat detection</span>
              </div>

              <div className="resume-section__document-project">
                <strong>SecureVault Enterprise</strong>
                <span>Secure file and folder encryption</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;