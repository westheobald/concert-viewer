import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "../Components/Header";

export default function ConcertPage() {
  const location = useLocation();
  const [concert, setConcert] = useState(location.state);
  const { id } = useParams();
  async function getConcertInfo() {
    const res = await fetch(
      `https://wesleytheobald.com/api/concerts/id/${id}`
    ).then((res) => res.json());
    setConcert(res);
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
      </>
    );
  } else {
    return (
      <>
        <Header />
        <h2>LOADING</h2>
      </>
    );
  }
}
