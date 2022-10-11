import { Link } from "react-router-dom";

export default function ConcertThumbnail({ concert }) {
  return (
    <Link
      className="concert__thumbnail"
      to={`/concert/${concert._id}`}
      state={{ concert: concert }}
    >
      <h3>{concert.artist}</h3>
      <p>
        {concert.venue} {concert.city}, {concert.state}
      </p>
      <p>
        {concert.dateFormatted} @ {concert.timeFormatted}
      </p>
    </Link>
  );
}
