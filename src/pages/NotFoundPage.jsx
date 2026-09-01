import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function NotFoundPage() {
  return (
    <div className="page-center">
      <p className="not-found-label">Missed Route</p>

      <h1 className="not-found-title">
        404 <span className="code">//</span>
      </h1>

      <p>This page does not exist.</p>

      <Link className="text-link" to="/">
        <ArrowLeft size={15} />
        Back to home
      </Link>
    </div>
  );
}

export default NotFoundPage;