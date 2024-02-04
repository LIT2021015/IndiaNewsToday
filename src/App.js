import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Sear from "./components/searc";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={<News key="general" pageSize={20} category="general" />}
          />
          <Route
            exact
            path="/sports"
            element={<News key="sports" pageSize={20} category="sports" />}
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={20}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={<News key="business" pageSize={20} category="business" />}
          />
          <Route
            exact
            path="/science"
            element={<News key="science" pageSize={20} category="science" />}
          />
          <Route
            exact
            path="/technology"
            element={
              <News key="technology" pageSize={20} category="technology" />
            }
          />
          <Route
            exact
            path="/health"
            element={<News key="health" pageSize={20} category="health" />}
          />
          <Route
            exact
            path="/general"
            element={<News key="general" pageSize={20} category="general" />}
          />
            <Route
            exact
            path="/searc"
            element={<Sear key="technology" pageSize={20} category="technology" />}
          />
        </Routes>
      </Router>
    );
  }
}
