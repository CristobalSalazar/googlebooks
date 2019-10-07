import React, { Component } from "react";
import BookDisplay from "../bookdisplay";
import BookSearch from "../booksearch";

export default class Search extends Component {
  state = {
    books: []
  };

  search = data => {
    console.log(data.items);
    this.setState({ books: data.items });
  };
  render() {
    return (
      <div>
        <BookSearch search={this.search}></BookSearch>
        <BookDisplay title="Results" books={this.state.books}></BookDisplay>
      </div>
    );
  }
}
