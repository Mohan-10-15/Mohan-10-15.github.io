import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Award,
  BookOpen,
  Network,
  ShieldCheck
} from "lucide-react";

import { statsData } from "../../data/statsData.js";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  shield: ShieldCheck,
  network: Network,
  award: Award,
  book: BookOpen
};

function useCountUp(target, start = false, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) {
      return undefined;
    }

    let frameId;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(eased * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [target, start, duration]);

  return value;
}

function StatItem({ stat, inView }) {
  const Icon = iconMap[stat.icon] ?? ShieldCheck;
  const count = useCountUp(stat.value, inView);

  return (
    <div className="stats-item">
      <div className="stats-item__icon">
        <Icon size={22} />
      </div>

      <div className="stats-item__value">
        <strong>
          {count}
          {stat.suffix}
        </strong>
        <span>{stat.label}</span>
      </div>
    </div>
  );
}

function Stats() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const animationContext = gsap.context(() => {
      gsap.from(".stats-item", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
          onEnter: () => {
            setInView(true);
          }
        }
      });
    }, sectionRef);

    return () => {
      animationContext.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="stats">
      <div className="site-container stats__bar">
        {statsData.map((stat) => (
          <StatItem
            key={stat.label}
            stat={stat}
            inView={inView}
          />
        ))}
      </div>
    </section>
  );
}

export default Stats;
