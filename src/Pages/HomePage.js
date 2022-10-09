import { useEffect, useState } from "react";

import Header from "../Components/Header";
import ConcertList from "../Components/ConcertList";

export default function HomePage() {
  const [concerts, setConcerts] = useState([]);

  async function getConcertData() {
    const url = `https://wesleytheobald.com/api/concerts/`;
    const res = await fetch(url).then((res) => res.json());
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
