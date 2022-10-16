import { useState, useRef } from "react";

import { STATES } from "../Constants/States.mjs";

export default function EventForm({ concert }) {
  const [artist, setArtist] = useState(concert ? concert.artist : "");
  const [venue, setVenue] = useState(concert ? concert.venue : "");
  const [city, setCity] = useState(concert ? concert.city : "");
  const [state, setState] = useState(concert ? concert.state : "");
  const [zipCode, setZipCode] = useState(concert ? concert.zip : "");
  const [date, setDate] = useState(concert ? concert.date : "");
  const [time, setTime] = useState(concert ? concert.time : "");
  const [ticketLink, setTicketLink] = useState(concert ? concert.tickets : "");
  const [genre, setGenre] = useState(concert ? concert.genre : "");
  const [image, setImage] = useState(concert ? concert.image : "");
  const errorMessage = useRef(null);
  const successMessage = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    errorMessage.current.classList.add("hidden");
    successMessage.current.classList.add("hidden");

    const formData = {
      artist: artist,
      venue: venue,
      city: city,
      state: state,
      zip: zipCode,
      date: date,
      time: time,
      tickets: ticketLink,
      genre: genre,
      image: image,
    };
    const method = concert ? "PATCH" : "POST";
    if (method === "PATCH") {
      formData.id = concert._id;
    }
    const jsonData = JSON.stringify(formData);
    await fetch("https://wesleytheobald.com/api/concerts/", {
      method: method,
      body: jsonData,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((e) => {
        if (method === "PATCH") {
          successMessage.current.textContent =
            "Success! Your event was edited successfully.";
        } else {
          successMessage.current.textContent =
            "Success! Your event was created successfully.";
        }
        successMessage.current.classList.remove("hidden");
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
      <p className="hidden" ref={successMessage}></p>
      <label htmlFor="artist">
        Artist*:
        <input
          type="text"
          name="artist"
          onChange={(e) => setArtist(e.target.value)}
          value={artist}
          required
        />
      </label>
      <label htmlFor="venue">
        Venue*:
        <input
          type="text"
          name="venue"
          onChange={(e) => setVenue(e.target.value)}
          value={venue}
          required
        />
      </label>
      <label htmlFor="city">
        City*:
        <input
          type="text"
          name="city"
          onChange={(e) => setCity(e.target.value)}
          value={city}
          required
        />
      </label>
      <label htmlFor="state">
        State*:
        <select
          name="state"
          onChange={(e) => setState(e.target.value)}
          value={state}
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
          value={zipCode}
          required
        />
      </label>
      <label htmlFor="date">
        Date*:
        <input
          type="date"
          name="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          required
        />
      </label>
      <label htmlFor="time">
        Time*:
        <input
          type="time"
          name="time"
          onChange={(e) => setTime(e.target.value)}
          value={time}
          required
        />
      </label>
      <label htmlFor="ticketLink">
        Ticket Link:
        <input
          type="url"
          name="ticketLink"
          onChange={(e) => setTicketLink(e.target.value)}
          value={ticketLink}
        />
      </label>
      <label htmlFor="genre">
        Genre:
        <input
          type="text"
          name="genre"
          onChange={(e) => setGenre(e.target.value)}
          value={genre}
        />
      </label>
      <label htmlFor="image">
        Image:
        <input
          type="file"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
          value={image}
        />
      </label>
      <input type="submit"></input>
      <p>* Are required fields.</p>
    </form>
  );
}
