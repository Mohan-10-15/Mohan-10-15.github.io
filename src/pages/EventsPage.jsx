import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  CalendarDays,
  Camera,
  FileText,
  MapPin,
  Presentation,
  Trophy
} from "lucide-react";

import { eventsData } from "../data/eventsData.js";

function EventsPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const animationContext = gsap.context(() => {
      gsap.from(".events-page__animate", {
        opacity: 0,
        y: 35,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, pageRef);

    return () => {
      animationContext.revert();
    };
  }, []);

  return (
    <main ref={pageRef} className="events-page">
      <section className="events-page__hero">
        <div className="events-page__grid-background" />

        <div className="site-container events-page__header">
          <div className="events-page__eyebrow events-page__animate">
            <Presentation size={16} />
            <span>Technical Participation</span>
          </div>

          <h1 className="events-page__animate">
            Workshops, seminars and
            <span> technical experiences.</span>
          </h1>

          <p className="events-page__animate">
            Detailed reports from technical events, workshops, conferences,
            cybersecurity sessions and hands-on learning programmes.
          </p>

          <div className="events-page__stats events-page__animate">
            <div>
              <strong>{eventsData.length}</strong>
              <span>Documented events</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Report sections</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Learning focused</span>
            </div>
          </div>
        </div>
      </section>

      <section className="events-page__content">
        <div className="site-container">
          <div className="events-page__section-heading">
            <p>EVENT REPORTS</p>
            <h2>Technical participation</h2>
          </div>

          {eventsData.length > 0 ? (
            <div className="events-page__grid">
              {eventsData.map((event) => (
                <article key={event.slug} className="event-card">
                  <p>{event.category}</p>
                  <h2>{event.title}</h2>
                  <span>{event.description}</span>
                </article>
              ))}
            </div>
          ) : (
            <div className="content-empty-state">
              <div className="content-empty-state__icon">
                <CalendarDays size={38} />
              </div>

              <p className="content-empty-state__label">
                EVENT REPORTS COMING SOON
              </p>

              <h2>Technical event documentation will appear here.</h2>

              <p className="content-empty-state__description">
                Future event reports will include the event overview,
                technologies covered, key sessions, photographs, certificates
                and my personal learning outcomes.
              </p>

              <div className="content-empty-state__topics">
                <div>
                  <MapPin size={20} />
                  <span>Event Details</span>
                </div>

                <div>
                  <Camera size={20} />
                  <span>Photo Gallery</span>
                </div>

                <div>
                  <FileText size={20} />
                  <span>Detailed Report</span>
                </div>

                <div>
                  <Trophy size={20} />
                  <span>Certificates</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default EventsPage;