import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Clock3
} from "lucide-react";

import { blogData } from "../data/blogData.js";
import { getAssetPath } from "../utils/getAssetPath.js";

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

      gsap.from(".blog-article-card", {
        opacity: 0,
        y: 45,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, pageRef);

    return () => {
      animationContext.revert();
    };
  }, []);

  const featuredArticle = blogData[0];
  const remainingArticles = blogData.slice(1);

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
            Practical technical articles drawn from building endpoint,
            network and cryptography security tools.
          </p>

          <div className="blog-page__stats blog-page__animate">
            <div>
              <strong>{blogData.length}</strong>
              <span>Published articles</span>
            </div>

            <div>
              <strong>
                {new Set(blogData.map((article) => article.category)).size}
              </strong>
              <span>Security domains</span>
            </div>

            <div>
              <strong>
                {blogData.reduce(
                  (total, article) =>
                    total +
                    Number.parseInt(article.readTime, 10) || 0,
                  0
                )}
              </strong>
              <span>Minutes of reading</span>
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
          </div>

          {featuredArticle && (
            <Link
              to={`/blog/${featuredArticle.slug}`}
              className="blog-featured-card"
            >
              <div className="blog-featured-card__image">
                <img
                  src={getAssetPath(featuredArticle.image)}
                  alt={featuredArticle.title}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <span className="blog-featured-card__badge">
                  Featured
                </span>
              </div>

              <div className="blog-featured-card__content">
                <p className="blog-featured-card__category">
                  {featuredArticle.category}
                </p>

                <h2>{featuredArticle.title}</h2>

                <p className="blog-featured-card__excerpt">
                  {featuredArticle.excerpt}
                </p>

                <div className="blog-featured-card__meta">
                  <span>
                    <CalendarDays size={15} />
                    {featuredArticle.date}
                  </span>

                  <span>
                    <Clock3 size={15} />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <div className="blog-featured-card__footer">
                  <div className="blog-featured-card__tags">
                    {featuredArticle.tags.slice(0, 3).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <span className="blog-featured-card__link">
                    Read Article
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </div>
            </Link>
          )}

          {remainingArticles.length > 0 && (
            <div className="blog-page__grid">
              {remainingArticles.map((article) => (
                <Link
                  key={article.slug}
                  to={`/blog/${article.slug}`}
                  className="blog-article-card"
                >
                  <div className="blog-article-card__image">
                    <img
                      src={getAssetPath(article.image)}
                      alt={article.title}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <div className="blog-article-card__content">
                    <p className="blog-article-card__category">
                      {article.category}
                    </p>

                    <h3>{article.title}</h3>

                    <p className="blog-article-card__excerpt">
                      {article.excerpt}
                    </p>

                    <div className="blog-article-card__meta">
                      <span>
                        <CalendarDays size={14} />
                        {article.date}
                      </span>

                      <span>
                        <Clock3 size={14} />
                        {article.readTime}
                      </span>
                    </div>

                    <span className="blog-article-card__link">
                      Read Article
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default BlogPage;
