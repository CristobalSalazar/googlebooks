import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="d-flex navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/search">
          Google Books
        </a>
        <a className="ml-3 text-light" href="/search">
          Search
        </a>
        <a className="ml-3 text-light" href="/saved">
          Saved
        </a>
      </nav>
    );
  }
}
