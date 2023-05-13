import React, { useState } from "react";
import Sidebar from "./Sidebar";

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-warning" href="#News34">
            News34
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {showSidebar ? <Sidebar showSidebar={showSidebar} /> : null}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/general"
                  id="general"
                >
                  General
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/business"
                  id="business"
                >
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sports" id="sports">
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/technology"
                  id="technology"
                >
                  Technology
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/entertainment"
                  id="entertainment"
                >
                  Entertainment
                </a>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                id="newsQuery"
                placeholder="Search news"
              />
              <button
                className="btn btn-outline-warning"
                type="button"
                id="search"
              >
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
