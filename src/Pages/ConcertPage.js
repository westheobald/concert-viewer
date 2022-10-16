import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../Components/Header";

export default function ConcertPage() {
  const { id } = useParams();
  const [concert, setConcert] = useState();
  const [concertId, setConcertId] = useState(id);
  const navigate = useNavigate();

  async function handleDelete() {
    const res = await fetch(`https://wesleytheobald.com/api/concerts/${id}`, {
      method: "DELETE",
    })
      .then((e) => {
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  async function getConcertInfo() {
    const res = await fetch(
      `https://wesleytheobald.com/api/concerts/id/${id}`
    ).then((res) => res.json());
    setConcert(res);
    console.log(res);
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
          {concert.dateFormatted}, {concert.timeFormatted}
        </h4>
        <div>
          <Link to={`/edit/${concert._id}`} state={{ concert: concert }}>
            <button id="edit">edit</button>
          </Link>
          <button id="delete" onClick={handleDelete}>
            delete
          </button>
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
