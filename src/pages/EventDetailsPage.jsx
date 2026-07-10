import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays } from "lucide-react";

function EventDetailsPage() {
  const { eventSlug } = useParams();

  return (
    <main className="detail-empty-page">
      <div className="site-container detail-empty-page__content">
        <div className="detail-empty-page__icon">
          <CalendarDays size={42} />
        </div>

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

export default EventDetailsPage;