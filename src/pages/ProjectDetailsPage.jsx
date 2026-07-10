import {
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";

import { Link, useParams } from "react-router-dom";
import { gsap } from "gsap";

import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Github,
  ShieldCheck
} from "lucide-react";

import ProjectLightbox from "../components/projects/ProjectLightbox.jsx";
import { projectsData } from "../data/projectsData.js";
import { getAssetPath } from "../utils/getAssetPath.js";

function ProjectDetailsPage() {
  const { projectSlug } = useParams();

  const pageRef = useRef(null);

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
        currentIndex -
        1 +
        project.screenshots.length
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

      return (
        currentIndex + 1
      ) % project.screenshots.length;
    });
  }, [project]);

  useEffect(() => {
    setLightboxIndex(null);
  }, [projectSlug]);

  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const animationContext = gsap.context(() => {
      gsap.from(".project-detail__animate", {
        opacity: 0,
        y: 35,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, pageRef);

    return () => {
      animationContext.revert();
    };
  }, [project]);

  if (!project) {
    return (
      <main className="project-not-found">
        <div className="site-container project-not-found__content">
          <ShieldCheck size={46} />

          <p>PROJECT NOT FOUND</p>

          <h1>The requested project does not exist.</h1>

          <Link to="/projects">
            <ArrowLeft size={18} />
            Return to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main ref={pageRef} className="project-detail">
      <section className="project-detail__hero">
        <div className="project-detail__hero-grid" />

        <div className="site-container project-detail__hero-content">
          <Link
            className="project-detail__back project-detail__animate"
            to="/projects"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>

          <div className="project-detail__hero-layout">
            <div className="project-detail__intro">
              <div className="project-detail__eyebrow project-detail__animate">
                <ShieldCheck size={16} />
                <span>{project.category}</span>
              </div>

              <h1 className="project-detail__animate">
                {project.name}
              </h1>

              <p className="project-detail__description project-detail__animate">
                {project.description}
              </p>

              <div className="project-detail__actions project-detail__animate">
                <a
                  className="project-detail__button project-detail__button--primary"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={18} />
                  View GitHub Repository
                  <ArrowUpRight size={17} />
                </a>

                <span className="project-detail__status">
                  {project.status}
                </span>
              </div>
            </div>

            <div className="project-detail__cover project-detail__animate">
              <img
                src={getAssetPath(project.image)}
                alt={`${project.name} project dashboard`}
                onError={(event) => {
                  event.currentTarget.style.display = "none";

                  event.currentTarget
                    .closest(".project-detail__cover")
                    ?.classList.add(
                      "project-detail__cover--missing"
                    );
                }}
              />

              <div className="project-detail__cover-fallback">
                <ShieldCheck size={54} />
                <span>{project.name}</span>
              </div>

              <div className="project-detail__cover-overlay" />
            </div>
          </div>

          <div className="project-detail__metrics project-detail__animate">
            {project.highlights.map((highlight) => (
              <div key={`${project.slug}-${highlight.label}`}>
                <span>{highlight.label}</span>
                <strong>{highlight.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="project-detail__body">
        <div className="site-container">
          <div className="project-detail__content-grid">
            <div className="project-detail__main">
              <section className="project-detail__section">
                <p className="project-detail__section-label">
                  PROJECT OVERVIEW
                </p>

                <h2>About the project</h2>

                <p>{project.description}</p>

                <p>{project.shortDescription}</p>
              </section>

              <section className="project-detail__section">
                <p className="project-detail__section-label">
                  CORE CAPABILITIES
                </p>

                <h2>Features and functionality</h2>

                <div className="project-detail__features">
                  {project.features.map((feature) => (
                    <div
                      key={`${project.slug}-${feature}`}
                      className="project-detail__feature"
                    >
                      <CheckCircle2 size={19} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="project-detail__section">
                <p className="project-detail__section-label">
                  PROJECT GALLERY
                </p>

                <h2>Interface screenshots</h2>

                {project.screenshots.length > 0 ? (
                  <div className="project-detail__gallery">
                    {project.screenshots.map(
                      (screenshot, index) => (
                        <figure
                          key={`${project.slug}-screenshot-${index}`}
                          className="project-detail__gallery-item"
                        >
                          <button
                            type="button"
                            className="project-detail__gallery-button"
                            onClick={() => {
                              setLightboxIndex(index);
                            }}
                            aria-label={`Open ${project.name} screenshot ${
                              index + 1
                            }`}
                          >
                            <div className="project-detail__gallery-image">
                              <img
                                src={getAssetPath(screenshot)}
                                alt={`${project.name} screenshot ${
                                  index + 1
                                }`}
                                loading="lazy"
                                onError={(event) => {
                                  event.currentTarget.style.display =
                                    "none";

                                  event.currentTarget
                                    .closest(
                                      ".project-detail__gallery-image"
                                    )
                                    ?.classList.add(
                                      "project-detail__gallery-image--missing"
                                    );
                                }}
                              />

                              <div className="project-detail__gallery-fallback">
                                <ShieldCheck size={38} />
                                <span>
                                  Screenshot unavailable
                                </span>
                              </div>

                              <div className="project-detail__gallery-zoom">
                                View Fullscreen
                              </div>
                            </div>

                            <figcaption>
                              {project.name} — Screen {index + 1}
                            </figcaption>
                          </button>
                        </figure>
                      )
                    )}
                  </div>
                ) : (
                  <div className="project-detail__gallery-empty">
                    <ShieldCheck size={38} />

                    <p>No screenshots have been added yet.</p>
                  </div>
                )}
              </section>
            </div>

            <aside className="project-detail__sidebar">
              <div className="project-detail__sidebar-card">
                <p className="project-detail__section-label">
                  TECHNOLOGY STACK
                </p>

                <h3>Tools and technologies</h3>

                <div className="project-detail__technology-list">
                  {project.technologies.map((technology) => (
                    <span key={`${project.slug}-${technology}`}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-detail__sidebar-card">
                <p className="project-detail__section-label">
                  SOURCE CODE
                </p>

                <h3>Explore the repository</h3>

                <p>
                  View the source code, implementation files and project
                  documentation on GitHub.
                </p>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={18} />
                  Open Repository
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </aside>
          </div>
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