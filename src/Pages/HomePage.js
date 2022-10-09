import { useEffect, useState } from "react";

import Header from "../Components/Header";
import ConcertList from "../Components/ConcertList";
import { formatDate, formatTime } from "../Helpers/ConvertDateTime";

export default function HomePage() {
  const [concerts, setConcerts] = useState([]);

  async function getConcertData() {
    const url = `https://wesleytheobald.com/api/concerts/`;
    const res = await fetch(url).then((res) => res.json());
    for (let concert of res) {
      concert.date = formatDate(concert.date);
      concert.time = formatTime(concert.time);
    }
    setConcerts(res);
  }

  useEffect(() => {
    getConcertData();
  }, []);
  return (
    <>
      <Header />
      <ConcertList concerts={concerts} />
    </>
  );
}
