import ConcertThumbnail from "./ConcertThumbnail";

export default function ConcertList({ concerts, heading }) {
  return (
    <>
      <h2>{heading}</h2>
      <main id="concert__list">
        {concerts.map((concert) => (
          <ConcertThumbnail key={concert._id} concert={concert} />
        ))}
      </main>
    </>
  );
}
