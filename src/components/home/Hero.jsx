import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import {
  ArrowDown,
  ArrowRight,
  Download,
  MapPin,
  ShieldCheck
} from "lucide-react";

import AnimatedBackground from "../common/AnimatedBackground.jsx";
import { getAssetPath } from "../../utils/getAssetPath.js";
import { personalData } from "../../data/personalData.js";

function Hero() {
  const heroRef = useRef(null);

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = personalData.roles[roleIndex];

    const typingSpeed = deleting ? 40 : 70;

    const timeout = window.setTimeout(() => {
      if (!deleting) {
        const nextText = role.slice(0, displayedRole.length + 1);
        setDisplayedRole(nextText);

        if (nextText === role) {
          window.setTimeout(() => {
            setDeleting(true);
          }, 1400);
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
          y: 18,
          duration: 0.55
        })
        .from(
          ".hero__title-line",
          {
            opacity: 0,
            y: 50,
            duration: 0.85,
            stagger: 0.1
          },
          "-=0.25"
        )
        .from(
          ".hero__role",
          {
            opacity: 0,
            y: 20,
            duration: 0.55
          },
          "-=0.35"
        )
        .from(
          ".hero__description",
          {
            opacity: 0,
            y: 20,
            duration: 0.55
          },
          "-=0.3"
        )
        .from(
          ".hero__actions > *",
          {
            opacity: 0,
            y: 16,
            duration: 0.5,
            stagger: 0.08
          },
          "-=0.25"
        )
        .from(
          ".hero__meta-item",
          {
            opacity: 0,
            y: 14,
            duration: 0.45,
            stagger: 0.07
          },
          "-=0.25"
        )
        .from(
          ".hero__card *",
          {
            opacity: 0,
            x: 50,
            duration: 0.7,
            stagger: 0.06
          },
          "-=0.7"
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

      <div className="site-container hero__container">
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__status-dot" />
            <span>{personalData.availability.status}</span>
          </div>

          <h1 className="hero__title">
            <span className="hero__title-line">
              Building secure digital
            </span>

            <span className="hero__title-line hero__title-line--accent">
              systems that matter.
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
            <Link
              className="hero__button hero__button--primary"
              to="/projects"
            >
              View Projects
              <ArrowRight size={17} />
            </Link>

            <a
              className="hero__button hero__button--secondary"
              href={personalData.resumeFile}
              target="_blank"
              rel="noreferrer"
            >
              <Download size={17} />
              View Resume
            </a>
          </div>

          <div className="hero__meta">
            <div className="hero__meta-item">
              <MapPin size={16} />
              <span>{personalData.location}</span>
            </div>

            <div className="hero__meta-item">
              <ShieldCheck size={16} />
              <span>B.E. Cyber Security</span>
            </div>
          </div>
        </div>

        <aside className="hero__card">
          <div className="hero__card-image">
            <img
              src={getAssetPath(personalData.profileImage)}
              alt={personalData.name}
              onError={(event) => {
                event.currentTarget.style.display = "none";
                event.currentTarget
                  .closest(".hero__card-image")
                  ?.classList.add("hero__card-image--missing");
              }}
            />
            <div className="hero__card-fallback">
              <ShieldCheck size={40} />
              <span>Profile photo</span>
            </div>
          </div>

          <div className="hero__card-body">
            <p className="hero__card-role">{personalData.title}</p>
            <h2>{personalData.name}</h2>

            <div className="hero__card-stats">
              <div>
                <strong>03</strong>
                <span>Flagship Projects</span>
              </div>

              <div>
                <strong>05</strong>
                <span>Security Domains</span>
              </div>

              <div>
                <strong>02+</strong>
                <span>Certifications</span>
              </div>
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
        <ArrowDown size={17} />
      </button>
    </section>
  );
}

export default Hero;
