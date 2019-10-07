import React, { Component } from "react";

export default class Test extends Component {
  async componentDidMount() {
    const res = await fetch("/api/test");
    const text = await res.json();
    console.log(text);
  }
  render() {
    return <div>"hello"</div>;
  }
}
