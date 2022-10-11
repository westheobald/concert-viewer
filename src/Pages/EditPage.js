import { useLocation } from "react-router-dom";

import Header from "../Components/Header";
import EventForm from "../Components/EventForm";

export default function EditPage() {
  const { state } = useLocation();
  const { concert } = state;
  return (
    <>
      <Header />
      <EventForm concert={concert} />
    </>
  );
}
