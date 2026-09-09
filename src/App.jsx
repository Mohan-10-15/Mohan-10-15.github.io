import { lazy, Suspense, useEffect, useRef } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import PageLoader from "./components/common/PageLoader.jsx";
import PageLayout from "./components/layout/PageLayout.jsx";

const BlogDetailsPage = lazy(() =>
  import("./pages/BlogDetailsPage.jsx")
);
const BlogPage = lazy(() => import("./pages/BlogPage.jsx"));
const CertificatesPage = lazy(() =>
  import("./pages/CertificatesPage.jsx")
);
const EventDetailsPage = lazy(() =>
  import("./pages/EventDetailsPage.jsx")
);
const EventsPage = lazy(() => import("./pages/EventsPage.jsx"));
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage.jsx")
);
const ProjectDetailsPage = lazy(() =>
  import("./pages/ProjectDetailsPage.jsx")
);
const ProjectsPage = lazy(() =>
  import("./pages/ProjectsPage.jsx")
);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Module-level, not state: survives remounts within the same page load but
// resets on an actual hard refresh. This is what makes the fix work — the
// branded loader is a nice first-impression moment exactly once, not a
// recurring tax on every click to a not-yet-cached route.
let hasShownInitialLoader = false;

function RouteFallback() {
  const isFirstLoad = useRef(!hasShownInitialLoader).current;

  useEffect(() => {
    hasShownInitialLoader = true;
  }, []);

  // Internal navigation to a lazy chunk: Vite chunks are small enough that
  // forcing the full branded animation here just adds a wait with no
  // purpose. A thin top bar respects that something is happening without
  // blocking the view.
  if (!isFirstLoad) {
    return <div className="route-fallback route-fallback--bar" aria-hidden="true" />;
  }

  return (
    <div className="route-fallback">
      <PageLoader />
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route
        path="/projects/:projectSlug"
        element={<ProjectDetailsPage />}
      />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:articleSlug" element={<BlogDetailsPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route
        path="/events/:eventSlug"
        element={<EventDetailsPage />}
      />
      <Route path="/certifications" element={<CertificatesPage />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

function App() {
  return (
    <PageLayout>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <AppRoutes />
      </Suspense>
    </PageLayout>
  );
}

export default App;