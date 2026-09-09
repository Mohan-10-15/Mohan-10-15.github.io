import { useEffect, useRef } from "react";

function Reveal({ children, className = "", delay = 0, as: Tag = "div", ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return undefined;
    }

    const show = () => {
      el.classList.add("is-in");
    };

    if (typeof IntersectionObserver === "undefined") {
      show();
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);

    const fallback = window.setTimeout(() => {
      if (!el.classList.contains("is-in")) {
        show();
        observer.unobserve(el);
      }
    }, 2200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{
        "--reveal-delay": delay > 0 ? `${delay * 0.1}s` : undefined
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;