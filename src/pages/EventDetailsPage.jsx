import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { gsap } from "gsap";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GraduationCap,
  MapPin,
  Monitor,
  Presentation,
  Tag,
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

function EventDetailsPage() {
  const { eventSlug } = useParams();
  const pageRef = useRef(null);

  const event = eventsData.find(
    (currentEvent) => currentEvent.slug === eventSlug
  );

  useEffect(() => {
    if (!event) {
      return undefined;
    }

    const animationContext = gsap.context(() => {
      gsap.from(".event-details__animate", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out"
      });
    }, pageRef);

    return () => {
      animationContext.revert();
    };
  }, [event]);

  if (!event) {
    return (
      <main className="event-details event-details--missing">
        <div className="site-container event-details__missing-content">
          <CalendarDays size={42} />
          <p>EVENT REPORT NOT AVAILABLE</p>
          <h1>{eventSlug.replaceAll("-", " ")}</h1>
          <span>
            The detailed event report has not been published yet.
          </span>
          <Link to="/events">
            <ArrowLeft size={17} />
            Return to Events
          </Link>
        </div>
      </main>
    );
  }

  const Icon = typeIcons[event.type] ?? Presentation;

  return (
    <main ref={pageRef} className="event-details">
      <section className="event-details__hero">
        <div className="event-details__hero-grid" />

        <div className="site-container event-details__hero-content">
          <Link className="event-details__back event-details__animate" to="/events">
            <ArrowLeft size={17} />
            Back to Events
          </Link>

          <div className="event-details__head event-details__animate">
            <div className="event-details__type">
              <Icon size={16} />
              {event.type}
            </div>

            <h1>{event.title}</h1>

            <p className="event-details__description">
              {event.description}
            </p>

            <div className="event-details__status">
              <span />
              {event.status}
            </div>
          </div>

          <div className="event-details__facts event-details__animate">
            <div>
              <CalendarDays size={19} />
              <span>
                <small>Date</small>
                {event.date}
              </span>
            </div>

            <div>
              <Clock3 size={19} />
              <span>
                <small>Time</small>
                {event.time}
              </span>
            </div>

            <div>
              <MapPin size={19} />
              <span>
                <small>Location</small>
                {event.location}
              </span>
            </div>

            <div>
              <Monitor size={19} />
              <span>
                <small>Mode</small>
                {event.mode}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="event-details__body">
        <div className="site-container event-details__layout">
          <div className="event-details__main">
            <section className="event-details__section event-details__animate">
              <p className="event-details__section-label">
                ABOUT THIS EVENT
              </p>

              <h2>Event overview</h2>

              <p>{event.description}</p>
            </section>

            <section className="event-details__section event-details__animate">
              <p className="event-details__section-label">
                HIGHLIGHTS
              </p>

              <h2>Key takeaways</h2>

              <div className="event-details__highlights">
                {event.highlights.map((highlight) => (
                  <div
                    key={`${event.slug}-${highlight}`}
                    className="event-details__highlight"
                  >
                    <CheckCircle2 size={19} />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="event-details__sidebar">
            <div className="event-details__sidebar-card event-details__animate">
              <GraduationCap size={20} />
              <p>SKILLS APPLIED</p>

              <div className="event-details__skills">
                {event.skills.map((skill) => (
                  <span key={`${event.slug}-${skill}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="event-details__sidebar-card event-details__animate">
              <Tag size={20} />
              <p>EVENT TYPE</p>

              <div className="event-details__type-badge">
                <Icon size={16} />
                {event.type}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default EventDetailsPage;
