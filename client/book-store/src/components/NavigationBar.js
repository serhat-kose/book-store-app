import { faSignInAlt, faSignOutAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../services/index";

class NavigationBar extends React.Component {

  logOut = () =>{
    this.props.logoutUser();
  }
  render() {
    const guestLinks = (
      <>

      <div className="mr-auto"></div>
        <Nav className="navbar-right">
          <Link to={"/register"} className="nav-link">
            <FontAwesomeIcon icon={faUserPlus} /> Register
          </Link>
          <Link to={"/login"} className="nav-link">
            <FontAwesomeIcon icon={faSignInAlt} />
            Login
          </Link>
        </Nav>
      </>
    );

    const userLinks = (
      <>
        <Nav className="mr-auto">
          <Link to={"/add"} className="nav-link">
            Add Book
          </Link>
          <Link to={"/list"} className="nav-link">
            Book List
          </Link>
          <Link to={"/users"} className="nav-link">
            Users
          </Link>

        </Nav>
        <Nav className="navbar-right">
        <Link to={"/logout"} className="nav-link" onClick={this.logOut}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </Link>
        </Nav>
      </>
    );

    return (
      <Navbar bg="dark" variant="dark">
        <Link to={""} className="navbar-brand">
          <img
            src="https://www.freeiconspng.com/uploads/-icons-smart-objects-3d-book-mockup-psd-address-book-icon-psd-preview-5.png"
            width="50"
            height="50"
            alt=" icons smart objects 3d book mockup psd address book icon psd preview"
            name="Book Store"
          />
          Book Store
        </Link>

        {this.props.auth.isLoggedIn ? userLinks : guestLinks}

      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(NavigationBar);
