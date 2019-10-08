import React, { Component } from "react";
import BookDisplay from "../bookdisplay";
import BookSearch from "../booksearch";

export default class Search extends Component {
  state = {
    books: []
  };

  componentWillMount = () => {
    this.state = JSON.parse(window.localStorage.getItem("searchBooks")) || { books: [] };
  };
  componentWillUnmount = () => {
    window.localStorage.setItem("searchBooks", JSON.stringify(this.state));
  };
  search = data => {
    data.items = data.items.map(book => {
      const { title, authors, description, imageLinks, previewLink } = book.volumeInfo;
      return {
        title,
        authors,
        description,
        image: imageLinks ? imageLinks.thumbnail : "",
        link: previewLink
      };
    });
    this.setState({ books: data.items });
  };
  render() {
    return (
      <div>
        <BookSearch search={this.search}></BookSearch>
        <BookDisplay
          hideSave={false}
          hideDelete={true}
          title="Results"
          emptyMessage="What would you like to search for?"
          books={this.state.books}></BookDisplay>
      </div>
    );
  }
}
