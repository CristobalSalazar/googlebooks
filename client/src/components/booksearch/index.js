import React from "react";

export default class BookSearch extends React.Component {
  search = async event => {
    event.preventDefault();
    let val = document.getElementById("bookSearch").value;
    val = encodeURIComponent(val);
    const res = await fetch(`/search?q=${val}`);
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
