import { AnimatePresence } from "framer-motion";
import {
  Navigate,
  Route,
  Routes,
  useLocation
} from "react-router-dom";

import PageTransition from "./components/common/PageTransition.jsx";
import PageLayout from "./components/layout/PageLayout.jsx";

import BlogDetailsPage from "./pages/BlogDetailsPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import CertificatesPage from "./pages/CertificatesPage.jsx";
import EventDetailsPage from "./pages/EventDetailsPage.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ProjectDetailsPage from "./pages/ProjectDetailsPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <PageTransition key={location.pathname}>
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