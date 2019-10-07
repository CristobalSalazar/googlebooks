import React, { Component } from "react";
import Book from "../book";
import "./style.css";
export default class BookDisplay extends Component {
  render() {
    return (
      <div className="bookdisplay">
        <h4>{this.props.title}</h4>
        {this.props.books.map((el, i) => {
          return <Book key={i} book={el}></Book>;
        })}
      </div>
    );
  }
}
