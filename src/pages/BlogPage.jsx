import { ArrowRight, ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";

import Reveal from "../components/common/Reveal.jsx";
import { blogData } from "../data/blogData.js";
import { getAssetPath } from "../utils/getAssetPath.js";

function BlogPage() {
  const featuredArticle = blogData[0];
  const remainingArticles = blogData.slice(1);

  const totalMinutes = blogData.reduce(
    (total, article) =>
      total + (Number.parseInt(article.readTime, 10) || 0),
    0
  );

  return (
    <main className="secondary-page">
      <header className="page-header">
        <div className="site-container page-header__inner">
          <Reveal>
            <span className="eyebrow">
              <span>
                JOURNAL <span>/</span> TECHNICAL WRITING
              </span>
            </span>

            <h1>
              Research, development and <em>security insights.</em>
            </h1>

            <p className="page-header__tagline">
              Practical articles drawn from building endpoint, network
              and cryptography security tools.
            </p>
          </Reveal>

          <Reveal delay={1}>
            <div className="page-header__stats">
              <div>
                <strong>{blogData.length}</strong>
                <span>Published articles</span>
              </div>

              <div>
                <strong>
                  {
                    new Set(
                      blogData.map((article) => article.category)
                    ).size
                  }
                </strong>
                <span>Security domains</span>
              </div>

              <div>
                <strong>{totalMinutes}</strong>
                <span>Minutes of reading</span>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="page-body">
        <div className="site-container">
          <Reveal className="page-section-heading">
            <div>
              <p>Latest Writing</p>
              <h2>Technical articles</h2>
            </div>
          </Reveal>

          {featuredArticle && (
            <Reveal as="article">
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
            </Reveal>
          )}

          {remainingArticles.length > 0 && (
            <div className="blog-grid">
              {remainingArticles.map((article, index) => (
                <Reveal
                  as="article"
                  key={article.slug}
                  delay={index > 0 ? 1 : 0}
                >
                  <Link
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
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default BlogPage;