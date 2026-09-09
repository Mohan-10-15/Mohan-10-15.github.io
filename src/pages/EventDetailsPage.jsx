import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  Clock3,
  GraduationCap,
  MapPin,
  Monitor,
  Presentation,
  Trophy,
  Users
} from "lucide-react";

import Reveal from "../components/common/Reveal.jsx";
import { eventsData } from "../data/eventsData.js";

const typeIcons = {
  Workshop: Users,
  Competition: Trophy,
  Seminar: Presentation,
  Conference: Presentation
};

function EventDetailsPage() {
  const { eventSlug } = useParams();

  const event = eventsData.find(
    (currentEvent) => currentEvent.slug === eventSlug
  );

  if (!event) {
    return (
      <main className="secondary-page">
        <div className="site-container">
          <div className="detail-hero">
            <Link className="back-link" to="/events">
              <ArrowLeft size={16} />
              Back to Events
            </Link>

            <p className="detail-kicker">Event Report Unavailable</p>
            <h1>{(eventSlug ?? "Event").replaceAll("-", " ")}</h1>
            <p className="detail-hero__description">
              The detailed event report has not been published yet.
            </p>
          </div>
        </div>
      </main>
    );
  }

  const Icon = typeIcons[event.type] ?? Presentation;

  const relatedEvents = eventsData
    .filter((currentEvent) => currentEvent.slug !== event.slug)
    .slice(0, 2);

  return (
    <main className="secondary-page">
      <section className="detail-hero">
        <div className="site-container">
          <Link className="back-link" to="/events">
            <ArrowLeft size={16} />
            Back to Events
          </Link>

          <Reveal>
            <p className="detail-kicker">
              <Icon size={16} />
              {event.type} · {event.mode}
            </p>

            <h1>{event.title}</h1>

            <p className="detail-hero__description">
              {event.description}
            </p>

            <span className="detail-status">{event.status}</span>
          </Reveal>

          <Reveal delay={1}>
            <div className="detail-facts">
              <div>
                <CalendarDays size={19} />
                <div>
                  <small>Date</small>
                  <span>{event.date}</span>
                </div>
              </div>

              <div>
                <Clock3 size={19} />
                <div>
                  <small>Time</small>
                  <span>{event.time}</span>
                </div>
              </div>

              <div>
                <MapPin size={19} />
                <div>
                  <small>Location</small>
                  <span>{event.location}</span>
                </div>
              </div>

              <div>
                <Monitor size={19} />
                <div>
                  <small>Mode</small>
                  <span>{event.mode}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="detail-body">
        <div className="site-container detail-body__grid">
          <div>
            <Reveal as="section" className="detail-section">
              <p className="detail-section__label">About This Event</p>
              <h2>Event overview</h2>
              <p>{event.description}</p>
            </Reveal>

            <Reveal as="section" className="detail-section">
              <p className="detail-section__label">Highlights</p>
              <h2>Key takeaways</h2>
              <div className="detail-highlights">
                {event.highlights.map((highlight) => (
                  <div key={`${event.slug}-${highlight}`}>
                    <Check size={18} />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {relatedEvents.length > 0 && (
              <Reveal as="section" className="detail-section">
                <p className="detail-section__label">Continue exploring</p>
                <h2>More sessions</h2>
                <div className="related-grid">
                  {relatedEvents.map((related) => {
                    const RelatedIcon =
                      typeIcons[related.type] ?? Presentation;

                    return (
                      <Link
                        key={related.slug}
                        className="related-card"
                        to={`/events/${related.slug}`}
                      >
                        <div className="related-card__image related-card__image--icon">
                          <RelatedIcon size={26} />
                        </div>

                        <div className="related-card__body">
                          <p>{related.type}</p>
                          <h3>{related.title}</h3>
                          <span>View session →</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </Reveal>
            )}
          </div>

          <aside>
            <Reveal as="div" className="detail-sidebar-card">
              <p className="detail-section__label">Skills Applied</p>
              <h3>
                <GraduationCap size={18} />
                &nbsp;Learnings
              </h3>
              <div className="detail-technology-list">
                {event.skills.map((skill) => (
                  <span key={`${event.slug}-${skill}`}>{skill}</span>
                ))}
              </div>
            </Reveal>

            <Reveal as="div" className="detail-sidebar-card">
              <p className="detail-section__label">Event Type</p>
              <h3>
                <Icon size={18} />
                &nbsp;{event.type}
              </h3>
              <p>{event.mode} session · {event.status.toLowerCase()}.</p>
            </Reveal>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default EventDetailsPage;