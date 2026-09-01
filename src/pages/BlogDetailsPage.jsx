import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
  FolderGit2,
  Tag
} from "lucide-react";

import Reveal from "../components/common/Reveal.jsx";
import { blogData } from "../data/blogData.js";
import { getAssetPath } from "../utils/getAssetPath.js";

const categoryIcon = {
  "Endpoint Security": FolderGit2,
  "Network Security": FolderGit2,
  Cryptography: FolderGit2
};

function BlogDetailsPage() {
  const { articleSlug } = useParams();

  const article = blogData.find(
    (currentArticle) => currentArticle.slug === articleSlug
  );

  if (!article) {
    return (
      <main className="secondary-page">
        <div className="site-container">
          <div className="detail-hero">
            <Link className="back-link" to="/blog">
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            <p className="detail-kicker">Article Unavailable</p>
            <h1>{(articleSlug ?? "Article").replaceAll("-", " ")}</h1>
            <p className="detail-hero__description">
              This technical article has not been published yet.
            </p>
          </div>
        </div>
      </main>
    );
  }

  const Icon = categoryIcon[article.category] ?? BookOpen;

  const relatedArticles = blogData
    .filter((currentArticle) => currentArticle.slug !== article.slug)
    .slice(0, 2);

  return (
    <main className="secondary-page">
      <section className="detail-hero">
        <div className="site-container">
          <Link className="back-link" to="/blog">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <Reveal>
            <p className="detail-kicker">
              <Icon size={16} />
              {article.category}
            </p>

            <h1>{article.title}</h1>

            <p className="detail-hero__description">
              {article.excerpt}
            </p>

            <div className="detail-metrics">
              <div>
                <span>Published</span>
                <strong>{article.date}</strong>
              </div>

              <div>
                <span>Reading time</span>
                <strong>{article.readTime}</strong>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="detail-cover">
              <img
                src={getAssetPath(article.image)}
                alt={`${article.title} cover`}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  event.currentTarget
                    .closest(".detail-cover")
                    ?.querySelector(".detail-cover__fallback")
                    ?.classList.add("is-visible");
                }}
              />
              <div className="detail-cover__fallback">
                Article cover image
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="detail-body">
        <div className="site-container detail-body__grid">
          <div>
            <Reveal as="div" className="detail-tags">
              <div>
                <Tag size={16} />
                <span>Tags</span>
              </div>

              {article.tags.map((tag) => (
                <span className="tag" key={`${article.slug}-${tag}`}>
                  {tag}
                </span>
              ))}
            </Reveal>

            {article.content.map((section, index) => (
              <Reveal
                as="section"
                key={`${article.slug}-section-${index}`}
                className="article-section"
              >
                <span className="article-section__index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h2>{section.heading}</h2>

                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>
            ))}

            {relatedArticles.length > 0 && (
              <Reveal as="section" className="article-section">
                <span className="article-section__index">✦</span>

                <div>
                  <h2>Keep reading</h2>

                  <div className="related-grid">
                    {relatedArticles.map((related) => (
                      <Link
                        key={related.slug}
                        className="related-card"
                        to={`/blog/${related.slug}`}
                      >
                        <div className="related-card__image">
                          <img
                            src={getAssetPath(related.image)}
                            alt={related.title}
                            loading="lazy"
                            onError={(event) => {
                              event.currentTarget.style.display =
                                "none";
                            }}
                          />
                        </div>

                        <div className="related-card__body">
                          <p>{related.category}</p>
                          <h3>{related.title}</h3>
                          <span>
                            {related.readTime}
                            <ArrowRight size={15} />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>

          <aside>
            <Reveal as="div" className="detail-sidebar-card">
              <p className="detail-section__label">About The Article</p>
              <h3>{article.category}</h3>
              <p>{article.excerpt}</p>
            </Reveal>

            <Reveal as="div" className="detail-sidebar-card">
              <p className="detail-section__label">Metadata</p>
              <div className="detail-facts">
                <div>
                  <CalendarDays size={18} />
                  <div>
                    <small>Published</small>
                    <span>{article.date}</span>
                  </div>
                </div>

                <div>
                  <Clock3 size={18} />
                  <div>
                    <small>Read time</small>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default BlogDetailsPage;