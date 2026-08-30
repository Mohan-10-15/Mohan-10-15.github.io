import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { gsap } from "gsap";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
  FileText,
  FolderGit2,
  Tag
} from "lucide-react";

import { blogData } from "../data/blogData.js";
import { getAssetPath } from "../utils/getAssetPath.js";

const categoryIcons = {
  "Endpoint Security": FolderGit2,
  "Network Security": FolderGit2,
  Cryptography: FolderGit2
};

function BlogDetailsPage() {
  const { articleSlug } = useParams();
  const pageRef = useRef(null);

  const article = blogData.find(
    (currentArticle) => currentArticle.slug === articleSlug
  );

  useEffect(() => {
    if (!article) {
      return undefined;
    }

    const animationContext = gsap.context(() => {
      gsap.from(".blog-details__animate", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out"
      });
    }, pageRef);

    return () => {
      animationContext.revert();
    };
  }, [article]);

  if (!article) {
    return (
      <main className="blog-details blog-details--missing">
        <div className="site-container blog-details__missing-content">
          <FileText size={42} />
          <p>ARTICLE NOT AVAILABLE</p>
          <h1>{articleSlug.replaceAll("-", " ")}</h1>
          <span>
            This technical article has not been published yet.
          </span>
          <Link to="/blog">
            <ArrowLeft size={17} />
            Return to Blog
          </Link>
        </div>
      </main>
    );
  }

  const Icon = categoryIcons[article.category] ?? BookOpen;

  const relatedArticles = blogData
    .filter((currentArticle) => currentArticle.slug !== article.slug)
    .slice(0, 2);

  return (
    <main ref={pageRef} className="blog-details">
      <section className="blog-details__hero">
        <div className="blog-details__hero-grid" />

        <div className="site-container blog-details__hero-content">
          <Link
            className="blog-details__back blog-details__animate"
            to="/blog"
          >
            <ArrowLeft size={17} />
            Back to Blog
          </Link>

          <div className="blog-details__head blog-details__animate">
            <div className="blog-details__category">
              <Icon size={16} />
              {article.category}
            </div>

            <h1>{article.title}</h1>

            <p className="blog-details__excerpt">{article.excerpt}</p>

            <div className="blog-details__meta">
              <div>
                <CalendarDays size={16} />
                <span>{article.date}</span>
              </div>

              <div>
                <Clock3 size={16} />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>

          <div className="blog-details__cover blog-details__animate">
            <img
              src={getAssetPath(article.image)}
              alt={`${article.title} cover`}
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <div className="blog-details__cover-overlay" />
          </div>
        </div>
      </section>

      <section className="blog-details__body">
        <div className="site-container blog-details__layout">
          <div className="blog-details__tags blog-details__animate">
            <div>
              <Tag size={16} />
              <span>Tags</span>
            </div>

            <div className="blog-details__tag-list">
              {article.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="blog-details__content">
            {article.content.map((section, index) => (
              <section
                key={`${article.slug}-section-${index}`}
                className="blog-details__section blog-details__animate"
              >
                <div className="blog-details__section-index">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h2>{section.heading}</h2>

                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className="blog-details__related">
          <div className="site-container">
            <div className="blog-details__related-heading">
              <p>KEEP READING</p>
              <h2>Related articles</h2>
            </div>

            <div className="blog-details__related-grid">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  to={`/blog/${related.slug}`}
                  className="blog-details__related-card"
                >
                  <div className="blog-details__related-image">
                    <img
                      src={getAssetPath(related.image)}
                      alt={related.title}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <div className="blog-details__related-body">
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
        </section>
      )}
    </main>
  );
}

export default BlogDetailsPage;
