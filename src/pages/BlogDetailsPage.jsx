import { Link, useParams } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";

function BlogDetailsPage() {
  const { articleSlug } = useParams();

  return (
    <main className="detail-empty-page">
      <div className="site-container detail-empty-page__content">
        <div className="detail-empty-page__icon">
          <FileText size={42} />
        </div>

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

export default BlogDetailsPage;