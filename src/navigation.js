import React, { Component } from "react";
import "./Navbar.css"; 

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false, 
    };
  }

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="brand">
            <h1>Logo</h1>
          </div>
          <button
            className="menu-toggle"
            onClick={this.toggleMenu}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
          <ul className={`nav-links ${this.state.isOpen ? "open" : ""}`}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
