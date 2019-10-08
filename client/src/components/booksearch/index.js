import React from "react";

export default class BookSearch extends React.Component {
  search = async event => {
    event.preventDefault();
    const val = document.getElementById("bookSearch").value;
    const res = await fetch("/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ book: val })
    });
    const data = await res.json();
    this.props.search(data);
  };

  render() {
    return (
      <form method="POST" action="/search" className="form-group d-flex flex-column">
        <h4>Book Search</h4>
        <label>Book</label>
        <input name="book" className="form-control" id="bookSearch" type="text"></input>
        <button
          onClick={this.search}
          id="searchButton"
          className="btn btn-outline-dark btn-sm rounded ml-auto mt-3"
          type="submit">
          Search
        </button>
      </form>
    );
  }
}
