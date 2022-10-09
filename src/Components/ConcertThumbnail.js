import { useNavigate } from "react-router-dom";

export default function ConcertThumbnail({ concert }) {
  const navigate = useNavigate();
  function navToConcert() {
    navigate(`/concert/${concert._id}`, { state: concert });
  }

  function formatDate(date) {
    const formated = new Date(date);
    formated.setDate(formated.getDate() + 1);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return formated.toLocaleDateString("en-US", options);
  }
  function formatTime(time_24) {
    let hours = parseInt(time_24.slice(0, 2));
    const minutes = time_24.slice(3);
    const suffix = hours > 11 && hours < 24 ? "PM" : "AM";
    hours = hours % 12;
    if (hours === 0) hours = 12;
    return `${hours}:${minutes} ${suffix}`;
  }
  return (
    <div
      className="concert__thumbnail"
      data-id={concert._id}
      onClick={navToConcert}
    >
      <h3>{concert.artist}</h3>
      <p>
        {concert.venue} {concert.city}, {concert.state}
      </p>
      <p>
        {formatDate(concert.date)} @ {formatTime(concert.time)}
      </p>
    </div>
  );
}
