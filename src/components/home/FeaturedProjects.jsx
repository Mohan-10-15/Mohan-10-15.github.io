import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";

import Reveal from "../common/Reveal.jsx";
import { projectsData } from "../../data/projectsData.js";
import { getAssetPath } from "../../utils/getAssetPath.js";

function FeaturedProjects() {
  return (
    <section id="projects" className="featured-projects">
      <div className="site-container">
        <Reveal className="section-head">
          <div className="page-section-heading">
            <div>
              <span className="eyebrow">
                <span>
                  03 <span>/</span> SELECTED WORK
                </span>
              </span>

              <h2>
                Featured <em>projects</em>
              </h2>
            </div>

            <Link className="text-link" to="/projects">
              View all projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>

        <div className="featured-projects__grid">
          {projectsData.map((project, index) => (
            <Reveal
              as="article"
              key={project.slug}
              className="project-tile"
              delay={1}
            >
              <Link
                to={`/projects/${project.slug}`}
                className="project-tile__media"
              >
                <span className="project-tile__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <img
                  src={getAssetPath(project.image)}
                  alt={`${project.name} dashboard`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    event.currentTarget
                      .closest(".project-tile__media")
                      ?.querySelector(".project-tile__fallback")
                      ?.classList.add("is-visible");
                  }}
                />

                <div className="project-tile__fallback">
                  Project screenshot
                </div>
              </Link>

              <div className="project-tile__body">
                <p className="project-tile__category">
                  {project.category}
                </p>

                <h3>{project.name}</h3>

                <p className="project-tile__desc">
                  {project.shortDescription}
                </p>

                <div className="project-tile__tags">
                  {project.technologies.slice(0, 3).map((technology) => (
                    <span key={`${project.slug}-${technology}`}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-tile__links">
                  <Link to={`/projects/${project.slug}`}>
                    Case study
                    <ArrowUpRight size={15} />
                  </Link>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.name} GitHub repository`}
                  >
                    <Github size={17} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;