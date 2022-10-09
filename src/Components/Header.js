import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const query = encodeURIComponent(search);
    const url = `https://wesleytheobald.com/api/concerts/?search=${query}`;
    const res = await fetch(url).then((res) => res.json());
    navigate("/search", { state: { data: res, search: search } });
  }
  return (
    <header>
      <h1>Concert App</h1>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="search"
              required
              placeholder="Search for artist, venue, or location..."
              onChange={(e) => setSearch(e.target.value)}
            ></input>
          </form>
          <Link to="/create">
            <li>Create</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
