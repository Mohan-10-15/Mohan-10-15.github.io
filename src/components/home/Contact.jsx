import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck
} from "lucide-react";

import { personalData } from "../../data/personalData.js";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const sectionRef = useRef(null);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const animationContext = gsap.context(() => {
      gsap.from(".contact__animate", {
        opacity: 0,
        y: 45,
        duration: 0.8,
        stagger: 0.1,
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

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalData.email);

      setEmailCopied(true);

      window.setTimeout(() => {
        setEmailCopied(false);
      }, 1800);
    } catch {
      window.location.href = personalData.socialLinks.email;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="contact"
    >
      <div className="contact__glow" />

      <div className="site-container contact__container">
        <div className="contact__content">
          <div className="contact__eyebrow contact__animate">
            <ShieldCheck size={16} />
            <span>Contact and Collaboration</span>
          </div>

          <h2 className="contact__animate">
            Let&apos;s build something
            <span> secure and meaningful.</span>
          </h2>

          <p className="contact__description contact__animate">
            I am open to cybersecurity internships, student collaborations,
            project discussions and opportunities to learn from security
            professionals.
          </p>

          <div className="contact__availability contact__animate">
            <span />

            <div>
              <strong>Currently open to opportunities</strong>
              <p>
                Cybersecurity internships, technical collaborations and
                security-focused projects.
              </p>
            </div>
          </div>

          <div className="contact__primary-actions contact__animate">
            <a
              className="contact__button contact__button--primary"
              href={personalData.socialLinks.email}
            >
              <Send size={18} />
              Send Email
              <ArrowUpRight size={17} />
            </a>

            <button
              type="button"
              className="contact__button contact__button--secondary"
              onClick={copyEmail}
            >
              {emailCopied ? (
                <Check size={18} />
              ) : (
                <Copy size={18} />
              )}

              {emailCopied ? "Email Copied" : "Copy Email"}
            </button>
          </div>
        </div>

        <div className="contact__details contact__animate">
          <article className="contact__detail-card">
            <div className="contact__detail-icon">
              <Mail size={22} />
            </div>

            <div>
              <p>Email</p>
              <a href={personalData.socialLinks.email}>
                {personalData.email}
              </a>
            </div>
          </article>

          <article className="contact__detail-card">
            <div className="contact__detail-icon">
              <Phone size={22} />
            </div>

            <div>
              <p>Phone</p>
              <a href={personalData.socialLinks.phone}>
                {personalData.phone}
              </a>
            </div>
          </article>

          <article className="contact__detail-card">
            <div className="contact__detail-icon">
              <MapPin size={22} />
            </div>

            <div>
              <p>Location</p>
              <span>{personalData.location}</span>
            </div>
          </article>

          <div className="contact__socials">
            <a
              href={personalData.socialLinks.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={21} />

              <span>
                <small>GitHub</small>
                Mohan-10-15
              </span>

              <ArrowUpRight size={17} />
            </a>

            <a
              href={personalData.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={21} />

              <span>
                <small>LinkedIn</small>
                Mohanakrishnan C
              </span>

              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;