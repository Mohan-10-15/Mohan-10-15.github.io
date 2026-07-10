import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import BackToTop from "../common/BackToTop.jsx";
import PageLoader from "../common/PageLoader.jsx";
import ScrollProgress from "../common/ScrollProgress.jsx";
import useLenis from "../../hooks/useLenis.js";

import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

function PageLayout({ children, hideFooter = false }) {
  const location = useLocation();

  useLenis();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [location.pathname]);

  return (
    <div className="site-shell">
      <PageLoader />
      <ScrollProgress />
      <Navbar />

      <div className="site-shell__content">
        {children}
      </div>

      {!hideFooter && <Footer />}

      <BackToTop />
    </div>
  );
}

export default PageLayout;