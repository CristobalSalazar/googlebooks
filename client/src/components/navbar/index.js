import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{ top: 0, boxShadow: "0 0 6px black" }}
      className="position-fixed w-100 d-flex navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/search">
        Google Books
      </Link>
      <p className="text-light my-auto">Search for and save books of interest.</p>
      <div className="ml-auto">
        <Link className="ml-3 text-light" to="/search">
          Search
        </Link>
        <Link className="ml-3 text-light" to="/saved">
          Saved
        </Link>
      </div>
    </nav>
  );
}
