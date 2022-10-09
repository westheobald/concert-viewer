import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import { formatDate, formatTime } from "../Helpers/ConvertDateTime";

export default function ConcertPage() {
  const { id } = useParams();
  const [concert, setConcert] = useState();
  const [concertId, setConcertId] = useState(id);

  async function handleEdit() {}
  async function handleDelete() {
    const res = await fetch(`https://wesleytheobald.com/api/concerts/${id}`, {
      method: "DELETE",
    });
  }

  async function getConcertInfo() {
    const res = await fetch(
      `https://wesleytheobald.com/api/concerts/id/${id}`
    ).then((res) => res.json());
    res.date = formatDate(res.date);
    res.time = formatTime(res.time);
    setConcert(res);
    setConcertId(res._id);
  }
  useEffect(() => {
    if (!concert) {
      getConcertInfo();
    }
  }, []);
  if (concert) {
    return (
      <>
        <Header />
        <h2>{concert.artist}</h2>
        <h3>{concert.venue}</h3>
        <p>
          {concert.city}, {concert.state}
        </p>
        <h4>
          {concert.date}, {concert.time}
        </h4>
        <div>
          <p id="edit" onClick={handleEdit}>
            edit
          </p>
          <p id="delete" onClick={handleDelete}>
            delete
          </p>
        </div>
      </>
    );
  } else {
    // make a loading component
    return (
      <>
        <Header />
        <h2>LOADING</h2>
      </>
    );
  }
}
