import React from "react";
import Navbar from "./components/navbar";
import Search from "./components/search";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <div className="jumbotron mt-3 text-center">
          <h1>(React) Google Books Search</h1>
          <h2>Search for and save books of interest.</h2>
        </div>
        <Search></Search>
      </div>
    </div>
  );
}

export default App;
