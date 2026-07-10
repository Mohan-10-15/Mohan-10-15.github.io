import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      type="button"
      className={`back-to-top ${
        visible ? "back-to-top--visible" : ""
      }`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <ArrowUp size={19} />
    </button>
  );
}

export default BackToTop;