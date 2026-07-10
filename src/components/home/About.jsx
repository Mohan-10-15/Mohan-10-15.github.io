import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  MapPin,
  ShieldCheck
} from "lucide-react";

import { personalData } from "../../data/personalData.js";
import { getAssetPath } from "../../utils/getAssetPath.js";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const animationContext = gsap.context(() => {
      gsap.from(".about__animate", {
        opacity: 0,
        y: 45,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true
        }
      });
    }, sectionRef);

    return () => {
      animationContext.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="about">
      <div className="site-container about__container">
        <div className="about__visual about__animate">
          <div className="about__image-wrapper">
            <img
              src={getAssetPath(personalData.profileImage)}
              alt={personalData.name}
              onError={(event) => {
                event.currentTarget.style.display = "none";
                event.currentTarget
                  .closest(".about__image-wrapper")
                  ?.classList.add("about__image-wrapper--missing");
              }}
            />

            <div className="about__image-fallback">
              <ShieldCheck size={58} />
              <span>Add profile.jpg</span>
            </div>

            <div className="about__image-overlay" />
          </div>

          <div className="about__availability">
            <span className="about__availability-dot" />

            <div>
              <strong>Open to opportunities</strong>
              <p>Cybersecurity internships and collaborations</p>
            </div>
          </div>
        </div>

        <div className="about__content">
          <div className="about__eyebrow about__animate">
            <ShieldCheck size={16} />
            <span>About Me</span>
          </div>

          <h2 className="about__animate">
            Building practical security solutions through
            <span> continuous learning.</span>
          </h2>

          <p className="about__lead about__animate">
            {personalData.introduction}
          </p>

          <div className="about__paragraphs about__animate">
            {personalData.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="about__details about__animate">
            <div>
              <MapPin size={19} />

              <span>
                <small>Location</small>
                {personalData.location}
              </span>
            </div>

            <div>
              <BriefcaseBusiness size={19} />

              <span>
                <small>Current Status</small>
                B.E. Cyber Security Student
              </span>
            </div>

            <div>
              <Code2 size={19} />

              <span>
                <small>Primary Focus</small>
                Security Engineering
              </span>
            </div>
          </div>

          <a
            className="about__link about__animate"
            href={personalData.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            View LinkedIn Profile
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;