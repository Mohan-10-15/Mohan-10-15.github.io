import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import {
  Navigate,
  Route,
  Routes,
  useLocation
} from "react-router-dom";

import PageLoader from "./components/common/PageLoader.jsx";
import PageTransition from "./components/common/PageTransition.jsx";
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

function RouteFallback() {
  return (
    <div className="route-fallback">
      <PageLoader />
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <PageTransition key={location.pathname}>
        <Suspense fallback={<RouteFallback />}>
          <Routes location={location}>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/projects"
            element={<ProjectsPage />}
          />

          <Route
            path="/projects/:projectSlug"
            element={<ProjectDetailsPage />}
          />

          <Route
            path="/blog"
            element={<BlogPage />}
          />

          <Route
            path="/blog/:articleSlug"
            element={<BlogDetailsPage />}
          />

          <Route
            path="/events"
            element={<EventsPage />}
          />

          <Route
            path="/events/:eventSlug"
            element={<EventDetailsPage />}
          />

          <Route
            path="/certifications"
            element={<CertificatesPage />}
          />

          <Route
            path="/home"
            element={<Navigate to="/" replace />}
          />

          <Route
            path="*"
            element={<NotFoundPage />}
          />
          </Routes>
        </Suspense>
      </PageTransition>
    </AnimatePresence>
  );
}

function App() {
  return (
    <PageLayout>
      <AnimatedRoutes />
    </PageLayout>
  );
}

export default App;