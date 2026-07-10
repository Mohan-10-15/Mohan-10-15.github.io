import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";

function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => {
      setLeaving(true);
    }, 1700);

    const removeTimer = window.setTimeout(() => {
      setVisible(false);
    }, 2300);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`page-loader ${
        leaving ? "page-loader--leaving" : ""
      }`}
      aria-hidden="true"
    >
      <div className="page-loader__grid" />

      <div className="page-loader__content">
        <div className="page-loader__logo">
          <ShieldCheck size={34} />
        </div>

        <p className="page-loader__eyebrow">
          SECURE PORTFOLIO SYSTEM
        </p>

        <h1>Mohanakrishnan C</h1>

        <p className="page-loader__subtitle">
          Initializing cybersecurity environment
        </p>

        <div className="page-loader__status">
          <div className="page-loader__status-row">
            <span>Loading interface</span>
            <strong>OK</strong>
          </div>

          <div className="page-loader__status-row">
            <span>Loading projects</span>
            <strong>OK</strong>
          </div>

          <div className="page-loader__status-row">
            <span>Loading security profile</span>
            <strong>OK</strong>
          </div>
        </div>

        <div className="page-loader__track">
          <div className="page-loader__bar" />
        </div>

        <span className="page-loader__percentage">
          100%
        </span>
      </div>
    </div>
  );
}

export default PageLoader;