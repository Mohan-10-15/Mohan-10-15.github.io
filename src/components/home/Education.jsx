import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BookOpenCheck,
  GraduationCap,
  MapPin
} from "lucide-react";

import { personalData } from "../../data/personalData.js";

gsap.registerPlugin(ScrollTrigger);

function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const animationContext = gsap.context(() => {
      gsap.from(".education__heading > *", {
        opacity: 0,
        y: 35,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true
        }
      });

      gsap.from(".education__item", {
        opacity: 0,
        x: -45,
        duration: 0.75,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".education__timeline",
          start: "top 82%",
          once: true
        }
      });
    }, sectionRef);

    return () => {
      animationContext.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="education">
      <div className="site-container education__container">
        <div className="education__heading">
          <p>ACADEMIC JOURNEY</p>

          <h2>
            Education and
            <span> continuous growth.</span>
          </h2>

          <p>
            My academic background has helped me develop a strong base in
            cybersecurity, programming, networking and technical problem
            solving.
          </p>
        </div>

        <div className="education__timeline">
          {personalData.education.map((item, index) => (
            <article
              key={`${item.institution}-${item.degree}`}
              className="education__item"
            >
              <div className="education__marker">
                {index === 0 ? (
                  <GraduationCap size={22} />
                ) : (
                  <BookOpenCheck size={21} />
                )}
              </div>

              <div className="education__card">
                <div className="education__card-top">
                  <div>
                    <p>{item.degree}</p>
                    <h3>{item.institution}</h3>
                  </div>

                  {item.status && (
                    <span className="education__status">
                      {item.status}
                    </span>
                  )}

                  {item.score && (
                    <span className="education__score">
                      {item.score}
                    </span>
                  )}
                </div>

                {item.specialization && (
                  <p className="education__specialization">
                    {item.specialization}
                  </p>
                )}

                {item.description && (
                  <p className="education__description">
                    {item.description}
                  </p>
                )}

                <div className="education__location">
                  <MapPin size={15} />
                  <span>{item.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;