import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";

import { getAssetPath } from "../../utils/getAssetPath.js";

function ProjectCard({ project, index }) {
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <article className="project-card">
      <div className="project-card__image">
        <span className="project-card__number">{projectNumber}</span>

        <img
          src={getAssetPath(project.image)}
          alt={`${project.name} dashboard`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
            event.currentTarget
              .closest(".project-card__image")
              ?.querySelector(".project-card__image-fallback")
              ?.classList.add("is-visible");
          }}
        />

        <div className="project-card__image-fallback">
          Project screenshot
        </div>
      </div>

      <div className="project-card__content">
        <p className="project-card__category">{project.category}</p>

        <h2>{project.name}</h2>

        <p className="project-card__description">
          {project.shortDescription}
        </p>

        <div className="project-card__highlights">
          {project.highlights.map((highlight) => (
            <div key={`${project.slug}-${highlight.label}`}>
              <span>{highlight.label}</span>
              <strong>{highlight.value}</strong>
            </div>
          ))}
        </div>

        <div className="project-card__technologies">
          {project.technologies.slice(0, 5).map((technology) => (
            <span key={`${project.slug}-${technology}`}>
              {technology}
            </span>
          ))}
        </div>

        <div className="project-card__actions">
          <Link
            className="project-card__button project-card__button--primary"
            to={`/projects/${project.slug}`}
          >
            View Case Study
            <ArrowUpRight size={17} />
          </Link>

          <a
            className="project-card__button project-card__button--secondary"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={17} />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;