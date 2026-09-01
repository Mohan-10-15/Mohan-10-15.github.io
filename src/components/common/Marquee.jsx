function Marquee({ children, speed = 38, className = "" }) {
  return (
    <div className={`marquee ${className}`}>
      <div
        className="marquee__track"
        style={{ "--marquee-speed": `${speed}s` }}
      >
        <div className="marquee__group">{children}</div>
        <div className="marquee__group" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Marquee;