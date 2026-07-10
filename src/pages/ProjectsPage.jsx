import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, ShieldCheck } from "lucide-react";

import AnimatedBackground from "../components/common/AnimatedBackground.jsx";
import ProjectCard from "../components/projects/ProjectCard.jsx";
import { projectsData } from "../data/projectsData.js";
import { personalData } from "../data/personalData.js";

gsap.registerPlugin(ScrollTrigger);

function ProjectsPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const animationContext = gsap.context(() => {
      gsap.from(".projects-page__header > *", {
        opacity: 0,
        y: 35,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out"
      });

      gsap.utils.toArray(".project-card").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true
          }
        });
      });
    }, pageRef);

    return () => {
      animationContext.revert();
    };
  }, []);

  return (
    <main ref={pageRef} className="projects-page">
      <section className="projects-page__hero">
        <AnimatedBackground />

        <div className="projects-page__hero-overlay" />

        <div className="site-container projects-page__header">
          <div className="projects-page__eyebrow">
            <ShieldCheck size={16} />
            <span>Security Engineering Portfolio</span>
          </div>

          <h1>
            Cybersecurity projects built to solve
            <span> real security problems.</span>
          </h1>

          <p>
            Explore my flagship projects covering endpoint detection,
            network traffic analysis and secure data encryption.
          </p>

          <div className="projects-page__summary">
            <div>
              <strong>{projectsData.length}</strong>
              <span>Flagship projects</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Security domains</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Practical development</span>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-page__directory">
        <div className="site-container">
          <div className="projects-page__section-heading">
            <div>
              <p>SELECTED WORK</p>
              <h2>Flagship projects</h2>
            </div>

            <a
              href={personalData.socialLinks.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} />
              View all repositories
            </a>
          </div>

          <div className="projects-page__grid">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;