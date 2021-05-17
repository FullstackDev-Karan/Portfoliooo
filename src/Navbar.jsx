import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
function Navbar() {
  return (
    <>
      <div className="container_fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand" to="/">
                Karan - Fullstack Developer
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">
                      <HomeIcon /> Home<span class="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link class="nav-link" to="/About">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link class="nav-link" to="/Projects">
                      Projects
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link class="nav-link" to="/ContactUs">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link class="nav-link" to="/InputForm">
                      Form
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link class="nav-link" to="/Login">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
