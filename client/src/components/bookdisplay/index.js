import React, { Component } from "react";
import Book from "../book";
import "./style.css";
export default class BookDisplay extends Component {
  render() {
    return (
      <div className="bookdisplay">
        <h4>{(this.props.books.length > 0 && this.props.title) || this.props.emptyMessage}</h4>
        {this.props.books.map((el, i) => {
          return (
            <Book
              onDelete={this.props.onDelete}
              hideDelete={this.props.hideDelete}
              hideSave={this.props.hideSave}
              key={i}
              book={el}></Book>
          );
        })}
      </div>
    );
  }
}
