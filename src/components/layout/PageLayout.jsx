import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import BackToTop from "../common/BackToTop.jsx";
import PageLoader from "../common/PageLoader.jsx";
import ScrollProgress from "../common/ScrollProgress.jsx";
import SectionRail from "../common/SectionRail.jsx";
import useLenis from "../../hooks/useLenis.js";

import { getPageFlow, homeSections } from "../../data/sectionsData.js";

import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

function PageLayout({ children, hideFooter = false }) {
  const location = useLocation();

  const isHome = location.pathname === "/";

  const flow = getPageFlow(location.pathname);

  useLenis({ enabled: !isHome });

  useEffect(() => {
    const root = document.documentElement;

    if (isHome) {
      root.classList.add("is-snapping");
    } else {
      root.classList.remove("is-snapping");
    }

    return () => {
      root.classList.remove("is-snapping");
    };
  }, [isHome]);

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

      <div className="site-shell__content">{children}</div>

      {isHome ? (
        <SectionRail
          sections={homeSections}
          nextPath={flow?.next?.path}
          nextLabel={flow?.next?.label}
        />
      ) : (
        <SectionRail
          prevPath={flow?.prev?.path}
          prevLabel={flow?.prev?.label}
          nextPath={flow?.next?.path}
          nextLabel={flow?.next?.label}
        />
      )}

      {!hideFooter && !isHome && <Footer />}

      <BackToTop />
    </div>
  );
}

export default PageLayout;