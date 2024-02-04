import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sear from "./searc";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
    };
  }

  handleSearch = (e) => {
    e.preventDefault();
   
    <Sear key="technology" pageSize={20} category="technology" />
    // Do something with the searchQuery, for example, navigate to "/search?q=<searchQuery>"
  };

  render() {
    return (
      <div style={{ color: "red" }}>
        <nav className="navbar navbar-expand-lg bg-dark fixed-top ">
          <div className="container-fluid ">
            <Link className="navbar-brand " style={{ color: "white" }} to="/">
              IndiaNewsToday
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon bg-danger"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                    style={{ color: "yellow" }}
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "yellow" }}
                  >
                    Category
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/business">
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/entertainment">
                        Entertainment
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/technology">
                        Technology
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/health">
                        Health
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/science">
                        Science
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/sports">
                        Sports
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/general">
                        General
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <form
                className="d-flex"
                role="search"
                onSubmit={this.handleSearch}
              >
                <input
                  className="form-control me-2"
                  placeholder="Search"
                  aria-label="Search"
                  type="text"
                  onChange={(e) =>
                    this.setState({ searchQuery: e.target.value })
                  }
                />

                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
