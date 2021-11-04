import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Link to={""} className="navbar-brand">
          <img
            src="https://www.freeiconspng.com/uploads/-icons-smart-objects-3d-book-mockup-psd-address-book-icon-psd-preview-5.png"
            width="50"
            alt=" icons smart objects 3d book mockup psd address book icon psd preview"
          />
        </Link>
      
        <Nav className="me-auto">
          <Link to={"/add"} className="nav-link">Add Book</Link>
          <Link to={"/list"} className="nav-link">Book List</Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
