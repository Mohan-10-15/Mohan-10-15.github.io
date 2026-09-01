import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp
} from "lucide-react";

function SectionRail({
  sections = [],
  nextPath,
  prevPath,
  nextLabel,
  prevLabel
}) {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (sections.length === 0) {
      setActiveIndex(0);
      return undefined;
    }

    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.findIndex(
              (section) => section.id === entry.target.id
            );

            if (index >= 0) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  const scrollToIndex = (index) => {
    if (index < 0) {
      if (prevPath) {
        navigate(prevPath);
      }
      return;
    }

    if (index >= sections.length) {
      if (nextPath) {
        navigate(nextPath);
      }
      return;
    }

    const element = document.getElementById(sections[index].id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  const atStart = sections.length === 0 || activeIndex <= 0;
  const atEnd =
    sections.length === 0 || activeIndex >= sections.length - 1;

  return (
    <aside className="section-rail" aria-label="Section navigation">
      <button
        type="button"
        className="section-rail__arrow"
        onClick={() => scrollToIndex(activeIndex - 1)}
        aria-label={
          prevLabel ? `Go to ${prevLabel}` : "Go to previous section"
        }
        disabled={atStart && !prevPath}
        title={atStart && prevLabel ? prevLabel : undefined}
      >
        {prevPath && atStart ? (
          <ArrowLeft size={17} />
        ) : (
          <ArrowUp size={17} />
        )}
      </button>

      {sections.length > 0 && (
        <div className="section-rail__list">
          {sections.map((section, index) => (
            <button
              key={section.id}
              type="button"
              className={`section-rail__dot ${
                index === activeIndex
                  ? "section-rail__dot--active"
                  : ""
              }`}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to ${section.label}`}
              title={section.label}
            >
              {section.short}
            </button>
          ))}
        </div>
      )}

      <button
        type="button"
        className="section-rail__arrow"
        onClick={() => scrollToIndex(activeIndex + 1)}
        aria-label={
          nextPath || !atEnd
            ? "Go to next section or page"
            : "End of navigation"
        }
        title={atEnd && nextLabel ? nextLabel : undefined}
        disabled={sections.length === 0 && !nextPath}
      >
        {nextPath && atEnd ? (
          <span className="section-rail__next-label">
            {nextLabel ? nextLabel.toUpperCase() : "NEXT"}
            <ArrowRight size={16} />
          </span>
        ) : (
          <ArrowDown size={17} />
        )}
      </button>
    </aside>
  );
}

export default SectionRail;