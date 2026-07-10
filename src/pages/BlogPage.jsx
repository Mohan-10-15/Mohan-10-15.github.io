import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  ArrowRight,
  BookOpen,
  Code2,
  FileText,
  Search
} from "lucide-react";

import { blogData } from "../data/blogData.js";

function BlogPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const animationContext = gsap.context(() => {
      gsap.from(".blog-page__animate", {
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
  }, []);

  return (
    <main ref={pageRef} className="blog-page">
      <section className="blog-page__hero">
        <div className="blog-page__grid-background" />

        <div className="site-container blog-page__header">
          <div className="blog-page__eyebrow blog-page__animate">
            <BookOpen size={16} />
            <span>Technical Writing</span>
          </div>

          <h1 className="blog-page__animate">
            Research, development and
            <span> cybersecurity insights.</span>
          </h1>

          <p className="blog-page__animate">
            A collection of technical articles, project development reports,
            cybersecurity concepts and practical learning experiences.
          </p>

          <div className="blog-page__stats blog-page__animate">
            <div>
              <strong>{blogData.length}</strong>
              <span>Published articles</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Planned categories</span>
            </div>

            <div>
              <strong>2026</strong>
              <span>Writing journey</span>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-page__content">
        <div className="site-container">
          <div className="blog-page__toolbar">
            <div>
              <p>LATEST WRITING</p>
              <h2>Technical articles</h2>
            </div>

            <div className="blog-page__search">
              <Search size={18} />
              <input
                type="text"
                placeholder="Search articles"
                aria-label="Search articles"
                disabled
              />
            </div>
          </div>

          {blogData.length > 0 ? (
            <div className="blog-page__grid">
              {blogData.map((article) => (
                <article key={article.slug} className="blog-card">
                  <p>{article.category}</p>
                  <h2>{article.title}</h2>
                  <span>{article.description}</span>
                </article>
              ))}
            </div>
          ) : (
            <div className="content-empty-state">
              <div className="content-empty-state__icon">
                <FileText size={38} />
              </div>

              <p className="content-empty-state__label">
                ARTICLES IN PREPARATION
              </p>

              <h2>Technical articles are coming soon.</h2>

              <p className="content-empty-state__description">
                I am currently preparing detailed articles about my
                cybersecurity projects, network analysis, endpoint security
                and encryption development.
              </p>

              <div className="content-empty-state__topics">
                <div>
                  <Code2 size={20} />
                  <span>Project Development</span>
                </div>

                <div>
                  <BookOpen size={20} />
                  <span>Cybersecurity Concepts</span>
                </div>

                <div>
                  <FileText size={20} />
                  <span>Learning Reports</span>
                </div>
              </div>

              <a href="/projects">
                Explore Projects
                <ArrowRight size={17} />
              </a>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default BlogPage;