import { useState, useRef } from "react";

import { STATES } from "../Constants/States.mjs";

export default function EventForm() {
  const [artist, setArtist] = useState("");
  const [venue, setVenue] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState(undefined);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [ticketLink, setTicketLink] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState(undefined);
  const errorMessage = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    errorMessage.current.classList.add("hidden");
    const formData = {
      artist: artist,
      venue: venue,
      city: city,
      state: state,
      zipCode: zipCode,
      date: date,
      time: time,
      ticketLink: ticketLink,
      genre: genre,
      image: image,
    };
    const jsonData = JSON.stringify(formData);
    await fetch("https://wesleytheobald.com/api/concerts/", {
      method: "POST",
      body: jsonData,
      headers: {
        "Content-Type": "application/json",
      },
      enctype: "multipart/form-data",
    })
      .then((e) => {
        console.log("success");
      })
      .catch((e) => {
        errorMessage.current.classList.remove("hidden");
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="hidden" ref={errorMessage}>
        Error! There was a problem with the validation of the form. Please
        ensure all required fields are filled out and try again.
      </p>
      <label htmlFor="artist">
        Artist*:
        <input
          type="text"
          name="artist"
          onChange={(e) => setArtist(e.target.value)}
          required
        />
      </label>
      <label htmlFor="venue">
        Venue*:
        <input
          type="text"
          name="venue"
          onChange={(e) => setVenue(e.target.value)}
          required
        />
      </label>
      <label htmlFor="city">
        City*:
        <input
          type="text"
          name="city"
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </label>
      <label htmlFor="state">
        State*:
        <select
          name="state"
          onChange={(e) => setState(e.target.value)}
          required
        >
          <option value=""></option>
          {STATES.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="zipcode">
        Zip Code*:
        <input
          type="number"
          name="zipcode"
          min="00001"
          max="99950"
          onChange={(e) => setZipCode(e.target.value)}
          required
        />
      </label>
      <label htmlFor="date">
        Date*:
        <input
          type="date"
          name="date"
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <label htmlFor="time">
        Time*:
        <input
          type="time"
          name="time"
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </label>
      <label htmlFor="ticketLink">
        Ticket Link:
        <input
          type="url"
          name="ticketLink"
          onChange={(e) => setTicketLink(e.target.value)}
        />
      </label>
      <label htmlFor="genre">
        Genre:
        <input
          type="text"
          name="genre"
          onChange={(e) => setGenre(e.target.value)}
        />
      </label>
      <label htmlFor="image">
        Image:
        <input
          type="file"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </label>
      <input type="submit"></input>
      <p>* Are required fields.</p>
    </form>
  );
}
