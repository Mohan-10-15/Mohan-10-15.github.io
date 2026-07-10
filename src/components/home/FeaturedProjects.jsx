import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  ShieldCheck
} from "lucide-react";

import { projectsData } from "../../data/projectsData.js";
import { getAssetPath } from "../../utils/getAssetPath.js";

gsap.registerPlugin(ScrollTrigger);

function FeaturedProjects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const animationContext = gsap.context(() => {
      gsap.from(".featured-projects__heading > *", {
        opacity: 0,
        y: 35,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true
        }
      });

      gsap.from(".featured-project-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".featured-projects__grid",
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
    <section
      ref={sectionRef}
      id="projects"
      className="featured-projects"
    >
      <div className="site-container">
        <div className="featured-projects__heading">
          <div>
            <p>FEATURED SECURITY WORK</p>

            <h2>
              Practical cybersecurity
              <span> projects.</span>
            </h2>
          </div>

          <Link to="/projects">
            View All Projects
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="featured-projects__grid">
          {projectsData.map((project, index) => (
            <article
              key={project.slug}
              className="featured-project-card"
            >
              <div className="featured-project-card__image">
                <img
                  src={getAssetPath(project.image)}
                  alt={`${project.name} dashboard`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";

                    event.currentTarget
                      .closest(".featured-project-card__image")
                      ?.classList.add(
                        "featured-project-card__image--missing"
                      );
                  }}
                />

                <div className="featured-project-card__fallback">
                  <ShieldCheck size={44} />
                  <span>Project preview</span>
                </div>

                <div className="featured-project-card__overlay" />

                <span className="featured-project-card__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="featured-project-card__status">
                  {project.status}
                </span>
              </div>

              <div className="featured-project-card__content">
                <p className="featured-project-card__category">
                  {project.category}
                </p>

                <h3>{project.name}</h3>

                <p className="featured-project-card__description">
                  {project.shortDescription}
                </p>

                <div className="featured-project-card__technologies">
                  {project.technologies.slice(0, 4).map((technology) => (
                    <span key={`${project.slug}-${technology}`}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="featured-project-card__actions">
                  <Link to={`/projects/${project.slug}`}>
                    View Case Study
                    <ArrowUpRight size={16} />
                  </Link>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.name} GitHub repository`}
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;