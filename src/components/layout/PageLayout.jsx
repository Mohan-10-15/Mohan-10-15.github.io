import BackToTop from "../common/BackToTop.jsx";
import PageLoader from "../common/PageLoader.jsx";
import ScrollProgress from "../common/ScrollProgress.jsx";

import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

function PageLayout({ children, hideFooter = false }) {
  return (
    <div className="site-shell">
      <PageLoader />
      <ScrollProgress />
      <Navbar />

      <div className="site-shell__content">{children}</div>

      {!hideFooter && <Footer />}

      <BackToTop />
    </div>
  );
}

export default PageLayout;