import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Search from "./components/search";
import Saved from "./components/saved";

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <div style={{ marginBottom: "6rem" }}></div>
        <div className="container">
          {/* <div className="jumbotron mt-3 text-center">
            <h1>(React) Google Books Search</h1>
            <h2>Search for and save books of interest.</h2>
          </div> */}
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" render={props => <Search {...props} />} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
