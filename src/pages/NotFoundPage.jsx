import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="page-center">
      <p className="page-label">ERROR 404</p>

      <h1>Page Not Found</h1>

      <p>The requested page does not exist.</p>

      <Link className="page-button" to="/">
        Return Home
      </Link>
    </main>
  );
}

export default NotFoundPage;