import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Braces,
  Network,
  ShieldCheck,
  Wrench
} from "lucide-react";

import { skillsData } from "../../data/skillsData.js";

gsap.registerPlugin(ScrollTrigger);

const categoryIcons = {
  Programming: Braces,
  Cybersecurity: ShieldCheck,
  "Frameworks and Tools": Wrench
};

function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const animationContext = gsap.context(() => {
      gsap.from(".skills__heading > *", {
        opacity: 0,
        y: 35,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true
        }
      });

      gsap.from(".skills__card", {
        opacity: 0,
        y: 50,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills__grid",
          start: "top 82%",
          once: true
        }
      });
    }, sectionRef);

    return () => {
      animationContext.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="skills">
      <div className="site-container">
        <div className="skills__heading">
          <div>
            <p>TECHNICAL CAPABILITIES</p>

            <h2>
              Skills built through projects,
              <span> practice and research.</span>
            </h2>
          </div>

          <div className="skills__heading-icon">
            <Network size={28} />
          </div>
        </div>

        <div className="skills__grid">
          {skillsData.map((group) => {
            const Icon = categoryIcons[group.category] ?? ShieldCheck;

            return (
              <article key={group.category} className="skills__card">
                <div className="skills__card-icon">
                  <Icon size={24} />
                </div>

                <p className="skills__card-label">
                  SKILL CATEGORY
                </p>

                <h3>{group.category}</h3>

                <div className="skills__list">
                  {group.skills.map((skill) => (
                    <span key={`${group.category}-${skill}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;