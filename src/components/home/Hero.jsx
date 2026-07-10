import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import {
  ArrowDown,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck
} from "lucide-react";

import AnimatedBackground from "../common/AnimatedBackground.jsx";
import { personalData } from "../../data/personalData.js";

function Hero() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const panelRef = useRef(null);

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = personalData.roles[roleIndex];

    const typingSpeed = deleting ? 45 : 75;

    const timeout = window.setTimeout(() => {
      if (!deleting) {
        const nextText = role.slice(0, displayedRole.length + 1);
        setDisplayedRole(nextText);

        if (nextText === role) {
          window.setTimeout(() => {
            setDeleting(true);
          }, 1300);
        }
      } else {
        const nextText = role.slice(0, displayedRole.length - 1);
        setDisplayedRole(nextText);

        if (nextText.length === 0) {
          setDeleting(false);
          setRoleIndex(
            (currentIndex) =>
              (currentIndex + 1) % personalData.roles.length
          );
        }
      }
    }, typingSpeed);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [displayedRole, deleting, roleIndex]);

  useEffect(() => {
    const animationContext = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out"
        }
      });

      timeline
        .from(".hero__eyebrow", {
          opacity: 0,
          y: 20,
          duration: 0.6
        })
        .from(
          ".hero__title-line",
          {
            opacity: 0,
            y: 70,
            duration: 0.9,
            stagger: 0.12
          },
          "-=0.25"
        )
        .from(
          ".hero__role",
          {
            opacity: 0,
            y: 24,
            duration: 0.65
          },
          "-=0.4"
        )
        .from(
          ".hero__description",
          {
            opacity: 0,
            y: 24,
            duration: 0.65
          },
          "-=0.35"
        )
        .from(
          ".hero__actions > *",
          {
            opacity: 0,
            y: 22,
            duration: 0.55,
            stagger: 0.1
          },
          "-=0.3"
        )
        .from(
          ".hero__meta-item",
          {
            opacity: 0,
            y: 16,
            duration: 0.45,
            stagger: 0.08
          },
          "-=0.25"
        )
        .from(
          panelRef.current,
          {
            opacity: 0,
            x: 70,
            duration: 0.9
          },
          "-=0.85"
        );
    }, heroRef);

    return () => {
      animationContext.revert();
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");

    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section ref={heroRef} className="hero">
      <AnimatedBackground />

      <div className="hero__vignette" />

      <div className="site-container hero__container">
        <div ref={contentRef} className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__status-dot" />

            <span>Available for cybersecurity internships</span>
          </div>

          <h1 className="hero__title">
            <span className="hero__title-line">Building Secure</span>

            <span className="hero__title-line hero__title-line--accent">
              Digital Systems
            </span>
          </h1>

          <div className="hero__role">
            <span className="hero__role-prefix">I am a</span>

            <span className="hero__role-value">
              {displayedRole}
              <span className="hero__cursor">|</span>
            </span>
          </div>

          <p className="hero__description">
            {personalData.tagline}
          </p>

          <div className="hero__actions">
            <Link className="hero__button hero__button--primary" to="/projects">
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </Link>

            <a
              className="hero__button hero__button--secondary"
              href={personalData.resumeFile}
              target="_blank"
              rel="noreferrer"
            >
              <Download size={18} />
              <span>View Resume</span>
            </a>
          </div>

          <div className="hero__meta">
            <div className="hero__meta-item">
              <MapPin size={16} />
              <span>{personalData.location}</span>
            </div>

            <div className="hero__meta-item">
              <ShieldCheck size={16} />
              <span>Cybersecurity Student</span>
            </div>
          </div>
        </div>

        <aside ref={panelRef} className="hero__panel">
          <div className="hero__panel-header">
            <div className="hero__panel-window-controls">
              <span />
              <span />
              <span />
            </div>

            <span>security-profile.json</span>
          </div>

          <div className="hero__panel-body">
            <div className="hero__profile-badge">
              <div className="hero__profile-icon">
                <ShieldCheck size={30} />
              </div>

              <div>
                <p>Security Profile</p>
                <h2>{personalData.name}</h2>
              </div>
            </div>

            <div className="hero__terminal">
              <p>
                <span className="hero__terminal-key">role:</span>
                <span className="hero__terminal-value">
                  "{personalData.shortTitle}"
                </span>
              </p>

              <p>
                <span className="hero__terminal-key">location:</span>
                <span className="hero__terminal-value">
                  "Chennai, India"
                </span>
              </p>

              <p>
                <span className="hero__terminal-key">focus:</span>
                <span className="hero__terminal-value">
                  ["Security Architecture", "Network Analysis", "Encryption"]
                </span>
              </p>

              <p>
                <span className="hero__terminal-key">status:</span>
                <span className="hero__terminal-success">
                  "Open to Opportunities"
                </span>
              </p>
            </div>

            <div className="hero__panel-projects">
              <div>
                <span>03</span>
                <p>Flagship Projects</p>
              </div>

              <div>
                <span>100%</span>
                <p>Security Focused</p>
              </div>

              <div>
                <span>24/7</span>
                <p>Learning Mode</p>
              </div>
            </div>

            <div className="hero__socials">
              <a
                href={personalData.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Open GitHub profile"
              >
                <Github size={19} />
              </a>

              <a
                href={personalData.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Open LinkedIn profile"
              >
                <Linkedin size={19} />
              </a>

              <a
                href={personalData.socialLinks.email}
                aria-label="Send an email"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>
        </aside>
      </div>

      <button
        type="button"
        className="hero__scroll"
        onClick={scrollToAbout}
        aria-label="Scroll to about section"
      >
        <span>Scroll to explore</span>
        <ArrowDown size={18} />
      </button>
    </section>
  );
}

export default Hero;