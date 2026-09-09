import { ArrowRight, CalendarDays, MapPin, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";

import Reveal from "../components/common/Reveal.jsx";
import { eventsData } from "../data/eventsData.js";

const eventIcon = {
  Workshop: CalendarDays,
  Competition: Clock3,
  Seminar: MapPin
};

function EventsPage() {
  const statusCounts = eventsData.reduce(
    (counts, event) => {
      counts[event.status] = (counts[event.status] || 0) + 1;
      return counts;
    },
    {}
  );

  return (
    <main className="secondary-page">
      <header className="page-header">
        <div className="site-container page-header__inner">
          <Reveal>
            <span className="eyebrow">
              <span>
                EVENTS <span>/</span> LIVE RECORD
              </span>
            </span>

            <h1>
              Workshops and sessions where I <em>learned live.</em>
            </h1>

            <p className="page-header__tagline">
              Cyber security workshops, CTF competitions and technical
              sessions I have attended and participated in.
            </p>
          </Reveal>

          <Reveal delay={1}>
            <div className="page-header__stats">
              <div>
                <strong>{eventsData.length}</strong>
                <span>Total events</span>
              </div>

              <div>
                <strong>{statusCounts.Completed || 0}</strong>
                <span>Completed</span>
              </div>

              <div>
                <strong>{statusCounts.Upcoming || 0}</strong>
                <span>Upcoming</span>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="page-body">
        <div className="site-container">
          <Reveal className="page-section-heading">
            <div>
              <p>Live Record</p>
              <h2>Events &amp; sessions</h2>
            </div>
          </Reveal>

          <div className="events-grid">
            {eventsData.map((event, index) => {
              const Icon = eventIcon[event.type] || CalendarDays;

              return (
                <Reveal
                  as="article"
                  key={event.slug}
                  delay={index > 0 ? 1 : 0}
                >
                  <Link
                    to={`/events/${event.slug}`}
                    className="event-report-card"
                  >
                    <div className="event-report-card__top">
                      <span className="event-report-card__icon">
                        <Icon size={18} />
                      </span>

                      <span className="event-report-card__status">
                        {event.status}
                      </span>
                    </div>

                    <p className="event-report-card__type">
                      {event.type} · {event.mode}
                    </p>

                    <h2>{event.title}</h2>

                    <p className="event-report-card__description">
                      {event.description}
                    </p>

                    <div className="event-report-card__meta">
                      <span>
                        <CalendarDays size={14} />
                        {event.date}
                      </span>

                      <span>
                        <MapPin size={14} />
                        {event.location}
                      </span>
                    </div>

                    <div className="event-report-card__skills">
                      {event.skills.slice(0, 3).map((skill) => (
                        <span key={`${event.slug}-${skill}`}>
                          {skill}
                        </span>
                      ))}
                    </div>

                    <span className="event-report-card__link">
                      View session
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default EventsPage;