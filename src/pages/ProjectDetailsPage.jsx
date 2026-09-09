import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Github,
  Layers,
  Terminal
} from "lucide-react";

import ProjectLightbox from "../components/projects/ProjectLightbox.jsx";
import Reveal from "../components/common/Reveal.jsx";
import { projectsData } from "../data/projectsData.js";
import { getAssetPath } from "../utils/getAssetPath.js";

function ProjectDetailsPage() {
  const { projectSlug } = useParams();

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const project = projectsData.find(
    (currentProject) => currentProject.slug === projectSlug
  );

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const showPreviousScreenshot = useCallback(() => {
    if (!project || project.screenshots.length === 0) {
      return;
    }

    setLightboxIndex((currentIndex) => {
      if (currentIndex === null) {
        return 0;
      }

      return (
        currentIndex - 1 + project.screenshots.length
      ) % project.screenshots.length;
    });
  }, [project]);

  const showNextScreenshot = useCallback(() => {
    if (!project || project.screenshots.length === 0) {
      return;
    }

    setLightboxIndex((currentIndex) => {
      if (currentIndex === null) {
        return 0;
      }

      return (currentIndex + 1) % project.screenshots.length;
    });
  }, [project]);

  useEffect(() => {
    setLightboxIndex(null);
  }, [projectSlug]);

  if (!project) {
    return (
      <main className="secondary-page">
        <div className="site-container">
          <div className="detail-hero">
            <Link className="back-link" to="/projects">
              <ArrowLeft size={16} />
              Back to Projects
            </Link>

            <p className="detail-kicker">Project Not Found</p>
            <h1>The requested project does not exist.</h1>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="secondary-page">
      <section className="detail-hero">
        <div className="site-container">
          <Link className="back-link" to="/projects">
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <Reveal>
            <p className="detail-kicker">
              {project.category} · {project.status}
            </p>

            <h1>{project.name}</h1>

            <p className="detail-hero__description">
              {project.description}
            </p>
          </Reveal>

          <Reveal delay={1}>
            <div className="detail-hero__layout">
              <div className="detail-cover">
                <img
                  src={getAssetPath(project.image)}
                  alt={`${project.name} project dashboard`}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    event.currentTarget
                      .closest(".detail-cover")
                      ?.querySelector(".detail-cover__fallback")
                      ?.classList.add("is-visible");
                  }}
                />
                <div className="detail-cover__fallback">
                  Project screenshot
                </div>
              </div>

              <div className="detail-metrics">
                {project.highlights.map((highlight) => (
                  <div key={`${project.slug}-${highlight.label}`}>
                    <span>{highlight.label}</span>
                    <strong>{highlight.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="detail-facts">
              <div>
                <Terminal size={19} />
                <div>
                  <small>Platform</small>
                  <span>{project.highlights[0]?.value}</span>
                </div>
              </div>

              <div>
                <Layers size={19} />
                <div>
                  <small>Architecture</small>
                  <span>
                    {project.highlights[2]?.value ?? "Security Tool"}
                  </span>
                </div>
              </div>

              <div>
                <Github size={19} />
                <a
                  className="text-link"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Repository
                  <ArrowUpRight size={15} />
                </a>
              </div>

              <span className="detail-status">{project.status}</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="detail-body">
        <div className="site-container detail-body__grid">
          <div>
            <Reveal as="section" className="detail-section">
              <p className="detail-section__label">Project Overview</p>
              <h2>About the project</h2>
              <p>{project.description}</p>
              <p>{project.shortDescription}</p>
            </Reveal>

            <Reveal as="section" className="detail-section">
              <p className="detail-section__label">Core Capabilities</p>
              <h2>Features and functionality</h2>
              <div className="detail-features">
                {project.features.map((feature) => (
                  <div key={`${project.slug}-${feature}`}>
                    <Check size={18} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal as="section" className="detail-section">
              <p className="detail-section__label">Project Gallery</p>
              <h2>Interface screenshots</h2>

              {project.screenshots.length > 0 ? (
                <div className="detail-gallery">
                  {project.screenshots.map((screenshot, index) => (
                    <figure key={`${project.slug}-shot-${index}`}>
                      <button
                        type="button"
                        onClick={() => {
                          setLightboxIndex(index);
                        }}
                        aria-label={`Open ${project.name} screenshot ${index + 1}`}
                      >
                        <div className="detail-gallery-image">
                          <img
                            src={getAssetPath(screenshot)}
                            alt={`${project.name} screenshot ${index + 1}`}
                            loading="lazy"
                            onError={(event) => {
                              event.currentTarget.style.display =
                                "none";
                              event.currentTarget
                                .closest(".detail-gallery-image")
                                ?.querySelector(
                                  ".detail-gallery-fallback"
                                )
                                ?.classList.add("is-visible");
                            }}
                          />
                          <div className="detail-gallery-fallback">
                            Screenshot unavailable
                          </div>
                        </div>

                        <figcaption>
                          {project.name} — Screen {index + 1}
                        </figcaption>
                      </button>
                    </figure>
                  ))}
                </div>
              ) : (
                <p>No screenshots have been added yet.</p>
              )}
            </Reveal>
          </div>

          <aside>
            <Reveal as="div" className="detail-sidebar-card">
              <p className="detail-section__label">Technology Stack</p>
              <h3>Tools and technologies</h3>
              <div className="detail-technology-list">
                {project.technologies.map((technology) => (
                  <span key={`${project.slug}-${technology}`}>
                    {technology}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal as="div" className="detail-sidebar-card">
              <p className="detail-section__label">Source Code</p>
              <h3>Explore the repository</h3>
              <p>
                View the source code, implementation files and project
                documentation on GitHub.
              </p>
              <a
                className="text-link sidebar-button"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} />
                Open Repository
                <ArrowUpRight size={16} />
              </a>
            </Reveal>
          </aside>
        </div>
      </section>

      {lightboxIndex !== null && (
        <ProjectLightbox
          projectName={project.name}
          screenshots={project.screenshots}
          activeIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrevious={showPreviousScreenshot}
          onNext={showNextScreenshot}
        />
      )}
    </main>
  );
}

export default ProjectDetailsPage;