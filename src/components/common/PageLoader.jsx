import { useEffect, useState } from "react";

function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => {
      setLeaving(true);
    }, 1500);

    const removeTimer = window.setTimeout(() => {
      setVisible(false);
    }, 2100);

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
      <div className="page-loader__content">
        <div className="page-loader__monogram">MC</div>

        <p className="page-loader__track-label">MOHANAKRISHNAN C</p>

        <div className="page-loader__track">
          <div className="page-loader__bar" />
        </div>
      </div>
    </div>
  );
}

export default PageLoader;