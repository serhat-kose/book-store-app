import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            height="50"
            alt=" icons smart objects 3d book mockup psd address book icon psd preview"
            name="Book Store"
           
          />Book Store
        </Link>

      
        <Nav className="mr-auto">
          <Link to={"/add"} className="nav-link">Add Book</Link>
          <Link to={"/list"} className="nav-link">Book List</Link>
          <Link to={"/users"} className="nav-link">Users</Link>
        </Nav>

        <Nav className="navbar-right">
        <Link to={"/register"} className="nav-link"><FontAwesomeIcon icon={faUserPlus}/> Register</Link>
          <Link to={"/login"} className="nav-link"><FontAwesomeIcon icon={faSignInAlt}/>Login</Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
