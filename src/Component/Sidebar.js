import React from "react";

function Sidebar(showSidebar) {
  return (
    <>
      {showSidebar ? (
        <div className="sidebar">
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
              <a className="nav-link" href="/entertainment" id="entertainment">
                Entertainment
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default Sidebar;
