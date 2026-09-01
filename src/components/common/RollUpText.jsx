import { useEffect, useState } from "react";

function RollUpText({
  items,
  className = "",
  interval = 2400,
  ariaLabel
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, interval);

    return () => {
      window.clearInterval(timer);
    };
  }, [items.length, interval]);

  if (items.length === 0) {
    return null;
  }

  return (
    <span
      className={`roll-up ${className}`}
      aria-label={ariaLabel ?? items.join(", ")}
    >
      <span
        className="roll-up__track"
        style={{
          transform: `translateY(-${index * 100}%)`
        }}
      >
        {items.map((item) => (
          <span key={item} className="roll-up__item">
            {item}
          </span>
        ))}
      </span>
    </span>
  );
}

export default RollUpText;