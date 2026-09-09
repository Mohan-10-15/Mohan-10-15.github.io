import { useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  X
} from "lucide-react";

import { getAssetPath } from "../../utils/getAssetPath.js";

function ProjectLightbox({
  projectName,
  screenshots,
  activeIndex,
  onClose,
  onPrevious,
  onNext
}) {
  const currentScreenshot = screenshots[activeIndex];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrevious]);

  return (
    <div
      className="project-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${projectName} screenshot viewer`}
    >
      <button
        type="button"
        className="project-lightbox__backdrop"
        onClick={onClose}
        aria-label="Close screenshot viewer"
      />

      <div className="project-lightbox__topbar">
        <div>
          <p>{projectName}</p>

          <span>
            Screenshot {activeIndex + 1} of {screenshots.length}
          </span>
        </div>

        <div className="project-lightbox__topbar-actions">
          <a
            href={getAssetPath(currentScreenshot)}
            download
            aria-label="Download current screenshot"
          >
            <Download size={19} />
          </a>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close screenshot viewer"
          >
            <X size={22} />
          </button>
        </div>
      </div>

      <button
        type="button"
        className="project-lightbox__navigation project-lightbox__navigation--previous"
        onClick={onPrevious}
        aria-label="View previous screenshot"
      >
        <ChevronLeft size={28} />
      </button>

      <figure className="project-lightbox__content">
        <img
          src={getAssetPath(currentScreenshot)}
          alt={`${projectName} screenshot ${activeIndex + 1}`}
        />

        <figcaption>
          {projectName} — Screenshot {activeIndex + 1}
        </figcaption>
      </figure>

      <button
        type="button"
        className="project-lightbox__navigation project-lightbox__navigation--next"
        onClick={onNext}
        aria-label="View next screenshot"
      >
        <ChevronRight size={28} />
      </button>

      <div className="project-lightbox__thumbnails">
        {screenshots.map((screenshot, index) => (
          <button
            key={`${screenshot}-${index}`}
            type="button"
            className={
              index === activeIndex
                ? "project-lightbox__thumbnail project-lightbox__thumbnail--active"
                : "project-lightbox__thumbnail"
            }
            onClick={() => {
              if (index < activeIndex) {
                const moves = activeIndex - index;

                for (let count = 0; count < moves; count += 1) {
                  onPrevious();
                }
              }

              if (index > activeIndex) {
                const moves = index - activeIndex;

                for (let count = 0; count < moves; count += 1) {
                  onNext();
                }
              }
            }}
            aria-label={`Open screenshot ${index + 1}`}
          >
            <img
              src={getAssetPath(screenshot)}
              alt=""
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProjectLightbox;