import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Presentation,
  Trophy,
  Users
} from "lucide-react";

import { eventsData } from "../data/eventsData.js";

const typeIcons = {
  Workshop: Users,
  Competition: Trophy,
  Seminar: Presentation,
  Conference: Presentation
};

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

      gsap.from(".event-report-card", {
        opacity: 0,
        y: 45,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, pageRef);

    return () => {
      animationContext.revert();
    };
  }, []);

  const completedEvents = eventsData.filter(
    (event) => event.status === "Completed"
  );

  const upcomingEvents = eventsData.filter(
    (event) => event.status === "Upcoming"
  );

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
            Documented technical events, cybersecurity sessions and
            hands-on learning programmes from my student journey.
          </p>

          <div className="events-page__stats events-page__animate">
            <div>
              <strong>{eventsData.length}</strong>
              <span>Recorded events</span>
            </div>

            <div>
              <strong>{completedEvents.length}</strong>
              <span>Completed</span>
            </div>

            <div>
              <strong>{upcomingEvents.length}</strong>
              <span>Upcoming</span>
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

          <div className="events-page__grid">
            {eventsData.map((event) => {
              const Icon = typeIcons[event.type] ?? Presentation;

              return (
                <Link
                  key={event.slug}
                  to={`/events/${event.slug}`}
                  className={`event-report-card event-report-card--${event.status.toLowerCase()}`}
                >
                  <div className="event-report-card__top">
                    <div className="event-report-card__icon">
                      <Icon size={22} />
                    </div>

                    <span className="event-report-card__status">
                      {event.status}
                    </span>
                  </div>

                  <p className="event-report-card__type">
                    {event.type}
                  </p>

                  <h2>{event.title}</h2>

                  <p className="event-report-card__description">
                    {event.description}
                  </p>

                  <div className="event-report-card__meta">
                    <span>
                      <CalendarDays size={15} />
                      {event.date}
                    </span>

                    <span>
                      <MapPin size={15} />
                      {event.mode}
                    </span>
                  </div>

                  <span className="event-report-card__link">
                    View Report
                    <ArrowUpRight size={16} />
                  </span>

                  <div className="event-report-card__skills">
                    {event.skills.slice(0, 3).map((skill) => (
                      <span key={`${event.slug}-${skill}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default EventsPage;
