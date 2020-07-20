import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* App Component Has a Child Component called Main*/}
        <Main />
      </BrowserRouter>
    );
  }
}

export default App;
