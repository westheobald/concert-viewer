import { useLocation } from "react-router-dom";
import ConcertList from "../Components/ConcertList";
import Header from "../Components/Header";

export default function SearchPage() {
  const location = useLocation();
  const heading = `Searching for '${location.state.search}'...`;
  return (
    <>
      <Header />
      <ConcertList heading={heading} concerts={location.state.data} />
    </>
  );
}
