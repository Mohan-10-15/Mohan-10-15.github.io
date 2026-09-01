import { useEffect } from "react";
import Lenis from "lenis";

function useLenis({ enabled = true } = {}) {
  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1
    });

    let animationFrameId;

    const animate = (time) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, [enabled]);
}

export default useLenis;