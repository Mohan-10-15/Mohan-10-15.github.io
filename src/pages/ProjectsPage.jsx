import { ArrowUpRight, Github } from "lucide-react";

import ProjectCard from "../components/projects/ProjectCard.jsx";
import Reveal from "../components/common/Reveal.jsx";
import { projectsData } from "../data/projectsData.js";
import { personalData } from "../data/personalData.js";

function ProjectsPage() {
  const categories = new Set(
    projectsData.map((project) => project.category)
  );

  return (
    <main className="secondary-page">
      <header className="page-header">
        <div className="site-container page-header__inner">
          <Reveal>
            <span className="eyebrow">
              <span>
                PROJECTS <span>/</span> SELECTED WORK
              </span>
            </span>

            <h1>
              Security software built to solve <em>real problems.</em>
            </h1>

            <p className="page-header__tagline">
              Flagship projects spanning endpoint detection, network
              threat analysis and data encryption — each with real
              screenshots and a case study.
            </p>
          </Reveal>

          <Reveal delay={1}>
            <div className="page-header__stats">
              <div>
                <strong>{projectsData.length}</strong>
                <span>Flagship projects</span>
              </div>

              <div>
                <strong>{categories.size}</strong>
                <span>Security domains</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Practical development</span>
              </div>
            </div>

            <a
              className="text-link"
              href={personalData.socialLinks.github}
              target="_blank"
              rel="noreferrer"
            >
              All repositories
              <Github size={15} />
            </a>
          </Reveal>
        </div>
      </header>

      <section className="page-body">
        <div className="site-container">
          <Reveal className="page-section-heading">
            <div>
              <p>Selected Work</p>
              <h2>Flagship projects</h2>
            </div>
          </Reveal>

          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <Reveal
                as="div"
                key={project.slug}
                delay={index > 0 ? 1 : 0}
              >
                <ProjectCard project={project} index={index} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="page-cta">
              Want to collaborate on a security project?{" "}
              <a
                className="text-link"
                href="mailto:mohanakrishnan1510@gmail.com"
              >
                Get in touch
                <ArrowUpRight size={15} />
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;