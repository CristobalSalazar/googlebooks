import React, { Component } from "react";
import "./style.css";
export default class Book extends Component {
  getAuthors = () => {
    const authors = this.props.book.volumeInfo.authors;
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

  getImgSrc() {
    const img = this.props.book.volumeInfo.imageLinks;
    return img ? img.thumbnail : "";
  }

  render() {
    const { title, description, previewLink } = this.props.book.volumeInfo;
    return (
      <div className="mb-3">
        <div className="d-flex">
          <div>
            <h4>{title}</h4>
            <p>
              Written by:&nbsp;
              {this.getAuthors()}
            </p>
          </div>
          <div className="ml-auto">
            <a target="_blank" href={previewLink}>
              <button className="btn rounded btn-outline-primary btn-sm rounded mr-1">
                Preview
              </button>
            </a>
            <button className="btn rounded btn-outline-primary btn-sm rounded">Save</button>
          </div>
        </div>
        <p className="description">
          <img src={this.getImgSrc()} alt="book" />
          {description || "No description available."}
        </p>
        <div style={{ clear: "left" }}></div>
      </div>
    );
  }
}
