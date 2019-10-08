import React, { Component } from "react";
import BookDisplay from "../bookdisplay";
export default class Saved extends Component {
  state = {
    books: []
  };

  async componentDidMount() {
    await this.getBooks();
  }
  getBooks = async () => {
    const res = await fetch("/books");
    const data = await res.json();
    this.setState({ books: data });
  };

  render() {
    return (
      <div>
        <BookDisplay
          onDelete={this.getBooks}
          hideSave={true}
          books={this.state.books}
          emptyMessage="You have no items saved."
          title="Saved Books"></BookDisplay>
      </div>
    );
  }
}
