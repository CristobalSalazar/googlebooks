import React, { Component } from "react";
import { Toast } from "react-bootstrap";
import "./style.css";
export default class Book extends Component {
  state = {
    show: false,
    notificationMessage: "Book saved succesfully."
  };
  saveBook = async () => {
    const { title, image, authors, description, link } = this.props.book;
    const response = await fetch("/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        authors,
        description,
        image,
        link
      })
    });

    if (response.status === 301) {
      this.setShow(true, "Book already saved!");
    } else {
      this.setShow(true, "Book succesfully saved!");
    }
  };
  setShow = (show, notificationMessage) => {
    this.setState({ show, notificationMessage });
  };
  deleteBook = async () => {
    await fetch(`/api/books/${this.props.book._id}`, {
      method: "DELETE"
    });
    if (this.props.onDelete) this.props.onDelete();
  };

  getAuthors = () => {
    const authors = this.props.book.authors;
    if (!authors) return "";
    let str = "";
    if (authors.length <= 1) {
      return authors[0];
    } else {
      for (let i = 0; i < authors.length; i++) {
        str += authors[i];
        if (i !== authors.length - 1) {
          str += ", ";
        }
      }
      return str;
    }
  };

  render() {
    const { title, description, link, image } = this.props.book;
    return (
      <>
        <div className="mb-3">
          <div className="d-flex">
            <div style={{ maxWidth: "75%" }}>
              <h4>{title || "No title available."}</h4>
              <p>
                Written by:&nbsp;
                {this.getAuthors() || "Unknown"}
              </p>
            </div>
            <div className="ml-auto">
              <a rel="noopener noreferrer" target="_blank" href={link}>
                <button className="btn rounded btn-outline-primary btn-sm rounded mr-1">
                  Preview
                </button>
              </a>
              {this.props.hideSave || (
                <button
                  onClick={this.saveBook}
                  className="btn rounded btn-outline-success btn-sm rounded">
                  Save
                </button>
              )}
              {this.props.hideDelete || (
                <button
                  onClick={this.deleteBook}
                  className="btn rounded btn-outline-danger btn-sm rounded">
                  Remove
                </button>
              )}
            </div>
          </div>
          <p className="description">
            <img src={image} alt="book" />
            {description || "No description available."}
          </p>
          <div style={{ clear: "left" }}></div>
        </div>

        <Toast
          style={{ position: "fixed", top: "4.5rem", right: "1rem" }}
          show={this.state.show}
          autohide
          delay="3000"
          onClose={() => this.setShow(false)}>
          <Toast.Body>{this.state.notificationMessage}</Toast.Body>
        </Toast>
      </>
    );
  }
}
