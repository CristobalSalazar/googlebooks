import React, { Component } from "react";
import BookDisplay from "../bookdisplay";
var persistentState = { books: [] };
export default class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = persistentState;
  }

  componentWillUnmount() {
    persistentState = this.state;
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = async () => {
    const res = await fetch("/api/books");
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
